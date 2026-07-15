// ==========================================
// Japeak アプリケーションロジック
// 単文・長文・会話形式対応版
// ==========================================

let allJapeakData = [];
if (typeof japeakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakData);
if (typeof japeakConversationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConversationData);
if (typeof japeakClassData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClassData);
if (typeof japeakParagraphsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakParagraphsData);
if (typeof japeakHealthData !== 'undefined') allJapeakData = allJapeakData.concat(japeakHealthData);
if (typeof japeakLunchData !== 'undefined') allJapeakData = allJapeakData.concat(japeakLunchData);
if (typeof japeakEventsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakEventsData);
if (typeof japeakCommutingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakCommutingData);
if (typeof japeakClubsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClubsData);
if (typeof japeakOfficeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakOfficeData);
if (typeof japeakTeachersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTeachersData);
if (typeof japeakTroublesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTroublesData);
if (typeof japeakBreakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakBreakData);
if (typeof japeakA1Scene1Data !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1Scene1Data);
if (typeof japeakConvenientShoppingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientShoppingData);
if (typeof japeakConvenientOrderingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientOrderingData);
if (typeof japeakConvenientNeighborData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientNeighborData);
if (typeof japeakConvenientVisitHomeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientVisitHomeData);
if (typeof japeakConvenientQuestionData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientQuestionData);
if (typeof japeakA1GreetingDialogueData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1GreetingDialogueData);
if (typeof japeakA1BuyThingsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1BuyThingsData);
if (typeof japeakA1AskPlacePriceData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1AskPlacePriceData);
if (typeof japeakA1WantToBuyData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1WantToBuyData);
if (typeof japeakA1TellPreferencesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1TellPreferencesData);
if (typeof japeakA1RestaurantData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1RestaurantData);
if (typeof japeakA1DeliveryData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1DeliveryData);
if (typeof japeakA1TrainData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1TrainData);
if (typeof japeakA1AskDirectionsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1AskDirectionsData);
if (typeof japeakA1BankData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1BankData);
if (typeof japeakA1ResidentMannersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1ResidentMannersData);
if (typeof japeakA1WorkplaceMachinesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1WorkplaceMachinesData);
if (typeof japeakA2GreetingsBySituationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2GreetingsBySituationData);
if (typeof japeakA2StoreServicesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2StoreServicesData);
if (typeof japeakA2ChooseStoreData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2ChooseStoreData);
if (typeof japeakA2ChooseVariousStoresData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2ChooseVariousStoresData);
if (typeof japeakA2SmartShoppingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2SmartShoppingData);
if (typeof japeakA2NeighborhoodAssociationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2NeighborhoodAssociationData);
if (typeof japeakA2EventData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2EventData);
if (typeof japeakA2HospitalData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2HospitalData);
if (typeof japeakA2EmergencyHelpData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2EmergencyHelpData);
if (typeof japeakA2CityOfficeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2CityOfficeData);
if (typeof japeakA2LibraryData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2LibraryData);
if (typeof japeakA2PostcardData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2PostcardData);
if (typeof japeakA2InternetPhoneData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2InternetPhoneData);
if (typeof japeakA2WorkSafetyData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2WorkSafetyData);
if (typeof japeakA2WorkAccidentData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2WorkAccidentData);
if (typeof japeakA2JobSearchData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2JobSearchData);
if (typeof japeakA2JobInterviewData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2JobInterviewData);
if (typeof japeakA2WorkColleaguesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2WorkColleaguesData);
if (typeof japeakA2WorkLeaveRequestData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2WorkLeaveRequestData);
if (typeof japeakB1WorkGreetingsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1WorkGreetingsData);
if (typeof japeakB2GoToDestinationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB2GoToDestinationData);
if (typeof japeakB1SafeMovementData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1SafeMovementData);
if (typeof japeakB1PharmacyData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1PharmacyData);
if (typeof japeakB2DisasterPreparednessData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB2DisasterPreparednessData);
if (typeof japeakB1PreventIllnessData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1PreventIllnessData);
if (typeof japeakB1PreventIllnessData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1PreventIllnessData);
if (typeof japeakB1CommunityActivitiesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1CommunityActivitiesData);
if (typeof japeakB1FindHomeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1FindHomeData);
if (typeof japeakB1MovingPreparationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1MovingPreparationData);
if (typeof japeakB1ChildbirthPreparationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ChildbirthPreparationData);
if (typeof japeakB1ChildbirthConsultationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ChildbirthConsultationData);
if (typeof japeakB1ChildcareServicesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ChildcareServicesData);
if (typeof japeakB1ChildHospitalData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ChildHospitalData);
if (typeof japeakB1ChildcareFacilityData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ChildcareFacilityData);
if (typeof japeakB1ParentingConsultationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1ParentingConsultationData);
if (typeof japeakB1SchoolEnrollmentData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1SchoolEnrollmentData);
if (typeof japeakB1SchoolLifeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1SchoolLifeData);
if (typeof japeakB1SchoolTroubleData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1SchoolTroubleData);
if (typeof japeakB1CareerConsultationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakB1CareerConsultationData);




