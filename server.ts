import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Multi-language fallback database for 100% offline resilience
const MULTI_LANG_FALLBACKS: Record<string, Record<string, any>> = {
  magalir: {
    ta: {
      simpleAnswer: "கலைஞர் மகளிர் உரிமைத் திட்டம் மூலம் தகுதியுள்ள குடும்பத் தலைவிகளுக்கு மாதம் தோறும் ரூ.1,000 உரிமைத் தொகை வங்கி கணக்கில் நேரடியாக வழங்கப்படுகிறது.",
      targetBeneficiary: "குடும்பத்தில் குடும்பத் தலைவியாக உள்ள 21 வயது பூர்த்தியடைந்த பெண்கள்.",
      eligibilityDetails: "ஆண்டு குடும்ப வருமானம் ரூ.2.5 லட்சத்திற்குள் இருக்க வேண்டும். குடும்பத்தில் அரசு ஊழியர்கள், வருமான வரி செலுத்துபவர்கள் இருக்கக்கூடாது.",
      requiredDocuments: [
        "ஆதார் அட்டை (Aadhaar Card)",
        "ஸ்மார்ட் குடும்ப அட்டை (Smart Ration Card)",
        "ஆதாருடன் இணைக்கப்பட்ட வங்கிக் கணக்கு புத்தகம் (Bank Passbook)",
        "மின்சார கட்டண ரசீது அல்லது நுகர்வோர் எண்"
      ],
      stepByStepGuide: [
        "1. ரேஷன் கடை அல்லது கிராம முகாமில் விண்ணப்பப் படிவத்தைப் பெறவும்.",
        "2. உங்கள் ஆதார் மற்றும் வங்கி கணக்கு விவரங்களைப் பூர்த்தி செய்யவும்.",
        "3. இ-சேவை மையம் அல்லது சிறப்பு முகாமில் பயோமெட்ரிக் பதிவு செய்து படிவத்தை சமர்ப்பிக்கவும்.",
        "4. ஒப்புகைச் சீட்டை (Acknowledgement slip) பத்திரமாக வைத்திருக்கவும்."
      ],
      officialPortal: {
        name: "தமிழ்நாடு மகளிர் உரிமைத் திட்டம் போர்டல்",
        url: "https://kmut.tn.gov.in",
        officeType: "அருகிலுள்ள இ-சேவை மையம் அல்லது தாலுகா அலுவலகம்"
      },
      verificationNotice: "முக்கிய குறிப்பு: தகுதி விவரங்களை உங்கள் கிராம நிர்வாக அலுவலர் (VAO) அல்லது இ-சேவை மையத்தில் உறுதிப்படுத்திக் கொள்ளவும்.",
      spokenScript: "கலைஞர் மகளிர் உரிமைத் திட்டம் மூலம் தகுதியுள்ள பெண்களுக்கு மாதம் ஆயிரம் ரூபாய் வழங்கப்படுகிறது. ஆதார் அட்டை, ரேஷன் அட்டை மற்றும் வங்கி கணக்கு புத்தகத்துடன் உங்கள் அருகிலுள்ள இ-சேவை முகாமில் விண்ணப்பிக்கலாம்."
    },
    en: {
      simpleAnswer: "This scheme provides ₹1,000 per month directly into the bank accounts of eligible women heads of families to support their financial dignity.",
      targetBeneficiary: "Women heads of families aged 21 years and above.",
      eligibilityDetails: "Annual household income must be below ₹2.5 lakh. The family should not have government employees or income tax payees.",
      requiredDocuments: [
        "Aadhaar Card",
        "Smart Family Ration Card",
        "Aadhaar-linked Bank Passbook",
        "Recent Electricity Bill / Consumer Number"
      ],
      stepByStepGuide: [
        "1. Obtain the official application form through your village camp or ration shop.",
        "2. Fill in your family, Aadhaar, and bank account details accurately.",
        "3. Submit the form with biometric / Aadhaar verification at your designated e-Sevai / special camp.",
        "4. Keep the SMS acknowledgment and registration token number for tracking."
      ],
      officialPortal: {
        name: "Kalaignar Magalir Urimai Thittam Portal",
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
        name: "महिला अधिकार आर्थिक सहायता पोर्टल",
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
        name: "మహిళా ఆర్థిక సహాయ పోర్టల్",
        url: "https://kmut.tn.gov.in",
        officeType: "సమీప మీ-సేవ కేంద్రం లేదా తహశీల్దార్ కార్యాలయం"
      },
      verificationNotice: "తాజా మార్గదర్శకాలను మీ-సేవ కేంద్రంలో నిర్ధారించుకోండి.",
      spokenScript: "ఈ మహిళా పథకం ద్వారా నెలకు వెయ్యి రూపాయలు నేరుగా బ్యాంకు ఖాతాలో అందుతాయి. ఆధార్ కార్డు, రేషన్ కార్డు మరియు బ్యాంక్ పాస్ బుక్ తో మీ సమీప మీ-సేవ కేంద్రంలో దరఖాస్తు చేసుకోండి."
    }
  },
  sewing: {
    ta: {
      simpleAnswer: "பொருளாதாரத்தில் பின்தங்கிய பெண்கள், விதவைகள் மற்றும் ஆதரவற்ற மகளிர் தையல் தொழில் மூலம் வருமானம் ஈட்ட இலவச தையல் இயந்திரம் மற்றும் பயிற்சி அரசு வழங்குகிறது.",
      targetBeneficiary: "20 முதல் 40 வயதுக்குட்பட்ட ஏழைப் பெண்கள், விதவைகள், கணவரால் கைவிடப்பட்ட மகளிர்.",
      eligibilityDetails: "குடும்ப ஆண்டு வருமானம் ரூ.72,000க்குள் இருக்க வேண்டும். தையல் பயிற்சி முடித்ததற்கான சான்றிதழ் அவசியம்.",
      requiredDocuments: [
        "ஆதார் அட்டை",
        "வருமானச் சான்றிதழ் (Tahsildar / VAO)",
        "வயதுச் சான்றிதழ் (Age Proof)",
        "தையல் பயிற்சி முடித்த சான்றிதழ் (Tailoring certificate)",
        "விதவை அல்லது கணவரால் கைவிடப்பட்டதற்கான சான்று (பொருந்துமாயின்)"
      ],
      stepByStepGuide: [
        "1. மாவட்ட சமூக நல அலுவலகம் அல்லது வட்டார வளர்ச்சி அலுவலகத்தில் (BDO) விண்ணப்பத்தைப் பெறவும்.",
        "2. விண்ணப்பத்தை பூர்த்தி செய்து ஆவண நகல்களை இணைக்கவும்.",
        "3. ஊராட்சி ஒன்றிய சமூக நல அலுவலரிடம் சமர்ப்பிக்கவும்.",
        "4. நேரடி ஆய்வுக்குப் பின் மாவட்ட ஆட்சியர் அலுவலகம் மூலம் இயந்திரம் வழங்கப்படும்."
      ],
      officialPortal: {
        name: "தமிழ்நாடு சமூக நலத்துறை",
        url: "https://www.tn.gov.in",
        officeType: "மாவட்ட சமூக நல அலுவலகம் அல்லது வட்டார வளர்ச்சி அலுவலகம் (BDO)"
      },
      verificationNotice: "ஆண்டுதோறும் ஒதுக்கப்படும் எண்ணிக்கைக்கு ஏற்ப முன்னுரிமை வழங்கப்படும். வட்டார வளர்ச்சி அலுவலகத்தில் உறுதிப்படுத்தவும்.",
      spokenScript: "பெண்கள் சுயதொழில் தொடங்க அரசு இலவச தையல் இயந்திரம் வழங்குகிறது. ஆறு மாத தையல் பயிற்சி சான்றிதழ், ஆதார் அட்டை மற்றும் வருமான சான்றிதழ் எடுத்துக்கொண்டு உங்கள் வட்டார வளர்ச்சி அலுவலகத்தில் விண்ணப்பிக்கலாம்."
    },
    en: {
      simpleAnswer: "This government welfare program grants free sewing machines to economically weaker women, widows, and deserted wives to support self-employment at home.",
      targetBeneficiary: "Women aged 20 to 40 years from low-income families, widows, destitute or deserted women, and differently-abled women.",
      eligibilityDetails: "Annual family income must not exceed the prescribed limit (usually below ₹72,000–₹1,00,000). Applicant must have a basic 6-month tailoring certificate.",
      requiredDocuments: [
        "Aadhaar Card",
        "Income Certificate from Tahsildar / VAO",
        "Age Proof (Birth Certificate / School TC / Aadhaar)",
        "Tailoring Course Completion Certificate",
        "Community & Widow / Destitute Certificate if applicable"
      ],
      stepByStepGuide: [
        "1. Collect the application form from the District Social Welfare Office or Block Development Office (BDO).",
        "2. Attach copies of your Aadhaar, income certificate, and tailoring training certificate.",
        "3. Submit the completed application to the Social Welfare Extension Officer in your Block.",
        "4. Upon field verification, sewing machines are distributed by the District Administration."
      ],
      officialPortal: {
        name: "Social Welfare and Women Empowerment Department",
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
  },
  ration: {
    ta: {
      simpleAnswer: "ஸ்மார்ட் ரேஷன் கார்டு மூலம் குடும்பத்திற்கான மலிவு விலை உணவு தானியங்களைப் பெறலாம் மற்றும் அரசின் அனைத்து நலத்திட்டங்களுக்கும் முக்கிய அடையாள ஆவணமாக இதைப் பயன்படுத்தலாம்.",
      targetBeneficiary: "திருமணமான புதிய குடும்பங்கள் அல்லது தனித்தனி சமையல் அமைத்துக் கொண்ட குடும்பங்கள்.",
      eligibilityDetails: "பெற்றோரின் ரேஷன் கார்டிலிருந்து பெயர் நீக்கப்பட்டதற்கான நீக்கல் சான்றிதழ் இருக்க வேண்டும்.",
      requiredDocuments: [
        "அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டைகள்",
        "முகவரி சான்று (மின்சார ரசீது அல்லது வீட்டு வரி ரசீது)",
        "திருமணப் பத்திரிகை அல்லது பதிவுச் சான்றிதழ்",
        "பழைய ரேஷன் அட்டையில் பெயர் நீக்கிய ரசீது (Surrender Certificate)",
        "குடும்பத் தலைவியின் புகைப்படம்"
      ],
      stepByStepGuide: [
        "1. ஆவணங்களுடன் அருகிலுள்ள இ-சேவை மையத்திற்கு செல்லவும்.",
        "2. TNPDS போர்ட்டலில் 'புதிய ஸ்மார்ட் கார்டு' விண்ணப்பிக்கவும்.",
        "3. சேவை கட்டணம் செலுத்தி ஒப்புகைச் சீட்டு பெறவும்.",
        "4. வட்ட வழங்கல் அலுவலர் (TSO) ஆய்வு செய்த பின்னர் அட்டை விநியோகிக்கப்படும்."
      ],
      officialPortal: {
        name: "தமிழ்நாடு பொது விநியோகத் திட்டம் (TNPDS)",
        url: "https://www.tnpds.gov.in",
        officeType: "அருகிலுள்ள இ-சேவை மையம் அல்லது தாலுகா வழங்கல் அலுவலகம்"
      },
      verificationNotice: "விண்ணப்ப நிலையை tnpds.gov.in இணையதளத்தில் உங்கள் குறிப்பு எண்ணைப் பயன்படுத்தி சரிபார்க்கலாம்.",
      spokenScript: "புதிய ரேஷன் கார்டு பெற அனைத்து குடும்பத்தினரின் ஆதார் அட்டை, மின் கட்டண ரசீது, திருமண பத்திரிகை மற்றும் பெயர் நீக்கிய சான்றிதழுடன் இ-சேவை மையத்தில் விண்ணப்பிக்கவும்."
    },
    en: {
      simpleAnswer: "A Smart Ration Card gives your family access to subsidized food grains and acts as the essential identity proof for almost all government schemes.",
      targetBeneficiary: "Newly married couples, separate households, or families without an active ration card.",
      eligibilityDetails: "Must be a resident Indian citizen. Names must be properly removed/surrendered from parent ration cards.",
      requiredDocuments: [
        "Aadhaar cards of all family members",
        "Address proof (Electricity bill, property tax receipt, or rent agreement)",
        "Marriage certificate or wedding invitation card",
        "Deletion / Surrender certificate from previous card",
        "Passport-size photo of the female head of the family"
      ],
      stepByStepGuide: [
        "1. Visit your nearest Government e-Sevai or CSC centre with original documents.",
        "2. Request the operator to apply for a 'New Smart Family Card'.",
        "3. Pay the service fee and collect the computer-generated acknowledgment slip.",
        "4. Upon verification by the Taluk Supply Officer, your smart card is delivered."
      ],
      officialPortal: {
        name: "Public Distribution System (TNPDS / State PDS)",
        url: "https://www.tnpds.gov.in",
        officeType: "Nearest e-Sevai Centre or Taluk Supply Office"
      },
      verificationNotice: "Track your application status anytime using your acknowledgement reference number.",
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
};

function findFallbackAnswer(query: string, language: string) {
  const qLower = query.toLowerCase();
  const lang = (['ta', 'en', 'hi', 'te'].includes(language) ? language : 'en') as 'ta' | 'en' | 'hi' | 'te';

  if (qLower.includes('மகளிர்') || qLower.includes('urimai') || qLower.includes('1000') || qLower.includes('magalir') || qLower.includes('scheme') || qLower.includes('திட்டம்')) {
    return MULTI_LANG_FALLBACKS.magalir[lang] || MULTI_LANG_FALLBACKS.magalir.en;
  }
  if (qLower.includes('தையல்') || qLower.includes('sewing') || qLower.includes('tailor') || qLower.includes('machine') || qLower.includes('skill') || qLower.includes('தொழில்')) {
    return MULTI_LANG_FALLBACKS.sewing[lang] || MULTI_LANG_FALLBACKS.sewing.en;
  }
  if (qLower.includes('ரேஷன்') || qLower.includes('ration') || qLower.includes('card') || qLower.includes('service') || qLower.includes('சேவை')) {
    return MULTI_LANG_FALLBACKS.ration[lang] || MULTI_LANG_FALLBACKS.ration.en;
  }

  // Generic fallback strictly in the target language
  if (lang === 'en') {
    return {
      simpleAnswer: "Government welfare schemes and services are available through your local e-Sevai or CSC centre, helping women with financial support, skill training, and essential documents.",
      targetBeneficiary: "Women citizens, especially from rural and economically weaker backgrounds.",
      eligibilityDetails: "Varies by specific scheme (usually requires valid residence, age proof, and income certificate).",
      requiredDocuments: [
        "Aadhaar Card",
        "Smart Family Ration Card",
        "Bank Passbook (Aadhaar linked)",
        "Income and Community Certificate (from Tahsildar / e-Sevai)"
      ],
      stepByStepGuide: [
        "1. Visit your nearest Village Panchayat Office or Government e-Sevai / CSC centre.",
        "2. Inquire with the operator about relevant women empowerment and welfare programs.",
        "3. Submit required photocopies with original verification.",
        "4. Collect and safely store your computer-generated application acknowledgement receipt."
      ],
      officialPortal: {
        name: "National Portal of India / myScheme",
        url: "https://www.myscheme.gov.in",
        officeType: "Local e-Sevai / CSC Centre or Gram Panchayat Office"
      },
      verificationNotice: "Always verify criteria and required documents in person at your local e-Sevai centre before applying.",
      spokenScript: "You can access women's government schemes and skill training through your nearest e-Sevai centre or Panchayat office. Keep your Aadhaar card, ration card, and bank passbook ready."
    };
  }

  if (lang === 'hi') {
    return {
      simpleAnswer: "महिलाओं के लिए विभिन्न सरकारी कल्याणकारी योजनाएं और कौशल प्रशिक्षण केंद्र आपके नज़दीकी जन सेवा केंद्र या पंचायत कार्यालय के माध्यम से उपलब्ध हैं।",
      targetBeneficiary: "ग्रामीण एवं आर्थिक रूप से कमजोर पृष्ठभूमि की महिलाएं।",
      eligibilityDetails: "योजना के अनुसार पात्रता अलग-अलग होती है (सामान्यतः आधार कार्ड, आयु और आय प्रमाण पत्र आवश्यक है)।",
      requiredDocuments: [
        "आधार कार्ड",
        "राशन कार्ड",
        "बैंक पासबुक",
        "आय और जाति प्रमाण पत्र"
      ],
      stepByStepGuide: [
        "1. अपने नज़दीकी जन सेवा केंद्र (CSC) या पंचायत कार्यालय जाएं।",
        "2. संबंधित महिला कल्याण योजना के बारे में जानकारी प्राप्त करें।",
        "3. आवश्यक दस्तावेज़ों की प्रतियां संलग्न कर आवेदन करें।",
        "4. पावती रसीद संभाल कर रखें।"
      ],
      officialPortal: {
        name: "myScheme सरकारी पोर्टल",
        url: "https://www.myscheme.gov.in",
        officeType: "नज़दीकी जन सेवा केंद्र या ग्राम पंचायत कार्यालय"
      },
      verificationNotice: "कृपया सभी जानकारियों को अपने स्थानीय जन सेवा केंद्र पर सत्यापित अवश्य करें।",
      spokenScript: "महिलाओं के लिए सरकारी योजनाएं जन सेवा केंद्र या पंचायत कार्यालय से प्राप्त की जा सकती हैं। आधार कार्ड और बैंक पासबुक तैयार रखें।"
    };
  }

  if (lang === 'te') {
    return {
      simpleAnswer: "మహిళల కోసం వివిధ ప్రభుత్వ సంక్షేమ పథకాలు మరియు నైపుణ్య శిక్షణలు మీ సమీప మీ-సేవ లేదా గ్రామ సచివాలయం ద్వారా అందుబాటులో ఉన్నాయి.",
      targetBeneficiary: "గ్రామీణ మరియు ఆర్థికంగా వెనుకబడిన మహిళలు.",
      eligibilityDetails: "పథకాన్ని బట్టి అర్హతలు ఉంటాయి (ఆధార్ కార్డు, నివాస మరియు ఆదాయ ధృవీకరణ పత్రాలు అవసరం).",
      requiredDocuments: [
        "ఆధార్ కార్డు",
        "రేషన్ కార్డు",
        "బ్యాంక్ పాస్ పుస్తకం",
        "ఆదాయ ధృవీకరణ పత్రం"
      ],
      stepByStepGuide: [
        "1. మీ సమీప మీ-సేవ లేదా గ్రామ సచివాలయాన్ని సంప్రదించండి.",
        "2. మహిళా సంక్షేమ పథకాల వివరాలను తెలుసుకోండి.",
        "3. అవసరమైన పత్రాలను జతచేసి దరఖాస్తు చేసుకోండి.",
        "4. దరఖాస్తు రసీదును భద్రపరుచుకోండి."
      ],
      officialPortal: {
        name: "myScheme అధికారిక పోర్టల్",
        url: "https://www.myscheme.gov.in",
        officeType: "సమీప మీ-సేవ కేంద్రం లేదా గ్రామ సచివాలయం"
      },
      verificationNotice: "ప్రభుత్వ మార్గదర్శకాలను మీ-సేవ కేంద్రంలో నిర్ధారించుకోండి.",
      spokenScript: "మహిళల సంక్షేమ పథకాల కోసం మీ సమీప మీ-సేవ కేంద్రం లేదా సచివాలయాన్ని సంప్రదించండి. ఆధార్ కార్డు మరియు బ్యాంక్ పాస్ పుస్తకం సిద్ధంగా ఉంచుకోండి."
    };
  }

  return {
    simpleAnswer: "பெண்களுக்கான அரசு நலத்திட்டங்கள் மற்றும் சேவைகளை உங்கள் அருகிலுள்ள இ-சேவை மையம் அல்லது கிராம பஞ்சாயத்து அலுவலகம் மூலம் எளிதாகப் பெறலாம்.",
    targetBeneficiary: "கிராமப்புற மற்றும் எளிய பின்னணி கொண்ட பெண்கள்.",
    eligibilityDetails: "திட்டத்தைப் பொறுத்து தகுதி மாறும் (பொதுவாக ஆதார், இருப்பிடச் சான்று மற்றும் வருமான சான்று தேவைப்படும்).",
    requiredDocuments: [
      "ஆதார் அட்டை (Aadhaar Card)",
      "ஸ்மார்ட் ரேஷன் கார்டு (Ration Card)",
      "வங்கி கணக்கு புத்தகம் (Bank Passbook)",
      "வருமானம் மற்றும் சாதிச் சான்றிதழ்"
    ],
    stepByStepGuide: [
      "1. உங்கள் அருகிலுள்ள இ-சேவை மையம் அல்லது கிராம நிர்வாக அலுவலகத்திற்குச் செல்லவும்.",
      "2. அங்குள்ள பணியாளரிடம் நீங்கள் விரும்பும் திட்டம் குறித்து கேட்கவும்.",
      "3. ஆவண நகல்களைச் சமர்ப்பித்து விண்ணப்பிக்கவும்.",
      "4. விண்ணப்ப பதிவு ஒப்புகைச் சீட்டைப் பத்திரமாகப் பெற்றுக்கொள்ளவும்."
    ],
    officialPortal: {
      name: "இந்திய அரசு நலத்திட்ட தளம் / myScheme",
      url: "https://www.myscheme.gov.in",
      officeType: "அருகிலுள்ள இ-சேவை மையம் அல்லது கிராம ஊராட்சி அலுவலகம்"
    },
    verificationNotice: "அனைத்து அரசு திட்ட தகவல்களையும் உங்கள் அருகிலுள்ள இ-சேவை மையம் அல்லது அரசு அலுவலகத்தில் உறுதிப்படுத்திக் கொள்ளவும்.",
    spokenScript: "பெண்களுக்கான அரசு நலத்திட்டங்கள் பற்றி தெரிந்துகொள்ள ஆதார் அட்டை, ரேஷன் அட்டை மற்றும் வங்கி புத்தகத்துடன் உங்கள் அருகிலுள்ள இ-சேவை மையத்தை அணுகலாம்."
  };
}

// API endpoint for Aasra AI assistant
app.post('/api/ask-aasra', async (req, res) => {
  try {
    const { question, language = 'ta', category } = req.body;

    if (!question || typeof question !== 'string' || !question.trim()) {
      res.status(400).json({ error: 'Question is required' });
      return;
    }

    const trimmedQuestion = question.trim();

    // If Gemini client is not initialized, use curated knowledge fallback
    if (!ai) {
      console.warn('GEMINI_API_KEY is not configured. Utilizing verified knowledge base.');
      const fallback = findFallbackAnswer(trimmedQuestion, language);
      res.json({ ...fallback, isOfflineFallback: true });
      return;
    }

    const languageInstruction =
      language === 'ta'
        ? 'TAMIL (தமிழ்) exclusively. Every single field must be in natural, compassionate, simple everyday Tamil. Do NOT write in English or Hindi.'
        : language === 'hi'
        ? 'HINDI (हिंदी) exclusively. Every single field must be in natural, respectful, simple everyday Hindi. Do NOT write in Tamil or English.'
        : language === 'te'
        ? 'TELUGU (తెలుగు) exclusively. Every single field must be in natural, simple, everyday Telugu. Do NOT write in Tamil or English.'
        : 'ENGLISH exclusively. Every single field must be in 100% plain, simple, jargon-free everyday English (short sentences, 5th-grade reading level). Do NOT write in Tamil or Hindi.';

    const systemInstruction = `You are "Aasra AI", an ultra-reliable, deeply compassionate, and simple voice-and-text guide for women in rural and underserved areas.

CRITICAL INSTRUCTIONS & STRICT ACCURACY RULES:
1. OUTPUT LANGUAGE: You MUST generate your ENTIRE output strictly and exclusively in: ${languageInstruction}.
2. If the user asked in another language, translate the intent and provide the entire guidance strictly in the requested output language (${language}).
3. DO NOT invent government schemes, eligibility requirements, documents, deadlines, or website URLs.
4. Ground your answer in real, established Indian schemes (Central or State schemes like Kalaignar Magalir Urimai Thittam, Pudhumai Penn, Moovalur Ramamirtham, Pradhan Mantri Matru Vandana Yojana, PM Vishwakarma, Free Sewing Machine / Tailoring Schemes, PM Ujjwala Yojana, Lakhpati Didi, SHG Mudra Loans, e-Sevai smart ration cards, community certificates, voter ID).
5. If a detail varies by district or year, clearly state that it should be verified with the official staff at the nearest e-Sevai / CSC centre or Panchayat office.
6. Provide a clear, natural "spokenScript" strictly in the same language designed specifically for Text-To-Speech audio playback, written warmly, without asterisks or bullet formatting so it sounds like a caring elder sister or community worker speaking aloud.
7. The response must follow the strict JSON schema provided.`;

    const prompt = `User's question: "${trimmedQuestion}"
Selected category context: "${category || 'General'}"
Requested output language: "${language}"

Please analyze the user's question and provide a complete, clear, step-by-step response strictly in "${language}" according to the required schema. Ensure every field is in "${language}".`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            simpleAnswer: {
              type: Type.STRING,
              description: 'A 2-3 sentence simple, compassionate answer explaining what this is in everyday words.',
            },
            targetBeneficiary: {
              type: Type.STRING,
              description: 'Who is eligible or who this scheme/service is meant for.',
            },
            eligibilityDetails: {
              type: Type.STRING,
              description: 'Key eligibility criteria (age, income limit, family conditions).',
            },
            requiredDocuments: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'List of necessary documents (e.g. Aadhaar, Ration card, Passbook).',
            },
            stepByStepGuide: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Clear, numbered step-by-step instructions on where to go and how to apply.',
            },
            officialPortal: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: 'Official government scheme/service name' },
                url: { type: Type.STRING, description: 'Official website URL (or null if in-person)' },
                officeType: { type: Type.STRING, description: 'Nearest in-person office to visit (e.g. e-Sevai, CSC, BDO office)' }
              },
              required: ['name', 'officeType']
            },
            verificationNotice: {
              type: Type.STRING,
              description: 'Friendly reminder to verify details at the local e-Sevai/CSC or official portal.'
            },
            spokenScript: {
              type: Type.STRING,
              description: 'Smooth spoken script strictly in the response language without markdown or special symbols for browser Text-To-Speech.'
            }
          },
          required: [
            'simpleAnswer',
            'targetBeneficiary',
            'eligibilityDetails',
            'requiredDocuments',
            'stepByStepGuide',
            'officialPortal',
            'verificationNotice',
            'spokenScript'
          ]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error('Empty response from model');
    }

    const parsedData = JSON.parse(responseText);
    res.json(parsedData);
  } catch (error: any) {
    console.error('Error handling /api/ask-aasra:', error);
    // Return curated fallback on failure in the requested language
    const { question = '', language = 'ta' } = req.body || {};
    const fallback = findFallbackAnswer(question, language);
    res.json({
      ...fallback,
      isOfflineFallback: true,
      notice: 'Served through verified knowledge base'
    });
  }
});

// Setup Vite middleware in dev or static files in prod
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Aasra AI server listening on port ${PORT} (prod=${isProd})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
