// ==========================================
// Copeak Student Profile Lock
// 生徒プロフィール表示・教員確認による修正
// ==========================================

(() => {

    const PROFILE_KEY = 'copeak_student_profile';

    let authorizedUntil = 0;
    let overlay = null;
    let card = null;


    // ==========================================
    // 保存済みプロフィール取得
    // ==========================================

    function getProfile() {

        try {

            const raw =
                localStorage.getItem(PROFILE_KEY);

            if (!raw) {
                return null;
            }

            const profile =
                JSON.parse(raw);

            if (
                !profile ||
                !profile.class ||
                !profile.number ||
                !profile.name
            ) {
                return null;
            }

            return {
                class:
                    String(profile.class).trim(),

                number:
                    String(profile.number).trim(),

                name:
                    String(profile.name).trim()
            };

        } catch (error) {

            console.warn(
                '[Copeak Profile] invalid profile',
                error
            );

            return null;
        }
    }


    // ==========================================
    // CSS
    // ==========================================

    function addStyle() {

        if (
            document.getElementById(
                'copeak-profile-lock-style'
            )
        ) {
            return;
        }

        const style =
            document.createElement('style');

        style.id =
            'copeak-profile-lock-style';

        style.textContent = `
            .copeak-student-chip {
                display: none;
                align-items: center;
                gap: 7px;

                height: 48px;
                padding: 0 12px;

                border: 1px solid #d6d3d1;
                border-radius: 14px;

                background: #ffffff;
                color: #292524;

                font-size: 12px;
                font-weight: 800;

                white-space: nowrap;
                cursor: pointer;
                flex-shrink: 0;

                transition:
                    transform .15s ease,
                    box-shadow .15s ease,
                    border-color .15s ease;
            }

            .copeak-student-chip.visible {
                display: inline-flex;
            }

            .copeak-student-chip:hover {
                transform: translateY(-1px);
                border-color: #a8a29e;

                box-shadow:
                    0 7px 16px
                    rgba(28, 25, 23, .08);
            }

            .copeak-student-icon {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 27px;
                height: 27px;

                border-radius: 50%;
                background: #f5f5f4;

                flex-shrink: 0;
            }

            .copeak-student-lock {
                font-size: 10px;
                opacity: .7;
            }


            /* ==================================
               Modal
               ================================== */

            .copeak-profile-overlay {
                position: fixed;
                inset: 0;
                z-index: 31000;

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 18px;

                background:
                    rgba(28, 25, 23, .65);

                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }

            .copeak-profile-overlay[hidden] {
                display: none !important;
            }

            .copeak-profile-card {
                width: min(410px, 100%);

                overflow: hidden;

                border:
                    1px solid #d6d3d1;

                border-radius: 18px;

                background: #ffffff;
                color: #292524;

                box-shadow:
                    0 25px 70px
                    rgba(0, 0, 0, .28);
            }

            .copeak-profile-head {
                display: flex;
                align-items: center;
                justify-content: space-between;

                gap: 12px;

                padding: 17px 20px;

                border-bottom:
                    1px solid #e7e5e4;

                background: #fafaf9;
            }

            .copeak-profile-head h3 {
                margin: 0;

                font-size: 17px;
                font-weight: 900;
            }

            .copeak-profile-close {
                border: 0;
                background: transparent;

                color: #78716c;

                font-size: 19px;
                cursor: pointer;
            }

            .copeak-profile-body {
                padding: 20px;
            }

            .copeak-profile-note {
                margin: 0 0 14px;

                color: #78716c;

                font-size: 12px;
                line-height: 1.6;
            }

            .copeak-profile-row {
                display: flex;
                justify-content: space-between;

                gap: 15px;

                padding: 11px 0;

                border-bottom:
                    1px solid #f0eeec;
            }

            .copeak-profile-row span {
                color: #78716c;

                font-size: 12px;
                font-weight: 800;
            }

            .copeak-profile-row strong {
                font-size: 14px;
                font-weight: 900;

                text-align: right;
                overflow-wrap: anywhere;
            }


            /* ==================================
               Form
               ================================== */

            .copeak-profile-field {
                margin-bottom: 13px;
            }

            .copeak-profile-field label {
                display: block;

                margin-bottom: 5px;

                color: #57534e;

                font-size: 11px;
                font-weight: 900;
            }

            .copeak-profile-field input {
                box-sizing: border-box;

                width: 100%;

                padding: 11px;

                border:
                    1px solid #d6d3d1;

                border-radius: 9px;

                background: #fafaf9;
                color: #292524;

                font: inherit;

                outline: none;
            }

            .copeak-profile-field input:focus {
                border-color: #047857;
                background: #ffffff;
            }

            .copeak-profile-primary {
                width: 100%;

                margin-top: 15px;
                padding: 12px;

                border: 0;
                border-radius: 9px;

                background: #292524;
                color: #ffffff;

                font-weight: 900;

                cursor: pointer;
            }

            .copeak-profile-primary:hover {
                background: #1c1917;
            }

            .copeak-profile-secondary {
                width: 100%;

                margin-top: 8px;
                padding: 10px;

                border:
                    1px solid #d6d3d1;

                border-radius: 9px;

                background: #ffffff;
                color: #57534e;

                font-weight: 800;

                cursor: pointer;
            }

            .copeak-profile-error {
                min-height: 18px;

                margin-top: 7px;

                color: #b91c1c;

                font-size: 12px;
                font-weight: 800;
            }


            /* ==================================
               Registration warning
               ================================== */

            .copeak-registration-warning {
                margin-top: 9px;

                padding: 9px 10px;

                border-radius: 8px;

                background: #fff7ed;
                color: #9a3412;

                font-size: 11px;
                font-weight: 700;
                line-height: 1.5;
            }


            /* ==================================
               Mobile
               ================================== */

            @media (max-width: 1180px) {

                .copeak-student-chip {
                    height: 44px;
                    padding: 0 9px;
                }

                .copeak-student-lock {
                    display: none;
                }
            }

            @media (max-width: 700px) {

                .copeak-student-chip {
                    height: 40px;

                    padding: 0 7px;

                    gap: 4px;

                    font-size: 10px;
                }

                .copeak-student-icon {
                    width: 22px;
                    height: 22px;
                }
            }
        `;

        document.head.appendChild(style);
    }


    // ==========================================
    // Modal container
    // ==========================================

    function ensureModal() {

        const existing =
            document.getElementById(
                'copeakProfileOverlay'
            );

        if (existing) {

            overlay = existing;

            card =
                document.getElementById(
                    'copeakProfileCard'
                );

            return;
        }

        overlay =
            document.createElement('div');

        overlay.id =
            'copeakProfileOverlay';

        overlay.className =
            'copeak-profile-overlay';

        overlay.hidden = true;


        card =
            document.createElement('div');

        card.id =
            'copeakProfileCard';

        card.className =
            'copeak-profile-card';


        overlay.appendChild(card);

        document.body.appendChild(overlay);


        overlay.addEventListener(
            'click',
            event => {

                if (
                    event.target === overlay
                ) {
                    closeModal();
                }
            }
        );
    }


    function closeModal() {

        if (overlay) {
            overlay.hidden = true;
        }

        authorizedUntil = 0;
    }


    // ==========================================
    // Header chip
    // ==========================================

    function updateChip() {

        const chip =
            document.getElementById(
                'copeakStudentProfileChip'
            );

        if (!chip) {
            return;
        }

        const profile =
            getProfile();

        if (!profile) {

            chip.classList.remove(
                'visible'
            );

            return;
        }

        const text =
            document.getElementById(
                'copeakStudentProfileText'
            );

        if (text) {

            text.textContent =
                profile.class +
                ' / ' +
                profile.number;
        }

        chip.classList.add(
            'visible'
        );
    }


    function addChip() {

        const actions =
            document.querySelector(
                '.copeak-top-actions'
            );

        if (
            !actions ||
            document.getElementById(
                'copeakStudentProfileChip'
            )
        ) {
            return;
        }

        const chip =
            document.createElement('button');

        chip.id =
            'copeakStudentProfileChip';

        chip.type =
            'button';

        chip.className =
            'copeak-student-chip';

        chip.title =
            'Student Profile';

        chip.innerHTML = `
            <span
                class="copeak-student-icon"
                aria-hidden="true"
            >
                👤
            </span>

            <span
                id="copeakStudentProfileText"
            ></span>

            <span
                class="copeak-student-lock"
                aria-hidden="true"
            >
                🔒
            </span>
        `;


        const sos =
            document.getElementById(
                'btn-open-trouble'
            );

        if (
            sos &&
            sos.parentElement === actions
        ) {

            actions.insertBefore(
                chip,
                sos
            );

        } else {

            actions.prepend(chip);
        }


        chip.addEventListener(
            'click',
            renderView
        );
    }


    // ==========================================
    // Profile view
    // ==========================================

    function renderView() {

        const profile =
            getProfile();

        if (!profile) {
            return;
        }

        card.innerHTML = `
            <div class="copeak-profile-head">

                <h3>
                    👤 Student Profile
                </h3>

                <button
                    id="copeakProfileClose"
                    type="button"
                    class="copeak-profile-close"
                >
                    ✕
                </button>

            </div>


            <div class="copeak-profile-body">

                <p class="copeak-profile-note">
                    登録内容の変更には先生の確認が必要です。
                </p>


                <div class="copeak-profile-row">
                    <span>Class</span>
                    <strong id="copeakViewClass"></strong>
                </div>


                <div class="copeak-profile-row">
                    <span>No.</span>
                    <strong id="copeakViewNumber"></strong>
                </div>


                <div class="copeak-profile-row">
                    <span>Name</span>
                    <strong id="copeakViewName"></strong>
                </div>


                <button
                    id="copeakProfileEditRequest"
                    type="button"
                    class="copeak-profile-primary"
                >
                    🔒 先生と一緒に修正する
                </button>


                <button
                    id="copeakProfileViewClose"
                    type="button"
                    class="copeak-profile-secondary"
                >
                    閉じる
                </button>

            </div>
        `;


        document.getElementById(
            'copeakViewClass'
        ).textContent =
            profile.class;


        document.getElementById(
            'copeakViewNumber'
        ).textContent =
            profile.number;


        document.getElementById(
            'copeakViewName'
        ).textContent =
            profile.name;


        document.getElementById(
            'copeakProfileClose'
        ).onclick =
            closeModal;


        document.getElementById(
            'copeakProfileViewClose'
        ).onclick =
            closeModal;


        document.getElementById(
            'copeakProfileEditRequest'
        ).onclick =
            renderUnlock;


        overlay.hidden = false;
    }


    // ==========================================
    // Teacher password
    // ==========================================

    function renderUnlock() {

        authorizedUntil = 0;

        card.innerHTML = `
            <div class="copeak-profile-head">

                <h3>
                    🔐 Teacher Unlock
                </h3>

                <button
                    id="copeakUnlockClose"
                    type="button"
                    class="copeak-profile-close"
                >
                    ✕
                </button>

            </div>


            <form
                id="copeakUnlockForm"
                class="copeak-profile-body"
            >

                <p class="copeak-profile-note">
                    この操作は先生と一緒に行ってください。
                    パスワードは端末には保存されません。
                </p>


                <div class="copeak-profile-field">

                    <label>
                        Teacher Password
                    </label>

                    <input
                        id="copeakTeacherPassword"
                        type="password"
                        maxlength="128"
                        autocomplete="off"
                        required
                    >

                </div>


                <div
                    id="copeakUnlockError"
                    class="copeak-profile-error"
                ></div>


                <button
                    id="copeakUnlockSubmit"
                    type="submit"
                    class="copeak-profile-primary"
                >
                    Unlock
                </button>


                <button
                    id="copeakUnlockCancel"
                    type="button"
                    class="copeak-profile-secondary"
                >
                    戻る
                </button>

            </form>
        `;


        document.getElementById(
            'copeakUnlockClose'
        ).onclick =
            closeModal;


        document.getElementById(
            'copeakUnlockCancel'
        ).onclick =
            renderView;


        const input =
            document.getElementById(
                'copeakTeacherPassword'
            );


        const error =
            document.getElementById(
                'copeakUnlockError'
            );


        const submit =
            document.getElementById(
                'copeakUnlockSubmit'
            );


        document.getElementById(
            'copeakUnlockForm'
        ).onsubmit =
            async event => {

                event.preventDefault();

                if (!input.value) {

                    error.textContent =
                        'パスワードを入力してください。';

                    return;
                }


                submit.disabled = true;

                submit.textContent =
                    'Checking...';

                error.textContent = '';


                try {

                    const response =
                        await fetch(
                            '/api/profile-unlock',
                            {
                                method: 'POST',

                                headers: {
                                    'Content-Type':
                                        'application/json'
                                },

                                cache: 'no-store',

                                body:
                                    JSON.stringify({
                                        password:
                                            input.value
                                    })
                            }
                        );


                    let data = {};

                    try {

                        data =
                            await response.json();

                    } catch (parseError) {

                        data = {};
                    }


                    if (
                        !response.ok ||
                        data.ok !== true
                    ) {

                        error.textContent =
                            response.status === 503
                                ? '教員パスワードがまだ設定されていません。'
                                : 'パスワードが違います。';

                        return;
                    }


                    authorizedUntil =
                        Date.now() +
                        5 * 60 * 1000;


                    renderEdit();


                } catch (requestError) {

                    console.error(
                        '[Copeak Profile] unlock failed',
                        requestError
                    );

                    error.textContent =
                        '認証サーバーに接続できません。';


                } finally {

                    input.value = '';

                    submit.disabled =
                        false;

                    submit.textContent =
                        'Unlock';
                }
            };


        setTimeout(
            () => input.focus(),
            30
        );
    }


    // ==========================================
    // Edit profile
    // ==========================================

    function renderEdit() {

        const profile =
            getProfile();


        if (
            !profile ||
            Date.now() >
                authorizedUntil
        ) {

            renderView();

            return;
        }


        card.innerHTML = `
            <div class="copeak-profile-head">

                <h3>
                    ✏️ 登録情報を修正
                </h3>

                <button
                    id="copeakEditClose"
                    type="button"
                    class="copeak-profile-close"
                >
                    ✕
                </button>

            </div>


            <form
                id="copeakEditForm"
                class="copeak-profile-body"
            >

                <div class="copeak-profile-field">

                    <label>
                        クラス / Class
                    </label>

                    <input
                        id="copeakEditClass"
                        maxlength="30"
                        required
                    >

                </div>


                <div class="copeak-profile-field">

                    <label>
                        出席番号 / No.
                    </label>

                    <input
                        id="copeakEditNumber"
                        maxlength="20"
                        required
                    >

                </div>


                <div class="copeak-profile-field">

                    <label>
                        氏名 / Name
                    </label>

                    <input
                        id="copeakEditName"
                        maxlength="80"
                        required
                    >

                </div>


                <div
                    id="copeakEditError"
                    class="copeak-profile-error"
                ></div>


                <button
                    type="submit"
                    class="copeak-profile-primary"
                >
                    修正して保存
                </button>


                <button
                    id="copeakEditCancel"
                    type="button"
                    class="copeak-profile-secondary"
                >
                    キャンセル
                </button>

            </form>
        `;


        const classInput =
            document.getElementById(
                'copeakEditClass'
            );


        const numberInput =
            document.getElementById(
                'copeakEditNumber'
            );


        const nameInput =
            document.getElementById(
                'copeakEditName'
            );


        classInput.value =
            profile.class;


        numberInput.value =
            profile.number;


        nameInput.value =
            profile.name;


        document.getElementById(
            'copeakEditClose'
        ).onclick =
            closeModal;


        document.getElementById(
            'copeakEditCancel'
        ).onclick =
            closeModal;


        document.getElementById(
            'copeakEditForm'
        ).onsubmit =
            event => {

                event.preventDefault();


                const error =
                    document.getElementById(
                        'copeakEditError'
                    );


                if (
                    Date.now() >
                    authorizedUntil
                ) {

                    error.textContent =
                        '認証時間が終了しました。';

                    return;
                }


                const cls =
                    classInput.value.trim();


                const number =
                    numberInput.value.trim();


                const name =
                    nameInput.value.trim();


                if (
                    !cls ||
                    !number ||
                    !name
                ) {

                    error.textContent =
                        'すべての項目を入力してください。';

                    return;
                }


                localStorage.setItem(
                    PROFILE_KEY,
                    JSON.stringify({
                        class: cls,
                        number: number,
                        name: name
                    })
                );


                authorizedUntil = 0;


                updateChip();

                closeModal();


                if (
                    typeof window.showMsg ===
                    'function'
                ) {

                    window.showMsg(
                        '✅ 登録情報を修正しました'
                    );
                }
            };
    }


    // ==========================================
    // 初回登録画面に注意書き追加
    // ==========================================

    function addRegistrationWarning() {

        const modal =
            document.getElementById(
                'studentProfileModal'
            );


        if (
            !modal ||
            document.getElementById(
                'copeakRegistrationWarning'
            )
        ) {
            return;
        }


        const description =
            modal.querySelector(
                '[data-i18n="profile_desc"]'
            );


        if (!description) {
            return;
        }


        const warning =
            document.createElement('div');


        warning.id =
            'copeakRegistrationWarning';


        warning.className =
            'copeak-registration-warning';


        warning.textContent =
            '※ 登録後の変更には先生の確認が必要です。クラス・出席番号・氏名を確認して保存してください。';


        description.insertAdjacentElement(
            'afterend',
            warning
        );
    }


    // ==========================================
    // 元のプロフィール保存処理を包む
    // 登録直後にヘッダー表示を更新
    // ==========================================

    function wrapProfileSave() {

        const original =
            window.saveStudentProfile;


        if (
            typeof original !== 'function' ||
            original.__copeakProfileWrapped
        ) {
            return;
        }


        const wrapped =
            function(...args) {

                const result =
                    original.apply(
                        this,
                        args
                    );


                setTimeout(
                    updateChip,
                    0
                );


                return result;
            };


        wrapped.__copeakProfileWrapped =
            true;


        window.saveStudentProfile =
            wrapped;
    }


    // ==========================================
    // 初期化
    // ==========================================

    function init() {

        addStyle();

        ensureModal();

        addChip();

        addRegistrationWarning();

        wrapProfileSave();

        updateChip();


        window.updateStudentProfileChip =
            updateChip;
    }


    if (
        document.readyState ===
        'loading'
    ) {

        window.addEventListener(
            'DOMContentLoaded',
            init
        );

    } else {

        init();
    }

})();