// 🌟 修正ポイント1：currentAudio を追加しました
let currentIndex = 0, currentLesson = null, currentLang = 'en', recognition = null, currentAudio = null;
let isRecording = false, hasCelebrated = false, isSwapped = false;

const langCodeMap = {
    en:'en-US','zh-CN':'zh-CN','zh-TW':'zh-TW',ko:'ko-KR',vi:'vi-VN',tl:'fil-PH',id:'id-ID',
    th:'th-TH',my:'my-MM',km:'km-KH',ne:'ne-NP',mn:'mn-MN',si:'si-LK',bn:'bn-BD',
    pt:'pt-BR',es:'es-ES',fr:'fr-FR',ru:'ru-RU',uk:'uk-UA'
};

const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('id'), urlLang = urlParams.get('lang');
if (urlLang) currentLang = urlLang;
if (targetId) {
    const foundIndex = allJapeakData.findIndex(item => item.id === targetId);
    if (foundIndex !== -1) currentIndex = foundIndex;
}
if (allJapeakData.length > 0) currentLesson = allJapeakData[currentIndex];

const $ = id => document.getElementById(id);
const stripHtmlTags = text => text ? String(text).replace(/<[^>]*>?/gm, '') : '';
const isDialogueLesson = lesson => lesson && Array.isArray(lesson.dialogue) && lesson.dialogue.length > 0;
const stripSpeakerPrefix = text => text ? String(text).replace(/^.*?[：:]\s*/, '') : '';
const getContextText = (lesson, lang) => lesson?.context ? lesson.context[lang] || lesson.context.en || lesson.context.ja || '' : '';
const getTranslationText = (lesson, lang) => lesson?.translations ? lesson.translations[lang] || lesson.translations.en || '' : '';

function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function getJapaneseDisplayText(lesson) {
    if (!lesson) return '';
    return isDialogueLesson(lesson) ? lesson.dialogue.map(t => t.line || '').join(' ') : lesson.japanese || '';
}

function getJapanesePracticeTarget(lesson) {
    if (!lesson) return '';
    if (lesson.target_speech) return lesson.target_speech;
    return isDialogueLesson(lesson) ? lesson.dialogue.map(t => t.target || t.line || '').join(' ') : lesson.japanese || '';
}

function getRubyDisplayText(lesson) {
    if (!lesson) return '';
    if (isDialogueLesson(lesson)) return lesson.dialogue.map(t => t.ruby || t.line || '').join('<br>');
    return lesson.ruby?.hiragana || lesson.japanese || '';
}

function getRomajiDisplayText(lesson) {
    if (!lesson) return '';
    if (isDialogueLesson(lesson)) return lesson.dialogue.map(t => t.romaji || '').join('<br>');
    return lesson.ruby?.romaji || '';
}

function getDialogueTranslationLines(lesson, lang) {
    if (!isDialogueLesson(lesson)) return [];
    if (lesson.dialogueTranslations && Array.isArray(lesson.dialogueTranslations[lang])) return lesson.dialogueTranslations[lang];
    const raw = getTranslationText(lesson, lang);
    return raw ? raw.split(/\n|<br\s*\/?>/i).map(l => l.trim()).filter(Boolean) : [];
}

function getForeignPracticeTarget(lesson, lang) {
    if (!lesson) return '';
    if (isDialogueLesson(lesson)) {
        const lines = getDialogueTranslationLines(lesson, lang);
        if (lines.length > 0) return lines.map(stripSpeakerPrefix).join(' ');
    }
    return getTranslationText(lesson, lang);
}

function getSpeakerDisplayName(turn, index) {
    if (!turn) return `話者${index + 1}`;

    const baseName = turn.speakerName || turn.name || "";
    const key = turn.speakerKey || baseName;

    if (turn.speakerNames) {
        return turn.speakerNames[currentLang]
            || turn.speakerNames.en
            || turn.speakerNames.ja
            || baseName
            || turn.speakerLabel
            || `話者${index + 1}`;
    }

    if (speakerNameDictionary[key]) {
        return speakerNameDictionary[key][currentLang]
            || speakerNameDictionary[key].en
            || speakerNameDictionary[key].ja
            || baseName
            || turn.speakerLabel
            || `話者${index + 1}`;
    }

    if (speakerNameDictionary[baseName]) {
        return speakerNameDictionary[baseName][currentLang]
            || speakerNameDictionary[baseName].en
            || speakerNameDictionary[baseName].ja
            || baseName
            || turn.speakerLabel
            || `話者${index + 1}`;
    }

    return baseName || turn.speakerLabel || `話者${index + 1}`;
}

