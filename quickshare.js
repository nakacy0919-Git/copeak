// ==========================================
// quickshare.js: Copeak Quick Share (Appwrite) Phase 1
// テキスト教材を24時間だけクラウド共有し、失敗時は従来共有へ戻す
// ==========================================

const COPEAK_QUICK_SHARE_API = 'https://starter-function-u3jy.sgp.appwrite.run';

// ui.js にある従来の長いURL共有を保存しておく
const generateLegacyShareLink = (typeof window.generateShareLink === 'function')
    ? window.generateShareLink
    : null;

function buildQuickSharePayload(lesson) {
    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const formUrl = lesson.formUrl || savedFormUrl || '';

    return {
        title: String(lesson.title || 'Shared Lesson').replace(/^🔗\s*/, ''),
        eng: lesson.eng || '',
        jpn: lesson.jpn || '',
        lang: lesson.lang || 'en-US',
        type: lesson.type || 'standard',
        dialogue: Array.isArray(lesson.dialogue) ? lesson.dialogue : [],
        formUrl
    };
}

async function createQuickShare(lesson) {
    const response = await fetch(`${COPEAK_QUICK_SHARE_API}/api/share`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(buildQuickSharePayload(lesson))
    });

    let data = null;

    try {
        data = await response.json();
    } catch (e) {
        throw new Error('Quick Share APIの応答を読み取れませんでした');
    }

    if (!response.ok || !data || data.ok !== true || !data.id) {
        const reason = data && data.reason
            ? data.reason
            : `HTTP ${response.status}`;

        throw new Error(reason);
    }

    return data;
}

async function fetchQuickShareLesson(shareId) {
    const safeId = String(shareId || '').trim();

    if (!safeId) {
        throw new Error('共有IDがありません');
    }

    const response = await fetch(
        `${COPEAK_QUICK_SHARE_API}/api/share/${encodeURIComponent(safeId)}`,
        {
            method: 'GET'
        }
    );

    let data = null;

    try {
        data = await response.json();
    } catch (e) {
        throw new Error('Quick Share APIの応答を読み取れませんでした');
    }

    if (
        response.status === 410 ||
        (data && data.reason === 'expired')
    ) {
        const err = new Error('expired');
        err.code = 'expired';
        throw err;
    }

    if (
        response.status === 404 ||
        (data && data.reason === 'not_found')
    ) {
        const err = new Error('not_found');
        err.code = 'not_found';
        throw err;
    }

    if (
        !response.ok ||
        !data ||
        data.ok !== true ||
        !data.lesson
    ) {
        const reason = data && data.reason
            ? data.reason
            : `HTTP ${response.status}`;

        throw new Error(reason);
    }

    return data.lesson;
}

function buildQuickShareUrl(shareId) {
    const baseUrl = window.location.origin + window.location.pathname;

    return `${baseUrl}?l=${encodeURIComponent(shareId)}`;
}

async function copyTextSafely(text) {
    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {
        try {
            await navigator.clipboard.writeText(text);
            return true;

        } catch (e) {
            // Safari等では非同期通信後に
            // Clipboard権限を失うことがあるためfallbackへ
        }
    }

    try {
        const textarea = document.createElement('textarea');

        textarea.value = text;
        textarea.setAttribute('readonly', '');

        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';

        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(
            0,
            textarea.value.length
        );

        const copied = document.execCommand('copy');

        textarea.remove();

        return copied;

    } catch (e) {
        return false;
    }
}

function showQuickShareLinkFallback(url) {
    const old = document.getElementById(
        'quickShareLinkModal'
    );

    if (old) {
        old.remove();
    }

    const modal = document.createElement('div');

    modal.id = 'quickShareLinkModal';

    modal.className =
        'fixed inset-0 z-[30000] bg-black/60 ' +
        'flex items-center justify-center p-4 backdrop-blur-sm';

    modal.innerHTML = `
        <div
            class="
                bg-white
                w-full
                max-w-lg
                rounded-sm
                border-2
                border-stone-800
                shadow-2xl
                p-5
                md:p-6
            "
        >
            <div
                class="
                    flex
                    items-center
                    justify-between
                    gap-4
                    mb-4
                "
            >
                <h3
                    class="
                        font-black
                        text-stone-800
                        text-lg
                    "
                >
                    🔗 Quick Share Link
                </h3>

                <button
                    id="quickShareCloseBtn"
                    class="
                        text-stone-400
                        hover:text-stone-700
                        text-xl
                        font-bold
                    "
                >
                    ✕
                </button>
            </div>

            <p
                class="
                    text-xs
                    text-stone-500
                    mb-3
                "
            >
                自動コピーできなかったため、
                下のリンクを長押し／選択してコピーしてください。
            </p>

            <textarea
                id="quickShareLinkText"
                readonly
                class="
                    w-full
                    min-h-24
                    p-3
                    text-sm
                    border
                    border-stone-300
                    rounded-sm
                    bg-stone-50
                    text-stone-800
                    break-all
                "
            >${url}</textarea>

            <button
                id="quickShareCopyBtn"
                class="
                    mt-4
                    w-full
                    py-3
                    bg-emerald-700
                    hover:bg-emerald-800
                    text-white
                    font-bold
                    rounded-sm
                    transition
                "
            >
                リンクをコピー
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    const close = () => {
        modal.remove();
    };

    document.getElementById(
        'quickShareCloseBtn'
    ).onclick = close;

    modal.addEventListener(
        'click',
        (e) => {
            if (e.target === modal) {
                close();
            }
        }
    );

    document.getElementById(
        'quickShareCopyBtn'
    ).onclick = async () => {
        const copied = await copyTextSafely(url);

        if (copied) {
            if (typeof showMsg === 'function') {
                showMsg(
                    '🔗 Quick Shareリンクをコピーしました！'
                );
            }

            close();
        }
    };
}

async function generateQuickShareLink() {
    if (!currentCustomLesson) {
        return;
    }

    if (typeof showMsg === 'function') {
        showMsg(
            '☁️ Quick Shareリンクを作成しています…'
        );
    }

    try {
        const result = await createQuickShare(
            currentCustomLesson
        );

        const shortUrl = buildQuickShareUrl(
            result.id
        );

        const copied = await copyTextSafely(
            shortUrl
        );

        if (copied) {
            if (typeof showMsg === 'function') {
                showMsg(
                    '⚡ Quick Shareリンクをコピーしました！（24時間有効）'
                );
            }

        } else {
            showQuickShareLinkFallback(
                shortUrl
            );
        }

        return result;

    } catch (err) {
        console.warn(
            'Quick Share failed. Falling back to Classic Share:',
            err
        );

        if (typeof showMsg === 'function') {
            showMsg(
                '⚠️ Quick Shareに失敗したため、通常共有に切り替えます'
            );
        }

        if (generateLegacyShareLink) {
            return generateLegacyShareLink();
        }

        throw err;
    }
}

// 既存の SHARE ボタンは
// onclick="generateShareLink()"
// のまま使える
window.generateShareLink =
    generateQuickShareLink;

window.createQuickShare =
    createQuickShare;

window.fetchQuickShareLesson =
    fetchQuickShareLesson;

window.buildQuickShareUrl =
    buildQuickShareUrl;