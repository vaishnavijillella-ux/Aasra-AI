import { CuratedTopic, SupportedLanguage } from '../types';

export const UI_STRINGS: Record<SupportedLanguage, {
  appName: string;
  tagline: string;
  homeSubtitle: string;
  chooseHelpPrompt: string;
  headerBadge: string;
  heroBadge: string;
  logoLetter: string;
  chooseCategoryHeader: string;
  showAll: string;
  schemesTitle: string;
  schemesDesc: string;
  servicesTitle: string;
  servicesDesc: string;
  skillsTitle: string;
  skillsDesc: string;
  speakButton: string;
  speakHelp: string;
  orTypePrompt: string;
  typePlaceholder: string;
  askButton: string;
  listening: string;
  stopListening: string;
  recognizedTextLabel: string;
  recognizedConfirm: string;
  editQueryPrompt: string;
  speakAgain: string;
  verifiedGuidesHeader: string;
  readGuide: string;
  exampleQuestionsHeader: string;
  simpleAnswerTitle: string;
  whoIsItForTitle: string;
  eligibilityTitle: string;
  documentsTitle: string;
  checklistBadge: string;
  stepsTitle: string;
  officialSourceTitle: string;
  officialSiteBadge: string;
  inPersonOfficeLabel: string;
  visitOfficialSite: string;
  listenButton: string;
  pauseButton: string;
  resumeButton: string;
  stopVoiceButton: string;
  audioPaused: string;
  audioSpeaking: string;
  audioPrompt: string;
  startAgainButton: string;
  printButton: string;
  safetyAlert1: string;
  safetyAlert2: string;
  loadingMessage: string;
  errorTryAgain: string;
  retryButton: string;
  speechNotSupported: string;
  micPermissionDenied: string;
  textSizeA: string;
  openCategory: string;
  backToHome: string;
  footerNote: string;
}> = {
  ta: {
    appName: "Aasra AI (ஆஸ்ரா)",
    tagline: "எளிய வழிகாட்டுதல். கூடுதல் தன்னம்பிக்கை.",
    homeSubtitle: "கிராமப்புற மற்றும் எளிய பெண்களுக்கான எளிய அரசு திட்டங்கள், சேவைகள் மற்றும் திறன் பயிற்சி வழிகாட்டி.",
    chooseHelpPrompt: "உங்களுக்கு என்ன உதவி தேவை என்று சொல்லுங்கள். தட்டச்சு செய்யலாம் அல்லது பேசலாம்.",
    headerBadge: "பெண்களுக்கான வழிகாட்டி",
    heroBadge: "பெண்களுக்கான எளிய வழிகாட்டி · Voice & Text Assistant",
    logoLetter: "ஆ",
    chooseCategoryHeader: "முதன்மை பகுதிகள்",
    showAll: "அனைத்தும் காண்க",
    schemesTitle: "அரசு நலத்திட்டங்கள்",
    schemesDesc: "மகளிர் உரிமைத் தொகை, கர்ப்பிணி உதவி, திருமண நிதி & சுயதொழில் கடன்கள்.",
    servicesTitle: "அரசு சேவைகள்",
    servicesDesc: "ரேஷன் கார்டு, ஆதார் முகவரி மாற்றம், சாதி/வருமான சான்றிதழ் & இ-சேவை.",
    skillsTitle: "தொழில் பழகுதல் & புதிய திறன்கள்",
    skillsDesc: "இலவச தையல் பயிற்சி, கைவினைப் பொருட்கள், சமையல் தொழில் & கணினி அடிப்படை.",
    speakButton: "🎤 உங்கள் கேள்வியைப் பேசுங்கள்",
    speakHelp: "மைக் பொத்தானைத் தொட்டு உங்கள் கேள்வியை மெதுவாகப் பேசுங்கள்",
    orTypePrompt: "அல்லது உங்கள் கேள்வியை எழுதி கேட்கலாம்",
    typePlaceholder: "உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
    askButton: "ஆஸ்ராவிடம் கேளுங்கள்",
    listening: "கேட்கிறது... தயவுசெய்து பேசுங்கள்",
    stopListening: "பேசி முடித்தேன்",
    recognizedTextLabel: "நீங்கள் பேசிய கேள்வி:",
    recognizedConfirm: "ஆஸ்ராவிடம் கேள்வியை அனுப்பு",
    editQueryPrompt: "கேள்வி சரியாக உள்ளதா என்பதைப் பார்த்து அழுத்தவும்",
    speakAgain: "மீண்டும் பேசுக",
    verifiedGuidesHeader: "முக்கிய திட்டங்கள் & சேவைகள்",
    readGuide: "முழு விவரங்களைக் காண்க",
    exampleQuestionsHeader: "அடிக்கடி கேட்கப்படும் முக்கிய கேள்விகள்:",
    simpleAnswerTitle: "எளிய விளக்கம்",
    whoIsItForTitle: "இத்திட்டம் யாருக்கானது?",
    eligibilityTitle: "முக்கிய தகுதி விவரங்கள்",
    documentsTitle: "தேவையான முக்கிய ஆவணங்கள்",
    checklistBadge: "உங்கள் ஆவணங்களை சரிபார்க்கவும் (Checklist)",
    stepsTitle: "படிப்படியான வழிகாட்டுதல் (எப்படி விண்ணப்பிப்பது?)",
    officialSourceTitle: "அதிகாரப்பூர்வ அரசு தளம் / அலுவலகம்",
    officialSiteBadge: "அதிகாரப்பூர்வ தளம் / திட்டம்",
    inPersonOfficeLabel: "நேரடி உதவி அலுவலகம்:",
    visitOfficialSite: "அரசு இணையதளத்தைப் பார்வையிடுக",
    listenButton: "🔊 பதிலைக் கேளுங்கள்",
    pauseButton: "இடைநிறுத்து",
    resumeButton: "தொடர்ந்து கேள்",
    stopVoiceButton: "குரலை நிறுத்து",
    audioPaused: "குரல் இடைநிறுத்தப்பட்டது",
    audioSpeaking: "ஆஸ்ரா எளிய குரலில் வழிகாட்டுகிறது...",
    audioPrompt: "பதிலை தெளிவாகக் கேட்க கீழே அழுத்தவும்",
    startAgainButton: "புதிய கேள்வி கேட்க (முகப்பு)",
    printButton: "விவரங்களை அச்சிடுக / சேமிக்க",
    safetyAlert1: "பாதுகாப்பு எச்சரிக்கை: உங்கள் OTP, கடவுச்சொல், வங்கிக் கணக்கு அல்லது PIN எண்களை யாரிடமும் ஒருபோதும் பகிராதீர்கள்.",
    safetyAlert2: "அரசு தகவல்களை எப்போதும் அருகிலுள்ள இ-சேவை மையம் அல்லது அதிகாரப்பூர்வ அரசு இணையதளத்தில் சரிபார்க்கவும்.",
    loadingMessage: "ஆஸ்ரா தகவலைத் தயார் செய்கிறது... சற்று காத்திருங்கள்...",
    errorTryAgain: "தகவலைப் பெறுவதில் தாமதம் ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.",
    retryButton: "மீண்டும் முயற்சி செய்க",
    speechNotSupported: "உங்கள் உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. தயவுசெய்து கீழே தட்டச்சு செய்து கேட்கவும்.",
    micPermissionDenied: "மைக்ரோஃபோன் அனுமதி தேவை. உலாவியில் மைக் அனுமதியை வழங்கவும்.",
    textSizeA: "எழுத்து அளவு",
    openCategory: "திட்டங்களை காண்க",
    backToHome: "முகப்புக்குத் திரும்பு",
    footerNote: "அனைத்து பெண்களின் சுதந்திரமான முன்னேற்றத்திற்காக உருவாக்கப்பட்டது."
  },
  en: {
    appName: "Aasra AI",
    tagline: "Simple guidance. Greater independence.",
    homeSubtitle: "Guiding women independently to access government schemes, essential services, and skill training.",
    chooseHelpPrompt: "Tell us what you need help with. You can type or speak.",
    headerBadge: "Guidance for Women",
    heroBadge: "Simple Guidance for Women · Voice & Text Assistant",
    logoLetter: "A",
    chooseCategoryHeader: "Main Categories",
    showAll: "Show All",
    schemesTitle: "Government Schemes",
    schemesDesc: "Women's financial support, maternity benefits, marriage assistance & micro-loans.",
    servicesTitle: "Government Services",
    servicesDesc: "Ration Card, Aadhaar updates, community/income certificates & e-Sevai portals.",
    skillsTitle: "Skill Learning",
    skillsDesc: "Free tailoring, handicrafts, food entrepreneurship, SHGs & basic digital skills.",
    speakButton: "🎤 Speak your question",
    speakHelp: "Tap microphone and speak your question naturally",
    orTypePrompt: "Or type your question below",
    typePlaceholder: "Type your question here…",
    askButton: "Ask Aasra",
    listening: "Listening... please speak your question now",
    stopListening: "Done Speaking",
    recognizedTextLabel: "Your recognized question:",
    recognizedConfirm: "Send Question to Aasra",
    editQueryPrompt: "Verify or edit your question before sending",
    speakAgain: "Speak Again",
    verifiedGuidesHeader: "Featured Schemes & Services",
    readGuide: "View Full Guide",
    exampleQuestionsHeader: "Commonly Asked Questions:",
    simpleAnswerTitle: "Simple Answer",
    whoIsItForTitle: "Who is this for?",
    eligibilityTitle: "Important Eligibility Information",
    documentsTitle: "Possible Documents Required",
    checklistBadge: "Check Your Documents (Checklist)",
    stepsTitle: "Step-by-step Guidance (How to Apply)",
    officialSourceTitle: "Official Government Source / Office",
    officialSiteBadge: "Official Portal / Scheme",
    inPersonOfficeLabel: "Direct Help Office:",
    visitOfficialSite: "Visit Official Website",
    listenButton: "🔊 Listen to Answer",
    pauseButton: "Pause Audio",
    resumeButton: "Resume Audio",
    stopVoiceButton: "Stop Audio",
    audioPaused: "Audio paused",
    audioSpeaking: "Aasra is speaking the guidance clearly...",
    audioPrompt: "Tap below to listen clearly in your language",
    startAgainButton: "Start Again",
    printButton: "Print / Save Checklist",
    safetyAlert1: "Safety Reminder: Never share your OTP, password, PIN, or banking details with anyone.",
    safetyAlert2: "Always verify important information through official government sources or your local e-Sevai / CSC centre.",
    loadingMessage: "Aasra is preparing your step-by-step guidance...",
    errorTryAgain: "Could not retrieve the answer right now. Please try again.",
    retryButton: "Try Again",
    speechNotSupported: "Speech recognition is not supported in this browser. Please type your question below.",
    micPermissionDenied: "Microphone access was denied. Please allow microphone permissions in browser settings.",
    textSizeA: "Text Size",
    openCategory: "Explore Topics",
    backToHome: "Back to Home",
    footerNote: "Created to empower every woman toward greater independence."
  },
  hi: {
    appName: "Aasra AI (आसरा)",
    tagline: "सरल मार्गदर्शन। आत्मनिर्भरता की ओर।",
    homeSubtitle: "ग्रामीण और पहली बार डिजिटल उपयोग करने वाली महिलाओं के लिए सरकारी योजनाओं, सेवाओं और कौशल प्रशिक्षण की आसान मार्गदर्शिका।",
    chooseHelpPrompt: "बताइए आपको क्या मदद चाहिए। आप बोल सकते हैं या लिख सकते हैं।",
    headerBadge: "महिलाओं के लिए मार्गदर्शिका",
    heroBadge: "महिलाओं के लिए सरल मार्गदर्शिका · Voice & Text Assistant",
    logoLetter: "आ",
    chooseCategoryHeader: "प्रमुख श्रेणियां",
    showAll: "सभी देखें",
    schemesTitle: "सरकारी योजनाएं",
    schemesDesc: "महिला आर्थिक सहायता, मातृत्व वंदना, विवाह सहायता व स्वयं सहायता समूह ऋण।",
    servicesTitle: "सरकारी सेवाएं",
    servicesDesc: "राशन कार्ड, आधार सुधार, आय/जाति प्रमाण पत्र एवं सीएससी जन सेवा केंद्र।",
    skillsTitle: "कौशल प्रशिक्षण (हुनर सीखें)",
    skillsDesc: "मुफ्त सिलाई प्रशिक्षण, हस्तशिल्प, खाद्य उद्योग व बुनियादी कंप्यूटर ज्ञान।",
    speakButton: "🎤 बोलकर अपना सवाल पूछें",
    speakHelp: "माइक दबाएं और साफ़ आवाज़ में बोलें",
    orTypePrompt: "या नीचे अपना सवाल टाइप करें",
    typePlaceholder: "अपना सवाल यहाँ लिखें...",
    askButton: "आसरा से पूछें",
    listening: "सुन रहे हैं... कृपया बोलिए",
    stopListening: "बोल लिया",
    recognizedTextLabel: "आपका सवाल:",
    recognizedConfirm: "आसरा को सवाल भेजें",
    editQueryPrompt: "भेजने से पहले अपने सवाल की जांच कर लें",
    speakAgain: "दोबारा बोलें",
    verifiedGuidesHeader: "प्रमुख योजनाएं एवं सेवाएं",
    readGuide: "विवरण देखें",
    exampleQuestionsHeader: "अक्सर पूछे जाने वाले सवाल:",
    simpleAnswerTitle: "सरल उत्तर",
    whoIsItForTitle: "यह योजना किसके लिए है?",
    eligibilityTitle: "पात्रता (योग्यता) की जानकारी",
    documentsTitle: "ज़रूरी दस्तावेज़",
    checklistBadge: "अपने दस्तावेज़ जांचें (चेकलिस्ट)",
    stepsTitle: "कदम-दर-कदम मार्गदर्शन (आवेदन कैसे करें?)",
    officialSourceTitle: "आधिकारिक सरकारी वेबसाइट या केंद्र",
    officialSiteBadge: "आधिकारिक पोर्टल / योजना",
    inPersonOfficeLabel: "प्रत्यक्ष सहायता कार्यालय:",
    visitOfficialSite: "सरकारी वेबसाइट पर जाएं",
    listenButton: "🔊 उत्तर सुनें",
    pauseButton: "रोकें",
    resumeButton: "पुनः सुनें",
    stopVoiceButton: "आवाज़ बंद करें",
    audioPaused: "आवाज़ रोक दी गई है",
    audioSpeaking: "आसरा जानकारी बोलकर बता रहा है...",
    audioPrompt: "उत्तर सुनने के लिए नीचे टैप करें",
    startAgainButton: "नया सवाल पूछें (होम स्क्रीन)",
    printButton: "जानकारी प्रिंट या सेव करें",
    safetyAlert1: "सुरक्षा चेतावनी: कभी भी अपना ओटीपी (OTP), पासवर्ड, बैंक खाता विवरण या पिन किसी को न बताएं।",
    safetyAlert2: "हमेशा आधिकारिक सरकारी पोर्टल या नज़दीकी सीएससी (जन सेवा केंद्र) से जानकारी सत्यापित करें।",
    loadingMessage: "आसरा जानकारी जुटा रहा है... कृपया प्रतीक्षा करें...",
    errorTryAgain: "जानकारी प्राप्त करने में समय लगा। कृपया पुनः प्रयास करें।",
    retryButton: "पुनः प्रयास करें",
    speechNotSupported: "आपके ब्राउज़र में आवाज़ पहचान सुविधा उपलब्ध नहीं है। कृपया नीचे टाइप करें।",
    micPermissionDenied: "माइक की अनुमति नहीं मिली। कृपया ब्राउज़र सेटिंग्स में अनुमति दें।",
    textSizeA: "अक्षर आकार",
    openCategory: "योजनाएं देखें",
    backToHome: "होम पर लौटें",
    footerNote: "प्रत्येक महिला की आत्मनिर्भरता और सशक्तिकरण के लिए निर्मित।"
  },
  te: {
    appName: "Aasra AI (ఆసరా)",
    tagline: "సరళమైన మార్గదర్శకత్వం. అధిక స్వయంప్రతిపత్తి.",
    homeSubtitle: "గ్రామీణ మరియు మహిళల కోసం ప్రభుత్వ పథకాలు, సేవలు మరియు నైపుణ్య శిక్షణల కోసం సులభమైన గైడ్.",
    chooseHelpPrompt: "మీకు ఎలాంటి సహాయం కావాలో చెప్పండి. మీరు మాట్లాడవచ్చు లేదా రాయవచ్చు.",
    headerBadge: "మహిళల కోసం మార్గదర్శి",
    heroBadge: "మహిళల కోసం సులభమైన గైడ్ · Voice & Text Assistant",
    logoLetter: "ఆ",
    chooseCategoryHeader: "ప్రధాన విభాగాలు",
    showAll: "అన్నీ చూడండి",
    schemesTitle: "ప్రభుత్వ పథకాలు",
    schemesDesc: "మహిళా ఆర్థిక సహాయం, గర్భిణీ స్త్రీల సహాయం, వివాహ ప్రోత్సాహకాలు & రుణ సదుపాయాలు.",
    servicesTitle: "ప్రభుత్వ సేవలు",
    servicesDesc: "రేషన్ కార్డు, ఆధార్ అప్‌డేట్, కుల/ఆదాయ ధృవీకరణ పత్రాలు & మీ-సేవ.",
    skillsTitle: "నైపుణ్య శిక్షణ (వృత్తి విద్య)",
    skillsDesc: "ఉచిత కుట్టు మిషన్ శిక్షణ, హస్తకళలు, ఆహార తయారీ వ్యాపారం & కంప్యూటర్ బేసిక్స్.",
    speakButton: "🎤 మాట్లాడి ప్రశ్న అడగండి",
    speakHelp: "మైక్ బటన్ నొక్కి మీ ప్రశ్నను స్పష్టంగా మాట్లాడండి",
    orTypePrompt: "లేదా మీ ప్రశ్నను కింద టైప్ చేయండి",
    typePlaceholder: "మీ ప్రశ్నను ఇక్కడ రాయండి...",
    askButton: "ఆసరాను అడగండి",
    listening: "వింటున్నాము... దయచేసి మాట్లాడండి",
    stopListening: "మాట్లాడటం పూర్తయింది",
    recognizedTextLabel: "మీరు అడిగిన ప్రశ్న:",
    recognizedConfirm: "ఆసరాకు ప్రశ్నను పంపండి",
    editQueryPrompt: "పంపే ముందు ప్రశ్న సరైనదేనా అని చూసుకోండి",
    speakAgain: "మళ్ళీ మాట్లాడండి",
    verifiedGuidesHeader: "ముఖ్యమైన పథకాలు & సేవలు",
    readGuide: "పూర్తి వివరాలు చూడండి",
    exampleQuestionsHeader: "తరచుగా అడిగే ప్రశ్నలు:",
    simpleAnswerTitle: "సరళమైన సమాధానం",
    whoIsItForTitle: "ఈ పథకం ఎవరి కోసం?",
    eligibilityTitle: "ముఖ్యమైన అర్హత వివరాలు",
    documentsTitle: "అవసరమైన ముఖ్యమైన పత్రాలు",
    checklistBadge: "మీ పత్రాలను సరిచూసుకోండి (చెక్‌లిస్ట్)",
    stepsTitle: "దశలవారీగా దరఖాస్తు విధానం",
    officialSourceTitle: "అధికారిక ప్రభుత్వ వెబ్‌సైట్ / కార్యాలయం",
    officialSiteBadge: "అధికారిక పోర్టల్ / పథకం",
    inPersonOfficeLabel: "ప్రత్యక్ష సహాయ కార్యాలయం:",
    visitOfficialSite: "ప్రభుత్వ వెబ్‌సైట్ చూడండి",
    listenButton: "🔊 సమాధానం వినండి",
    pauseButton: "ఆపండి",
    resumeButton: "మళ్ళీ వినండి",
    stopVoiceButton: "వాయిస్ ఆపండి",
    audioPaused: "ఆడియో ఆపబడింది",
    audioSpeaking: "ఆసరా వివరాలను చదివి వినిపిస్తోంది...",
    audioPrompt: "సమాధానం వినడానికి కింద నొక్కండి",
    startAgainButton: "మొదటి నుండి ప్రారంభించండి",
    printButton: "వివరాలను ప్రింట్ లేదా సేవ్ చేయండి",
    safetyAlert1: "భద్రతా హెచ్చరిక: మీ ఓటీపీ (OTP), పాస్‌వర్డ్, బ్యాంక్ ఖాతా వివరాలు ఎవరితోనూ పంచుకోవద్దు.",
    safetyAlert2: "ఎల్లప్పుడూ అధికారిక ప్రభుత్వ వెబ్‌సైట్ లేదా సమీప మీ-సేవ కేంద్రాన్ని సంప్రదించి సమాచారాన్ని సరిచూసుకోండి.",
    loadingMessage: "ఆసరా సమాధానాన్ని సిద్ధం చేస్తోంది...",
    errorTryAgain: "సమాచారం పొందడంలో ఆలస్యమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
    retryButton: "మళ్ళీ ప్రయత్నించండి",
    speechNotSupported: "మీ బ్రౌజర్‌లో వాయిస్ సపోర్ట్ లేదు. దయచేసి కింద రాయండి.",
    micPermissionDenied: "మైక్రోఫోన్ అనుమతి ఇవ్వబడలేదు. దయచేసి సెట్టింగ్స్‌లో అనుమతించండి.",
    textSizeA: "అక్షరాల పరిమాణం",
    openCategory: "వివరాలు చూడండి",
    backToHome: "హోమ్ పేజీకి వెళ్ళు",
    footerNote: "ప్రతి మహిళ స్వయం సమృద్ధి మరియు సాధికారత కోసం రూపొందించబడింది."
  }
};