function getDialogueSpeakerTokens(lesson) {
    if (!isDialogueLesson(lesson)) return [];

    const tokens = [];

    lesson.dialogue.forEach((turn, i) => {
        const baseName = turn.speakerName || turn.name || "";
        const key = turn.speakerKey || baseName;

        if (baseName) tokens.push(baseName);
        if (turn.speakerLabel) tokens.push(turn.speakerLabel);

        if (turn.speakerNames) {
            Object.values(turn.speakerNames).forEach(v => tokens.push(v));
        }

        if (speakerNameDictionary[key]) {
            Object.values(speakerNameDictionary[key]).forEach(v => tokens.push(v));
        }

        if (speakerNameDictionary[baseName]) {
            Object.values(speakerNameDictionary[baseName]).forEach(v => tokens.push(v));
        }

        tokens.push(`話者${i + 1}`, `話者${String.fromCharCode(65 + i)}`);
    });

    return [...new Set(tokens.filter(Boolean))];
}

function removeDialogueSpeakerWordsFromNormalizedText(text, lesson) {
    if (!text || !isDialogueLesson(lesson)) return text;
    let result = text;
    getDialogueSpeakerTokens(lesson).forEach(token => {
        const normalizedToken = normalizeJapaneseText(token, '');
        if (normalizedToken) result = result.split(normalizedToken).join('');
    });
    return result;
}

let audioCtx = null;
function getAudioContext() {
    const WebAudioContext = window.AudioContext || window.webkitAudioContext;
    if (!WebAudioContext) return null;
    if (!audioCtx) audioCtx = new WebAudioContext();
    return audioCtx;
}

function playSuccessSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator(), gainNode = ctx.createGain();
    osc.connect(gainNode); gainNode.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
    osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.3);
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 1.5);
}

function fireConfetti() {
    if (typeof confetti !== 'undefined') {
        confetti({ particleCount:150, spread:80, origin:{ y:0.6 }, colors:['#f05a28','#1e3a5f','#eab308','#166534','#ffffff'] });
    }
}

function selectBestVoice(langCode) {
    const voices = window.speechSynthesis.getVoices(), prefix = langCode.split('-')[0];
    return voices.find(v => v.lang === langCode && (v.name.includes('Google') || v.name.includes('Premium'))) ||
           voices.find(v => v.lang.startsWith(prefix) && (v.name.includes('Google') || v.name.includes('Premium'))) ||
           voices.find(v => v.lang === langCode) ||
           voices.find(v => v.lang.startsWith(prefix)) || null;
}

function speakWithBrowserVoice(text, langCode, rate = 0.95) {
    if (!text) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode; utterance.rate = rate; utterance.pitch = 1.0;

    const voice = selectBestVoice(langCode);
    if (voice) {
        utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    } else {
        alert(`【音声データが見つかりません】\nお使いの端末（ブラウザ）には ${langCode} の音声データが入っていません。\n\n💡 Google Chromeブラウザを使用してください。`);
    }
}

// スピード調整＆再生/停止トグル対応のお手本音声再生
function playExampleAudio(speed = 1.0) {
    if (!currentLesson) return;

    // 1. ブラウザ音声（AI音声・外国語）が再生中の場合の停止処理
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        return; // 再生中なら停止して終了
    }

    // 2. 録音音声(MP3) が再生中の場合の停止処理
    if (currentAudio && !currentAudio.paused) {
        const previousSpeed = currentAudio.playbackRate;
        currentAudio.pause();
        currentAudio.currentTime = 0;
        
        // もし「再生中と同じ速度のボタン」を押したなら、停止するだけで終了
        if (previousSpeed === speed) {
            return;
        }
    }

    // （安全のためのリセット処理）
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    window.speechSynthesis.cancel();

    // 3. 新しく音声を再生する処理
    if (isSwapped) {
        speakWithBrowserVoice(getForeignPracticeTarget(currentLesson, currentLang), langCodeMap[currentLang] || 'en-US', 0.95 * speed);
        return;
    }

    const audioPath = currentLesson.audio || `audio/${currentLesson.id}.mp3`;
    currentAudio = new Audio(audioPath);
    currentAudio.playbackRate = speed; 

    currentAudio.onerror = () => {
        console.warn('MP3ファイルが見つかりません。代わりにAI音声を再生します:', audioPath);
        speakWithBrowserVoice(getJapanesePracticeTarget(currentLesson), 'ja-JP', 0.85 * speed);
    };

    currentAudio.play().catch(e => console.warn("音声の再生がブロックされました:", e));
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

document.addEventListener('DOMContentLoaded', () => {
    if (!currentLesson) {
        alert('エラー：教材データが見つかりません。');
        return;
    }

    renderLesson();
    setupSpeechRecognition();

    const langSelect = $('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', e => {
            currentLang = e.target.value;
            renderLesson();
            if (recognition && !isRecording) setupSpeechRecognition();
        });
    }

    // 🌟 修正ポイント2：通常再生ボタンとゆっくりボタンを正しく紐付け
    const btnPlayAudio = $('btn-play-audio');
    if (btnPlayAudio) btnPlayAudio.onclick = () => playExampleAudio(1.0);

    const btnPlaySlow = $('btn-play-slow');
    if (btnPlaySlow) btnPlaySlow.onclick = () => playExampleAudio(0.7);

    const btnPrev = $('btn-prev');
    if (btnPrev) btnPrev.onclick = () => moveLesson(-1);

    const btnNext = $('btn-next');
    if (btnNext) btnNext.onclick = () => moveLesson(1);
});

