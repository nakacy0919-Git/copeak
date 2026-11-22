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
let sentenceMode = false, selectedSentenceIndex = 0, practiceUnits = [];
const japeakSpeech = window.JapeakSpeechUtils;
const stage3History = window.JapeakLearningHistory || null;

const langCodeMap = {
    ja:'ja-JP',en:'en-US','zh-CN':'zh-CN','zh-TW':'zh-TW',ko:'ko-KR',vi:'vi-VN',tl:'fil-PH',id:'id-ID',
    th:'th-TH',my:'my-MM',km:'km-KH',ne:'ne-NP',mn:'mn-MN',si:'si-LK',bn:'bn-BD',
    pt:'pt-BR',es:'es-ES',fr:'fr-FR',ru:'ru-RU',uk:'uk-UA'
};

const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('id'), urlLang = urlParams.get('lang');
if (urlLang && Object.prototype.hasOwnProperty.call(langCodeMap, urlLang)) currentLang = urlLang;
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
const getTranslationText = (lesson, lang) => {
    if (!lesson) return '';
    if (lang === 'ja') return lesson.translations?.ja || lesson.context?.ja || getJapaneseDisplayText(lesson);
    return lesson.translations ? lesson.translations[lang] || lesson.translations.en || '' : '';
};

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
    if (!text || !window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = rate;
    utterance.pitch = 1.0;
    const voice = selectBestVoice(langCode);
    if (voice) utterance.voice = voice;
    // Voice enumeration is often empty at first on iOS; the browser may still
    // synthesize its default language voice. Avoid incorrectly rejecting it.
    utterance.onerror = event => {
        console.warn('Speech synthesis failed:', event.error);
        const output = $('voice-output');
        if (output && !isRecording) {
            output.textContent = 'お手本音声を再生できませんでした。端末の音声設定を確認してください。';
        }
    };
    window.speechSynthesis.speak(utterance);
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

    // Short utterances use the browser voice; full lessons retain their existing MP3s.
    if (sentenceMode) {
        const unit = practiceUnits[selectedSentenceIndex];
        if (!unit) return;
        const speech = isSwapped ? unit.foreign : unit.japanese;
        const lang = isSwapped ? langCodeMap[currentLang] || 'en-US' : 'ja-JP';
        speakWithBrowserVoice(speech, lang, 0.95 * speed);
        return;
    }

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

function updateLessonBookmark() {
    const button = $('btn-lesson-favorite');
    if (!button || !currentLesson) return;
    const active = stage3History?.isFavorite(currentLesson.id) || false;
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? 'お気に入りから削除' : 'お気に入りに追加');
    button.title = active ? 'お気に入りから削除' : 'お気に入りに追加';
    button.textContent = active ? '★ お気に入り' : '☆ お気に入り';
}

