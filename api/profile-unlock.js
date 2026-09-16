const crypto = require('node:crypto');

function safeEqual(a, b) {

    const left =
        Buffer.from(
            String(a || ''),
            'utf8'
        );

    const right =
        Buffer.from(
            String(b || ''),
            'utf8'
        );

    if (
        left.length !==
        right.length
    ) {
        return false;
    }

    return crypto.timingSafeEqual(
        left,
        right
    );
}


module.exports =
    function profileUnlock(
        req,
        res
    ) {

        res.setHeader(
            'Cache-Control',
            'no-store, max-age=0'
        );


        // POST以外は拒否
        if (
            req.method !== 'POST'
        ) {

            res.setHeader(
                'Allow',
                'POST'
            );

            return res
                .status(405)
                .json({
                    ok: false,
                    reason:
                        'method_not_allowed'
                });
        }


        // Teacher Passwordは
        // Vercelの環境変数から取得
        const expectedPassword =
            String(
                process.env
                    .COPEAK_TEACHER_PASSWORD ||
                ''
            );


        // Vercel側にまだ設定されていない場合
        if (!expectedPassword) {

            return res
                .status(503)
                .json({
                    ok: false,
                    reason:
                        'not_configured'
                });
        }


        let body =
            req.body || {};


        // 念のため文字列で届いた場合にも対応
        if (
            typeof body === 'string'
        ) {

            try {

                body =
                    JSON.parse(body);

            } catch (error) {

                body = {};
            }
        }


        const password =
            typeof body.password ===
                'string'
                ? body.password
                : '';


        // 空欄・異常に長い値・不一致を拒否
        if (
            !password ||
            password.length > 128 ||
            !safeEqual(
                password,
                expectedPassword
            )
        ) {

            return res
                .status(401)
                .json({
                    ok: false,
                    reason:
                        'invalid_password'
                });
        }


        return res
            .status(200)
            .json({
                ok: true
            });
    };