function moveLesson(direction) {
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= allJapeakData.length) return;

    currentIndex = nextIndex;
    currentLesson = allJapeakData[currentIndex];
    renderLesson();
    if (recognition && !isRecording) setupSpeechRecognition();
    history.replaceState(null, '', `?id=${currentLesson.id}&lang=${currentLang}`);
}

window.toggleLanguageSwap = function() {
    isSwapped = !isSwapped;

    const swapBtn = $('btn-swap-lang');
    if (swapBtn) {
        if (isSwapped) {
            swapBtn.classList.replace('bg-[#eab308]', 'bg-[#1e3a5f]');
            swapBtn.classList.replace('hover:bg-[#ca8a04]', 'hover:bg-[#172a45]');
        } else {
            swapBtn.classList.replace('bg-[#1e3a5f]', 'bg-[#eab308]');
            swapBtn.classList.replace('hover:bg-[#172a45]', 'hover:bg-[#ca8a04]');
        }
    }

    renderLesson();
    if (recognition && !isRecording) setupSpeechRecognition();
};

function renderLesson() {
    if (!currentLesson) return;

    const lessonTitle = $('lesson-title'), contextText = $('context-text');
    const voiceOutput = $('voice-output'), accOutput = $('acc-output');

    if (lessonTitle) lessonTitle.innerHTML = `<span>🗣️</span> ${escapeHtml(currentLesson.title || '')}`;
    if (contextText) contextText.innerText = getContextText(currentLesson, currentLang);

    const isDialogue = isDialogueLesson(currentLesson);
    const isLongText = stripHtmlTags(getJapaneseDisplayText(currentLesson)).length >= 20 || isDialogue;

    const layoutContainer = $('layout-container'), mainPane = $('main-pane'), sidePane = $('side-pane');
    const sentenceContainer = $('sentence-container'), transContainer = $('translation-text');

    if (layoutContainer && mainPane && sidePane && sentenceContainer && transContainer) {
        if (isLongText) {
            layoutContainer.className = 'max-w-[1400px] w-[95%] mx-auto mt-6 flex flex-col gap-6 transition-all duration-500';
            mainPane.className = 'w-full flex flex-col bg-[#fdfcf8] rounded-sm wa-border overflow-hidden transition-all duration-500';
            sidePane.className = 'w-full grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500';
        } else {
            layoutContainer.className = 'max-w-[1400px] w-[95%] mx-auto mt-6 flex flex-col lg:flex-row gap-6 transition-all duration-500';
            mainPane.className = 'w-full lg:w-[65%] flex flex-col bg-[#fdfcf8] rounded-sm wa-border overflow-hidden transition-all duration-500';
            sidePane.className = 'w-full lg:w-[35%] flex flex-col gap-6 transition-all duration-500';
        }

        transContainer.innerHTML = '';
        sentenceContainer.innerHTML = '';

        if (isDialogue) renderDialogueLesson(sentenceContainer, transContainer);
        else renderNormalLesson(sentenceContainer, transContainer, isLongText);
    }

    if (voiceOutput) voiceOutput.innerHTML = '※「話す」ボタンを押してください';
    if (accOutput) {
        accOutput.innerText = '0%';
        accOutput.className = 'text-4xl font-black text-[#1e3a5f] mincho-font mt-1';
    }
}

function renderDialogueLesson(sentenceContainer, transContainer) {
    sentenceContainer.className = 'flex flex-col gap-5 md:gap-6 mx-auto w-full max-w-5xl transition-all duration-300';

    const translatedLines = getDialogueTranslationLines(currentLesson, currentLang);

    if (!isSwapped) {
        if (translatedLines.length > 0) {
            translatedLines.forEach((line, i) => addTransLine(transContainer, line, i));
        } else {
            transContainer.innerText = getTranslationText(currentLesson, currentLang);
        }

        currentLesson.dialogue.forEach((turn, i) => {
            sentenceContainer.appendChild(createDialogueLineBlock(turn, i, turn.ruby || turn.line || '', turn.romaji || '', true));
        });
    } else {
        currentLesson.dialogue.forEach((turn, i) => {
            const name = getSpeakerDisplayName(turn, i);
            addTransLine(transContainer, `${name}：${stripHtmlTags(turn.line || '')}`, i);
        });

        translatedLines.forEach((line, i) => {
            sentenceContainer.appendChild(createDialogueLineBlock(currentLesson.dialogue[i] || {}, i, escapeHtml(stripSpeakerPrefix(line)), '', false));
        });
    }
}

