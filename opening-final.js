// ==========================================
// Copeak Opening Final Visual
// 既存Splash → Final Artwork
// ==========================================

(() => {

    const FINAL_IMAGE =
        'opening-final.png';

    const STYLE_ID =
        'copeak-opening-final-style';


    // ==========================================
    // CSSは先に登録
    // dynamicSplashScreen生成前でもOK
    // ==========================================

    if (
        !document.getElementById(
            STYLE_ID
        )
    ) {

        const style =
            document.createElement(
                'style'
            );

        style.id =
            STYLE_ID;

        style.textContent = `

            /* ----------------------------------
               INTRO
               最初は既存ロゴ＋taglineだけ表示
               ---------------------------------- */

            #dynamicSplashScreen
            .mach-anim-text,

            #dynamicSplashScreen
            #enterCopeakBtn {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
            }


            #dynamicSplashScreen
            #splashContent {
                transition:
                    opacity .85s ease,
                    transform .85s ease,
                    filter .85s ease;
            }


            /* ----------------------------------
               Final Artwork Layer
               ---------------------------------- */

            #copeakOpeningFinal {
                position: absolute;
                inset: 0;

                z-index: 30;

                display: flex;
                align-items: center;
                justify-content: center;

                overflow: hidden;

                background: #020817;

                opacity: 0;

                transform:
                    scale(1.025);

                filter:
                    blur(8px);

                pointer-events: none;

                transition:
                    opacity 1.35s ease,
                    transform 1.6s
                    cubic-bezier(.2,.8,.2,1),
                    filter 1.25s ease;
            }


            #dynamicSplashScreen
            .copeak-final-visible
            #splashContent {
                opacity: 0 !important;

                transform:
                    scale(.94);

                filter:
                    blur(8px);

                pointer-events: none;
            }


            #dynamicSplashScreen
            #copeakOpeningFinal.is-visible {
                opacity: 1;

                transform:
                    scale(1);

                filter:
                    blur(0);

                pointer-events: auto;
            }


            /* ----------------------------------
               16:9の画像比率を必ず維持
               ---------------------------------- */

            .copeak-opening-final-stage {
                position: relative;

                width:
                    min(
                        100vw,
                        calc(100vh * 16 / 9)
                    );

                height:
                    min(
                        100vh,
                        calc(100vw * 9 / 16)
                    );

                flex: 0 0 auto;

                overflow: hidden;

                background: #020817;
            }


            .copeak-opening-final-image {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    display: block;

    object-fit: contain;

    user-select: none;
    -webkit-user-drag: none;

    -webkit-mask-image:
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,.35) 4%,
            rgba(0,0,0,.75) 8%,
            #000 12%,
            #000 88%,
            rgba(0,0,0,.75) 92%,
            rgba(0,0,0,.35) 96%,
            transparent 100%
        );

    mask-image:
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,.35) 4%,
            rgba(0,0,0,.75) 8%,
            #000 12%,
            #000 88%,
            rgba(0,0,0,.75) 92%,
            rgba(0,0,0,.35) 96%,
            transparent 100%
        );

    animation:
        copeakFinalBreath
        10s ease-in-out
        infinite alternate;
}

            /* ----------------------------------
               画像内のENTER COPEAKに
               実際のクリック領域を重ねる
               ---------------------------------- */

            .copeak-opening-enter-hit {
                position: absolute;

                left: 50%;
                top: 72.3%;

                width: 21%;
                height: 8.7%;

                transform:
                    translateX(-50%);

                z-index: 5;

                padding: 0;

                border: 0;
                border-radius: 999px;

                background:
                    transparent;

                cursor: pointer;

                color: transparent;
            }


            .copeak-opening-enter-hit:focus-visible {
                outline:
                    3px solid
                    rgba(52,211,153,.95);

                outline-offset:
                    5px;
            }


            /* 少しだけ生きているような動き */

            @keyframes
            copeakFinalBreath {

                from {
                    transform:
                        scale(1);
                }

                to {
                    transform:
                        scale(1.018);
                }
            }


            /* ----------------------------------
               Final artwork登場時の光
               ---------------------------------- */

            .copeak-opening-final-glow {
                position: absolute;
                inset: 0;

                z-index: 2;

                pointer-events: none;

                background:
                    radial-gradient(
                        circle at 50% 44%,
                        rgba(45,212,191,.15),
                        transparent 27%
                    );

                opacity: 0;

                animation:
                    copeakFinalGlow
                    2.4s ease-out
                    .3s forwards;
            }


            @keyframes
            copeakFinalGlow {

                0% {
                    opacity: 0;
                }

                35% {
                    opacity: 1;
                }

                100% {
                    opacity: .3;
                }
            }


            /* ----------------------------------
               reduced motion
               ---------------------------------- */

            @media
            (prefers-reduced-motion: reduce) {

                #copeakOpeningFinal,
                #dynamicSplashScreen
                #splashContent,
                .copeak-opening-final-image,
                .copeak-opening-final-glow {

                    animation: none !important;

                    transition-duration:
                        .2s !important;
                }
            }

        `;

        document.head.appendChild(
            style
        );
    }


    // 画像を早めに読み込む
    const preload =
        new Image();

    preload.src =
        FINAL_IMAGE;


    // ==========================================
    // Final画面作成
    // ==========================================

    function installFinalOpening() {

        const splash =
            document.getElementById(
                'dynamicSplashScreen'
            );

        if (!splash) {

            // ui.jsのSplash生成を少し待つ
            requestAnimationFrame(
                installFinalOpening
            );

            return;
        }


        if (
            document.getElementById(
                'copeakOpeningFinal'
            )
        ) {
            return;
        }


        const originalEnter =
            document.getElementById(
                'enterCopeakBtn'
            );


        if (!originalEnter) {

            console.warn(
                '[Copeak Opening] original enter button not found'
            );

            return;
        }


        // --------------------------------------
        // Final layer
        // --------------------------------------

        const finalLayer =
            document.createElement(
                'div'
            );

        finalLayer.id =
            'copeakOpeningFinal';


        const stage =
            document.createElement(
                'div'
            );

        stage.className =
            'copeak-opening-final-stage';


        const image =
            document.createElement(
                'img'
            );

        image.src =
            FINAL_IMAGE;

        image.alt =
            'Welcome to Copeak';

        image.className =
            'copeak-opening-final-image';


        const glow =
            document.createElement(
                'div'
            );

        glow.className =
            'copeak-opening-final-glow';


        const enterHit =
            document.createElement(
                'button'
            );

        enterHit.type =
            'button';

        enterHit.className =
            'copeak-opening-enter-hit';

        enterHit.setAttribute(
            'aria-label',
            'Enter Copeak'
        );

        enterHit.title =
            'Enter Copeak';


        stage.appendChild(
            image
        );

        stage.appendChild(
            glow
        );

        stage.appendChild(
            enterHit
        );

        finalLayer.appendChild(
            stage
        );

        splash.appendChild(
            finalLayer
        );


        // --------------------------------------
        // Intro → Final
        //
        // 0～約2.1秒：
        //   今までのロゴが浮かぶ
        //
        // その後：
        //   今回の画像が浮かび上がる
        // --------------------------------------

        const revealFinal =
            () => {

                if (
                    !document.body.contains(
                        splash
                    )
                ) {
                    return;
                }


                splash.classList.add(
                    'copeak-final-visible'
                );


                requestAnimationFrame(
                    () => {

                        finalLayer
                            .classList
                            .add(
                                'is-visible'
                            );
                    }
                );
            };


        const startReveal =
            () => {

                setTimeout(
                    revealFinal,
                    2100
                );
            };


        if (
            image.complete &&
            image.naturalWidth > 0
        ) {

            startReveal();

        } else {

            image.addEventListener(
                'load',
                startReveal,
                {
                    once: true
                }
            );


            image.addEventListener(
                'error',
                () => {

                    console.error(
                        '[Copeak Opening] opening-final.png could not be loaded'
                    );

                },
                {
                    once: true
                }
            );
        }


        // --------------------------------------
        // Final画像のボタン
        //
        // ui.jsの既存ENTER処理をそのまま呼ぶ
        // → warp-animation
        // → splash.remove()
        //
        // 既存処理を書き換えない
        // --------------------------------------

        enterHit.addEventListener(
            'click',
            () => {

                originalEnter.click();
            }
        );
    }


    // ==========================================
    // Start
    // ==========================================

    if (
        document.readyState ===
        'loading'
    ) {

        window.addEventListener(
            'DOMContentLoaded',
            installFinalOpening
        );

    } else {

        installFinalOpening();
    }

})();