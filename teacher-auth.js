const teacherAppwrite = new Appwrite.Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('copeak-quick-share');

const teacherAccount = new Appwrite.Account(teacherAppwrite);

function connectTeacherGoogle() {
    const base = location.origin + location.pathname;

    teacherAccount.createOAuth2Session(
        'google',
        `${base}?teacherGoogle=ok`,
        `${base}?teacherGoogle=error`,
        ['https://www.googleapis.com/auth/drive.file']
    );
}

async function checkTeacherGoogleConnection() {
    const params = new URLSearchParams(location.search);
    if (!params.has('teacherGoogle')) return;

    try {
        if (params.get('teacherGoogle') !== 'ok') throw new Error('OAuth failed');

        const user = await teacherAccount.get();
        const session = await teacherAccount.getSession('current');

        const el = document.getElementById('teacherGoogleStatus');
        const btn = document.getElementById('teacherGoogleConnectBtn');

        if (el) {
            el.textContent = `✅ Google接続済み：${user.email}`;
            el.classList.remove('hidden');
        }

        if (btn) {
            btn.textContent = 'Google再接続';
            btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            btn.classList.add('bg-stone-500', 'hover:bg-stone-600');
        }

        console.log('Google OAuth OK', {
            email: user.email,
            googleAccessToken: !!session.providerAccessToken
        });

    } catch (e) {
        console.error('Google OAuth error:', e);
        if (typeof showMsg === 'function') showMsg('⚠️ Google接続に失敗しました');
    }

    history.replaceState({}, document.title, location.pathname);
}

document.addEventListener('DOMContentLoaded', checkTeacherGoogleConnection);