function addTransLine(container, text, index) {
    const div = document.createElement('div');
    div.id = `trans-span-${index}`;
    div.className = 'transition-all duration-300 px-2 py-1 rounded-sm leading-relaxed';
    div.innerText = text;
    container.appendChild(div);
}

function createDialogueLineBlock(turn, index, mainTextHtml, subText, isJapaneseMode) {
    const block = document.createElement('div');
    const speakerName = getSpeakerDisplayName(turn, index);
    const mainTextClass = isJapaneseMode
        ? 'text-3xl md:text-4xl leading-[1.9] text-stone-800 font-bold mincho-font'
        : 'text-2xl md:text-3xl leading-[1.8] text-stone-800 font-bold';

    block.id = `reading-block-${index}`;
    block.className = 'w-full cursor-pointer transition-all duration-300 hover:bg-emerald-50 border-2 border-transparent hover:border-emerald-200 rounded-xl px-3 py-3 md:px-5 md:py-4';
    block.innerHTML = `
        <div class="grid grid-cols-[6rem_1.2rem_1fr] md:grid-cols-[8rem_1.4rem_1fr] items-start gap-1 md:gap-2 w-full">
            <div class="text-right text-xl md:text-2xl font-black text-[#1e3a5f] mincho-font leading-[1.9] truncate">${escapeHtml(speakerName)}</div>
            <div class="text-xl md:text-2xl font-black text-[#1e3a5f] mincho-font leading-[1.9] text-center">：</div>
            <div class="${mainTextClass}">${mainTextHtml}</div>
        </div>
        ${subText ? `
            <div class="grid grid-cols-[6rem_1.2rem_1fr] md:grid-cols-[8rem_1.4rem_1fr] items-start gap-1 md:gap-2 w-full mt-1">
                <div></div><div></div>
                <div class="text-base md:text-lg text-stone-500 font-medium mincho-font">${escapeHtml(subText)}</div>
            </div>` : ''}
    `;

    block.onclick = () => {
        document.querySelectorAll('[id^="reading-block-"]').forEach(b => b.classList.remove('bg-emerald-50','border-emerald-300','scale-[1.01]'));
        document.querySelectorAll('[id^="trans-span-"]').forEach(s => s.classList.remove('bg-[#eab308]','text-white','shadow-sm','font-bold'));
        block.classList.add('bg-emerald-50','border-emerald-300','scale-[1.01]');
        const targetSpan = $(`trans-span-${index}`);
        if (targetSpan) targetSpan.classList.add('bg-[#eab308]','text-white','shadow-sm','font-bold');
    };

    return block;
}

function renderNormalLesson(sentenceContainer, transContainer, isLongText) {
    sentenceContainer.className = 'flex flex-col gap-6 md:gap-8 mx-auto w-fit transition-all duration-300';

    const jpLines = getRubyDisplayText(currentLesson).split('<br>');
    const roLines = getRomajiDisplayText(currentLesson).split('<br>');
    const rawTrans = getTranslationText(currentLesson, currentLang);
    const transSentences = rawTrans.match(/.*?[.?!。？！]+(?:\s+|$)|.+$/g) || [rawTrans];

    if (!isSwapped) {
        transSentences.forEach((s, i) => addNormalTransSpan(transContainer, s, i));
        jpLines.forEach((jpLine, i) => {
            const block = createNormalLineBlock(
                i,
                `<div class="${isLongText ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'} leading-[1.8] text-stone-800 font-bold mincho-font">${jpLine.trim()}</div>
                 <div class="${isLongText ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} text-stone-500 font-medium mincho-font">${(roLines[i] || '').trim()}</div>`,
                jpLines.length
            );
            sentenceContainer.appendChild(block);
        });
    } else {
        const rawJpText = stripHtmlTags(currentLesson.japanese || '');
        const jpSentences = rawJpText.match(/.*?[。？！]+(?:\s+|$)|.+$/g) || [rawJpText];

        jpSentences.forEach((s, i) => addNormalTransSpan(transContainer, s, i));
        transSentences.forEach((sentence, i) => {
            const block = createNormalLineBlock(
                i,
                `<div class="${isLongText ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} leading-relaxed text-stone-800 font-bold sans-serif">${escapeHtml(sentence.trim())}</div>`,
                transSentences.length
            );
            sentenceContainer.appendChild(block);
        });
    }
}

function addNormalTransSpan(container, text, index) {
    const span = document.createElement('span');
    span.id = `trans-span-${index}`;
    span.className = 'transition-all duration-300 px-1 rounded-sm';
    span.innerText = text;
    container.appendChild(span);
}

function createNormalLineBlock(index, innerHtml, total) {
    const block = document.createElement('div');
    block.id = `reading-block-${index}`;
    block.className = 'flex flex-col gap-1 md:gap-2 items-start w-full cursor-pointer hover:bg-stone-100 p-3 md:p-4 rounded-md transition-all duration-300 border-2 border-transparent relative group';
    block.innerHTML = `
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200 flex items-center gap-1"><span>👆</span> 意味を確認</div>
        ${innerHtml}
    `;
    block.onclick = () => highlightNormalLine(index, total, block);
    return block;
}