export const SAMPLE_QUESTIONS: Record<SupportedLanguage, string[]> = {
  ta: [
    "பெண்களுக்கான அரசு நலத்திட்டங்கள் என்னென்ன உள்ளன?",
    "இலவச தையல் மிஷின் அல்லது தொழில் பயிற்சி பெற என்ன செய்ய வேண்டும்?",
    "புதிய ரேஷன் கார்டு வாங்க என்ன ஆவணங்கள் தேவை?",
    "கலைஞர் மகளிர் உரிமைத் தொகை ரூ.1000 பெற யார் தகுதியானவர்கள்?",
    "சுயஉதவிக் குழு (SHG) மகளிர் வங்கி கடன் பெறுவது எப்படி?"
  ],
  en: [
    "What government schemes are available for women?",
    "I want to learn tailoring or a craft skill. How can I start?",
    "How can I apply for a new Ration Card?",
    "What documents might I need for women financial schemes?",
    "How can a women's Self Help Group (SHG) get a bank loan?"
  ],
  hi: [
    "महिलाओं के लिए कौन-कौन सी मुख्य सरकारी योजनाएं हैं?",
    "मुफ्त सिलाई मशीन या हुनर सीखने के लिए क्या करना होगा?",
    "नया राशन कार्ड बनवाने के लिए क्या दस्तावेज़ चाहिए?",
    "प्रधानमंत्री मातृ वंदना योजना का लाभ कैसे मिलेगा?",
    "महिला स्वयं सहायता समूह (SHG) बैंक लोन कैसे प्राप्त करें?"
  ],
  te: [
    "మహిళల కోసం అందుబాటులో ఉన్న ప్రభుత్వ పథకాలు ఏమిటి?",
    "ఉచిత కుట్టు శిక్షణ లేదా కుట్టు మిషన్ పొందడం ఎలా?",
    "కొత్త రేషన్ కార్డు పొందడానికి ఏ పత్రాలు కావాలి?",
    "స్వయం సహాయక సంఘాలు (SHG) బ్యాంకు రుణం ఎలా పొందాలి?",
    "గర్భిణీ స్త్రీలకు లభించే ప్రభుత్వ సహాయ పథకాలు ఏమిటి?"
  ]
};