document.addEventListener('DOMContentLoaded', () => {
    if (!currentLesson) {
        alert('エラー：教材データが見つかりません。');
        return;
    }

    stage3History?.addRecent(currentLesson.id);
    renderLesson();
    setupSpeechRecognition();
    const favorite = $('btn-lesson-favorite');
    if (favorite) favorite.addEventListener('click', () => {
        if (!currentLesson || !stage3History) return;
        stage3History.toggleFavorite(currentLesson.id);
        updateLessonBookmark();
    });

    const langSelect = $('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', e => {
            if (!Object.prototype.hasOwnProperty.call(langCodeMap, e.target.value)) return;
            stopCurrentPractice();
            currentLang = e.target.value;
            isSwapped = false;
            sentenceMode = false;
            selectedSentenceIndex = 0;
            const swapBtn = $('btn-swap-lang');
            if (swapBtn) {
                swapBtn.classList.replace('bg-[#1e3a5f]', 'bg-[#eab308]');
                swapBtn.classList.replace('hover:bg-[#172a45]', 'hover:bg-[#ca8a04]');
            }
            renderLesson();
            setupSpeechRecognition();
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

    const modeButton = $('btn-sentence-mode');
    if (modeButton) modeButton.onclick = () => setSentenceMode(!sentenceMode);
    const prevSentence = $('btn-sentence-prev');
    if (prevSentence) prevSentence.onclick = () => chooseSentence(selectedSentenceIndex - 1);
    const nextSentence = $('btn-sentence-next');
    if (nextSentence) nextSentence.onclick = () => chooseSentence(selectedSentenceIndex + 1);
});

function getCategoryLessons() {
    if (!currentLesson) return [];
    return allJapeakData.filter(item => item.category === currentLesson.category);
}

// Leave no active microphone or audio behind when changing lessons or languages.
function stopCurrentPractice() {
    if (recognition && isRecording) {
        recognition.onresult = null;
        recognition.onerror = null;
        recognition.onend = null;
        try { recognition.abort(); } catch (error) { console.warn('Could not abort recognition:', error); }
        isRecording = false;
        resetMicButton($('mic-btn'));
    }
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (window.speechSynthesis?.speaking) window.speechSynthesis.cancel();
}

function getPracticeUnits(lesson = currentLesson) {
    if (!lesson || !japeakSpeech) return [];
    if (isDialogueLesson(lesson)) {
        const lines = getDialogueTranslationLines(lesson, currentLang);
        const hasAlignedTranslation = lines.length === lesson.dialogue.length;
        return lesson.dialogue.map((turn, index) => ({
            japanese: turn.target || turn.line || '',
            ruby: turn.ruby || turn.line || '',
            foreign: hasAlignedTranslation ? stripSpeakerPrefix(lines[index]) : ''
        }));
    }

    const displayParts = japeakSpeech.splitJapaneseSentencesFromHtml(getRubyDisplayText(lesson));
    const targetParts = japeakSpeech.splitJapaneseSentencesFromHtml(getJapanesePracticeTarget(lesson));
    const translatedParts = japeakSpeech.splitTranslatedSentences(getForeignPracticeTarget(lesson, currentLang));
    const sameTargetCount = targetParts.length === displayParts.length;
    const sameTranslationCount = translatedParts.length === displayParts.length;
    return displayParts.map((ruby, index) => ({
        japanese: sameTargetCount ? japeakSpeech.stripRubyMarkup(targetParts[index]) : japeakSpeech.stripRubyMarkup(ruby),
        ruby,
        foreign: sameTranslationCount ? translatedParts[index] : ''
    }));
}

function canUseSentenceMode() {
    return practiceUnits.length > 1 && (!isSwapped || practiceUnits.every(unit => unit.foreign));
}

function updateFocusedSentence() {
    document.querySelectorAll('[id^="reading-block-"]').forEach(block => {
        block.classList.remove('bg-amber-50', 'border-amber-400', 'ring-2', 'ring-amber-200', 'opacity-60');
        if (!sentenceMode) return;
        if (block.id === 'reading-block-' + selectedSentenceIndex) {
            block.classList.add('bg-amber-50', 'border-amber-400', 'ring-2', 'ring-amber-200');
        } else {
            block.classList.add('opacity-60');
        }
    });
}

function updateSentenceModeControls() {
    const toolbar = $('sentence-practice-tools');
    if (!toolbar) return;
    if (!canUseSentenceMode()) sentenceMode = false;
    toolbar.classList.toggle('hidden', !canUseSentenceMode());
    toolbar.classList.toggle('flex', canUseSentenceMode());
    const toggle = $('btn-sentence-mode');
    if (toggle) {
        toggle.textContent = sentenceMode ? '全文を練習' : '1文ずつ練習';
        toggle.setAttribute('aria-pressed', String(sentenceMode));
    }
    const prev = $('btn-sentence-prev');
    const next = $('btn-sentence-next');
    const progress = $('sentence-progress');
    if (prev) prev.disabled = !sentenceMode || selectedSentenceIndex <= 0;
    if (next) next.disabled = !sentenceMode || selectedSentenceIndex >= practiceUnits.length - 1;
    if (progress) progress.textContent = sentenceMode
        ? (selectedSentenceIndex + 1) + ' / ' + practiceUnits.length + ' 文'
        : '全 ' + practiceUnits.length + ' 文';
    updateFocusedSentence();
}

function chooseSentence(index) {
    if (!sentenceMode || index < 0 || index >= practiceUnits.length) return;
    if (selectedSentenceIndex === index) return;
    stopCurrentPractice();
    selectedSentenceIndex = index;
    renderLesson();
    setupSpeechRecognition();
}

function setSentenceMode(enabled) {
    if (enabled && !canUseSentenceMode()) return;
    stopCurrentPractice();
    sentenceMode = enabled;
    selectedSentenceIndex = 0;
    renderLesson();
    setupSpeechRecognition();
}

function moveLesson(direction) {
    const categoryLessons = getCategoryLessons();
    const position = categoryLessons.findIndex(item => item === currentLesson || item.id === currentLesson?.id);
    const nextLesson = categoryLessons[position + direction];
    if (!nextLesson) return;

    stopCurrentPractice();
    currentLesson = nextLesson;
    stage3History?.addRecent(currentLesson.id);
    sentenceMode = false;
    selectedSentenceIndex = 0;
    currentIndex = allJapeakData.indexOf(currentLesson);
    renderLesson();
    setupSpeechRecognition();
    history.replaceState(null, '', `?id=${encodeURIComponent(currentLesson.id)}&lang=${encodeURIComponent(currentLang)}`);
}

window.toggleLanguageSwap = function() {
    if (currentLang === 'ja') return; // Japanese is the learning target, not a foreign-language swap.
    stopCurrentPractice();
    isSwapped = !isSwapped;
    sentenceMode = false;
    selectedSentenceIndex = 0;

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
    setupSpeechRecognition();
};

function renderLesson() {
    if (!currentLesson) return;
    updateLessonBookmark();

    practiceUnits = getPracticeUnits();
    selectedSentenceIndex = Math.min(selectedSentenceIndex, Math.max(0, practiceUnits.length - 1));
    const categoryLessons = getCategoryLessons();
    const lessonPosition = categoryLessons.findIndex(item => item === currentLesson || item.id === currentLesson.id);
    [['btn-prev', lessonPosition <= 0], ['btn-next', lessonPosition >= categoryLessons.length - 1]].forEach(([id, disabled]) => {
        const button = $(id);
        if (!button) return;
        button.disabled = disabled;
        button.classList.toggle('opacity-40', disabled);
        button.classList.toggle('cursor-not-allowed', disabled);
    });
    const swapButton = $('btn-swap-lang');
    if (swapButton) {
        swapButton.disabled = currentLang === 'ja';
        swapButton.title = currentLang === 'ja' ? '日本語を選択中は言語の入れ替えはできません' : '練習する言語を入れ替える';
        swapButton.classList.toggle('opacity-40', swapButton.disabled);
        swapButton.classList.toggle('cursor-not-allowed', swapButton.disabled);
    }

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
    updateSentenceModeControls();

    if (voiceOutput) voiceOutput.textContent = '※「話す」ボタンを押してください';
    if (accOutput) {
        accOutput.innerText = '—';
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
    
    // PCは従来通り、スマホ時のみ文字サイズをやや小さく
    const mainTextClass = isJapaneseMode
        ? 'text-xl md:text-4xl leading-[1.8] md:leading-[1.9] text-stone-800 font-bold mincho-font'
        : 'text-lg md:text-3xl leading-[1.6] md:leading-[1.8] text-stone-800 font-bold';

    block.id = `reading-block-${index}`;
    // PCは従来通りのパディング、スマホ時のみ少し詰める
    block.className = 'w-full cursor-pointer transition-all duration-300 hover:bg-emerald-50 border-2 border-transparent hover:border-emerald-200 rounded-xl px-3 py-3 md:px-5 md:py-4';
    
    // 🌟 PCのGridデザインを維持しつつ、max-content で長い英語名が来てもコロンが重ならないように修正
    block.innerHTML = `
        <div class="grid grid-cols-[max-content_1rem_1fr] md:grid-cols-[max-content_1.4rem_1fr] items-start gap-1 md:gap-2 w-full">
            <div class="text-right text-lg md:text-2xl font-black text-[#1e3a5f] mincho-font leading-[1.8] md:leading-[1.9] min-w-[4.5rem] md:min-w-[6rem] whitespace-nowrap">${escapeHtml(speakerName)}</div>
            <div class="text-lg md:text-2xl font-black text-[#1e3a5f] mincho-font leading-[1.8] md:leading-[1.9] text-center">：</div>
            <div class="${mainTextClass}">${mainTextHtml}</div>
        </div>
        ${subText ? `
            <div class="grid grid-cols-[max-content_1rem_1fr] md:grid-cols-[max-content_1.4rem_1fr] items-start gap-1 md:gap-2 w-full mt-1">
                <div class="min-w-[4.5rem] md:min-w-[6rem]"></div><div></div>
                <div class="text-sm md:text-lg text-stone-500 font-medium mincho-font">${escapeHtml(subText)}</div>
            </div>` : ''}
    `;

    block.onclick = () => {
        document.querySelectorAll('[id^="reading-block-"]').forEach(b => b.classList.remove('bg-emerald-50','border-emerald-300','scale-[1.01]'));
        document.querySelectorAll('[id^="trans-span-"]').forEach(s => s.classList.remove('bg-[#eab308]','text-white','shadow-sm','font-bold'));
        if (sentenceMode) { chooseSentence(index); return; }
        block.classList.add('bg-emerald-50','border-emerald-300','scale-[1.01]');
        const targetSpan = $(`trans-span-${index}`);
        if (targetSpan) targetSpan.classList.add('bg-[#eab308]','text-white','shadow-sm','font-bold');
    };

    return block;
}

function renderNormalLesson(sentenceContainer, transContainer, isLongText) {
    sentenceContainer.className = 'flex flex-col gap-6 md:gap-8 mx-auto w-fit transition-all duration-300';

    const jpLines = japeakSpeech.splitJapaneseSentencesFromHtml(getRubyDisplayText(currentLesson));
    const romajiHtml = getRomajiDisplayText(currentLesson);
    const romajiParts = romajiHtml.split(/<br\s*\/?>/i);
    const romajiSentences = japeakSpeech.splitTranslatedSentences(romajiHtml);
    // Keep existing romaji visible even when punctuation-based Japanese splitting differs.
    const roLines = romajiParts.length === jpLines.length ? romajiParts
        : romajiSentences.length === jpLines.length ? romajiSentences
        : [romajiHtml.replace(/<br\s*\/?>/gi, ' ')];
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
    block.onclick = () => sentenceMode ? chooseSentence(index) : highlightNormalLine(index, total, block);
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

function setRecognitionStatus(message) {
    const status = $('japeak-recognition-status');
    if (status) status.textContent = message;
}

function setupSpeechRecognition() {
    if (!japeakSpeech) {
        const output = $('voice-output');
        if (output) output.textContent = '採点機能を読み込めませんでした。ページを再読み込みしてください。';
        return;
    }
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const voiceOutput = $('voice-output'), accOutput = $('acc-output'), micBtn = $('mic-btn');
    if (!micBtn) return;

    if (!window.SpeechRecognition) {
        setRecognitionStatus('音声認識：このブラウザでは利用できません');
        micBtn.disabled = true;
        micBtn.innerHTML = 'このブラウザでは音声認識が使えません';
        micBtn.className = 'flex-1 w-full py-4 bg-stone-400 text-white rounded-sm font-bold text-base whitespace-nowrap';
        if (voiceOutput) voiceOutput.textContent = 'この端末・ブラウザでは音声認識を利用できません。別のブラウザをお試しください。';
        return;
    }

    if (recognition && isRecording) {
        try { recognition.stop(); } catch (e) { console.warn(e); }
    }

    try {
        recognition = new SpeechRecognition();
    } catch (error) {
        console.warn('Speech recognition initialization failed:', error);
        micBtn.disabled = true;
        setRecognitionStatus('音声認識：初期化できませんでした');
        if (voiceOutput) voiceOutput.textContent = '音声認識を初期化できませんでした。端末設定を確認してください。';
        return;
    }
    recognition.lang = !isSwapped ? 'ja-JP' : (langCodeMap[currentLang] || 'en-US');
    recognition.interimResults = true;
    const mobileBrowser = typeof navigator !== 'undefined' && (
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '') ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
    recognition.continuous = !sentenceMode && !mobileBrowser;
    setRecognitionStatus('認識する言語：' + recognition.lang + '（対応状況は端末によって異なります）');

    let finalTranscriptText = '', latestTranscriptText = '', recognitionFailed = false;

    recognition.onstart = () => {
        setRecognitionStatus('認識中：' + recognition.lang);
        isRecording = true;
        hasCelebrated = false;
        finalTranscriptText = '';
        latestTranscriptText = '';
        recognitionFailed = false;

        // 🌟 修正：録音中ボタンにスマホ用サイズと「改行禁止(whitespace-nowrap)」を追加
        micBtn.innerHTML = '<span class="text-lg md:text-2xl">⏹</span> 停止 (Stop)';
        micBtn.className = 'flex-1 w-full flex items-center justify-center gap-1.5 md:gap-3 py-2.5 md:py-4 bg-stone-700 hover:bg-stone-800 text-white rounded-sm font-black text-base md:text-xl shadow-inner tracking-widest whitespace-nowrap';

        if (voiceOutput) voiceOutput.textContent = '聞いています...';
        if (accOutput) {
            accOutput.innerText = '—';
            accOutput.className = 'text-4xl font-black text-[#1e3a5f] mincho-font mt-1';
        }
    };

    recognition.onresult = event => {
        let interimText = '';
        finalTranscriptText = '';
        for (let i = 0; i < event.results.length; i++) {
            const result = event.results[i];
            const fragment = result[0]?.transcript || '';
            if (result.isFinal) finalTranscriptText += fragment;
            else interimText += fragment;
        }
        latestTranscriptText = finalTranscriptText + interimText;
        // Recognition transcripts are untrusted text; do not parse them as HTML.
        if (voiceOutput) voiceOutput.textContent = latestTranscriptText || '聞いています...';
        if (latestTranscriptText && accOutput) {
            const accuracy = calculateCurrentLessonAccuracy(latestTranscriptText);
            accOutput.innerText = accuracy + '%';
            accOutput.className = 'text-4xl font-black text-[#1e3a5f] opacity-70 mincho-font mt-1 transition-all duration-75';
        }
    };

    recognition.onerror = event => {
        recognitionFailed = true;
        setRecognitionStatus('音声認識のエラー：' + (event.error || 'unknown'));
        console.warn('Speech recognition error:', event.error);
        const messages = {
            'not-allowed': 'マイクまたは音声認識が許可されていません。端末とブラウザの設定を確認してください。',
            'service-not-allowed': 'この端末では音声認識サービスを利用できません。別のブラウザをお試しください。',
            'audio-capture': 'マイクが見つかりません。接続やマイクの設定を確認してください。',
            'no-speech': '声が聞き取れませんでした。静かな場所でもう一度お試しください。',
            'network': '通信エラーが発生しました。インターネット接続を確認してください。',
            'language-not-supported': '選択した言語の音声認識は、この端末では利用できません。',
            'aborted': '音声認識を中断しました。'
        };
        if (voiceOutput) voiceOutput.textContent = messages[event.error] || '音声認識でエラーが発生しました。もう一度お試しください。';
        isRecording = false;
        resetMicButton(micBtn);
    };

    recognition.onend = () => {
        if (!recognitionFailed) setRecognitionStatus('認識終了：' + recognition.lang);
        isRecording = false;
        resetMicButton(micBtn);

        const finalText = finalTranscriptText.trim() || latestTranscriptText.trim();
        if (recognitionFailed || !accOutput || !finalText) return;

        const accuracy = calculateCurrentLessonAccuracy(finalText);
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

    micBtn.onclick = () => {
        try {
            if (isRecording) recognition.stop();
            else recognition.start();
        } catch (error) {
            console.warn('Could not start/stop speech recognition:', error);
            if (voiceOutput) voiceOutput.textContent = '音声認識を開始できませんでした。少し待ってからもう一度お試しください。';
            isRecording = false;
            resetMicButton(micBtn);
        }
    };
}

function calculateCurrentLessonAccuracy(spokenText) {
    if (!spokenText || !currentLesson) return 0;
    const unit = sentenceMode ? practiceUnits[selectedSentenceIndex] : null;
    if (!isSwapped) {
        const rawTarget = unit?.japanese || getJapanesePracticeTarget(currentLesson);
        const rubyHint = unit?.ruby || getRubyDisplayText(currentLesson);
        let normalizedSpoken = japeakSpeech.normalizeJapaneseText(spokenText, rubyHint);
        const normalizedTarget = japeakSpeech.normalizeJapaneseText(rawTarget, rubyHint);
        if (!sentenceMode) normalizedSpoken = removeDialogueSpeakerWordsFromNormalizedText(normalizedSpoken, currentLesson);
        return japeakSpeech.similarityPercent(normalizedSpoken, normalizedTarget);
    }
    const foreignTarget = unit?.foreign || getForeignPracticeTarget(currentLesson, currentLang);
    const punctuation = /[\s.,?!¿¡。、！？「」'"：:]/g;
    const spoken = String(spokenText).normalize('NFKC').toLowerCase().replace(punctuation, '');
    const target = String(foreignTarget).normalize('NFKC').toLowerCase().replace(punctuation, '');
    return japeakSpeech.similarityPercent(spoken, target);
}

function resetMicButton(btn) {
    if (!btn) return;
    // 🌟 修正：元に戻る時もスマホ用サイズと「改行禁止(whitespace-nowrap)」を適用
    btn.innerHTML = '<span class="text-lg md:text-2xl">🎙</span> 話す (Start)';
    btn.className = 'flex-1 w-full flex items-center justify-center gap-1.5 md:gap-3 py-2.5 md:py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-sm font-black text-base md:text-xl shadow-md border-b-[3px] md:border-b-4 border-[#7f1d1d] active:border-b-0 active:translate-y-1 transition-all tracking-widest whitespace-nowrap';
}

function normalizeJapaneseText(text, rubyHtml) {
    return japeakSpeech.normalizeJapaneseText(text, rubyHtml);
}

function calculateJapaneseAccuracy(spoken, target) {
    return japeakSpeech.similarityPercent(spoken, target);
}

function levenshteinDistance(a, b) {
    return japeakSpeech.levenshteinDistance(a, b);
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
// ==========================================
// メニューに戻る際、現在のカテゴリー状態をURLパラメータで渡す
// ==========================================
window.goBackToMenu = function() {
    if (!currentLesson) {
        window.location.href = 'japeak-menu.html';
        return;
    }

    const cat = currentLesson.category;
    // 「生活編」のカテゴリキーの特徴から、どちらのモードかを判定
    const isLifeMode = cat.startsWith('a1_') || cat.startsWith('a2_') || 
                       cat.startsWith('b1_') || cat.startsWith('b2_') || 
                       cat.startsWith('convenient_');
                       
    const mode = isLifeMode ? 'life' : 'school';
    
    // パラメータを付けてメニュー画面へ遷移（例: japeak-menu.html?mode=school&cat=school_life）
    window.location.href = `japeak-menu.html?mode=${mode}&cat=${encodeURIComponent(cat)}`;
};