function highlightNormalLine(index, total, block) {
    for (let i = 0; i < total; i++) {
        const b = $(`reading-block-${i}`), s = $(`trans-span-${i}`);
        if (b) b.classList.remove('bg-emerald-50','border-emerald-200');
        if (s) s.classList.remove('bg-[#eab308]','text-white','shadow-sm','font-bold');
    }
    block.classList.add('bg-emerald-50','border-emerald-200');
    const targetSpan = $(`trans-span-${index}`);
    if (targetSpan) targetSpan.classList.add('bg-[#eab308]','text-white','shadow-sm','font-bold');
}

function setupSpeechRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const voiceOutput = $('voice-output'), accOutput = $('acc-output'), micBtn = $('mic-btn');
    if (!micBtn) return;

    if (!window.SpeechRecognition) {
        micBtn.disabled = true;
        micBtn.innerHTML = 'このブラウザでは音声認識が使えません';
        micBtn.className = 'flex-1 w-full py-4 bg-stone-400 text-white rounded-sm font-bold text-base';
        if (voiceOutput) voiceOutput.innerHTML = 'Google Chromeで開いてください。';
        return;
    }

    if (recognition && isRecording) {
        try { recognition.stop(); } catch (e) { console.warn(e); }
    }

    recognition = new SpeechRecognition();
    recognition.lang = !isSwapped ? 'ja-JP' : (langCodeMap[currentLang] || 'en-US');
    recognition.interimResults = true;
    recognition.continuous = true;

    let finalTranscriptText = '';

    recognition.onstart = () => {
        isRecording = true;
        hasCelebrated = false;
        finalTranscriptText = '';

        micBtn.innerHTML = '<span>⏹</span> 停止 (Stop)';
        micBtn.className = 'flex-1 w-full flex items-center justify-center gap-3 py-4 bg-stone-700 hover:bg-stone-800 text-white rounded-sm font-black text-xl shadow-inner tracking-widest';

        if (voiceOutput) voiceOutput.innerHTML = '<span class="text-stone-400 text-base">聞いています...</span>';
        if (accOutput) {
            accOutput.innerText = '0%';
            accOutput.className = 'text-4xl font-black text-[#1e3a5f] mincho-font mt-1';
        }
    };

    recognition.onresult = event => {
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscriptText += transcript;
            else interimTranscript += transcript;
        }

        const currentText = finalTranscriptText + interimTranscript;
        if (voiceOutput) voiceOutput.innerHTML = currentText || '<span class="text-stone-400 text-base">聞いています...</span>';

        if (currentText.length > 0 && accOutput) {
            const accuracy = calculateCurrentLessonAccuracy(currentText);
            accOutput.innerText = `${accuracy}%`;
            accOutput.className = 'text-4xl font-black text-[#1e3a5f] opacity-70 mincho-font mt-1 transition-all duration-75';
        }
    };

    recognition.onerror = event => {
        console.warn('Speech recognition error:', event.error);
        isRecording = false;
        resetMicButton(micBtn);
    };

    recognition.onend = () => {
        isRecording = false;
        resetMicButton(micBtn);

        if (!accOutput || finalTranscriptText.trim().length === 0) return;

        const accuracy = calculateCurrentLessonAccuracy(finalTranscriptText);
        accOutput.innerText = `${accuracy}%`;

        if (accuracy >= 80) {
            accOutput.className = 'text-4xl font-black text-green-600 mincho-font mt-1 transition-all duration-300';
            if (!hasCelebrated) {
                hasCelebrated = true;
                playSuccessSound();
                fireConfetti();
            }
        } else if (accuracy >= 50) {
            accOutput.className = 'text-4xl font-black text-yellow-600 mincho-font mt-1 transition-all duration-300';
        } else {
            accOutput.className = 'text-4xl font-black text-[#1e3a5f] mincho-font mt-1 transition-all duration-300';
        }
    };

    micBtn.onclick = () => isRecording ? recognition.stop() : recognition.start();
}