export const CURATED_TOPICS: CuratedTopic[] = [
  {
    id: "magalir-urimai",
    category: "schemes",
    title: {
      ta: "கலைஞர் மகளிர் உரிமைத் திட்டம் (ரூ.1000/மாதம்)",
      en: "Kalaignar Magalir Urimai Thittam (₹1000/mo)",
      hi: "महिला अधिकार मासिक आर्थिक सहायता योजना",
      te: "మహిళా గౌరవ వేతనం (నెలవారీ పథకం)"
    },
    description: {
      ta: "குடும்பத் தலைவிகளுக்கு மாதம் ரூ.1,000 வங்கி கணக்கில் நேரடியாக வழங்கப்படும் திட்டம்.",
      en: "Direct monthly transfer of ₹1,000 to eligible women heads of households.",
      hi: "पात्र महिला गृहणियों के बैंक खाते में प्रतिमाह ₹1000 की सीधी सहायता।",
      te: "అర్హులైన మహిళలకు నేరుగా వారి బ్యాంక్ ఖాతాలో నెలకు ₹1000 సహాయం."
    },
    popularQuery: {
      ta: "மகளிர் உரிமைத் தொகை ரூ.1000 பெறுவது எப்படி?",
      en: "How to get Kalaignar Magalir Urimai scheme ₹1000 assistance?",
      hi: "महिला ₹1000 मासिक योजना के लिए आवेदन कैसे करें?",
      te: "మహిళా నెలవారీ ₹1000 పథకం అర్హతలు ఏమిటి?"
    },
    response: {
      ta: {
        simpleAnswer: "இது தகுதியுள்ள குடும்பத் தலைவிகளுக்கு மாதம் தோறும் ரூ.1,000 உரிமைத் தொகை வங்கி கணக்கில் நேரடியாக வழங்கும் தமிழக அரசின் முக்கிய நலத்திட்டமாகும்.",
        targetBeneficiary: "குடும்பத்தில் குடும்பத் தலைவியாக உள்ள 21 வயது பூர்த்தியடைந்த பெண்கள்.",
        eligibilityDetails: "ஆண்டு குடும்ப வருமானம் ரூ.2.5 லட்சத்திற்குள் இருக்க வேண்டும். குடும்பத்தில் அரசு ஊழியர்கள், வருமான வரி செலுத்துபவர்கள் அல்லது 4 சக்கர சொந்த வாகனம் (டிராக்டர் தவிர) வைத்திருப்பவர்கள் இருக்கக்கூடாது.",
        requiredDocuments: [
          "ஆதார் அட்டை (Aadhaar Card)",
          "ஸ்மார்ட் ரேஷன் அட்டை (Ration Card)",
          "ஆதாருடன் இணைக்கப்பட்ட வங்கிக் கணக்கு புத்தகம் (Bank Passbook with Aadhaar linked)",
          "மின்சார கட்டண ரசீது அல்லது நுகர்வோர் எண் (Electricity bill/number)"
        ],
        stepByStepGuide: [
          "1. உங்கள் நியாயவிலைக் கடை (Ration shop) அல்லது கிராம நிர்வாக அலுவலர் (VAO) அறிவிக்கும் சிறப்பு முகாமில் விண்ணப்பப் படிவத்தைப் பெறவும்.",
          "2. விண்ணப்பத்தில் உங்கள் ஆதார், வங்கி கணக்கு மற்றும் குடும்ப விவரங்களைப் பூர்த்தி செய்யவும்.",
          "3. நியமிக்கப்பட்ட முகாமில் அல்லது இ-சேவை மையத்தில் கைரேகை/பயோமெட்ரிக் பதிவு செய்து படிவத்தை சமர்ப்பிக்கவும்.",
          "4. சமர்ப்பித்த பின் பெறப்படும் பதிவு ரசீதை (SMS / Acknowledgement slip) பத்திரமாக வைத்திருக்கவும்."
        ],
        officialPortal: {
          name: "தமிழ்நாடு அரசு மகளிர் உரிமைத் திட்டம் போர்டல்",
          url: "https://kmut.tn.gov.in",
          officeType: "அருகிலுள்ள இ-சேவை மையம் அல்லது தாலுகா அலுவலகம்"
        },
        verificationNotice: "திட்டத்தின் தகுதி விதிகள் அரசு ஆணையின்படி மாறக்கூடும். உங்கள் கிராம நிர்வாக அலுவலர் அல்லது இ-சேவை மையத்தில் உறுதிப்படுத்திக் கொள்ளவும்.",
        spokenScript: "கலைஞர் மகளிர் உரிமைத் திட்டம் மூலம் தகுதியுள்ள குடும்பத் தலைவிகளுக்கு மாதம் ஆயிரம் ரூபாய் வங்கி கணக்கில் வழங்கப்படுகிறது. இதற்கு இருபத்தொரு வயது முடிந்திருக்க வேண்டும், குடும்ப வருமானம் இரண்டரை லட்சத்திற்குள் இருக்க வேண்டும். ஆதார் அட்டை, ரேஷன் அட்டை மற்றும் வங்கி கணக்கு புத்தகம் எடுத்துக்கொண்டு உங்கள் ஊர் இ-சேவை முகாமில் பதிவு செய்யலாம்."
      },
      en: {
        simpleAnswer: "This scheme provides ₹1,000 per month directly into the bank accounts of eligible women heads of families in Tamil Nadu.",
        targetBeneficiary: "Women heads of families aged 21 years and above.",
        eligibilityDetails: "Annual household income must be below ₹2.5 lakh. The family should not have government employees, income tax payees, or four-wheeler personal vehicles (excluding tractors).",
        requiredDocuments: [
          "Aadhaar Card",
          "Smart Family Ration Card",
          "Aadhaar-linked Bank Passbook",
          "Recent Electricity Bill / Consumer Number"
        ],
        stepByStepGuide: [
          "1. Obtain the official application form through the ration shop or village special camp.",
          "2. Fill in your family, Aadhaar, and bank account details accurately.",
          "3. Submit the form with biometric / Aadhaar verification at your designated e-Sevai / special camp.",
          "4. Keep the SMS acknowledgment and registration token number for tracking."
        ],
        officialPortal: {
          name: "Tamil Nadu KMUT Portal",
          url: "https://kmut.tn.gov.in",
          officeType: "Nearest e-Sevai Centre or Taluk Office"
        },
        verificationNotice: "Always verify guidelines and application periods at your local e-Sevai or Taluk office.",
        spokenScript: "Under the Kalaignar Magalir Urimai scheme, eligible women heads of families receive one thousand rupees monthly into their bank account. You need an Aadhaar card, smart ration card, and bank passbook linked to Aadhaar. You can apply at your designated village camp or local e-Sevai centre."
      },
      hi: {
        simpleAnswer: "यह योजना पात्र महिला गृहणियों को उनके बैंक खाते में सीधे ₹1,000 प्रति माह प्रदान करती है।",
        targetBeneficiary: "21 वर्ष या उससे अधिक आयु की महिला परिवार प्रमुख।",
        eligibilityDetails: "वार्षिक पारिवारिक आय ₹2.5 लाख से कम होनी चाहिए। परिवार में कोई सरकारी कर्मचारी या आयकर दाता नहीं होना चाहिए।",
        requiredDocuments: [
          "आधार कार्ड",
          "राशन कार्ड",
          "आधार से जुड़ा बैंक खाता पासबुक",
          "बिजली बिल या उपभोक्ता संख्या"
        ],
        stepByStepGuide: [
          "1. विशेष शिविर या राशन दुकान से आवेदन पत्र प्राप्त करें।",
          "2. विवरण भरकर आधार और बैंक पासबुक की प्रति लगाएं।",
          "3. स्थानीय जन सेवा केंद्र (CSC/e-Sevai) में बायोमेट्रिक सत्यापन के साथ जमा करें।",
          "4. पावती रसीद सुरक्षित रखें।"
        ],
        officialPortal: {
          name: "KMUT आधिकारिक पोर्टल",
          url: "https://kmut.tn.gov.in",
          officeType: "निकटतम ई-सेवा केंद्र या तहसील कार्यालय"
        },
        verificationNotice: "कृपया अपने स्थानीय जन सेवा केंद्र से पात्रता की पुष्टि अवश्य करें।",
        spokenScript: "इस योजना के तहत पात्र महिलाओं को हर महीने एक हज़ार रुपये सीधे बैंक खाते में मिलते हैं। इसके लिए आधार कार्ड, राशन कार्ड और बैंक पासबुक लेकर अपने नज़दीकी जन सेवा केंद्र पर आवेदन करें।"
      },
      te: {
        simpleAnswer: "ఈ పథకం ద్వారా అర్హులైన మహిళా కుటుంబ పెద్దలకు నెలకు ₹1,000 నేరుగా బ్యాంకు ఖాతాలో జమ చేయబడుతుంది.",
        targetBeneficiary: "21 సంవత్సరాలు నిండిన కుటుంబ మహిళా పెద్దలు.",
        eligibilityDetails: "వార్షిక కుటుంబ ఆదాయం ₹2.5 లక్షల లోపు ఉండాలి. కుటుంబంలో ప్రభుత్వ ఉద్యోగులు ఉండకూడదు.",
        requiredDocuments: [
          "ఆధార్ కార్డు",
          "రేషన్ కార్డు",
          "ఆధార్ అనుసంధానమైన బ్యాంక్ పాస్ పుస్తకం",
          "కరెంట్ బిల్లు వివరాలు"
        ],
        stepByStepGuide: [
          "1. నియమిత క్యాంప్ లేదా మీ-సేవ కేంద్రంలో దరఖాస్తును పొందండి.",
          "2. కుటుంబం, ఆధార్, బ్యాంక్ వివరాలు నింపండి.",
          "3. బయోమెట్రిక్ వెరిఫికేషన్ ద్వారా దరఖాస్తును సమర్పించండి.",
          "4. అక్నాలెడ్జ్‌మెంట్ రసీదును భద్రపరుచుకోండి."
        ],
        officialPortal: {
          name: "అధికారిక పోర్టల్",
          url: "https://kmut.tn.gov.in",
          officeType: "సమీప మీ-సేవ కేంద్రం లేదా తహశీల్దార్ కార్యాలయం"
        },
        verificationNotice: "తాజా మార్గదర్శకాలను మీ-సేవ కేంద్రంలో నిర్ధారించుకోండి.",
        spokenScript: "ఈ మహిళా పథకం ద్వారా నెలకు వెయ్యి రూపాయలు నేరుగా బ్యాంకు ఖాతాలో అందుతాయి. ఆధార్ కార్డు, రేషన్ కార్డు మరియు బ్యాంక్ పాస్ బుక్ తో మీ సమీప మీ-సేవ కేంద్రంలో దరఖాస్తు చేసుకోండి."
      }
    }
  },
  {
    id: "free-sewing-machine",
    category: "skills",
    title: {
      ta: "இலவச தையல் இயந்திரம் & தையல் பயிற்சி",
      en: "Free Sewing Machine & Tailoring Training",
      hi: "मुफ्त सिलाई मशीन एवं टेलरिंग प्रशिक्षण",
      te: "ఉచిత కుట్టు మిషన్ & టైలరింగ్ శిక్షణ"
    },
    description: {
      ta: "விதவை, கணவரால் கைவிடப்பட்ட பெண்கள் மற்றும் பொருளாதாரத்தில் பின்தங்கிய மகளிருக்கு சுயதொழில் தொடங்க தையல் இயந்திரம் மற்றும் பயிற்சி.",
      en: "Free sewing machines and tailoring skill training to help disadvantaged women start self-employment.",
      hi: "गरीब, विधवा या जरूरतमंद महिलाओं के लिए मुफ्त सिलाई मशीन और टेलरिंग का हुनर सिखाने की योजना।",
      te: "ఆర్థికంగా వెనుకబడిన మహిళలకు ఉచిత కుట్టు యంత్రం మరియు ఉచిత శిక్షణ పథకం."
    },
    popularQuery: {
      ta: "இலவச தையல் மிஷின் திட்டத்திற்கு விண்ணப்பிப்பது எப்படி?",
      en: "How to apply for the free sewing machine scheme and training?",
      hi: "मुफ्त सिलाई मशीन योजना में आवेदन कैसे करें?",
      te: "ఉచిత కుట్టు మిషన్ ఎలా పొందాలి?"
    },
    response: {
      ta: {
        simpleAnswer: "பொருளாதாரத்தில் பின்தங்கிய பெண்கள், விதவைகள் மற்றும் கணவரால் கைவிடப்பட்ட பெண்கள் தையல் தொழில் மூலம் சொந்தமாக வருமானம் ஈட்ட இலவச தையல் இயந்திரம் வழங்கும் சமூக நலத்துறை திட்டம் இது.",
        targetBeneficiary: "20 முதல் 40 வயதுக்குட்பட்ட ஏழைப் பெண்கள், விதவைகள், ஆதரவற்ற மகளிர் மற்றும் மாற்றுத்திறனாளி பெண்கள்.",
        eligibilityDetails: "ஆண்டு வருமானம் ரூ.72,000-க்குள் இருக்க வேண்டும். விண்ணப்பதாரருக்கு தையல் தொழில் தெரிந்திருக்க வேண்டும் (குறைந்தது 6 மாத தையல் பயிற்சி சான்றிதழ் தேவை).",
        requiredDocuments: [
          "ஆதார் அட்டை (Aadhaar Card)",
          "வருமானச் சான்றிதழ் (Income Certificate from VAO/Tahsildar)",
          "வயதுச் சான்றிதழ் (TC / Birth Certificate / Aadhaar)",
          "தையல் பயிற்சி முடித்த சான்றிதழ் (Tailoring training certificate - 6 months)",
          "விதவை அல்லது கணவரால் கைவிடப்பட்டவர் என்றால் அதற்கான சான்றிதழ் (Disadvantaged category proof)"
        ],
        stepByStepGuide: [
          "1. உங்கள் மாவட்ட சமூக நல அலுவலகம் (District Social Welfare Office) அல்லது ஊராட்சி ஒன்றிய அலுவலகத்தில் (BDO Office) விண்ணப்பத்தைப் பெறவும்.",
          "2. விண்ணப்பத்தைப் பூர்த்தி செய்து வருமான சான்றிதழ் மற்றும் தையல் பயிற்சி சான்றிதழை இணைக்கவும்.",
          "3. ஊராட்சி ஒன்றிய விரிவாக்க அலுவலர் அல்லது சமூக நல அலுவலரிடம் விண்ணப்பத்தை சமர்ப்பிக்கவும்.",
          "4. தகுதியை ஆய்வு செய்தபின் இலவச தையல் இயந்திரம் மாவட்ட ஆட்சியர் அலுவலகம் மூலம் வழங்கப்படும்."
        ],
        officialPortal: {
          name: "தமிழ்நாடு சமூக நலத்துறை",
          url: "https://www.tn.gov.in/scheme/data_view/6861",
          officeType: "மாவட்ட சமூக நல அலுவலகம் (District Social Welfare Office) அல்லது வட்டார வளர்ச்சி அலுவலகம் (BDO Office)"
        },
        verificationNotice: "ஆண்டுதோறும் ஒதுக்கப்படும் இயந்திரங்களின் எண்ணிக்கைக்கு ஏற்ப முன்னுரிமை வழங்கப்படும். உங்கள் வட்டார வளர்ச்சி அலுவலகத்தில் விசாரிக்கவும்.",
        spokenScript: "தையல் தொழில் மூலம் பெண்கள் சொந்தமாக வருமானம் ஈட்ட அரசு இலவச தையல் இயந்திரம் வழங்குகிறது. இருபது முதல் நாற்பது வயதுடைய பெண்களுக்கு முன்னுரிமை. ஆறு மாத தையல் பயிற்சி சான்றிதழ், ஆதார் அட்டை மற்றும் வருமான சான்றிதழ் எடுத்துக்கொண்டு உங்கள் மாவட்ட சமூக நல அலுவலகம் அல்லது வட்டார வளர்ச்சி அலுவலகத்தில் விண்ணப்பிக்கலாம்."
      },
      en: {
        simpleAnswer: "This government welfare program grants free sewing machines to economically weaker women, widows, and deserted wives to support self-employment at home.",
        targetBeneficiary: "Women aged 20 to 40 years from low-income families, widows, destitute or deserted women, and differently-abled women.",
        eligibilityDetails: "Annual family income must not exceed the prescribed limit (usually below ₹72,000–₹1,00,000). Applicant must know tailoring with a basic 6-month certificate.",
        requiredDocuments: [
          "Aadhaar Card",
          "Income Certificate from Tahsildar",
          "Age Proof (Birth Certificate / School TC / Aadhaar)",
          "Tailoring Course Completion Certificate (from recognized institute)",
          "Community Certificate & Widow / Destitute Certificate if applicable"
        ],
        stepByStepGuide: [
          "1. Collect the application form from the District Social Welfare Office or Block Development Office (BDO).",
          "2. Attach copies of your Aadhaar, income certificate, and tailoring training certificate.",
          "3. Submit the completed application to the Extension Officer (Social Welfare) in your Panchayat Union.",
          "4. Upon field verification, sewing machines are distributed by the District Administration."
        ],
        officialPortal: {
          name: "Social Welfare and Women Empowerment Dept",
          url: "https://www.tn.gov.in",
          officeType: "Block Development Office (BDO) or District Social Welfare Office"
        },
        verificationNotice: "Applications are processed during specific annual cycles. Check current intake dates with your local Block Development Office.",
        spokenScript: "Under the Free Sewing Machine Scheme, women can receive a sewing machine for self-employment. You need an Aadhaar card, income certificate, and a tailoring course certificate. You can submit the form at your local Block Development Office or Social Welfare Office."
      },
      hi: {
        simpleAnswer: "यह योजना आर्थिक रूप से कमजोर और जरूरतमंद महिलाओं को घर बैठे आत्मनिर्भर बनने के लिए मुफ्त सिलाई मशीन और प्रशिक्षण देती है।",
        targetBeneficiary: "20 से 40 वर्ष की महिलाएं, विशेषकर विधवा, परित्यक्ता एवं ग्रामीण महिलाएं।",
        eligibilityDetails: "पारिवारिक आय निर्धारित सीमा से कम होनी चाहिए और सिलाई का बुनियादी ज्ञान या प्रमाण पत्र होना चाहिए।",
        requiredDocuments: [
          "आधार कार्ड",
          "आय प्रमाण पत्र",
          "आयु प्रमाण पत्र",
          "सिलाई प्रशिक्षण प्रमाण पत्र",
          "विधवा या विशेष श्रेणी प्रमाण पत्र (यदि लागू हो)"
        ],
        stepByStepGuide: [
          "1. अपने ब्लॉक विकास कार्यालय (BDO) या समाज कल्याण कार्यालय से फॉर्म लें।",
          "2. दस्तावेज़ संलग्न करके जमा करें।",
          "3. सत्यापन के बाद सिलाई मशीन वितरित की जाती है।"
        ],
        officialPortal: {
          name: "महिला एवं बाल विकास विभाग / PM विश्वकर्मा योजना",
          url: "https://pmvishwakarma.gov.in",
          officeType: "ब्लॉक कार्यालय या जन सेवा केंद्र"
        },
        verificationNotice: "अपने नजदीकी जन सेवा केंद्र या ब्लॉक कार्यालय से आवेदन की तारीखें अवश्य जानें।",
        spokenScript: "मुफ्त सिलाई मशीन योजना के जरिए महिलाएं घर बैठे सिलाई का काम शुरू कर सकती हैं। आधार कार्ड, आय प्रमाण पत्र और सिलाई का प्रमाण पत्र लेकर अपने ब्लॉक कार्यालय में आवेदन करें।"
      },
      te: {
        simpleAnswer: "ఆర్థికంగా వెనుకబడిన మహిళలు సొంతంగా ఉపాధి పొందడానికి ఉచిత కుట్టు మిషన్ అందించే సంక్షేమ పథకం ఇది.",
        targetBeneficiary: "20 నుండి 40 ఏళ్ల మహిళలు, వితంతువులు మరియు దివ్యాంగులు.",
        eligibilityDetails: "కుటుంబ ఆదాయం నిర్దేశిత పరిమితిలోపు ఉండాలి మరియు కుట్టుపని నేర్చుకున్న సర్టిఫికెట్ ఉండాలి.",
        requiredDocuments: [
          "ఆధార్ కార్డు",
          "ఆదాయ ధృవీకరణ పత్రం",
          "వయస్సు ధృవీకరణ పత్రం",
          "టైలరింగ్ శిక్షణ సర్టిఫికెట్"
        ],
        stepByStepGuide: [
          "1. మండల అభివృద్ధి కార్యాలయం (MPDO/BDO) లేదా సాంఘిక సంక్షేమ శాఖలో దరఖాస్తు చేయండి.",
          "2. పత్రాలను జతపరిచి అధికారులకు సమర్పించండి.",
          "3. పరిశీలన తర్వాత మిషన్ మంజూరు చేయబడుతుంది."
        ],
        officialPortal: {
          name: "మహిళా మరియు శిశు సంక్షేమ శాఖ",
          url: "https://myscheme.gov.in",
          officeType: "మండల కార్యాలయం లేదా మీ-సేవ కేంద్రం"
        },
        verificationNotice: "ప్రస్తుత నిబంధనలను మండల కార్యాలయంలో సంప్రదించి తెలుసుకోండి.",
        spokenScript: "ఉచిత కుట్టు మిషన్ పథకం ద్వారా మహిళలు టైలరింగ్ తో సొంతంగా సంపాదించుకోవచ్చు. ఆధార్ కార్డు, ఆదాయ సర్టిఫికెట్ మరియు టైలరింగ్ సర్టిఫికెట్ తో మండల కార్యాలయంలో సంప్రదించండి."
      }
    }
  },
  {
    id: "ration-card-service",
    category: "services",
    title: {
      ta: "புதிய ஸ்மார்ட் ரேஷன் கார்டு விண்ணப்பிப்பது",
      en: "Smart Ration Card Application & Services",
      hi: "नया राशन कार्ड आवेदन एवं सेवा",
      te: "స్మార్ట్ రేషన్ కార్డు దరఖాస్తు & సేవలు"
    },
    description: {
      ta: "புதிய குடும்ப அட்டை பெறுதல், பெயர் சேர்த்தல், நீக்குதல் மற்றும் முகவரி மாற்றுதல்.",
      en: "Apply for a new family Smart Card, add/remove member names, or update address.",
      hi: "नया स्मार्ट राशन कार्ड बनवाना, परिवार के सदस्यों का नाम जोड़ना या पता बदलना।",
      te: "కొత్త స్మార్ట్ రేషన్ కార్డు దరఖాస్తు, పేర్ల మార్పు లేదా చిరునామా అప్‌డేట్."
    },
    popularQuery: {
      ta: "புதிய ரேஷன் கார்டுக்கு எப்படி விண்ணப்பிப்பது?",
      en: "How can I apply for a new Smart Ration Card?",
      hi: "नया राशन कार्ड कैसे बनवाएं?",
      te: "కొత్త రేషన్ కార్డు ఎలా దరఖాస్తు చేసుకోవాలి?"
    },
    response: {
      ta: {
        simpleAnswer: "குடும்ப அத்தியாவசிய உணவுப் பொருட்கள் நியாய விலையில் பெறவும், அரசு நலத்திட்டங்கள் அனைத்துக்கும் முதன்மை ஆவணமாகவும் ஸ்மார்ட் ரேஷன் கார்டு பயன்படுகிறது.",
        targetBeneficiary: "திருமணமான புதிய குடும்பங்கள் அல்லது தனித்தனி சமையல் செய்யும் குடும்பங்கள்.",
        eligibilityDetails: "விண்ணப்பதாரரின் பெயர் பழைய குடும்ப அட்டையிலிருந்து முறைப்படி நீக்கப்பட்டிருக்க வேண்டும். இந்தியாவில் வசிக்கும் குடிமகனாக இருக்க வேண்டும்.",
        requiredDocuments: [
          "அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டை நகல்கள் (Aadhaar of all members)",
          "இருப்பிடச் சான்று: மின் கட்டண ரசீது அல்லது வீட்டு வரி ரசீது அல்லது வாடகை ஒப்பந்தம் (Address proof: EB bill or Rent deed)",
          "திருமணப் பத்திரிகை அல்லது திருமணப் பதிவு சான்றிதழ் (Marriage proof)",
          "பழைய ரேஷன் அட்டையில் பெயர் நீக்கியதற்கான சான்றிதழ் (Surrender/Deletion certificate)",
          "குடும்பத் தலைவியின் பாஸ்போர்ட் அளவு புகைப்படம் (Passport size photo)"
        ],
        stepByStepGuide: [
          "1. தேவையான அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டைகள் மற்றும் முகவரி சான்றை எடுத்துக்கொண்டு அருகிலுள்ள இ-சேவை மையத்திற்குச் செல்லவும்.",
          "2. இ-சேவை பணியாளர் மூலம் 'புதிய ஸ்மார்ட் கார்டு' (New Smart Card) விண்ணப்பத்தைப் பதிவு செய்யவும்.",
          "3. கட்டணம் செலுத்தி ஒப்புகைச் சீட்டு (Acknowledgement Receipt with Application Number) பெற்றுக்கொள்ளவும்.",
          "4. வட்ட வழங்கல் அலுவலர் (TSO) மற்றும் வருவாய் ஆய்வாளர் உங்கள் வீட்டிற்கு வந்து ஆய்வு செய்வார்கள். அதன் பிறகு கார்டு தபாலில் அல்லது நியாயவிலைக் கடையில் கிடைக்கும்."
        ],
        officialPortal: {
          name: "தமிழ்நாடு பொது விநியோகத் திட்டம் (TNPDS)",
          url: "https://www.tnpds.gov.in",
          officeType: "அருகிலுள்ள இ-சேவை மையம் அல்லது தாலுகா வழங்கல் அலுவலகம் (TSO)"
        },
        verificationNotice: "விண்ணப்ப நிலையை tnpds.gov.in இணையதளத்தில் உங்கள் ஒப்புகைச் சீட்டு எண்ணைப் பயன்படுத்தி எப்போது வேண்டுமானாலும் சரிபார்க்கலாம்.",
        spokenScript: "புதிய ரேஷன் கார்டு விண்ணப்பிக்க குடும்பத்தினர் அனைவரின் ஆதார் அட்டை, திருமண பத்திரிகை, மின்சார ரசீது மற்றும் பழைய கார்டில் பெயர் நீக்கிய ரசீது தேவை. இந்த ஆவணங்களுடன் அருகிலுள்ள இ-சேவை மையத்திற்கு சென்று பதிவு செய்தால், அதிகாரிகள் ஆய்வு செய்த பிறகு புதிய ஸ்மார்ட் கார்டு கிடைக்கும்."
      },
      en: {
        simpleAnswer: "A Smart Ration Card gives your family access to subsidized essential food grains and acts as the foundational document for almost all government welfare schemes.",
        targetBeneficiary: "Newly married couples, families establishing a separate kitchen, or citizens without an existing ration card.",
        eligibilityDetails: "Applicants must be Indian residents. Names must be properly removed/deleted from the parents' previous ration card before adding to a new one.",
        requiredDocuments: [
          "Aadhaar cards of all family members",
          "Address proof (Electricity bill, property tax receipt, or registered rent agreement)",
          "Marriage certificate or wedding invitation card",
          "Deletion/Surrender certificate from previous ration card",
          "Passport-size photo of the female head of the family"
        ],
        stepByStepGuide: [
          "1. Visit your nearest Government e-Sevai or CSC centre with original documents.",
          "2. Request the operator to apply for a 'New Smart Family Card' on TNPDS portal.",
          "3. Pay the nominal service fee and collect the computer-generated acknowledgment slip.",
          "4. The Taluk Supply Officer (TSO) or Revenue Inspector will verify the residence, after which the card will be issued."
        ],
        officialPortal: {
          name: "Tamil Nadu PDS (TNPDS) Portal",
          url: "https://www.tnpds.gov.in",
          officeType: "Nearest e-Sevai Centre or Taluk Supply Office"
        },
        verificationNotice: "You can track your application status anytime on tnpds.gov.in using your reference number.",
        spokenScript: "To apply for a new Smart Ration Card, carry the Aadhaar cards of all family members, address proof like an electricity bill, marriage proof, and deletion certificate from your parent's ration card. Visit your local e-Sevai centre to apply, and collect your acknowledgment slip."
      },
      hi: {
        simpleAnswer: "राशन कार्ड से परिवार को उचित मूल्य पर राशन मिलता है और यह सभी सरकारी योजनाओं का प्रमुख पहचान पत्र है।",
        targetBeneficiary: "नवविवाहित जोड़े या अलग चूल्हा रखने वाले नए परिवार।",
        eligibilityDetails: "माता-पिता के राशन कार्ड से नाम कटा होना चाहिए और वैध पता प्रमाण होना चाहिए।",
        requiredDocuments: [
          "सभी सदस्यों का आधार कार्ड",
          "निवास प्रमाण (बिजली बिल या किरायानामा)",
          "विवाह प्रमाण पत्र या शादी का कार्ड",
          "पुराने राशन कार्ड से नाम कटने की पर्ची (सरेंडर सर्टिफिकेट)",
          "परिवार की महिला मुखिया का फोटो"
        ],
        stepByStepGuide: [
          "1. अपने नजदीकी सीएससी जन सेवा केंद्र (CSC Center) जाएं।",
          "2. नया राशन कार्ड ऑनलाइन आवेदन करवाएं।",
          "3. रसीद और आवेदन क्रमांक (Ref Number) प्राप्त करें।",
          "4. आपूर्ति निरीक्षक द्वारा जांच के बाद राशन कार्ड जारी हो जाएगा।"
        ],
        officialPortal: {
          name: "राष्ट्रीय खाद्य सुरक्षा पोर्टल / राज्य PDS",
          url: "https://nfsa.gov.in",
          officeType: "नजदीकी सीएससी जन सेवा केंद्र या खाद्य आपूर्ति कार्यालय"
        },
        verificationNotice: "हमेशा जन सेवा केंद्र पर आधिकारिक रसीद अवश्य लें।",
        spokenScript: "नया राशन कार्ड बनवाने के लिए सभी सदस्यों का आधार कार्ड, बिजली बिल, शादी का प्रमाण और पुराने राशन कार्ड से नाम कटने की पर्ची लेकर नज़दीकी जन सेवा केंद्र पर जाएं और ऑनलाइन आवेदन करवाएं।"
      },
      te: {
        simpleAnswer: "స్మార్ట్ రేషన్ కార్డు ద్వారా నిత్యావసర సరుకులు మరియు అన్ని రకాల ప్రభుత్వ సంక్షేమ పథకాలు పొందవచ్చు.",
        targetBeneficiary: "కొత్తగా పెళ్లయిన వారు లేదా వేరుగా ఉంటున్న కుటుంబాలు.",
        eligibilityDetails: "పాత రేషన్ కార్డు నుంచి పేరు తొలగించి ఉండాలి మరియు నివాస ధృవీకరణ పత్రం ఉండాలి.",
        requiredDocuments: [
          "కుటుంబ సభ్యులందరి ఆధార్ కార్డులు",
          "చిరునామా రుజువు (కరెంట్ బిల్లు)",
          "వివాహ ధృవీకరణ పత్రం",
          "పాత కార్డు నుండి పేరు తొలగింపు రసీదు",
          "మహిళా పెద్ద ఫోటో"
        ],
        stepByStepGuide: [
          "1. మీ సమీప మీ-సేవ లేదా గ్రామ వార్డు సచివాలయాన్ని సందర్శించండి.",
          "2. కొత్త రైస్ కార్డు లేదా స్మార్ట్ కార్డు కోసం దరఖాస్తు చేయండి.",
          "3. దరఖాస్తు రసీదును తీసుకోండి.",
          "4. అధికారులు క్షేత్రస్థాయి విచారణ చేసి కార్డు మంజూరు చేస్తారు."
        ],
        officialPortal: {
          name: "పౌర సరఫరాల శాఖ పోర్టల్",
          url: "https://epdsap.ap.gov.in",
          officeType: "మీ-సేవ కేంద్రం లేదా గ్రామ/వార్డు సచివాలయం"
        },
        verificationNotice: "మీ దరఖాస్తు స్థితిని రసీదు నంబర్ ద్వారా ఎప్పుడైనా తెలుసుకోవచ్చు.",
        spokenScript: "కొత్త రేషన్ కార్డు కోసం కుటుంబ సభ్యులందరి ఆధార్ కార్డులు, కరెంట్ బిల్లు, పెళ్లి పత్రిక మరియు పాత కార్డు నుండి పేరు తొలగించిన రసీదుతో మీ-సేవ లేదా సచివాలయంలో దరఖాస్తు చేసుకోండి."
      }
    }
  },
  {
    id: "shg-mudra-loan",
    category: "skills",
    title: {
      ta: "மகளிர் சுயஉதவிக் குழு & முத்ரா சிறுவணிக கடன்",
      en: "Women Self-Help Group (SHG) & Mudra Loan",
      hi: "महिला स्वयं सहायता समूह एवं मुद्रा ऋण",
      te: "మహిళా స్వయం సహాయక సంఘాలు & ముద్ర రుణం"
    },
    description: {
      ta: "தையல், மளிகை, கேட்டரிங், பால் பண்ணை போன்ற சிறுதொழில்கள் தொடங்க அரசு மானிய கடன் உதவி.",
      en: "Collateral-free subsidized micro-loans for tailoring, catering, grocery, or dairy business.",
      hi: "सिलाई, किराना, खानपान या डेयरी व्यवसाय शुरू करने के लिए आसान सरकारी बैंक ऋण।",
      te: "టైలరింగ్, కిరాణా, క్యాటరింగ్ వ్యాపారం ప్రారంభించడానికి ప్రభుత్వం అందించే రుణాలు."
    },
    popularQuery: {
      ta: "பெண்கள் சுயதொழில் தொடங்க கடன் உதவி பெறுவது எப்படி?",
      en: "How can women get loans or financial support to start a small business?",
      hi: "महिलाएं छोटा व्यवसाय शुरू करने के लिए लोन कैसे लें?",
      te: "మహిళలు చిన్న వ్యాపారం కోసం రుణం ఎలా పొందాలి?"
    },
    response: {
      ta: {
        simpleAnswer: "பெண்கள் சுயமாக தொழில் தொடங்க (தையல், மளிகைக் கடை, உழவர் உற்பத்திகள், உணவு தயாரிப்பு) பிணை எதுவும் இன்றி (Collateral-free) குறைந்த வட்டியில் வங்கிகள் மூலம் வழங்கப்படும் கடன் மற்றும் மானிய உதவி இதுவாகும்.",
        targetBeneficiary: "சுயதொழில் செய்ய விரும்பும் தனிப்பட்ட மகளிர் அல்லது மகளிர் சுயஉதவிக் குழுவில் (SHG) உள்ள உறுப்பினர்கள்.",
        eligibilityDetails: "18 வயது பூர்த்தியடைந்தவராக இருக்க வேண்டும். ஏதேனும் ஒரு தொழில் செய்யும் ஆர்வம் அல்லது பயிற்சி பெற்றிருக்க வேண்டும். முந்தைய வங்கிக் கடன் பாக்கி இருக்கக்கூடாது.",
        requiredDocuments: [
          "ஆதார் அட்டை (Aadhaar Card)",
          "பான் கார்டு அல்லது படிவம் 60 (PAN Card)",
          "ஸ்மார்ட் ரேஷன் அட்டை (Ration Card)",
          "வங்கி கணக்கு புத்தகம் (Bank Passbook - 6 மாத அறிக்கை)",
          "நீங்கள் தொடங்க உள்ள தொழிலின் எளிய திட்ட விவரம் (Simple business plan/quotation)"
        ],
        stepByStepGuide: [
          "1. உங்கள் ஊரில் உள்ள கிராம வறுமை ஒழிப்பு சங்கம் (VPRC) அல்லது ஊராட்சி அளவிலான கூட்டமைப்பை (PLF) அணுகவும்.",
          "2. நீங்கள் தனிநபராக இருந்தால் அருகிலுள்ள அரசுடைமையாக்கப்பட்ட வங்கிக்கு சென்று 'பிரதான் மந்திரி முத்ரா யோஜனா - சிசு கடன்' (ரூ.50,000 வரை) விண்ணப்பம் கேட்கவும்.",
          "3. ஆதார், முகவரி சான்று மற்றும் தொழில் விவரங்களை இணைத்து மேலாளரிடம் சமர்ப்பிக்கவும்.",
          "4. ஒப்புதல் கிடைத்ததும் கடன் தொகை நேரடியாக உங்கள் சேமிப்பு கணக்கில் வரவு வைக்கப்படும்."
        ],
        officialPortal: {
          name: "தமிழ்நாடு மகளிர் மேம்பாட்டு நிறுவனம் & முத்ரா போர்டல்",
          url: "https://www.mudra.org.in",
          officeType: "கிராம ஊராட்சி கூட்டமைப்பு (PLF) அல்லது அருகிலுள்ள தேசியமயமாக்கப்பட்ட வங்கி"
        },
        verificationNotice: "வங்கிகள் பிணையம் எதுவும் கேட்கக்கூடாது. இடைத்தரகர்களிடம் எந்த காரணத்திற்காகவும் பணம் கொடுக்காதீர்கள்.",
        spokenScript: "பெண்கள் தையல், கேட்டரிங் அல்லது மளிகைக் கடை போன்ற தொழில் தொடங்க முத்ரா திட்டம் மூலம் ஐம்பதாயிரம் ரூபாய் வரை பிணையில்லா கடன் பெறலாம். ஆதார் அட்டை, ரேஷன் அட்டை மற்றும் வங்கி கணக்கு புத்தகத்துடன் உங்கள் அருகிலுள்ள தேசியமயமாக்கப்பட்ட வங்கி அல்லது சுயஉதவிக் குழு அமைப்பாளரை அணுகவும்."
      },
      en: {
        simpleAnswer: "This government scheme offers collateral-free, low-interest micro-loans (like PM Mudra Shishu loan up to ₹50,000) for women to start or grow tailoring, catering, or local grocery micro-enterprises.",
        targetBeneficiary: "Individual women entrepreneurs or members of Women Self Help Groups (SHGs).",
        eligibilityDetails: "Must be at least 18 years old, have a viable small business idea, and have no previous loan defaults.",
        requiredDocuments: [
          "Aadhaar Card",
          "PAN Card (or Form 60)",
          "Ration Card or Address proof",
          "Bank passbook statement (last 6 months)",
          "Quotation for equipment/materials to be purchased (e.g. sewing machine quotation)"
        ],
        stepByStepGuide: [
          "1. Visit your local Panchayat Level Federation (PLF) or nearest Nationalized Bank branch.",
          "2. Request the 'PMMY Shishu Loan' application form for women entrepreneurs.",
          "3. Attach your Aadhaar, bank passbook, and simple business quotation.",
          "4. The bank will process and disburse the fund directly into your savings account."
        ],
        officialPortal: {
          name: "Pradhan Mantri Mudra Yojana Portal",
          url: "https://www.mudra.org.in",
          officeType: "Nearest Public Sector Bank branch or Panchayat Level Federation"
        },
        verificationNotice: "No collateral security or processing fee is required for Shishu loans up to ₹50,000. Never pay any agent or mediator.",
        spokenScript: "Women can get up to fifty thousand rupees collateral-free loan under the Mudra scheme to start tailoring, catering, or small shops. Take your Aadhaar card, ration card, and bank passbook to your nearest nationalized bank branch or SHG federation to apply."
      },
      hi: {
        simpleAnswer: "महिलाएं अपना छोटा कारोबार (सिलाई, किराना, टिफिन सेवा आदि) शुरू करने के लिए मुद्रा योजना के तहत बिना किसी गारंटी के 50,000 रुपये तक का लोन ले सकती हैं।",
        targetBeneficiary: "स्वयं सहायता समूह की महिलाएं या व्यक्तिगत महिला उद्यमी।",
        eligibilityDetails: "आयु कम से कम 18 वर्ष होनी चाहिए और पूर्व में कोई बैंक डिफ़ॉल्ट नहीं होना चाहिए।",
        requiredDocuments: [
          "आधार कार्ड",
          "पैन कार्ड",
          "राशन कार्ड या निवास प्रमाण",
          "बैंक पासबुक की प्रति",
          "व्यवसाय का संक्षिप्त विवरण"
        ],
        stepByStepGuide: [
          "1. अपने नजदीकी बैंक शाखा या महिला स्वयं सहायता समूह फेडरेशन से संपर्क करें।",
          "2. 'मुद्रा शिशु ऋण' (PMMY) फॉर्म भरें।",
          "3. आधार और जरूरी दस्तावेज संलग्न कर जमा करें।",
          "4. स्वीकृति के बाद राशि खाते में आ जाएगी।"
        ],
        officialPortal: {
          name: "मुद्रा योजना आधिकारिक पोर्टल",
          url: "https://www.mudra.org.in",
          officeType: "नजदीकी राष्ट्रीयकृत बैंक या पंचायत कार्यालय"
        },
        verificationNotice: "मुद्रा शिशु लोन के लिए कोई गारंटी या एजेंट फीस नहीं लगती। किसी दलाल को पैसे न दें।",
        spokenScript: "महिलाएं छोटा व्यवसाय शुरू करने के लिए पचास हज़ार रुपये तक का बिना गारंटी मुद्रा लोन ले सकती हैं। आधार कार्ड और बैंक पासबुक लेकर अपनी नजदीकी बैंक शाखा में संपर्क करें।"
      },
      te: {
        simpleAnswer: "మహిళలు చిన్న వ్యాపారాలు (టైలరింగ్, కిరాణా, క్యాటరింగ్) ప్రారంభించడానికి ఎటువంటి పూచీకత్తు లేకుండా ముద్ర లోన్ ద్వారా రుణం పొందవచ్చు.",
        targetBeneficiary: "స్వయం సహాయక సంఘ సభ్యులు లేదా మహిళా వ్యాపారులు.",
        eligibilityDetails: "కనీస వయస్సు 18 ఏళ్లు ఉండాలి మరియు బ్యాంకు డిఫాల్ట్ ఉండకూడదు.",
        requiredDocuments: [
          "ఆధార్ కార్డు",
          "పాన్ కార్డు",
          "రేషన్ కార్డు",
          "బ్యాంక్ పాస్ పుస్తకం",
          "కొనుగోలు చేయవలసిన వస్తువుల కొటేషన్"
        ],
        stepByStepGuide: [
          "1. మీ గ్రామ సమాఖ్య (VO) లేదా సమీప బ్యాంకు శాఖను సంప్రదించండి.",
          "2. ముద్ర శిశు లోన్ దరఖాస్తును పూర్తి చేయండి.",
          "3. పత్రాలు జతపరిచి సమర్పించండి.",
          "4. రుణం మీ ఖాతాలో జమ అవుతుంది."
        ],
        officialPortal: {
          name: "ముద్ర యోజన పోర్టల్",
          url: "https://www.mudra.org.in",
          officeType: "సమీప బ్యాంకు లేదా మహిళా సమాఖ్య"
        },
        verificationNotice: "ముద్ర శిశు లోన్‌కు ఎటువంటి హామీ అవసరం లేదు. దళారులను నమ్మవద్దు.",
        spokenScript: "టైలరింగ్ లేదా చిన్న వ్యాపారం ప్రారంభించడానికి ముద్ర పథకం ద్వారా యాభై వేల రూపాయల వరకు పూచీకత్తు లేని రుణం పొందవచ్చు. ఆధార్ కార్డు, బ్యాంక్ పాస్ బుక్ తో సమీప బ్యాంకును సంప్రదించండి."
      }
    }
  }
];