function calculateCurrentLessonAccuracy(spokenText) {
    if (!spokenText || !currentLesson) return 0;

    if (!isSwapped) {
        const rawTarget = getJapanesePracticeTarget(currentLesson);
        const rubyHint = getRubyDisplayText(currentLesson);
        let normSpoken = normalizeJapaneseText(spokenText, rubyHint);
        const normTarget = normalizeJapaneseText(rawTarget, rubyHint);

        normSpoken = removeDialogueSpeakerWordsFromNormalizedText(normSpoken, currentLesson);
        return calculateJapaneseAccuracy(normSpoken, normTarget);
    }

    const punctuationRegex = /[\s.,?!¿¡。、！？「」'"：:]/g;
    const targetText = getForeignPracticeTarget(currentLesson, currentLang);
    const cleanSpoken = String(spokenText).toLowerCase().replace(punctuationRegex, '');
    const cleanTarget = String(targetText).toLowerCase().replace(punctuationRegex, '');

    return calculateJapaneseAccuracy(cleanSpoken, cleanTarget);
}

function resetMicButton(btn) {
    if (!btn) return;
    btn.innerHTML = '<span>🎙</span> 話す (Start Speaking)';
    btn.className = 'flex-1 w-full flex items-center justify-center gap-3 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-sm font-black text-xl shadow-md border-b-4 border-[#7f1d1d] active:border-b-0 active:translate-y-1 transition-all tracking-widest';
}

function normalizeJapaneseText(text, rubyHtml) {
    if (!text) return '';

    let normalized = stripHtmlTags(String(text));

    // 全角英数字を半角に、カタカナをひらがなに変換
    normalized = normalized.replace(/[A-Za-z]/g, s => String.fromCharCode(s.charCodeAt(0) + 0xFEE0));
    normalized = normalized.replace(/[\u30a1-\u30f6]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x60));
    
    // 🌟 改善ポイント1：9,999までの数字を正確にひらがなに変換
    normalized = normalized.replace(/[0-9０-９]+/g, match => {
        const numStr = match.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
        const num = parseInt(numStr, 10);
        if (num === 0) return 'ぜろ';
        
        const units = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
        let res = '';

        const t = Math.floor(num / 1000) % 10;
        if (t === 1) res += 'せん';
        else if (t === 3) res += 'さんぜん';
        else if (t === 8) res += 'はっせん';
        else if (t > 0) res += units[t] + 'せん';

        const h = Math.floor(num / 100) % 10;
        if (h === 1) res += 'ひゃく';
        else if (h === 3) res += 'さんびゃく';
        else if (h === 6) res += 'ろっぴゃく';
        else if (h === 8) res += 'はっぴゃく';
        else if (h > 0) res += units[h] + 'ひゃく';

        const ten = Math.floor(num / 10) % 10;
        if (ten === 1) res += 'じゅう';
        else if (ten > 0) res += units[ten] + 'じゅう';

        const one = num % 10;
        if (one > 0) res += units[one];

        return res;
    });

    // Rubyタグからの漢字→ひらがな置換
    if (rubyHtml) {
        const regex = /<ruby>\s*([^<]+?)\s*<rt>\s*([^<]+?)\s*<\/rt>\s*<\/ruby>/g;
        let match;
        while ((match = regex.exec(rubyHtml)) !== null) {
            normalized = normalized.split(match[1].trim()).join(match[2].trim());
        }
    }

    // 🌟 改善ポイント2：音声認識特有の揺れや、Rubyでカバーしきれない漢字の辞書を強化
    const commonReplacements = {
        '私':'わたし','僕':'ぼく','俺':'おれ','何':'なに','行く':'いく','来る':'くる','食べる':'たべる',
        '飲む':'のむ','言う':'いう','話す':'はなす','見る':'みる','聞く':'きく','有難う':'ありがとう',
        '御座います':'ございます','下さい':'ください','済みません':'すみません','御免なさい':'ごめんなさい',
        '良い':'いい','無い':'ない','時':'とき','事':'こと','物':'もの','人':'ひと','所':'ところ',
        '今日':'きょう','明日':'あした','昨日':'きのう','一緒':'いっしょ','太郎':'たろう','次郎':'じろう',
        '花子':'はなこ','先生':'せんせい','度':'ど','熱':'ねつ','分':'ふん','半':'はん','頁':'ぺーじ',
        '歳':'さい','分かる':'わかる','解る':'わかる','判る':'わかる','居る':'いる',
        '1つ':'ひとつ', '2つ':'ふたつ', '3つ':'みっつ', '4つ':'よっつ', '5つ':'いつつ', 
        '1人':'ひとり', '2人':'ふたり', '円':'えん', '百':'ひゃく', '千':'せん', '万':'まん'
    };

    for (const [k, v] of Object.entries(commonReplacements)) {
        normalized = normalized.split(k).join(v);
    }

    return normalized.replace(/[\s\n\r\t、。！？!?「」『』（）()\[\]【】・,\.：:]/g, '');
}

function calculateJapaneseAccuracy(cleanSpoken, cleanTarget) {
    if (!cleanSpoken || cleanSpoken.length === 0) return 0;
    if (!cleanTarget || cleanTarget.length === 0) return 0;

    const distance = levenshteinDistance(cleanSpoken, cleanTarget);
    const maxLength = Math.max(cleanSpoken.length, cleanTarget.length);
    return Math.max(0, Math.round(((maxLength - distance) / maxLength) * 100));
}

function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
                ? matrix[i - 1][j - 1]
                : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
        }
    }

    return matrix[b.length][a.length];
}
const speakerNameDictionary = {
    "店員": {
        ja: "店員", en: "Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "점원",
        vi: "Nhân viên", tl: "Staff", id: "Staf", th: "พนักงาน",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "සේවකයා", bn: "কর্মী", pt: "Funcionário", es: "Empleado",
        fr: "Employé", ru: "Сотрудник", uk: "Працівник"
    },
    "客": {
        ja: "客", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "손님",
        vi: "Khách", tl: "Customer", id: "Pelanggan", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Покупатель", uk: "Покупець"
    },
    "先生": {
        ja: "先生", en: "Teacher", "zh-CN": "老师", "zh-TW": "老師", ko: "선생님",
        vi: "Giáo viên", tl: "Teacher", id: "Guru", th: "ครู",
        my: "ဆရာ", km: "គ្រូ", ne: "शिक्षक", mn: "Багш",
        si: "ගුරුවරයා", bn: "শিক্ষক", pt: "Professor", es: "Profesor",
        fr: "Professeur", ru: "Учитель", uk: "Учитель"
    },
    "生徒": {
        ja: "生徒", en: "Student", "zh-CN": "学生", "zh-TW": "學生", ko: "학생",
        vi: "Học sinh", tl: "Student", id: "Siswa", th: "นักเรียน",
        my: "ကျောင်းသား", km: "សិស្ស", ne: "विद्यार्थी", mn: "Сурагч",
        si: "ශිෂ්‍යයා", bn: "ছাত্র", pt: "Aluno", es: "Estudiante",
        fr: "Élève", ru: "Ученик", uk: "Учень"
    },
    "友だち": {
        ja: "友だち", en: "Friend", "zh-CN": "朋友", "zh-TW": "朋友", ko: "친구",
        vi: "Bạn", tl: "Kaibigan", id: "Teman", th: "เพื่อน",
        my: "သူငယ်ချင်း", km: "មិត្តភក្តិ", ne: "साथी", mn: "Найз",
        si: "මිතුරා", bn: "বন্ধু", pt: "Amigo", es: "Amigo",
        fr: "Ami", ru: "Друг", uk: "Друг"
    },
    "母": {
        ja: "母", en: "Mother", "zh-CN": "妈妈", "zh-TW": "媽媽", ko: "어머니",
        vi: "Mẹ", tl: "Nanay", id: "Ibu", th: "แม่",
        my: "အမေ", km: "ម្តាយ", ne: "आमा", mn: "Ээж",
        si: "අම්මා", bn: "মা", pt: "Mãe", es: "Madre",
        fr: "Mère", ru: "Мама", uk: "Мама"
    },
    "父": {
        ja: "父", en: "Father", "zh-CN": "爸爸", "zh-TW": "爸爸", ko: "아버지",
        vi: "Bố", tl: "Tatay", id: "Ayah", th: "พ่อ",
        my: "အဖေ", km: "ឪពុក", ne: "बुबा", mn: "Аав",
        si: "තාත්තා", bn: "বাবা", pt: "Pai", es: "Padre",
        fr: "Père", ru: "Папа", uk: "Тато"
    },
    "医者": {
        ja: "医者", en: "Doctor", "zh-CN": "医生", "zh-TW": "醫生", ko: "의사",
        vi: "Bác sĩ", tl: "Doktor", id: "Dokter", th: "หมอ",
        my: "ဆရာဝန်", km: "វេជ្ជបណ្ឌិត", ne: "डाक्टर", mn: "Эмч",
        si: "වෛද්‍යවරයා", bn: "ডাক্তার", pt: "Médico", es: "Médico",
        fr: "Médecin", ru: "Врач", uk: "Лікар"
    },
    "駅員": {
        ja: "駅員", en: "Station Staff", "zh-CN": "车站工作人员", "zh-TW": "車站工作人員", ko: "역무원",
        vi: "Nhân viên nhà ga", tl: "Station Staff", id: "Petugas Stasiun", th: "เจ้าหน้าที่สถานี",
        my: "ဘူတာဝန်ထမ်း", km: "បុគ្គលិកស្ថានីយ៍", ne: "स्टेशन कर्मचारी", mn: "Өртөөний ажилтан",
        si: "දුම්රිය ස්ථාන සේවකයා", bn: "স্টেশন কর্মী", pt: "Funcionário da estação",
        es: "Empleado de la estación", fr: "Employé de gare", ru: "Сотрудник станции", uk: "Працівник станції"
    },
    "警察官": {
        ja: "警察官", en: "Police Officer", "zh-CN": "警察", "zh-TW": "警察", ko: "경찰관",
        vi: "Cảnh sát", tl: "Pulis", id: "Polisi", th: "ตำรวจ",
        my: "ရဲအရာရှိ", km: "ប៉ូលិស", ne: "प्रहरी", mn: "Цагдаа",
        si: "පොලිස් නිලධාරියා", bn: "পুলিশ", pt: "Policial", es: "Policía",
        fr: "Policier", ru: "Полицейский", uk: "Поліцейський"
    }
};