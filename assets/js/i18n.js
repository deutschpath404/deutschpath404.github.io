/**
 * DeutschPath i18n — English (default), Bangla, German.
 * Preference is stored in localStorage under deutschpath-lang.
 */
(function () {
  var STORAGE_KEY = "deutschpath-lang";
  var SUPPORTED = ["en", "bn", "de"];
  var LABELS = { en: "EN", bn: "বাং", de: "DE" };
  var NAMES = { en: "English", bn: "বাংলা", de: "Deutsch" };

  var dict = {
    en: {
      "meta.home.title": "Study in Germany | Bachelor’s & Master’s Application Guidance | DeutschPath",
      "meta.about.title": "About DeutschPath | Germany-Focused Study Guidance",
      "meta.services.title": "Services | DeutschPath",
      "meta.bachelors.title": "Bachelor’s in Germany | DeutschPath",
      "meta.masters.title": "Master’s in Germany | DeutschPath",
      "meta.process.title": "Application Process | DeutschPath",
      "meta.support.title": "Student Support | DeutschPath",
      "meta.faq.title": "FAQ | DeutschPath",
      "meta.contact.title": "Contact | DeutschPath",
      "meta.book.title": "Book a Free Consultation | DeutschPath",
      "meta.universities.title": "Universities | DeutschPath",
      "meta.404.title": "Page not found | DeutschPath",

      "ui.skip": "Skip to content",
      "ui.openMenu": "Open menu",
      "ui.closeMenu": "Close menu",
      "ui.homeAria": "DeutschPath home",
      "ui.lang": "Language",
      "ui.langLoading": "Switching language…",
      "ui.contact": "Contact",
      "ui.whatsapp": "WhatsApp",
      "ui.home": "Home",
      "ui.leaveTitle": "Leaving this site?",
      "ui.leaveBody": "You are about to leave DeutschPath and open WhatsApp. Do you want to continue?",
      "ui.leaveStay": "Stay here",
      "ui.leaveContinue": "Continue to WhatsApp",

      "nav.about": "About",
      "nav.services": "Services",
      "nav.bachelors": "Bachelor’s",
      "nav.masters": "Master’s",
      "nav.process": "Process",
      "nav.support": "Support",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.book": "Book Free Consultation",
      "nav.bookShort": "Book consultation",
      "nav.bookMini": "Book",

      "cta.book": "Book Free Consultation",
      "cta.bookHour": "Book Free 1-Hour Consultation",
      "cta.exploreServices": "Explore Our Services",
      "cta.contactUs": "Contact Us",
      "cta.universityOptions": "Get My University Options",
      "cta.bachelors": "Explore Bachelor’s Options",
      "cta.masters": "Explore Master’s Options",
      "cta.fullFaq": "Read the full FAQ →",
      "cta.routeLink": "Understand your application route →",

      "footer.copy": "© {year} DeutschPath · Germany only",
      "footer.disclaimer": "Independent consultancy. Admission and visa decisions belong to universities and authorities.",

      "home.heroTitle": "Your Guided Path to Germany",
      "home.heroLede": "Germany-focused guidance for Bachelor’s and Master’s applicants — from university selection and application preparation to admission and embassy documentation.",
      "home.meta1": "Germany Only",
      "home.meta2": "Bachelor’s & Master’s",
      "home.meta3": "Application Support",
      "home.trustAria": "How DeutschPath works",
      "home.trust1": "Germany Focused",
      "home.trust2": "Bachelor’s & Master’s",
      "home.trust3": "Application Guidance",
      "home.trust4": "Student Support",
      "home.trust5": "Transparent Process",
      "home.sitKicker": "The situation",
      "home.sitTitle": "Applying to Germany can feel complicated.",
      "home.sitIntro": "German universities can have different admission requirements, application portals, deadlines, document requirements and application procedures.",
      "home.struggle": "Students often struggle with:",
      "home.q1": "Which university should I apply to?",
      "home.q2": "Is my academic background suitable?",
      "home.q3": "Do I need uni-assist?",
      "home.q4": "Do I need a VPD?",
      "home.q5": "Which documents are required?",
      "home.q6": "Where should I apply?",
      "home.q7": "What is the deadline?",
      "home.q8": "How should I prepare for the embassy?",
      "home.q9": "What happens after submission?",
      "home.sense": "We help you make sense of the process.",
      "home.svcKicker": "Services",
      "home.svcTitle": "Everything you need to navigate your Germany application",
      "home.svc1t": "Free Consultation",
      "home.svc1p": "One-hour session to understand your profile, goals and Germany study options.",
      "home.svc1g": "Book a session",
      "home.svc2t": "Profile Assessment",
      "home.svc2p": "Review your academic and professional background.",
      "home.svc2g": "See how it works",
      "home.svc3t": "University Selection",
      "home.svc3p": "Identify programs that may fit your profile and goals.",
      "home.svc3g": "See university support",
      "home.svc4t": "Application Support",
      "home.svc4p": "Guidance through university-specific application procedures.",
      "home.svc4g": "See the process",
      "home.svc5t": "uni-assist & VPD",
      "home.svc5p": "Guidance for relevant uni-assist and VPD processes.",
      "home.svc5g": "Understand the routes",
      "home.svc6t": "Document Preparation",
      "home.svc6p": "Organize and review your application documents.",
      "home.svc6g": "See document support",
      "home.svc7t": "Embassy Preparation",
      "home.svc7p": "Guidance for Germany student visa documentation.",
      "home.svc7g": "See embassy guidance",
      "home.svc8t": "Appointment Guidance",
      "home.svc8p": "Help understanding the online appointment process.",
      "home.svc8g": "See what is covered",
      "home.svc9t": "Student Support",
      "home.svc9p": "Continue receiving guidance when questions arise.",
      "home.svc9g": "See student support",
      "home.pathKicker": "How it works",
      "home.pathTitle": "From Profile to Germany",
      "home.pathIntro": "Nine clear steps. Some programs skip or reorder a step — your shortlist decides which ones apply.",
      "home.stagePrepare": "Prepare",
      "home.stageApply": "Apply",
      "home.stageArrive": "Arrive",
      "home.p1t": "Free Consultation",
      "home.p1p": "A one-hour conversation about your profile and next steps.",
      "home.p2t": "Profile Assessment",
      "home.p2p": "Academics, language background, and relevant work experience.",
      "home.p3t": "University Shortlist",
      "home.p3p": "Programs that may fit you — not a shared list for everyone.",
      "home.p4t": "Application Planning",
      "home.p4p": "Deadlines, routes, and the order of tasks.",
      "home.p5t": "Document Preparation",
      "home.p5p": "Transcripts, language proof, CV, and motivation letter.",
      "home.p6t": "Online Application",
      "home.p6p": "uni-assist, a university portal, or another named route.",
      "home.p7t": "Admission",
      "home.p7p": "Help reading an offer. The university decides.",
      "home.p8t": "Embassy Preparation",
      "home.p8p": "Guidance for the student visa document file.",
      "home.p9t": "Pre-Departure",
      "home.p9p": "Practical orientation once plans are confirmed.",
      "home.bandEyebrow": "Germany only",
      "home.bandStatement": "A professional Germany education path — not a generic study-abroad desk.",
      "home.fitKicker": "University fit",
      "home.fitTitle": "Find the right German university for your profile",
      "home.fitIntro": "German universities have different admission structures and procedures. We don’t hand every student the same list.",
      "home.fitQuote": "Your academic background, subject requirements, language qualifications and career goals matter.",
      "home.fit1t": "Public Universities",
      "home.fit1p": "Research-oriented institutions with their own rules.",
      "home.fit2t": "Universities of Applied Sciences",
      "home.fit2p": "Practice-oriented programs, often with their own portals.",
      "home.fit3t": "English-taught",
      "home.fit3p": "Still require the language proof the program names.",
      "home.fit4t": "German-taught",
      "home.fit4p": "Language level is part of the admission check.",
      "home.fit5t": "Bachelor’s",
      "home.fit5p": "School qualifications and subject fit come first.",
      "home.fit6t": "Master’s",
      "home.fit6p": "Credits, subject match, and prerequisites matter.",
      "home.routeKicker": "Application routes",
      "home.routeTitle": "One country. Many application routes.",
      "home.routeIntro": "These are routes you may encounter — not a sequence every university follows. The exact path depends on the program.",
      "home.r1t": "University",
      "home.r1p": "Start with the program’s own rules.",
      "home.r2t": "uni-assist",
      "home.r2p": "Only when that university uses it.",
      "home.r3t": "My assist",
      "home.r3p": "The uni-assist applicant portal.",
      "home.r4t": "VPD",
      "home.r4p": "When a preliminary review is required.",
      "home.r5t": "University portal",
      "home.r5p": "Direct application to the campus.",
      "home.routeNote": "Do not assume every German university uses uni-assist.",
      "home.baKicker": "Bachelor’s",
      "home.baTitle": "Planning a Bachelor’s in Germany?",
      "home.baBody": "We help students understand eligibility, school qualifications, language requirements, deadlines, and documents.",
      "home.maKicker": "Master’s",
      "home.maTitle": "Planning a Master’s in Germany?",
      "home.maBody": "We assess your bachelor’s, CGPA, credits, ECTS, language, work experience, and program prerequisites.",
      "home.truthKicker": "Transparency",
      "home.truthTitle": "No false promises.<br>Just clear guidance.",
      "home.truthIntro": "Universities make admission decisions independently. German authorities make visa decisions independently. Our role is to help you prepare and stay organized.",
      "home.truth1": "University admission",
      "home.truth2": "Visa approval",
      "home.truth3": "Embassy appointment",
      "home.truth4": "Scholarships",
      "home.truth5": "Specific outcomes",
      "home.notGuaranteed": "Not guaranteed",
      "home.consultKicker": "Free consultation",
      "home.consultTitle": "Not sure where to start?",
      "home.consultIntro": "Get a free 1-hour consultation and understand your Germany study options.",
      "home.m1": "60 minutes",
      "home.m1s": "Session",
      "home.m2": "Free",
      "home.m2s": "First consultation",
      "home.m3": "Germany focused",
      "home.m3s": "Only Germany",
      "home.faqKicker": "FAQ",
      "home.faqTitle": "Straight answers",
      "home.faqIntro": "Clear questions. Honest answers. No marketing language.",
      "home.faq1q": "Do you only work with Germany?",
      "home.faq1a": "Yes. DeutschPath focuses exclusively on Germany.",
      "home.faq2q": "Do you support Bachelor’s and Master’s?",
      "home.faq2a": "Yes. Guidance is available for Bachelor’s and Master’s applicants.",
      "home.faq3q": "Is the consultation free?",
      "home.faq3a": "Yes, the first consultation is one hour and free.",
      "home.faq4q": "Do you guarantee admission or a visa?",
      "home.faq4a": "No. Universities and German authorities decide independently.",
      "home.faq5q": "Do you support uni-assist and VPD?",
      "home.faq5a": "Yes, where those routes apply to your program.",
      "home.faq6q": "Can I contact you after submitting?",
      "home.faq6a": "Yes. Continuous student support is part of our service model.",
      "home.beginKicker": "Begin",
      "home.beginTitle": "Your Germany journey starts with one conversation.",
      "home.beginIntro": "Tell us about your academic background, goals and plans. We’ll help you understand your next steps.",

      "page.about.crumb": "About",
      "page.about.eye": "About",
      "page.about.h1": "Germany only. Clear guidance.",
      "page.about.lede": "DeutschPath is built for students who want a focused path to German Bachelor’s and Master’s study — without false promises.",
      "team.kicker": "The people",
      "team.title": "Our team",
      "team.intro": "Four people behind the Germany-focused guidance — from Bangladesh and from campuses in Germany.",
      "team.r1": "Engineering",
      "team.b1": "Senior software engineer at Singularity Limited",
      "team.r2": "Advisory",
      "team.b2": "EEE graduate, SUST",
      "team.r3": "Germany",
      "team.b3": "Master’s student at TU Berlin, Germany",
      "team.r4": "Germany",
      "team.b4": "Master’s student at Osnabrück University, Germany",
      "page.services.crumb": "Services",
      "page.services.eye": "Services",
      "page.services.h1": "Support across the Germany application path.",
      "page.services.lede": "From the first conversation to embassy preparation, each service is designed around the steps German universities and authorities actually require.",
      "services.jumpPrepare": "Prepare",
      "services.jumpApply": "Apply",
      "services.jumpArrive": "Admission & visa",
      "services.jumpSupport": "Ongoing support",
      "services.asideKicker": "Four stages",
      "services.asideTitle": "Pick where you are",
      "services.asideIntro": "Use only what you need. Jump to a stage, or start with the free hour and we will map the rest.",
      "services.asideCta": "Not sure which stage?",
      "services.g1k": "01 — Prepare",
      "services.g1t": "Understand your profile and options",
      "services.g1p": "Start with fit and direction before any portal or form.",
      "services.g2k": "02 — Apply",
      "services.g2t": "Plan, prepare, and submit",
      "services.g2p": "Documents, routes, and portals — matched to the programs on your shortlist.",
      "services.g3k": "03 — Admission & visa",
      "services.g3t": "After the offer",
      "services.g3p": "Read the decision carefully, then prepare the embassy file without false promises.",
      "services.g4k": "04 — Ongoing",
      "services.g4t": "Stay supported after submission",
      "services.g4p": "Questions continue. The relationship does not end with a form upload.",
      "services.ctaK": "Next step",
      "services.ctaT": "Start with the free hour",
      "services.ctaP": "Tell us your background and goals. We will map which services actually apply to your case.",
      "page.bachelors.crumb": "Bachelor’s",
      "page.bachelors.eye": "Bachelor’s",
      "page.bachelors.h1": "Bachelor’s pathways in Germany.",
      "page.bachelors.lede": "Eligibility, school qualifications, language requirements, deadlines, and documents — explained for your profile.",
      "page.masters.crumb": "Master’s",
      "page.masters.eye": "Master’s",
      "page.masters.h1": "Master’s pathways in Germany.",
      "page.masters.lede": "We assess your bachelor’s degree, credits, language, and prerequisites against programs that may fit.",
      "page.process.crumb": "Application Process",
      "page.process.eye": "Application process",
      "page.process.h1": "From profile to a submitted file.",
      "page.process.lede": "The path is orderly. The rules inside it are not identical from one university to the next.",
      "process.jumpSteps": "Nine steps",
      "process.jumpRoutes": "Application routes",
      "process.stepsKicker": "How it works",
      "process.stepsTitle": "From profile to Germany",
      "process.stepsIntro": "Nine clear steps. Some programs skip or reorder a step — your shortlist decides which ones apply.",
      "process.phasePrepare": "Prepare",
      "process.phaseApply": "Apply",
      "process.phaseArrive": "Arrive",
      "process.s1t": "Free consultation",
      "process.s1p": "We start with your background and the level you want to study, and separate what is known from what still has to be checked.",
      "process.s2t": "Profile assessment",
      "process.s2p": "Academics, language, and work experience are read against the kind of program you are considering.",
      "process.s3t": "University shortlist",
      "process.s3p": "A short list of programs that may fit — not a list we hand to every student.",
      "process.s4t": "Application planning",
      "process.s4p": "Which route, which deadline, and which documents belong to each program.",
      "process.s5t": "Document preparation",
      "process.s5p": "Transcripts, certificates, language proof, CV, and motivation letter — only as required.",
      "process.s6t": "Online application",
      "process.s6p": "uni-assist, My assist, a VPD, or a university portal — whichever the program names.",
      "process.s7t": "Admission",
      "process.s7p": "Help reading the result. The university makes the decision.",
      "process.s8t": "Embassy preparation",
      "process.s8p": "Document guidance for the student visa file, using the current official checklist.",
      "process.s9t": "Pre-departure",
      "process.s9p": "Practical notes once the plan is confirmed, not before.",
      "process.routesIntro": "Use this as a map of possibilities. Confirm the route on the program page before you prepare a file.",
      "process.routeNote": "Not every German university uses uni-assist. Direct application is a normal route.",
      "process.ctaK": "Next step",
      "process.ctaT": "Map your route in the free hour",
      "process.ctaP": "Bring your academic background and goals. We will clarify which steps and routes apply to you.",
      "page.support.crumb": "Student Support",
      "page.support.eye": "Student support",
      "page.support.h1": "A relationship that outlasts the form.",
      "page.support.lede": "Submitting an application is the middle of the process. Questions continue through admission, the embassy file, and the weeks before travel.",
      "page.faq.crumb": "FAQ",
      "page.faq.eye": "FAQ",
      "page.faq.h1": "Straight answers.",
      "page.faq.lede": "If a question is missing, bring it to the consultation. If the honest answer is “that depends on the program,” that is the answer.",
      "faq.asideKicker": "Browse by topic",
      "faq.asideTitle": "Find the answer you need",
      "faq.asideIntro": "Short, honest answers. No marketing language. Open a group, or jump straight to a topic.",
      "faq.asideCta": "Still unsure?",
      "faq.g1": "The basics",
      "faq.g2": "What we do not promise",
      "faq.g3": "Routes and requirements",
      "faq.g4": "After you apply",
      "faq.ctaK": "Next step",
      "faq.ctaT": "Bring the unanswered question",
      "faq.ctaP": "The free hour is the right place for anything that depends on your profile or program.",
      "faq.q0": "Do you only work with Germany?",
      "faq.a0": "Yes. DeutschPath focuses exclusively on Germany.",
      "faq.q1": "Do you support Bachelor’s and Master’s?",
      "faq.a1": "Yes. Guidance is available for Bachelor’s and Master’s applicants.",
      "faq.q2": "Is the consultation free?",
      "faq.a2": "Yes, the first consultation is one hour and free.",
      "faq.q3": "Do you guarantee admission?",
      "faq.a3": "No. Universities make admission decisions independently.",
      "faq.q4": "Do you guarantee a visa?",
      "faq.a4": "No. German authorities make visa decisions independently.",
      "faq.q5": "Do you book embassy appointments?",
      "faq.a5": "We provide guidance for the online appointment process, but appointment availability is controlled by the relevant authorities.",
      "faq.q6": "Do you support uni-assist?",
      "faq.a6": "Yes, where uni-assist is the applicable application route.",
      "faq.q7": "Do you help with VPD?",
      "faq.a7": "Yes. When a program asks for a VPD, we help you understand what that step involves.",
      "faq.q8": "Can you help me choose universities?",
      "faq.a8": "Yes. We assess your profile and help identify potentially suitable programs.",
      "faq.q9": "Can I contact you after submitting my application?",
      "faq.a9": "Yes. Continuous student support is part of our service model.",
      "faq.q10": "What happens in the free hour?",
      "faq.a10": "We look at your academic background, the level you want to study, and the parts of the Germany process that apply to you. You leave with a clearer set of next steps. The hour is not an admission or visa decision.",
      "faq.q11": "How much do services cost after the consultation?",
      "faq.a11": "Any fee is explained before you decide to continue. The first one-hour consultation is free. DeutschPath does not publish a price until the scope of support is clear.",
      "faq.q12": "Is this only for applicants in Bangladesh?",
      "faq.a12": "DeutschPath is built for students applying from Bangladesh. If you are somewhere else, say so in the consultation request and the team can confirm whether they can help.",
      "faq.q13": "Where should I confirm requirements?",
      "faq.a13": "Use the current program page, the route that university names, and the official guidance from the relevant authority. Requirements change, and a previous applicant’s checklist may not match yours.",
      "page.contact.crumb": "Contact",
      "page.contact.eye": "Contact",
      "page.contact.h1": "Talk to DeutschPath.",
      "page.contact.lede": "Ask a question, request a callback, or start with a free consultation.",
      "contact.phone": "Phone",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "Email",
      "contact.office": "Office",
      "contact.pending": "To be published",
      "contact.consultKicker": "Prefer a call?",
      "contact.consultTitle": "Book the free hour",
      "contact.consultText": "A structured 60-minute conversation about your profile and Germany options — no charge for the first session.",
      "contact.socialNote": "Social profiles will appear in the footer when the accounts are ready.",
      "contact.formTitle": "Send a message",
      "contact.formIntro": "Share your question. We reply using the contact details you leave below.",
      "contact.send": "Send message",
      "contact.statusTitle": "Message status",
      "page.book.crumb": "Book consultation",
      "page.book.eye": "Consultation",
      "page.book.h1": "Book your free 1-hour consultation.",
      "page.book.lede": "Tell us about your academic background, goals and plans. We’ll help you understand your next steps. The hour is Germany-focused, and it is free.",
      "book.m1": "60",
      "book.m1s": "Minutes",
      "book.m2": "Free",
      "book.m2s": "First hour",
      "book.m3": "DE",
      "book.m3s": "Germany only",
      "book.coverKicker": "In the hour",
      "book.coverTitle": "What we can cover",
      "book.cover1": "Your academic background and intended level",
      "book.cover2": "How application routes differ in Germany",
      "book.cover3": "Which documents are worth gathering first",
      "book.cover4": "Sensible next steps for your case",
      "book.limitKicker": "Boundaries",
      "book.limitTitle": "What the hour is not",
      "book.limitBody": "It is not an admission decision, a visa decision, or a promise of a particular university.",
      "book.topicNote": "You asked about university options. Add your field and academic background below so the conversation can start from your profile.",
      "book.formKicker": "Request",
      "book.formTitle": "Book the free hour",
      "book.formIntro": "Fields marked <span aria-hidden=\"true\">*</span> are required. We use these details to prepare for your session.",
      "book.legendContact": "Contact",
      "book.legendAcademic": "Academic profile",
      "book.legendTime": "Preferred time",
      "book.footnote": "No payment for the first hour. Any later fee is explained before you continue.",
      "book.formSubmit": "Request Free Consultation",
      "book.successTitle": "Request status",
      "book.backHome": "Back to home",
      "page.universities.crumb": "Universities",
      "page.universities.eye": "Directory",
      "page.universities.h1": "University directory",
      "page.universities.lede": "Sample listings for browsing. Always confirm requirements on the official program page.",
      "page.404.h1": "This page is not on the path.",
      "page.404.lede": "The link may be outdated, or the page may have moved.",
      "page.404.home": "Back to home",

      "form.name": "Full name",
      "form.email": "Email",
      "form.phone": "Phone / WhatsApp",
      "form.message": "Message",
      "form.level": "Study level",
      "form.topic": "Topic",
      "form.submit": "Submit request",
      "form.sending": "Sending…",
      "form.sent": "Request received. We will reply using the contact details you shared.",
      "form.error": "Something went wrong. Please try again or use WhatsApp / email.",
      "form.required": "Please complete the required fields."
    },

    bn: {
      "meta.home.title": "জার্মানিতে পড়াশোনা | ব্যাচেলর ও মাস্টার্স আবেদন নির্দেশনা | DeutschPath",
      "meta.about.title": "DeutschPath সম্পর্কে | জার্মানি-কেন্দ্রিক পড়াশোনার নির্দেশনা",
      "meta.services.title": "সেবাসমূহ | DeutschPath",
      "meta.bachelors.title": "জার্মানিতে ব্যাচেলর | DeutschPath",
      "meta.masters.title": "জার্মানিতে মাস্টার্স | DeutschPath",
      "meta.process.title": "আবেদন প্রক্রিয়া | DeutschPath",
      "meta.support.title": "শিক্ষার্থী সহায়তা | DeutschPath",
      "meta.faq.title": "প্রশ্নোত্তর | DeutschPath",
      "meta.contact.title": "যোগাযোগ | DeutschPath",
      "meta.book.title": "বিনামূল্যে পরামর্শ বুক করুন | DeutschPath",
      "meta.universities.title": "বিশ্ববিদ্যালয় | DeutschPath",
      "meta.404.title": "পৃষ্ঠা পাওয়া যায়নি | DeutschPath",

      "ui.skip": "মূল অংশে যান",
      "ui.openMenu": "মেনু খুলুন",
      "ui.closeMenu": "মেনু বন্ধ করুন",
      "ui.homeAria": "DeutschPath হোম",
      "ui.lang": "ভাষা",
      "ui.langLoading": "ভাষা পরিবর্তন হচ্ছে…",
      "ui.contact": "যোগাযোগ",
      "ui.whatsapp": "WhatsApp",
      "ui.home": "হোম",
      "ui.leaveTitle": "এই সাইট ছেড়ে যাচ্ছেন?",
      "ui.leaveBody": "আপনি DeutschPath ছেড়ে WhatsApp খুলতে যাচ্ছেন। এগোতে চান?",
      "ui.leaveStay": "এখানে থাকুন",
      "ui.leaveContinue": "WhatsApp-এ যান",

      "nav.about": "সম্পর্কে",
      "nav.services": "সেবা",
      "nav.bachelors": "ব্যাচেলর",
      "nav.masters": "মাস্টার্স",
      "nav.process": "প্রক্রিয়া",
      "nav.support": "সহায়তা",
      "nav.faq": "প্রশ্নোত্তর",
      "nav.contact": "যোগাযোগ",
      "nav.book": "বিনামূল্যে পরামর্শ বুক করুন",
      "nav.bookShort": "পরামর্শ বুক",
      "nav.bookMini": "বুক",

      "cta.book": "বিনামূল্যে পরামর্শ বুক করুন",
      "cta.bookHour": "বিনামূল্যে ১ ঘণ্টার পরামর্শ বুক করুন",
      "cta.exploreServices": "আমাদের সেবা দেখুন",
      "cta.contactUs": "যোগাযোগ করুন",
      "cta.universityOptions": "আমার বিশ্ববিদ্যালয় অপশন জানুন",
      "cta.bachelors": "ব্যাচেলর অপশন দেখুন",
      "cta.masters": "মাস্টার্স অপশন দেখুন",
      "cta.fullFaq": "সম্পূর্ণ প্রশ্নোত্তর পড়ুন →",
      "cta.routeLink": "আপনার আবেদন রুট বুঝুন →",

      "footer.copy": "© {year} DeutschPath · শুধুমাত্র জার্মানি",
      "footer.disclaimer": "স্বাধীন পরামর্শক প্রতিষ্ঠান। ভর্তি ও ভিসার সিদ্ধান্ত বিশ্ববিদ্যালয় ও কর্তৃপক্ষের।",

      "home.heroTitle": "জার্মানির পথে আপনার নির্দেশিত যাত্রা",
      "home.heroLede": "ব্যাচেলর ও মাস্টার্স আবেদনকারীদের জন্য জার্মানি-কেন্দ্রিক নির্দেশনা — বিশ্ববিদ্যালয় নির্বাচন ও আবেদন প্রস্তুতি থেকে ভর্তি এবং দূতাবাস ডকুমেন্টেশন পর্যন্ত।",
      "home.meta1": "শুধুমাত্র জার্মানি",
      "home.meta2": "ব্যাচেলর ও মাস্টার্স",
      "home.meta3": "আবেদন সহায়তা",
      "home.trustAria": "DeutschPath কীভাবে কাজ করে",
      "home.trust1": "জার্মানি-কেন্দ্রিক",
      "home.trust2": "ব্যাচেলর ও মাস্টার্স",
      "home.trust3": "আবেদন নির্দেশনা",
      "home.trust4": "শিক্ষার্থী সহায়তা",
      "home.trust5": "স্বচ্ছ প্রক্রিয়া",
      "home.sitKicker": "পরিস্থিতি",
      "home.sitTitle": "জার্মানিতে আবেদন জটিল মনে হতে পারে।",
      "home.sitIntro": "জার্মান বিশ্ববিদ্যালয়গুলোর ভর্তির শর্ত, পোর্টাল, সময়সীমা, নথি ও আবেদন পদ্ধতি আলাদা হতে পারে।",
      "home.struggle": "শিক্ষার্থীরা প্রায়ই এসব নিয়ে দ্বিধায় পড়েন:",
      "home.q1": "কোন বিশ্ববিদ্যালয়ে আবেদন করব?",
      "home.q2": "আমার একাডেমিক ব্যাকগ্রাউন্ড উপযুক্ত কি?",
      "home.q3": "আমার কি uni-assist লাগবে?",
      "home.q4": "আমার কি VPD লাগবে?",
      "home.q5": "কোন কোন নথি লাগবে?",
      "home.q6": "কোথায় আবেদন করব?",
      "home.q7": "সময়সীমা কী?",
      "home.q8": "দূতাবাসের জন্য কীভাবে প্রস্তুতি নেব?",
      "home.q9": "জমা দেওয়ার পর কী হয়?",
      "home.sense": "আমরা প্রক্রিয়াটি পরিষ্কার করে বুঝিয়ে দিই।",
      "home.svcKicker": "সেবা",
      "home.svcTitle": "জার্মানি আবেদনের পথে যা যা দরকার",
      "home.svc1t": "বিনামূল্যে পরামর্শ",
      "home.svc1p": "আপনার প্রোফাইল, লক্ষ্য ও জার্মানি পড়াশোনার অপশন বোঝার এক ঘণ্টার সেশন।",
      "home.svc1g": "সেশন বুক করুন",
      "home.svc2t": "প্রোফাইল মূল্যায়ন",
      "home.svc2p": "আপনার একাডেমিক ও পেশাগত ব্যাকগ্রাউন্ড পর্যালোচনা।",
      "home.svc2g": "কীভাবে কাজ করে",
      "home.svc3t": "বিশ্ববিদ্যালয় নির্বাচন",
      "home.svc3p": "আপনার প্রোফাইল ও লক্ষ্যের সাথে মিলতে পারে এমন প্রোগ্রাম চিহ্নিতকরণ।",
      "home.svc3g": "বিশ্ববিদ্যালয় সহায়তা",
      "home.svc4t": "আবেদন সহায়তা",
      "home.svc4p": "বিশ্ববিদ্যালয়-নির্দিষ্ট আবেদন পদ্ধতিতে নির্দেশনা।",
      "home.svc4g": "প্রক্রিয়া দেখুন",
      "home.svc5t": "uni-assist ও VPD",
      "home.svc5p": "প্রাসঙ্গিক uni-assist ও VPD প্রক্রিয়ায় নির্দেশনা।",
      "home.svc5g": "রুট বুঝুন",
      "home.svc6t": "নথি প্রস্তুতি",
      "home.svc6p": "আবেদনের নথি সাজানো ও পর্যালোচনা।",
      "home.svc6g": "নথি সহায়তা",
      "home.svc7t": "দূতাবাস প্রস্তুতি",
      "home.svc7p": "জার্মানি স্টুডেন্ট ভিসার নথি নির্দেশনা।",
      "home.svc7g": "দূতাবাস নির্দেশনা",
      "home.svc8t": "অ্যাপয়েন্টমেন্ট নির্দেশনা",
      "home.svc8p": "অনলাইন অ্যাপয়েন্টমেন্ট প্রক্রিয়া বুঝতে সহায়তা।",
      "home.svc8g": "কী কভার করা হয়",
      "home.svc9t": "শিক্ষার্থী সহায়তা",
      "home.svc9p": "প্রশ্ন উঠলেও নির্দেশনা অব্যাহত থাকে।",
      "home.svc9g": "সহায়তা দেখুন",
      "home.pathKicker": "কীভাবে কাজ করে",
      "home.pathTitle": "প্রোফাইল থেকে জার্মানি পর্যন্ত",
      "home.pathIntro": "নয়টি স্পষ্ট ধাপ। কিছু প্রোগ্রামে ধাপ বাদ বা পুনর্বিন্যাস হতে পারে — আপনার শর্টলিস্টই নির্ধারণ করে।",
      "home.stagePrepare": "প্রস্তুতি",
      "home.stageApply": "আবেদন",
      "home.stageArrive": "পৌঁছানো",
      "home.p1t": "বিনামূল্যে পরামর্শ",
      "home.p1p": "আপনার প্রোফাইল ও পরবর্তী ধাপ নিয়ে এক ঘণ্টার আলোচনা।",
      "home.p2t": "প্রোফাইল মূল্যায়ন",
      "home.p2p": "একাডেমিক্স, ভাষা ও প্রাসঙ্গিক কর্মঅভিজ্ঞতা।",
      "home.p3t": "বিশ্ববিদ্যালয় শর্টলিস্ট",
      "home.p3p": "আপনার সাথে মিলতে পারে এমন প্রোগ্রাম — সবার জন্য একই তালিকা নয়।",
      "home.p4t": "আবেদন পরিকল্পনা",
      "home.p4p": "সময়সীমা, রুট ও কাজের ক্রম।",
      "home.p5t": "নথি প্রস্তুতি",
      "home.p5p": "ট্রান্সক্রিপ্ট, ভাষার প্রমাণ, সিভি ও মোটিভেশন লেটার।",
      "home.p6t": "অনলাইন আবেদন",
      "home.p6p": "uni-assist, বিশ্ববিদ্যালয় পোর্টাল বা অন্য নির্দিষ্ট রুট।",
      "home.p7t": "ভর্তি",
      "home.p7p": "অফার বুঝতে সহায়তা। সিদ্ধান্ত বিশ্ববিদ্যালয়ের।",
      "home.p8t": "দূতাবাস প্রস্তুতি",
      "home.p8p": "স্টুডেন্ট ভিসার নথি ফাইলের নির্দেশনা।",
      "home.p9t": "প্রি-ডিপার্চার",
      "home.p9p": "পরিকল্পনা নিশ্চিত হলে ব্যবহারিক ওরিয়েন্টেশন।",
      "home.bandEyebrow": "শুধুমাত্র জার্মানি",
      "home.bandStatement": "পেশাদার জার্মানি এডুকেশন পথ — সাধারণ স্টাডি-অ্যাব্রড ডেস্ক নয়।",
      "home.fitKicker": "বিশ্ববিদ্যালয় ফিট",
      "home.fitTitle": "আপনার প্রোফাইলের জন্য সঠিক জার্মান বিশ্ববিদ্যালয় খুঁজুন",
      "home.fitIntro": "জার্মান বিশ্ববিদ্যালয়গুলোর ভর্তি কাঠামো ও পদ্ধতি আলাদা। আমরা সবাইকে একই তালিকা দিই না।",
      "home.fitQuote": "আপনার একাডেমিক ব্যাকগ্রাউন্ড, বিষয়ের শর্ত, ভাষা যোগ্যতা ও ক্যারিয়ার লক্ষ্য গুরুত্বপূর্ণ।",
      "home.fit1t": "পাবলিক বিশ্ববিদ্যালয়",
      "home.fit1p": "গবেষণা-ভিত্তিক প্রতিষ্ঠান, নিজস্ব নিয়মসহ।",
      "home.fit2t": "অ্যাপ্লাইড সায়েন্সেস বিশ্ববিদ্যালয়",
      "home.fit2p": "প্রায়োগিক প্রোগ্রাম, প্রায়ই নিজস্ব পোর্টালসহ।",
      "home.fit3t": "ইংরেজি-ভাষায়",
      "home.fit3p": "প্রোগ্রাম যে ভাষার প্রমাণ চায়, তাই লাগে।",
      "home.fit4t": "জার্মান-ভাষায়",
      "home.fit4p": "ভাষার স্তর ভর্তি যাচাইয়ের অংশ।",
      "home.fit5t": "ব্যাচেলর",
      "home.fit5p": "স্কুল যোগ্যতা ও বিষয় ফিট আগে আসে।",
      "home.fit6t": "মাস্টার্স",
      "home.fit6p": "ক্রেডিট, বিষয় মিল ও পূর্বশর্ত গুরুত্বপূর্ণ।",
      "home.routeKicker": "আবেদন রুট",
      "home.routeTitle": "এক দেশ। অনেক আবেদন রুট।",
      "home.routeIntro": "এগুলো সম্ভাব্য রুট — প্রতিটি বিশ্ববিদ্যালয় একই ক্রম অনুসরণ করে না। সঠিক পথ প্রোগ্রামের ওপর নির্ভর করে।",
      "home.r1t": "বিশ্ববিদ্যালয়",
      "home.r1p": "প্রোগ্রামের নিজস্ব নিয়ম দিয়ে শুরু করুন।",
      "home.r2t": "uni-assist",
      "home.r2p": "শুধু যখন সেই বিশ্ববিদ্যালয় এটি ব্যবহার করে।",
      "home.r3t": "My assist",
      "home.r3p": "uni-assist আবেদনকারী পোর্টাল।",
      "home.r4t": "VPD",
      "home.r4p": "যখন প্রাথমিক পর্যালোচনা প্রয়োজন।",
      "home.r5t": "বিশ্ববিদ্যালয় পোর্টাল",
      "home.r5p": "সরাসরি ক্যাম্পাসে আবেদন।",
      "home.routeNote": "ধরে নেবেন না যে সব জার্মান বিশ্ববিদ্যালয় uni-assist ব্যবহার করে।",
      "home.baKicker": "ব্যাচেলর",
      "home.baTitle": "জার্মানিতে ব্যাচেলরের পরিকল্পনা?",
      "home.baBody": "যোগ্যতা, স্কুল সনদ, ভাষার শর্ত, সময়সীমা ও নথি বুঝতে আমরা সহায়তা করি।",
      "home.maKicker": "মাস্টার্স",
      "home.maTitle": "জার্মানিতে মাস্টার্সের পরিকল্পনা?",
      "home.maBody": "আপনার ব্যাচেলর, CGPA, ক্রেডিট, ECTS, ভাষা, অভিজ্ঞতা ও প্রোগ্রামের পূর্বশর্ত মূল্যায়ন করি।",
      "home.truthKicker": "স্বচ্ছতা",
      "home.truthTitle": "মিথ্যা প্রতিশ্রুতি নয়।<br>শুধু স্পষ্ট নির্দেশনা।",
      "home.truthIntro": "ভর্তির সিদ্ধান্ত বিশ্ববিদ্যালয়ের। ভিসার সিদ্ধান্ত জার্মান কর্তৃপক্ষের। আমাদের ভূমিকা হলো প্রস্তুতি ও সংগঠনে সহায়তা।",
      "home.truth1": "বিশ্ববিদ্যালয় ভর্তি",
      "home.truth2": "ভিসা অনুমোদন",
      "home.truth3": "দূতাবাস অ্যাপয়েন্টমেন্ট",
      "home.truth4": "বৃত্তি",
      "home.truth5": "নির্দিষ্ট ফলাফল",
      "home.notGuaranteed": "নিশ্চিত নয়",
      "home.consultKicker": "বিনামূল্যে পরামর্শ",
      "home.consultTitle": "কোথা থেকে শুরু করবেন নিশ্চিত নন?",
      "home.consultIntro": "বিনামূল্যে ১ ঘণ্টার পরামর্শ নিন এবং জার্মানি পড়াশোনার অপশন বুঝুন।",
      "home.m1": "৬০ মিনিট",
      "home.m1s": "সেশন",
      "home.m2": "বিনামূল্যে",
      "home.m2s": "প্রথম পরামর্শ",
      "home.m3": "জার্মানি-কেন্দ্রিক",
      "home.m3s": "শুধু জার্মানি",
      "home.faqKicker": "প্রশ্নোত্তর",
      "home.faqTitle": "সোজা উত্তর",
      "home.faqIntro": "পরিষ্কার প্রশ্ন। সৎ উত্তর। মার্কেটিং ভাষা নয়।",
      "home.faq1q": "আপনারা কি শুধু জার্মানি নিয়ে কাজ করেন?",
      "home.faq1a": "হ্যাঁ। DeutschPath শুধুমাত্র জার্মানিতে মনোযোগী।",
      "home.faq2q": "ব্যাচেলর ও মাস্টার্স দুটোই সাপোর্ট করেন?",
      "home.faq2a": "হ্যাঁ। ব্যাচেলর ও মাস্টার্স আবেদনকারীদের জন্য নির্দেশনা আছে।",
      "home.faq3q": "পরামর্শ কি বিনামূল্যে?",
      "home.faq3a": "হ্যাঁ, প্রথম পরামর্শ এক ঘণ্টা এবং বিনামূল্যে।",
      "home.faq4q": "ভর্তি বা ভিসার গ্যারান্টি দেন?",
      "home.faq4a": "না। বিশ্ববিদ্যালয় ও জার্মান কর্তৃপক্ষ স্বাধীনভাবে সিদ্ধান্ত নেয়।",
      "home.faq5q": "uni-assist ও VPD সাপোর্ট করেন?",
      "home.faq5a": "হ্যাঁ, যেখানে সেই রুট আপনার প্রোগ্রামে প্রযোজ্য।",
      "home.faq6q": "জমা দেওয়ার পরও যোগাযোগ করতে পারি?",
      "home.faq6a": "হ্যাঁ। ধারাবাহিক শিক্ষার্থী সহায়তা আমাদের সেবার অংশ।",
      "home.beginKicker": "শুরু",
      "home.beginTitle": "আপনার জার্মানি যাত্রা শুরু হয় এক কথোপকথন দিয়ে।",
      "home.beginIntro": "আপনার একাডেমিক ব্যাকগ্রাউন্ড, লক্ষ্য ও পরিকল্পনা বলুন। আমরা পরবর্তী ধাপ বুঝতে সাহায্য করব।",

      "page.about.crumb": "সম্পর্কে",
      "page.about.eye": "সম্পর্কে",
      "page.about.h1": "শুধু জার্মানি। স্পষ্ট নির্দেশনা।",
      "page.about.lede": "DeutschPath এমন শিক্ষার্থীদের জন্য যারা মিথ্যা প্রতিশ্রুতি ছাড়াই জার্মান ব্যাচেলর ও মাস্টার্সের একটি মনোযোগী পথ চান।",
      "team.kicker": "যারা আছেন",
      "team.title": "আমাদের টিম",
      "team.intro": "জার্মানি-কেন্দ্রিক নির্দেশনার পেছনের চারজন — বাংলাদেশ ও জার্মানির ক্যাম্পাস থেকে।",
      "team.r1": "ইঞ্জিনিয়ারিং",
      "team.b1": "সিঙ্গলারিটি লিমিটেডে সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
      "team.r2": "পরামর্শ",
      "team.b2": "ইইই গ্র্যাজুয়েট, শাবিপ্রবি",
      "team.r3": "জার্মানি",
      "team.b3": "টিইউ বার্লিনে মাস্টার্স শিক্ষার্থী, জার্মানি",
      "team.r4": "জার্মানি",
      "team.b4": "অসনাব্র্যুক বিশ্ববিদ্যালয়ে মাস্টার্স শিক্ষার্থী, জার্মানি",
      "page.services.crumb": "সেবা",
      "page.services.eye": "সেবা",
      "page.services.h1": "জার্মানি আবেদনের পথে সহায়তা।",
      "page.services.lede": "প্রথম কথোপকথন থেকে দূতাবাস প্রস্তুতি — প্রতিটি সেবা জার্মান বিশ্ববিদ্যালয় ও কর্তৃপক্ষের বাস্তব ধাপ ঘিরে সাজানো।",
      "services.jumpPrepare": "প্রস্তুতি",
      "services.jumpApply": "আবেদন",
      "services.jumpArrive": "ভর্তি ও ভিসা",
      "services.jumpSupport": "চলমান সহায়তা",
      "services.asideKicker": "চারটি ধাপ",
      "services.asideTitle": "আপনি কোথায় আছেন",
      "services.asideIntro": "শুধু যা দরকার তা নিন। কোনো ধাপে যান, অথবা বিনামূল্যে ঘণ্টা দিয়ে শুরু করুন — বাকিটা আমরা ম্যাপ করব।",
      "services.asideCta": "কোন ধাপ নিশ্চিত নন?",
      "services.g1k": "০১ — প্রস্তুতি",
      "services.g1t": "প্রোফাইল ও অপশন বুঝুন",
      "services.g1p": "পোর্টাল বা ফর্মের আগে ফিট ও দিকনির্দেশ দিয়ে শুরু করুন।",
      "services.g2k": "০২ — আবেদন",
      "services.g2t": "পরিকল্পনা, প্রস্তুতি ও জমা",
      "services.g2p": "ডকুমেন্ট, রুট ও পোর্টাল — আপনার শর্টলিস্টের প্রোগ্রাম অনুযায়ী।",
      "services.g3k": "০৩ — ভর্তি ও ভিসা",
      "services.g3t": "অফারের পরে",
      "services.g3p": "সিদ্ধান্ত ভালোভাবে পড়ুন, তারপর মিথ্যা প্রতিশ্রুতি ছাড়া দূতাবাস ফাইল প্রস্তুত করুন।",
      "services.g4k": "০৪ — চলমান",
      "services.g4t": "জমার পরেও সহায়তা পান",
      "services.g4p": "প্রশ্ন চলতে থাকে। সম্পর্ক ফর্ম আপলোডে শেষ হয় না।",
      "services.ctaK": "পরবর্তী ধাপ",
      "services.ctaT": "বিনামূল্যে ঘণ্টা দিয়ে শুরু করুন",
      "services.ctaP": "ব্যাকগ্রাউন্ড ও লক্ষ্য বলুন। কোন সেবা আপনার ক্ষেত্রে প্রযোজ্য, আমরা ম্যাপ করব।",
      "page.bachelors.crumb": "ব্যাচেলর",
      "page.bachelors.eye": "ব্যাচেলর",
      "page.bachelors.h1": "জার্মানিতে ব্যাচেলর পথ।",
      "page.bachelors.lede": "যোগ্যতা, স্কুল সনদ, ভাষার শর্ত, সময়সীমা ও নথি — আপনার প্রোফাইল অনুযায়ী ব্যাখ্যা।",
      "page.masters.crumb": "মাস্টার্স",
      "page.masters.eye": "মাস্টার্স",
      "page.masters.h1": "জার্মানিতে মাস্টার্স পথ।",
      "page.masters.lede": "আপনার ব্যাচেলর ডিগ্রি, ক্রেডিট, ভাষা ও পূর্বশর্ত মিলিয়ে সম্ভাব্য প্রোগ্রাম মূল্যায়ন।",
      "page.process.crumb": "আবেদন প্রক্রিয়া",
      "page.process.eye": "আবেদন প্রক্রিয়া",
      "page.process.h1": "প্রোফাইল থেকে জমা দেওয়া ফাইল পর্যন্ত।",
      "page.process.lede": "পথটি সুশৃঙ্খল। কিন্তু ভেতরের নিয়ম বিশ্ববিদ্যালয়ভেদে এক নয়।",
      "process.jumpSteps": "নয়টি ধাপ",
      "process.jumpRoutes": "আবেদন রুট",
      "process.stepsKicker": "কীভাবে কাজ করে",
      "process.stepsTitle": "প্রোফাইল থেকে জার্মানি",
      "process.stepsIntro": "নয়টি স্পষ্ট ধাপ। কিছু প্রোগ্রাম ধাপ বাদ দেয় বা সাজায় — আপনার শর্টলিস্ট ঠিক করে কোনগুলো প্রযোজ্য।",
      "process.phasePrepare": "প্রস্তুতি",
      "process.phaseApply": "আবেদন",
      "process.phaseArrive": "পৌঁছানো",
      "process.s1t": "বিনামূল্যে পরামর্শ",
      "process.s1p": "ব্যাকগ্রাউন্ড ও পড়ার স্তর দিয়ে শুরু — যা জানা আছে আর যা এখনও যাচাই করতে হবে, আলাদা করি।",
      "process.s2t": "প্রোফাইল যাচাই",
      "process.s2p": "একাডেমিক, ভাষা ও কাজের অভিজ্ঞতা আপনার বিবেচ্য প্রোগ্রামের ধরনের সাথে মিলিয়ে দেখা হয়।",
      "process.s3t": "বিশ্ববিদ্যালয় শর্টলিস্ট",
      "process.s3p": "যে প্রোগ্রামগুলো মানানসই হতে পারে — সবার জন্য একই তালিকা নয়।",
      "process.s4t": "আবেদন পরিকল্পনা",
      "process.s4p": "কোন রুট, কোন ডেডলাইন, কোন ডকুমেন্ট কোন প্রোগ্রামের জন্য।",
      "process.s5t": "ডকুমেন্ট প্রস্তুতি",
      "process.s5p": "ট্রান্সক্রিপ্ট, সার্টিফিকেট, ভাষা প্রমাণ, সিভি ও মোটিভেশন লেটার — শুধু যা দরকার।",
      "process.s6t": "অনলাইন আবেদন",
      "process.s6p": "uni-assist, My assist, VPD বা বিশ্ববিদ্যালয় পোর্টাল — প্রোগ্রাম যা বলে।",
      "process.s7t": "ভর্তি",
      "process.s7p": "ফলাফল পড়তে সাহায্য। সিদ্ধান্ত বিশ্ববিদ্যালয়ের।",
      "process.s8t": "দূতাবাস প্রস্তুতি",
      "process.s8p": "স্টুডেন্ট ভিসা ফাইলের ডকুমেন্ট নির্দেশনা, বর্তমান অফিসিয়াল চেকলিস্ট অনুযায়ী।",
      "process.s9t": "প্রি-ডিপারচার",
      "process.s9p": "পরিকল্পনা নিশ্চিত হলে ব্যবহারিক নোট — তার আগে নয়।",
      "process.routesIntro": "এটি সম্ভাব্য রুটের মানচিত্র। ফাইল প্রস্তুতের আগে প্রোগ্রাম পেজে রুট নিশ্চিত করুন।",
      "process.routeNote": "সব জার্মান বিশ্ববিদ্যালয় uni-assist ব্যবহার করে না। সরাসরি আবেদনও স্বাভাবিক রুট।",
      "process.ctaK": "পরবর্তী ধাপ",
      "process.ctaT": "বিনামূল্যে ঘণ্টায় আপনার রুট ম্যাপ করুন",
      "process.ctaP": "একাডেমিক ব্যাকগ্রাউন্ড ও লক্ষ্য নিয়ে আসুন। কোন ধাপ ও রুট আপনার জন্য, আমরা স্পষ্ট করব।",
      "page.support.crumb": "শিক্ষার্থী সহায়তা",
      "page.support.eye": "শিক্ষার্থী সহায়তা",
      "page.support.h1": "ফর্মের চেয়ে দীর্ঘ সম্পর্ক।",
      "page.support.lede": "আবেদন জমা দেওয়া প্রক্রিয়ার মাঝামাঝি। ভর্তি, দূতাবাস ফাইল ও যাত্রার আগের সপ্তাহগুলোতেও প্রশ্ন থাকে।",
      "page.faq.crumb": "প্রশ্নোত্তর",
      "page.faq.eye": "প্রশ্নোত্তর",
      "page.faq.h1": "সোজা উত্তর।",
      "page.faq.lede": "প্রশ্ন না থাকলে পরামর্শে আনুন। সৎ উত্তর যদি হয় “প্রোগ্রামের ওপর নির্ভর করে,” সেটাই উত্তর।",
      "faq.asideKicker": "বিষয় অনুযায়ী দেখুন",
      "faq.asideTitle": "আপনার উত্তর খুঁজুন",
      "faq.asideIntro": "সংক্ষিপ্ত, সৎ উত্তর। কোনো মার্কেটিং ভাষা নয়। গ্রুপ খুলুন, বা সরাসরি বিষয়ে যান।",
      "faq.asideCta": "এখনও অনিশ্চিত?",
      "faq.g1": "মূল বিষয়",
      "faq.g2": "যা আমরা প্রতিশ্রুতি দিই না",
      "faq.g3": "রুট ও প্রয়োজনীয়তা",
      "faq.g4": "আবেদনের পরে",
      "faq.ctaK": "পরবর্তী ধাপ",
      "faq.ctaT": "অজানা প্রশ্ন নিয়ে আসুন",
      "faq.ctaP": "প্রোফাইল বা প্রোগ্রামনির্ভর যেকোনো বিষয়ের জন্য বিনামূল্যে ঘণ্টাই সঠিক জায়গা।",
      "faq.q0": "আপনি কি শুধু জার্মানি নিয়ে কাজ করেন?",
      "faq.a0": "হ্যাঁ। DeutschPath শুধুমাত্র জার্মানিতে মনোযোগ দেয়।",
      "faq.q1": "ব্যাচেলর ও মাস্টার্স দুটোই সাপোর্ট করেন?",
      "faq.a1": "হ্যাঁ। ব্যাচেলর ও মাস্টার্স আবেদনকারীদের জন্য নির্দেশনা আছে।",
      "faq.q2": "পরামর্শ কি বিনামূল্যে?",
      "faq.a2": "হ্যাঁ, প্রথম পরামর্শ এক ঘণ্টা এবং বিনামূল্যে।",
      "faq.q3": "ভর্তির গ্যারান্টি দেন?",
      "faq.a3": "না। বিশ্ববিদ্যালয় স্বাধীনভাবে ভর্তির সিদ্ধান্ত নেয়।",
      "faq.q4": "ভিসার গ্যারান্টি দেন?",
      "faq.a4": "না। জার্মান কর্তৃপক্ষ স্বাধীনভাবে ভিসার সিদ্ধান্ত নেয়।",
      "faq.q5": "দূতাবাসের অ্যাপয়েন্টমেন্ট বুক করেন?",
      "faq.a5": "অনলাইন অ্যাপয়েন্টমেন্ট প্রক্রিয়ায় নির্দেশনা দিই, কিন্তু উপলভ্যতা সংশ্লিষ্ট কর্তৃপক্ষ নিয়ন্ত্রণ করে।",
      "faq.q6": "uni-assist সাপোর্ট করেন?",
      "faq.a6": "হ্যাঁ, যেখানে uni-assist প্রযোজ্য আবেদন রুট।",
      "faq.q7": "VPD-তে সাহায্য করেন?",
      "faq.a7": "হ্যাঁ। প্রোগ্রাম VPD চাইলে সেই ধাপ বুঝতে সাহায্য করি।",
      "faq.q8": "বিশ্ববিদ্যালয় বেছে নিতে সাহায্য করতে পারেন?",
      "faq.a8": "হ্যাঁ। প্রোফাইল যাচাই করে সম্ভাব্য উপযুক্ত প্রোগ্রাম চিহ্নিত করতে সাহায্য করি।",
      "faq.q9": "আবেদন জমার পরেও যোগাযোগ করতে পারি?",
      "faq.a9": "হ্যাঁ। চলমান শিক্ষার্থী সহায়তা আমাদের সেবার অংশ।",
      "faq.q10": "বিনামূল্যে ঘণ্টায় কী হয়?",
      "faq.a10": "একাডেমিক ব্যাকগ্রাউন্ড, পড়ার স্তর ও প্রযোজ্য জার্মানি প্রক্রিয়া দেখি। আপনি স্পষ্ট পরবর্তী ধাপ নিয়ে বেরোন। এই ঘণ্টা ভর্তি বা ভিসার সিদ্ধান্ত নয়।",
      "faq.q11": "পরামর্শের পর সেবার খরচ কত?",
      "faq.a11": "চালিয়ে যাওয়ার আগে যেকোনো ফি ব্যাখ্যা করা হয়। প্রথম এক ঘণ্টার পরামর্শ বিনামূল্যে। স্কোপ স্পষ্ট না হওয়া পর্যন্ত মূল্য প্রকাশ করা হয় না।",
      "faq.q12": "শুধু বাংলাদেশের আবেদনকারীদের জন্য?",
      "faq.a12": "DeutschPath বাংলাদেশ থেকে আবেদনকারী শিক্ষার্থীদের জন্য তৈরি। অন্যত্র থাকলে পরামর্শ অনুরোধে জানান — টিম নিশ্চিত করবে সাহায্য করা যায় কিনা।",
      "faq.q13": "প্রয়োজনীয়তা কোথায় নিশ্চিত করব?",
      "faq.a13": "বর্তমান প্রোগ্রাম পেজ, বিশ্ববিদ্যালয় যে রুট বলে, এবং সংশ্লিষ্ট কর্তৃপক্ষের অফিসিয়াল নির্দেশনা ব্যবহার করুন। প্রয়োজনীয়তা বদলায়, আগের আবেদনকারীর চেকলিস্ট মিল নাও খেতে পারে।",
      "page.contact.crumb": "যোগাযোগ",
      "page.contact.eye": "যোগাযোগ",
      "page.contact.h1": "DeutschPath-এর সাথে কথা বলুন।",
      "page.contact.lede": "প্রশ্ন করুন, কলব্যাক চান, বা বিনামূল্যে পরামর্শ দিয়ে শুরু করুন।",
      "contact.phone": "ফোন",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "ইমেইল",
      "contact.office": "অফিস",
      "contact.pending": "শীঘ্রই প্রকাশিত হবে",
      "contact.consultKicker": "কল চান?",
      "contact.consultTitle": "বিনামূল্যে ঘণ্টা বুক করুন",
      "contact.consultText": "আপনার প্রোফাইল ও জার্মানি অপশন নিয়ে ৬০ মিনিটের আলোচনা — প্রথম সেশনে কোনো চার্জ নেই।",
      "contact.socialNote": "সোশ্যাল প্রোফাইল তৈরি হলে ফুটারে দেখা যাবে।",
      "contact.formTitle": "বার্তা পাঠান",
      "contact.formIntro": "আপনার প্রশ্ন লিখুন। আপনার দেওয়া যোগাযোগের মাধ্যমে আমরা উত্তর দেব।",
      "contact.send": "বার্তা পাঠান",
      "contact.statusTitle": "বার্তার অবস্থা",
      "page.book.crumb": "পরামর্শ বুক",
      "page.book.eye": "পরামর্শ",
      "page.book.h1": "বিনামূল্যে ১ ঘণ্টার পরামর্শ বুক করুন।",
      "page.book.lede": "আপনার একাডেমিক ব্যাকগ্রাউন্ড, লক্ষ্য ও পরিকল্পনা বলুন। আমরা পরবর্তী ধাপ বুঝতে সাহায্য করব। এই ঘণ্টা জার্মানি-কেন্দ্রিক এবং বিনামূল্যে।",
      "book.m1": "৬০",
      "book.m1s": "মিনিট",
      "book.m2": "বিনামূল্যে",
      "book.m2s": "প্রথম ঘণ্টা",
      "book.m3": "DE",
      "book.m3s": "শুধু জার্মানি",
      "book.coverKicker": "এই ঘণ্টায়",
      "book.coverTitle": "কী নিয়ে আলোচনা হয়",
      "book.cover1": "আপনার একাডেমিক ব্যাকগ্রাউন্ড ও লক্ষ্যমাত্রার স্তর",
      "book.cover2": "জার্মানিতে আবেদনের রুট কীভাবে আলাদা",
      "book.cover3": "কোন নথি আগে সংগ্রহ করা যুক্তিযুক্ত",
      "book.cover4": "আপনার কেসের জন্য পরবর্তী বাস্তবধর্মী ধাপ",
      "book.limitKicker": "সীমা",
      "book.limitTitle": "এই ঘণ্টা কী নয়",
      "book.limitBody": "এটি ভর্তির সিদ্ধান্ত, ভিসার সিদ্ধান্ত, বা কোনো নির্দিষ্ট বিশ্ববিদ্যালয়ের প্রতিশ্রুতি নয়।",
      "book.topicNote": "আপনি বিশ্ববিদ্যালয় অপশন নিয়ে জিজ্ঞাসা করেছেন। নিচে আপনার বিষয় ও একাডেমিক ব্যাকগ্রাউন্ড যোগ করুন যাতে আলোচনা আপনার প্রোফাইল থেকে শুরু হয়।",
      "book.formKicker": "অনুরোধ",
      "book.formTitle": "বিনামূল্যে ঘণ্টা বুক করুন",
      "book.formIntro": "<span aria-hidden=\"true\">*</span> চিহ্নিত ঘরগুলো আবশ্যক। সেশনের প্রস্তুতির জন্য এই তথ্য ব্যবহার করা হয়।",
      "book.legendContact": "যোগাযোগ",
      "book.legendAcademic": "একাডেমিক প্রোফাইল",
      "book.legendTime": "পছন্দের সময়",
      "book.footnote": "প্রথম ঘণ্টার জন্য কোনো পেমেন্ট নেই। পরবর্তী কোনো ফি আগেই ব্যাখ্যা করা হয়।",
      "book.formSubmit": "বিনামূল্যে পরামর্শ অনুরোধ করুন",
      "book.successTitle": "অনুরোধের অবস্থা",
      "book.backHome": "হোমে ফিরুন",
      "page.universities.crumb": "বিশ্ববিদ্যালয়",
      "page.universities.eye": "ডিরেক্টরি",
      "page.universities.h1": "বিশ্ববিদ্যালয় ডিরেক্টরি",
      "page.universities.lede": "ব্রাউজের জন্য নমুনা তালিকা। শর্ত সবসময় অফিসিয়াল প্রোগ্রাম পেজে নিশ্চিত করুন।",
      "page.404.h1": "এই পৃষ্ঠা পথে নেই।",
      "page.404.lede": "লিংক পুরনো হতে পারে, অথবা পৃষ্ঠা সরে গেছে।",
      "page.404.home": "হোমে ফিরুন",

      "form.name": "পুরো নাম",
      "form.email": "ইমেইল",
      "form.phone": "ফোন / WhatsApp",
      "form.message": "বার্তা",
      "form.level": "পড়াশোনার স্তর",
      "form.topic": "বিষয়",
      "form.submit": "অনুরোধ জমা দিন",
      "form.sending": "পাঠানো হচ্ছে…",
      "form.sent": "অনুরোধ পেয়েছি। আপনার দেওয়া যোগাযোগ মাধ্যমে আমরা উত্তর দেব।",
      "form.error": "কিছু ভুল হয়েছে। আবার চেষ্টা করুন অথবা WhatsApp / ইমেইল ব্যবহার করুন।",
      "form.required": "প্রয়োজনীয় ঘরগুলো পূরণ করুন।"
    },

    de: {
      "meta.home.title": "Studieren in Deutschland | Bachelor- & Master-Bewerbungsberatung | DeutschPath",
      "meta.about.title": "Über DeutschPath | Deutschland-fokussierte Studienberatung",
      "meta.services.title": "Leistungen | DeutschPath",
      "meta.bachelors.title": "Bachelor in Deutschland | DeutschPath",
      "meta.masters.title": "Master in Deutschland | DeutschPath",
      "meta.process.title": "Bewerbungsprozess | DeutschPath",
      "meta.support.title": "Studierenden-Support | DeutschPath",
      "meta.faq.title": "FAQ | DeutschPath",
      "meta.contact.title": "Kontakt | DeutschPath",
      "meta.book.title": "Kostenlose Beratung buchen | DeutschPath",
      "meta.universities.title": "Hochschulen | DeutschPath",
      "meta.404.title": "Seite nicht gefunden | DeutschPath",

      "ui.skip": "Zum Inhalt springen",
      "ui.openMenu": "Menü öffnen",
      "ui.closeMenu": "Menü schließen",
      "ui.homeAria": "DeutschPath Startseite",
      "ui.lang": "Sprache",
      "ui.langLoading": "Sprache wird gewechselt…",
      "ui.contact": "Kontakt",
      "ui.whatsapp": "WhatsApp",
      "ui.home": "Start",
      "ui.leaveTitle": "Diese Seite verlassen?",
      "ui.leaveBody": "Sie verlassen DeutschPath und öffnen WhatsApp. Möchten Sie fortfahren?",
      "ui.leaveStay": "Hier bleiben",
      "ui.leaveContinue": "Weiter zu WhatsApp",

      "nav.about": "Über uns",
      "nav.services": "Leistungen",
      "nav.bachelors": "Bachelor",
      "nav.masters": "Master",
      "nav.process": "Prozess",
      "nav.support": "Support",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.book": "Kostenlose Beratung buchen",
      "nav.bookShort": "Beratung buchen",
      "nav.bookMini": "Buchen",

      "cta.book": "Kostenlose Beratung buchen",
      "cta.bookHour": "Kostenlose 1-Stunden-Beratung buchen",
      "cta.exploreServices": "Leistungen entdecken",
      "cta.contactUs": "Kontakt aufnehmen",
      "cta.universityOptions": "Meine Hochschuloptionen erhalten",
      "cta.bachelors": "Bachelor-Optionen ansehen",
      "cta.masters": "Master-Optionen ansehen",
      "cta.fullFaq": "Vollständige FAQ lesen →",
      "cta.routeLink": "Ihren Bewerbungsweg verstehen →",

      "footer.copy": "© {year} DeutschPath · Nur Deutschland",
      "footer.disclaimer": "Unabhängige Bildungsberatung. Zulassungs- und Visumentscheidungen liegen bei Hochschulen und Behörden.",

      "home.heroTitle": "Ihr geführter Weg nach Deutschland",
      "home.heroLede": "Deutschland-fokussierte Beratung für Bachelor- und Master-Bewerberinnen und -Bewerber — von der Hochschulwahl und Bewerbungsvorbereitung bis Zulassung und Botschaftsdokumente.",
      "home.meta1": "Nur Deutschland",
      "home.meta2": "Bachelor & Master",
      "home.meta3": "Bewerbungsunterstützung",
      "home.trustAria": "So arbeitet DeutschPath",
      "home.trust1": "Deutschland-fokussiert",
      "home.trust2": "Bachelor & Master",
      "home.trust3": "Bewerbungsberatung",
      "home.trust4": "Studierenden-Support",
      "home.trust5": "Transparenter Prozess",
      "home.sitKicker": "Die Situation",
      "home.sitTitle": "Eine Bewerbung nach Deutschland kann kompliziert wirken.",
      "home.sitIntro": "Deutsche Hochschulen können unterschiedliche Zulassungsvoraussetzungen, Portale, Fristen, Dokumente und Verfahren haben.",
      "home.struggle": "Studierende fragen sich oft:",
      "home.q1": "An welche Hochschule soll ich mich bewerben?",
      "home.q2": "Passt mein akademischer Hintergrund?",
      "home.q3": "Brauche ich uni-assist?",
      "home.q4": "Brauche ich eine VPD?",
      "home.q5": "Welche Dokumente sind nötig?",
      "home.q6": "Wo bewerbe ich mich?",
      "home.q7": "Welche Frist gilt?",
      "home.q8": "Wie bereite ich die Botschaft vor?",
      "home.q9": "Was passiert nach der Einreichung?",
      "home.sense": "Wir helfen Ihnen, den Prozess zu verstehen.",
      "home.svcKicker": "Leistungen",
      "home.svcTitle": "Alles, was Sie für Ihre Deutschland-Bewerbung brauchen",
      "home.svc1t": "Kostenlose Beratung",
      "home.svc1p": "Eine Stunde, um Profil, Ziele und Studienoptionen in Deutschland zu klären.",
      "home.svc1g": "Termin buchen",
      "home.svc2t": "Profilprüfung",
      "home.svc2p": "Prüfung Ihres akademischen und beruflichen Hintergrunds.",
      "home.svc2g": "So funktioniert’s",
      "home.svc3t": "Hochschulauswahl",
      "home.svc3p": "Programme finden, die zu Profil und Zielen passen können.",
      "home.svc3g": "Hochschul-Support",
      "home.svc4t": "Bewerbungsunterstützung",
      "home.svc4p": "Begleitung durch hochschulspezifische Verfahren.",
      "home.svc4g": "Prozess ansehen",
      "home.svc5t": "uni-assist & VPD",
      "home.svc5p": "Hilfe bei relevanten uni-assist- und VPD-Schritten.",
      "home.svc5g": "Wege verstehen",
      "home.svc6t": "Dokumentenvorbereitung",
      "home.svc6p": "Bewerbungsunterlagen ordnen und prüfen.",
      "home.svc6g": "Dokumenten-Support",
      "home.svc7t": "Botschaftsvorbereitung",
      "home.svc7p": "Hilfe bei Dokumenten für das Studentenvisum.",
      "home.svc7g": "Botschaftsleitfaden",
      "home.svc8t": "Termin-Leitfaden",
      "home.svc8p": "Hilfe beim Online-Terminverfahren.",
      "home.svc8g": "Was abgedeckt ist",
      "home.svc9t": "Studierenden-Support",
      "home.svc9p": "Weiterhin Beratung, wenn Fragen entstehen.",
      "home.svc9g": "Support ansehen",
      "home.pathKicker": "So funktioniert’s",
      "home.pathTitle": "Vom Profil nach Deutschland",
      "home.pathIntro": "Neun klare Schritte. Manche Programme überspringen oder ordnen Schritte neu — Ihre Shortlist entscheidet.",
      "home.stagePrepare": "Vorbereiten",
      "home.stageApply": "Bewerben",
      "home.stageArrive": "Ankommen",
      "home.p1t": "Kostenlose Beratung",
      "home.p1p": "Ein einstündiges Gespräch über Profil und nächste Schritte.",
      "home.p2t": "Profilprüfung",
      "home.p2p": "Akademischer Hintergrund, Sprache und relevante Erfahrung.",
      "home.p3t": "Hochschul-Shortlist",
      "home.p3p": "Programme, die passen können — keine Einheitsliste.",
      "home.p4t": "Bewerbungsplanung",
      "home.p4p": "Fristen, Wege und Reihenfolge der Aufgaben.",
      "home.p5t": "Dokumentenvorbereitung",
      "home.p5p": "Zeugnisse, Sprachnachweis, Lebenslauf und Motivationsschreiben.",
      "home.p6t": "Online-Bewerbung",
      "home.p6p": "uni-assist, Hochschulportal oder ein anderer genannter Weg.",
      "home.p7t": "Zulassung",
      "home.p7p": "Hilfe beim Lesen eines Angebots. Die Hochschule entscheidet.",
      "home.p8t": "Botschaftsvorbereitung",
      "home.p8p": "Leitfaden für die Studentenvisum-Akte.",
      "home.p9t": "Pre-Departure",
      "home.p9p": "Praktische Orientierung, sobald Pläne feststehen.",
      "home.bandEyebrow": "Nur Deutschland",
      "home.bandStatement": "Ein professioneller Bildungsweg nach Deutschland — kein generisches Auslandsbüro.",
      "home.fitKicker": "Hochschul-Fit",
      "home.fitTitle": "Die passende deutsche Hochschule für Ihr Profil finden",
      "home.fitIntro": "Deutsche Hochschulen haben unterschiedliche Zulassungsstrukturen. Wir geben nicht jedem dieselbe Liste.",
      "home.fitQuote": "Akademischer Hintergrund, Fachanforderungen, Sprachqualifikationen und Karriereziele zählen.",
      "home.fit1t": "Universitäten",
      "home.fit1p": "Forschungsorientierte Einrichtungen mit eigenen Regeln.",
      "home.fit2t": "Fachhochschulen",
      "home.fit2p": "Praxisnahe Programme, oft mit eigenen Portalen.",
      "home.fit3t": "Englischsprachig",
      "home.fit3p": "Trotzdem gilt der Sprachnachweis, den das Programm nennt.",
      "home.fit4t": "Deutschsprachig",
      "home.fit4p": "Das Sprachniveau ist Teil der Zulassungsprüfung.",
      "home.fit5t": "Bachelor",
      "home.fit5p": "Schulqualifikationen und Fach-Fit stehen zuerst.",
      "home.fit6t": "Master",
      "home.fit6p": "Credits, Fachpassung und Voraussetzungen zählen.",
      "home.routeKicker": "Bewerbungswege",
      "home.routeTitle": "Ein Land. Viele Bewerbungswege.",
      "home.routeIntro": "Das sind mögliche Wege — keine Abfolge, der jede Hochschule folgt. Der genaue Pfad hängt vom Programm ab.",
      "home.r1t": "Hochschule",
      "home.r1p": "Beginnen Sie mit den Regeln des Programms.",
      "home.r2t": "uni-assist",
      "home.r2p": "Nur wenn die Hochschule das nutzt.",
      "home.r3t": "My assist",
      "home.r3p": "Das uni-assist-Bewerberportal.",
      "home.r4t": "VPD",
      "home.r4p": "Wenn eine Vorprüfungsdokumentation nötig ist.",
      "home.r5t": "Hochschulportal",
      "home.r5p": "Direkte Bewerbung an der Hochschule.",
      "home.routeNote": "Nehmen Sie nicht an, dass jede deutsche Hochschule uni-assist nutzt.",
      "home.baKicker": "Bachelor",
      "home.baTitle": "Planen Sie einen Bachelor in Deutschland?",
      "home.baBody": "Wir helfen bei Eignung, Schulqualifikationen, Sprachanforderungen, Fristen und Dokumenten.",
      "home.maKicker": "Master",
      "home.maTitle": "Planen Sie einen Master in Deutschland?",
      "home.maBody": "Wir prüfen Bachelor, CGPA, Credits, ECTS, Sprache, Erfahrung und Voraussetzungen.",
      "home.truthKicker": "Transparenz",
      "home.truthTitle": "Keine falschen Versprechen.<br>Nur klare Beratung.",
      "home.truthIntro": "Hochschulen entscheiden über Zulassung. Behörden entscheiden über Visa. Unsere Rolle: Vorbereitung und Organisation.",
      "home.truth1": "Hochschulzulassung",
      "home.truth2": "Visumgenehmigung",
      "home.truth3": "Botschaftstermin",
      "home.truth4": "Stipendien",
      "home.truth5": "Konkrete Ergebnisse",
      "home.notGuaranteed": "Nicht garantiert",
      "home.consultKicker": "Kostenlose Beratung",
      "home.consultTitle": "Unsicher, wo Sie starten sollen?",
      "home.consultIntro": "Holen Sie sich eine kostenlose 1-Stunden-Beratung zu Ihren Studienoptionen in Deutschland.",
      "home.m1": "60 Minuten",
      "home.m1s": "Sitzung",
      "home.m2": "Kostenlos",
      "home.m2s": "Erste Beratung",
      "home.m3": "Deutschland-fokussiert",
      "home.m3s": "Nur Deutschland",
      "home.faqKicker": "FAQ",
      "home.faqTitle": "Klare Antworten",
      "home.faqIntro": "Klare Fragen. Ehrliche Antworten. Keine Marketingsprache.",
      "home.faq1q": "Arbeiten Sie nur mit Deutschland?",
      "home.faq1a": "Ja. DeutschPath konzentriert sich ausschließlich auf Deutschland.",
      "home.faq2q": "Unterstützen Sie Bachelor und Master?",
      "home.faq2a": "Ja. Beratung gibt es für Bachelor- und Master-Bewerberinnen und -Bewerber.",
      "home.faq3q": "Ist die Beratung kostenlos?",
      "home.faq3a": "Ja, die erste Beratung dauert eine Stunde und ist kostenlos.",
      "home.faq4q": "Garantieren Sie Zulassung oder Visum?",
      "home.faq4a": "Nein. Hochschulen und Behörden entscheiden unabhängig.",
      "home.faq5q": "Unterstützen Sie uni-assist und VPD?",
      "home.faq5a": "Ja, wenn diese Wege für Ihr Programm gelten.",
      "home.faq6q": "Kann ich nach der Einreichung Kontakt aufnehmen?",
      "home.faq6a": "Ja. Durchgehender Studierenden-Support gehört zu unserem Modell.",
      "home.beginKicker": "Start",
      "home.beginTitle": "Ihre Deutschland-Reise beginnt mit einem Gespräch.",
      "home.beginIntro": "Erzählen Sie uns von Hintergrund, Zielen und Plänen. Wir klären die nächsten Schritte.",

      "page.about.crumb": "Über uns",
      "page.about.eye": "Über uns",
      "page.about.h1": "Nur Deutschland. Klare Beratung.",
      "page.about.lede": "DeutschPath ist für Studierende, die einen fokussierten Weg zum deutschen Bachelor oder Master wollen — ohne falsche Versprechen.",
      "team.kicker": "Die Menschen",
      "team.title": "Unser Team",
      "team.intro": "Vier Personen hinter der deutschlandbezogenen Beratung — aus Bangladesch und von Campussen in Deutschland.",
      "team.r1": "Engineering",
      "team.b1": "Senior Software Engineer bei Singularity Limited",
      "team.r2": "Beratung",
      "team.b2": "EEE-Absolvent, SUST",
      "team.r3": "Deutschland",
      "team.b3": "Masterstudierender an der TU Berlin, Deutschland",
      "team.r4": "Deutschland",
      "team.b4": "Masterstudierender an der Universität Osnabrück, Deutschland",
      "page.services.crumb": "Leistungen",
      "page.services.eye": "Leistungen",
      "page.services.h1": "Unterstützung entlang des Bewerbungswegs.",
      "page.services.lede": "Vom ersten Gespräch bis zur Botschaftsvorbereitung — jede Leistung folgt den Schritten, die Hochschulen und Behörden wirklich verlangen.",
      "services.jumpPrepare": "Vorbereiten",
      "services.jumpApply": "Bewerben",
      "services.jumpArrive": "Zulassung & Visum",
      "services.jumpSupport": "Laufender Support",
      "services.asideKicker": "Vier Stufen",
      "services.asideTitle": "Wählen Sie, wo Sie stehen",
      "services.asideIntro": "Nutzen Sie nur, was Sie brauchen. Springen Sie zu einer Stufe — oder starten Sie mit der kostenlosen Stunde.",
      "services.asideCta": "Unsicher, welche Stufe?",
      "services.g1k": "01 — Vorbereiten",
      "services.g1t": "Profil und Optionen verstehen",
      "services.g1p": "Beginnen Sie mit Passung und Richtung — vor jedem Portal oder Formular.",
      "services.g2k": "02 — Bewerben",
      "services.g2t": "Planen, vorbereiten und einreichen",
      "services.g2p": "Dokumente, Wege und Portale — abgestimmt auf Ihre Shortlist.",
      "services.g3k": "03 — Zulassung & Visum",
      "services.g3t": "Nach dem Angebot",
      "services.g3p": "Lesen Sie die Entscheidung sorgfältig und bereiten Sie die Botschaftsakte ohne falsche Versprechen vor.",
      "services.g4k": "04 — Laufend",
      "services.g4t": "Auch nach der Einreichung unterstützt bleiben",
      "services.g4p": "Fragen bleiben. Die Beziehung endet nicht mit dem Upload.",
      "services.ctaK": "Nächster Schritt",
      "services.ctaT": "Mit der kostenlosen Stunde starten",
      "services.ctaP": "Erzählen Sie uns von Hintergrund und Zielen. Wir klären, welche Leistungen für Ihren Fall gelten.",
      "page.bachelors.crumb": "Bachelor",
      "page.bachelors.eye": "Bachelor",
      "page.bachelors.h1": "Bachelor-Wege in Deutschland.",
      "page.bachelors.lede": "Eignung, Schulqualifikationen, Sprache, Fristen und Dokumente — erklärt für Ihr Profil.",
      "page.masters.crumb": "Master",
      "page.masters.eye": "Master",
      "page.masters.h1": "Master-Wege in Deutschland.",
      "page.masters.lede": "Wir prüfen Bachelor, Credits, Sprache und Voraussetzungen gegen passende Programme.",
      "page.process.crumb": "Bewerbungsprozess",
      "page.process.eye": "Bewerbungsprozess",
      "page.process.h1": "Vom Profil zur eingereichten Akte.",
      "page.process.lede": "Der Weg ist geordnet. Die Regeln darin sind von Hochschule zu Hochschule nicht identisch.",
      "process.jumpSteps": "Neun Schritte",
      "process.jumpRoutes": "Bewerbungswege",
      "process.stepsKicker": "So funktioniert’s",
      "process.stepsTitle": "Vom Profil nach Deutschland",
      "process.stepsIntro": "Neun klare Schritte. Manche Programme überspringen oder ordnen Schritte neu — Ihre Shortlist entscheidet.",
      "process.phasePrepare": "Vorbereiten",
      "process.phaseApply": "Bewerben",
      "process.phaseArrive": "Ankommen",
      "process.s1t": "Kostenlose Beratung",
      "process.s1p": "Wir starten mit Hintergrund und angestrebtem Abschluss und trennen Bekanntes von noch zu Prüfendem.",
      "process.s2t": "Profilprüfung",
      "process.s2p": "Akademischer Hintergrund, Sprache und Erfahrung werden am angedachten Programmtyp gemessen.",
      "process.s3t": "Hochschul-Shortlist",
      "process.s3p": "Eine kurze Liste möglicher Programme — keine Einheitsliste für alle.",
      "process.s4t": "Bewerbungsplanung",
      "process.s4p": "Welcher Weg, welche Frist und welche Dokumente zu welchem Programm gehören.",
      "process.s5t": "Dokumentenvorbereitung",
      "process.s5p": "Zeugnisse, Sprachnachweis, Lebenslauf und Motivationsschreiben — nur soweit nötig.",
      "process.s6t": "Online-Bewerbung",
      "process.s6p": "uni-assist, My assist, VPD oder Hochschulportal — je nachdem, was das Programm nennt.",
      "process.s7t": "Zulassung",
      "process.s7p": "Hilfe beim Lesen des Ergebnisses. Die Hochschule entscheidet.",
      "process.s8t": "Botschaftsvorbereitung",
      "process.s8p": "Dokumentenleitfaden für die Studentenvisum-Akte anhand der aktuellen Checkliste.",
      "process.s9t": "Pre-Departure",
      "process.s9p": "Praktische Hinweise, sobald der Plan feststeht — nicht früher.",
      "process.routesIntro": "Nutzen Sie dies als Landkarte möglicher Wege. Bestätigen Sie den Weg auf der Programmseite, bevor Sie eine Akte vorbereiten.",
      "process.routeNote": "Nicht jede deutsche Hochschule nutzt uni-assist. Direkte Bewerbung ist ein normaler Weg.",
      "process.ctaK": "Nächster Schritt",
      "process.ctaT": "Ihren Weg in der kostenlosen Stunde klären",
      "process.ctaP": "Bringen Sie akademischen Hintergrund und Ziele mit. Wir klären, welche Schritte und Wege für Sie gelten.",
      "page.support.crumb": "Studierenden-Support",
      "page.support.eye": "Studierenden-Support",
      "page.support.h1": "Eine Beziehung, die länger hält als das Formular.",
      "page.support.lede": "Die Einreichung ist die Mitte des Prozesses. Fragen bleiben durch Zulassung, Botschaftsakte und die Wochen vor der Reise.",
      "page.faq.crumb": "FAQ",
      "page.faq.eye": "FAQ",
      "page.faq.h1": "Klare Antworten.",
      "page.faq.lede": "Fehlt eine Frage, bringen Sie sie zur Beratung. Wenn die ehrliche Antwort „das hängt vom Programm ab“ lautet — genau das ist die Antwort.",
      "faq.asideKicker": "Nach Thema browsen",
      "faq.asideTitle": "Finden Sie Ihre Antwort",
      "faq.asideIntro": "Kurze, ehrliche Antworten. Keine Marketingsprache. Öffnen Sie eine Gruppe oder springen Sie direkt zum Thema.",
      "faq.asideCta": "Noch unsicher?",
      "faq.g1": "Die Basics",
      "faq.g2": "Was wir nicht versprechen",
      "faq.g3": "Wege und Anforderungen",
      "faq.g4": "Nach der Bewerbung",
      "faq.ctaK": "Nächster Schritt",
      "faq.ctaT": "Bringen Sie die offene Frage mit",
      "faq.ctaP": "Die kostenlose Stunde ist der richtige Ort für alles, was von Profil oder Programm abhängt.",
      "faq.q0": "Arbeiten Sie nur mit Deutschland?",
      "faq.a0": "Ja. DeutschPath konzentriert sich ausschließlich auf Deutschland.",
      "faq.q1": "Unterstützen Sie Bachelor und Master?",
      "faq.a1": "Ja. Beratung gibt es für Bachelor- und Master-Bewerberinnen und -Bewerber.",
      "faq.q2": "Ist die Beratung kostenlos?",
      "faq.a2": "Ja, die erste Beratung dauert eine Stunde und ist kostenlos.",
      "faq.q3": "Garantieren Sie Zulassung?",
      "faq.a3": "Nein. Hochschulen entscheiden unabhängig über die Zulassung.",
      "faq.q4": "Garantieren Sie ein Visum?",
      "faq.a4": "Nein. Deutsche Behörden entscheiden unabhängig über Visa.",
      "faq.q5": "Buchen Sie Botschaftstermine?",
      "faq.a5": "Wir geben Leitfaden für das Online-Terminverfahren, aber die Verfügbarkeit steuern die zuständigen Behörden.",
      "faq.q6": "Unterstützen Sie uni-assist?",
      "faq.a6": "Ja, wenn uni-assist der geltende Bewerbungsweg ist.",
      "faq.q7": "Helfen Sie bei der VPD?",
      "faq.a7": "Ja. Wenn ein Programm eine VPD verlangt, helfen wir, diesen Schritt zu verstehen.",
      "faq.q8": "Können Sie bei der Hochschulwahl helfen?",
      "faq.a8": "Ja. Wir prüfen Ihr Profil und helfen, potenziell passende Programme zu finden.",
      "faq.q9": "Kann ich nach der Einreichung Kontakt aufnehmen?",
      "faq.a9": "Ja. Durchgehender Studierenden-Support gehört zu unserem Modell.",
      "faq.q10": "Was passiert in der kostenlosen Stunde?",
      "faq.a10": "Wir sehen uns akademischen Hintergrund, angestrebten Abschluss und die für Sie relevanten Schritte an. Sie gehen mit klareren nächsten Schritten. Die Stunde ist keine Zulassungs- oder Visumentscheidung.",
      "faq.q11": "Was kosten Leistungen nach der Beratung?",
      "faq.a11": "Jedes Honorar wird erklärt, bevor Sie weitermachen. Die erste Einstunden-Beratung ist kostenlos. Preise veröffentlichen wir erst, wenn der Umfang klar ist.",
      "faq.q12": "Nur für Bewerberinnen und Bewerber aus Bangladesch?",
      "faq.a12": "DeutschPath ist für Studierende aus Bangladesch gebaut. Wenn Sie woanders sind, sagen Sie es in der Anfrage — das Team klärt, ob wir helfen können.",
      "faq.q13": "Wo sollte ich Anforderungen prüfen?",
      "faq.a13": "Nutzen Sie die aktuelle Programmseite, den von der Hochschule genannten Weg und die offizielle Leitlinie der zuständigen Behörde. Anforderungen ändern sich — die Checkliste einer früheren Bewerbung passt vielleicht nicht zu Ihnen.",
      "page.contact.crumb": "Kontakt",
      "page.contact.eye": "Kontakt",
      "page.contact.h1": "Sprechen Sie mit DeutschPath.",
      "page.contact.lede": "Stellen Sie eine Frage, bitten Sie um Rückruf oder starten Sie mit einer kostenlosen Beratung.",
      "contact.phone": "Telefon",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "E-Mail",
      "contact.office": "Büro",
      "contact.pending": "Wird veröffentlicht",
      "contact.consultKicker": "Lieber anrufen?",
      "contact.consultTitle": "Kostenlose Stunde buchen",
      "contact.consultText": "Ein strukturiertes 60-Minuten-Gespräch zu Profil und Deutschland-Optionen — die erste Sitzung ist kostenlos.",
      "contact.socialNote": "Social-Profile erscheinen im Footer, sobald die Konten bereit sind.",
      "contact.formTitle": "Nachricht senden",
      "contact.formIntro": "Schreiben Sie Ihre Frage. Wir antworten über die Kontaktdaten, die Sie hinterlassen.",
      "contact.send": "Nachricht senden",
      "contact.statusTitle": "Nachrichtenstatus",
      "page.book.crumb": "Beratung buchen",
      "page.book.eye": "Beratung",
      "page.book.h1": "Buchen Sie Ihre kostenlose 1-Stunden-Beratung.",
      "page.book.lede": "Erzählen Sie uns von Hintergrund, Zielen und Plänen. Wir klären die nächsten Schritte. Die Stunde ist deutschlandbezogen und kostenlos.",
      "book.m1": "60",
      "book.m1s": "Minuten",
      "book.m2": "Kostenlos",
      "book.m2s": "Erste Stunde",
      "book.m3": "DE",
      "book.m3s": "Nur Deutschland",
      "book.coverKicker": "In der Stunde",
      "book.coverTitle": "Was wir besprechen können",
      "book.cover1": "Ihr akademischer Hintergrund und das angestrebte Niveau",
      "book.cover2": "Wie sich Bewerbungswege in Deutschland unterscheiden",
      "book.cover3": "Welche Unterlagen sich zuerst lohnen",
      "book.cover4": "Sinnvolle nächste Schritte für Ihren Fall",
      "book.limitKicker": "Grenzen",
      "book.limitTitle": "Was die Stunde nicht ist",
      "book.limitBody": "Keine Zulassungsentscheidung, keine Visumentscheidung und kein Versprechen einer bestimmten Universität.",
      "book.topicNote": "Sie haben nach Universitätsoptionen gefragt. Ergänzen Sie unten Fach und akademischen Hintergrund, damit das Gespräch bei Ihrem Profil startet.",
      "book.formKicker": "Anfrage",
      "book.formTitle": "Kostenlose Stunde buchen",
      "book.formIntro": "Mit <span aria-hidden=\"true\">*</span> markierte Felder sind Pflicht. Wir nutzen die Angaben zur Vorbereitung.",
      "book.legendContact": "Kontakt",
      "book.legendAcademic": "Akademisches Profil",
      "book.legendTime": "Bevorzugte Zeit",
      "book.footnote": "Keine Zahlung für die erste Stunde. Spätere Gebühren werden vorher erklärt.",
      "book.formSubmit": "Kostenlose Beratung anfragen",
      "book.successTitle": "Status der Anfrage",
      "book.backHome": "Zur Startseite",
      "page.universities.crumb": "Hochschulen",
      "page.universities.eye": "Verzeichnis",
      "page.universities.h1": "Hochschulverzeichnis",
      "page.universities.lede": "Beispielhafte Einträge zum Durchsuchen. Anforderungen immer auf der offiziellen Programmseite prüfen.",
      "page.404.h1": "Diese Seite liegt nicht auf dem Weg.",
      "page.404.lede": "Der Link ist möglicherweise veraltet, oder die Seite wurde verschoben.",
      "page.404.home": "Zur Startseite",

      "form.name": "Vollständiger Name",
      "form.email": "E-Mail",
      "form.phone": "Telefon / WhatsApp",
      "form.message": "Nachricht",
      "form.level": "Studienniveau",
      "form.topic": "Thema",
      "form.submit": "Anfrage senden",
      "form.sending": "Wird gesendet…",
      "form.sent": "Anfrage erhalten. Wir melden uns über die angegebenen Kontaktdaten.",
      "form.error": "Etwas ist schiefgelaufen. Bitte erneut versuchen oder WhatsApp / E-Mail nutzen.",
      "form.required": "Bitte Pflichtfelder ausfüllen."
    }
  };

  function detectPage() {
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!path || path === "") path = "index.html";
    var map = {
      "index.html": "home",
      "": "home",
      "about.html": "about",
      "services.html": "services",
      "bachelors.html": "bachelors",
      "masters.html": "masters",
      "application-process.html": "process",
      "student-support.html": "support",
      "faq.html": "faq",
      "contact.html": "contact",
      "book.html": "book",
      "universities.html": "universities",
      "404.html": "404"
    };
    return map[path] || "home";
  }

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return "en";
  }

  var switching = false;

  function ensureLoader() {
    var el = document.getElementById("lang-loader");
    if (el) return el;
    el = document.createElement("div");
    el.id = "lang-loader";
    el.className = "lang-loader";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML =
      '<div class="lang-loader-card" role="status" aria-live="polite">' +
      '<div class="lang-loader-spin" aria-hidden="true"></div>' +
      '<p class="lang-loader-text" data-lang-loader-text></p>' +
      "</div>";
    document.body.appendChild(el);
    return el;
  }

  function showLoader(nextLang) {
    var el = ensureLoader();
    var text = el.querySelector("[data-lang-loader-text]");
    if (text) text.textContent = t("ui.langLoading", nextLang);
    el.classList.add("is-on");
    el.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lang-switching");
  }

  function hideLoader() {
    var el = document.getElementById("lang-loader");
    if (!el) return;
    el.classList.remove("is-on");
    el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lang-switching");
  }

  function preloadBanglaFonts() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
      document.fonts.load("600 1rem \"Hind Siliguri\""),
      document.fonts.load("600 1rem \"Noto Serif Bengali\"")
    ]).catch(function () {});
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    if (switching || lang === getLang()) return;
    switching = true;
    showLoader(lang);

    var waitFonts = lang === "bn" ? preloadBanglaFonts() : Promise.resolve();
    var minDelay = new Promise(function (resolve) {
      setTimeout(resolve, 380);
    });

    Promise.all([waitFonts, minDelay]).then(function () {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
      apply(lang);
      requestAnimationFrame(function () {
        hideLoader();
        switching = false;
      });
    });
  }

  function t(key, lang) {
    lang = lang || getLang();
    var pack = dict[lang] || dict.en;
    var value = pack[key];
    if (value == null) value = dict.en[key];
    if (value == null) return key;
    if (value.indexOf("{year}") !== -1) {
      value = value.replace("{year}", String(new Date().getFullYear()));
    }
    return value;
  }

  function applyNode(el, lang) {
    var key = el.getAttribute("data-i18n");
    if (!key) return;
    var value = t(key, lang);
    var attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
      return;
    }
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
      return;
    }
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
      return;
    }
    // Preserve leading SVG icons in trust items etc.
    var icon = el.querySelector(":scope > svg");
    if (icon && el.children.length === 1) {
      el.replaceChildren(icon, document.createTextNode(" " + value));
      return;
    }
    el.textContent = value;
  }

  function apply(lang) {
    lang = lang || getLang();
    document.documentElement.lang = lang === "bn" ? "bn" : lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.body.classList.toggle("lang-bn", lang === "bn");
    document.body.classList.toggle("lang-de", lang === "de");
    document.body.classList.toggle("lang-en", lang === "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      applyNode(el, lang);
    });

    var page = detectPage();
    var titleKey = "meta." + page + ".title";
    if (dict.en[titleKey]) document.title = t(titleKey, lang);

    var switcher = document.querySelector(".lang-switch");
    if (switcher) {
      switcher.querySelectorAll("[data-lang]").forEach(function (btn) {
        var active = btn.getAttribute("data-lang") === lang;
        btn.setAttribute("aria-pressed", active ? "true" : "false");
        btn.classList.toggle("is-active", active);
      });
    }

    // Keep mobile WhatsApp label if present without custom text override from main.js yet
    var wa = document.querySelector("[data-whatsapp-link]");
    if (wa && wa.getAttribute("data-i18n") === "ui.whatsapp") {
      /* already handled */
    } else if (wa && /contact|whatsapp/i.test(wa.textContent)) {
      wa.textContent = t("ui.whatsapp", lang);
    }

    document.dispatchEvent(new CustomEvent("deutschpath:lang", { detail: { lang: lang } }));
  }

  function buildSwitcher() {
    var actions = document.querySelector(".header-actions");
    if (!actions || document.querySelector(".lang-switch")) return;

    var wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", t("ui.lang"));

    SUPPORTED.forEach(function (code) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.setAttribute("data-lang", code);
      btn.setAttribute("aria-label", NAMES[code]);
      btn.setAttribute("title", NAMES[code]);
      btn.textContent = LABELS[code];
      btn.addEventListener("click", function () {
        setLang(code);
      });
      wrap.appendChild(btn);
    });

    var toggle = actions.querySelector(".nav-toggle");
    if (toggle) actions.insertBefore(wrap, toggle);
    else actions.appendChild(wrap);
  }

  function markCommon() {
    // Auto-mark shared chrome if attributes are missing
    var skip = document.querySelector(".skip-link");
    if (skip && !skip.hasAttribute("data-i18n")) {
      skip.setAttribute("data-i18n", "ui.skip");
    }

    var logo = document.querySelector(".site-header .logo");
    if (logo && !logo.hasAttribute("data-i18n")) {
      logo.setAttribute("data-i18n", "ui.homeAria");
      logo.setAttribute("data-i18n-attr", "aria-label");
    }

    var navMap = {
      "about.html": "nav.about",
      "services.html": "nav.services",
      "bachelors.html": "nav.bachelors",
      "masters.html": "nav.masters",
      "application-process.html": "nav.process",
      "student-support.html": "nav.support",
      "faq.html": "nav.faq",
      "contact.html": "nav.contact",
      "book.html": "nav.book"
    };

    document.querySelectorAll("#site-nav a").forEach(function (a) {
      if (a.hasAttribute("data-i18n")) return;
      var href = (a.getAttribute("href") || "").split("#")[0];
      if (navMap[href]) {
        a.setAttribute("data-i18n", a.classList.contains("nav-cta") ? "nav.book" : navMap[href]);
      }
    });

    var headerCta = document.querySelector(".header-cta");
    if (headerCta && !headerCta.hasAttribute("data-i18n")) {
      headerCta.setAttribute("data-i18n", "nav.bookShort");
    }

    var menuLabel = document.querySelector(".nav-toggle .sr-only");
    if (menuLabel && !menuLabel.hasAttribute("data-i18n")) {
      menuLabel.setAttribute("data-i18n", "ui.openMenu");
      menuLabel.setAttribute("data-i18n-menu", "1");
    }

    document.querySelectorAll(".footer-inline a").forEach(function (a) {
      if (a.hasAttribute("data-i18n")) return;
      var href = (a.getAttribute("href") || "").split("#")[0];
      if (href === "about.html") a.setAttribute("data-i18n", "nav.about");
      else if (href === "services.html") a.setAttribute("data-i18n", "nav.services");
      else if (href === "faq.html") a.setAttribute("data-i18n", "nav.faq");
      else if (href === "contact.html") a.setAttribute("data-i18n", "nav.contact");
      else if (href === "book.html") a.setAttribute("data-i18n", "nav.bookMini");
    });

    var footCopy = document.querySelector(".footer-bottom p:first-child");
    if (footCopy && !footCopy.hasAttribute("data-i18n")) {
      footCopy.setAttribute("data-i18n", "footer.copy");
    }
    var footDisc = document.querySelector(".footer-bottom .disclaimer");
    if (footDisc && !footDisc.hasAttribute("data-i18n")) {
      footDisc.setAttribute("data-i18n", "footer.disclaimer");
    }

    var mobileContact = document.querySelector(".mobile-bar .mobile-contact");
    if (mobileContact && !mobileContact.hasAttribute("data-i18n")) {
      mobileContact.setAttribute("data-i18n", "ui.contact");
    }
    var mobileBook = document.querySelector(".mobile-bar .btn");
    if (mobileBook && !mobileBook.hasAttribute("data-i18n")) {
      mobileBook.setAttribute("data-i18n", "cta.book");
    }

    // Breadcrumb Home links
    document.querySelectorAll(".breadcrumb a[href='index.html']").forEach(function (a) {
      if (!a.hasAttribute("data-i18n")) a.setAttribute("data-i18n", "ui.home");
    });
  }

  function markHome() {
    if (!document.body.classList.contains("home-page")) return;
    var pairs = [
      [".hero-copy h1", "home.heroTitle"],
      [".hero-copy .lede", "home.heroLede"],
      [".hero-actions .btn-primary", "cta.bookHour"],
      [".hero-actions .btn-ghost", "cta.exploreServices"],
      [".hero-meta span:nth-child(1)", "home.meta1"],
      [".hero-meta span:nth-child(3)", "home.meta2"],
      [".hero-meta span:nth-child(5)", "home.meta3"],
      [".trust", "home.trustAria", "aria-label"],
      [".problem-grid .section-kicker", "home.sitKicker"],
      [".problem-grid .section-title", "home.sitTitle"],
      [".problem-grid .section-intro", "home.sitIntro"]
    ];

    pairs.forEach(function (item) {
      var el = document.querySelector(item[0]);
      if (!el || el.hasAttribute("data-i18n")) return;
      el.setAttribute("data-i18n", item[1]);
      if (item[2]) el.setAttribute("data-i18n-attr", item[2]);
    });

    var trustItems = document.querySelectorAll(".trust-item");
    ["home.trust1", "home.trust2", "home.trust3", "home.trust4", "home.trust5"].forEach(function (key, i) {
      if (trustItems[i] && !trustItems[i].hasAttribute("data-i18n")) {
        trustItems[i].setAttribute("data-i18n", key);
      }
    });

    var struggle = document.querySelector(".problem-grid .reveal:last-child > p:first-child");
    if (struggle && !struggle.hasAttribute("data-i18n")) struggle.setAttribute("data-i18n", "home.struggle");
    document.querySelectorAll(".question-list li").forEach(function (li, i) {
      if (!li.hasAttribute("data-i18n")) li.setAttribute("data-i18n", "home.q" + (i + 1));
    });
    var sense = document.querySelector(".problem-grid .statement");
    if (sense && !sense.hasAttribute("data-i18n")) sense.setAttribute("data-i18n", "home.sense");

    var svcHead = document.querySelector(".section-alt .section-head");
    if (svcHead) {
      var k = svcHead.querySelector(".section-kicker");
      var h = svcHead.querySelector(".section-title");
      if (k && !k.hasAttribute("data-i18n")) k.setAttribute("data-i18n", "home.svcKicker");
      if (h && !h.hasAttribute("data-i18n")) h.setAttribute("data-i18n", "home.svcTitle");
    }

    document.querySelectorAll(".service-card").forEach(function (card, i) {
      var n = i + 1;
      var h3 = card.querySelector("h3");
      var p = card.querySelector("p");
      var go = card.querySelector(".card-go");
      if (h3 && !h3.hasAttribute("data-i18n")) h3.setAttribute("data-i18n", "home.svc" + n + "t");
      if (p && !p.hasAttribute("data-i18n")) p.setAttribute("data-i18n", "home.svc" + n + "p");
      if (go && !go.hasAttribute("data-i18n")) go.setAttribute("data-i18n", "home.svc" + n + "g");
    });

    var pathHead = document.querySelector("#path .section-head");
    if (pathHead) {
      var pk = pathHead.querySelector(".section-kicker");
      var pt = pathHead.querySelector(".section-title");
      var pi = pathHead.querySelector(".section-intro");
      if (pk && !pk.hasAttribute("data-i18n")) pk.setAttribute("data-i18n", "home.pathKicker");
      if (pt && !pt.hasAttribute("data-i18n")) pt.setAttribute("data-i18n", "home.pathTitle");
      if (pi && !pi.hasAttribute("data-i18n")) pi.setAttribute("data-i18n", "home.pathIntro");
    }

    var stageLabels = ["home.stagePrepare", "home.stageApply", "home.stageArrive"];
    document.querySelectorAll(".path-stage-label").forEach(function (el, i) {
      if (!el.hasAttribute("data-i18n") && stageLabels[i]) el.setAttribute("data-i18n", stageLabels[i]);
    });

    document.querySelectorAll(".path-list li").forEach(function (li, i) {
      var n = i + 1;
      var h3 = li.querySelector("h3");
      var p = li.querySelector("p");
      if (h3 && !h3.hasAttribute("data-i18n")) h3.setAttribute("data-i18n", "home.p" + n + "t");
      if (p && !p.hasAttribute("data-i18n")) p.setAttribute("data-i18n", "home.p" + n + "p");
    });

    var bandEye = document.querySelector(".media-band-copy .eyebrow");
    var bandSt = document.querySelector(".media-band-copy .statement");
    if (bandEye && !bandEye.hasAttribute("data-i18n")) bandEye.setAttribute("data-i18n", "home.bandEyebrow");
    if (bandSt && !bandSt.hasAttribute("data-i18n")) bandSt.setAttribute("data-i18n", "home.bandStatement");

    var fit = document.querySelector("#fit .fit-copy");
    if (fit) {
      [[".section-kicker", "home.fitKicker"], [".section-title", "home.fitTitle"], [".section-intro", "home.fitIntro"], [".fit-quote", "home.fitQuote"], [".btn", "cta.universityOptions"]].forEach(function (pair) {
        var el = fit.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }
    document.querySelectorAll(".fit-matrix li").forEach(function (li, i) {
      var n = i + 1;
      var strong = li.querySelector("strong");
      var span = li.querySelector("span:last-child");
      if (strong && !strong.hasAttribute("data-i18n")) strong.setAttribute("data-i18n", "home.fit" + n + "t");
      if (span && !span.hasAttribute("data-i18n")) span.setAttribute("data-i18n", "home.fit" + n + "p");
    });

    var routes = document.querySelector("#routes .section-head");
    if (routes) {
      [[".section-kicker", "home.routeKicker"], [".section-title", "home.routeTitle"], [".section-intro", "home.routeIntro"]].forEach(function (pair) {
        var el = routes.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }
    document.querySelectorAll(".route-track li").forEach(function (li, i) {
      var n = i + 1;
      var strong = li.querySelector("strong");
      var spans = li.querySelectorAll("span");
      var desc = spans[spans.length - 1];
      if (strong && !strong.hasAttribute("data-i18n")) strong.setAttribute("data-i18n", "home.r" + n + "t");
      if (desc && !desc.classList.contains("route-dot") && !desc.classList.contains("route-num") && !desc.hasAttribute("data-i18n")) {
        desc.setAttribute("data-i18n", "home.r" + n + "p");
      }
    });
    var routeNote = document.querySelector(".route-note");
    if (routeNote && !routeNote.hasAttribute("data-i18n-done")) {
      routeNote.setAttribute("data-i18n-done", "1");
      var link = routeNote.querySelector("a");
      var href = link ? link.getAttribute("href") : "application-process.html#routes";
      routeNote.replaceChildren();
      var noteSpan = document.createElement("span");
      noteSpan.setAttribute("data-i18n", "home.routeNote");
      noteSpan.textContent = t("home.routeNote");
      routeNote.appendChild(noteSpan);
      routeNote.appendChild(document.createTextNode(" "));
      var a = document.createElement("a");
      a.href = href;
      a.setAttribute("data-i18n", "cta.routeLink");
      a.textContent = t("cta.routeLink");
      routeNote.appendChild(a);
    }

    var levels = document.querySelectorAll(".level-card");
    if (levels[0]) {
      var ba = levels[0];
      [[".section-kicker", "home.baKicker"], ["h2", "home.baTitle"], ["p:not(.section-kicker)", "home.baBody"], [".btn", "cta.bachelors"]].forEach(function (pair) {
        var el = ba.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }
    if (levels[1]) {
      var ma = levels[1];
      [[".section-kicker", "home.maKicker"], ["h2", "home.maTitle"], ["p:not(.section-kicker)", "home.maBody"], [".btn", "cta.masters"]].forEach(function (pair) {
        var el = ma.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }

    var truth = document.querySelector(".transparency-copy");
    if (truth) {
      var tk = truth.querySelector(".section-kicker");
      var tt = truth.querySelector(".section-title");
      var ti = truth.querySelector(".section-intro");
      if (tk && !tk.hasAttribute("data-i18n")) tk.setAttribute("data-i18n", "home.truthKicker");
      if (tt && !tt.hasAttribute("data-i18n")) {
        tt.setAttribute("data-i18n", "home.truthTitle");
        tt.setAttribute("data-i18n-html", "");
      }
      if (ti && !ti.hasAttribute("data-i18n")) ti.setAttribute("data-i18n", "home.truthIntro");
    }
    document.querySelectorAll(".truth-list li").forEach(function (li, i) {
      var span = li.querySelector("span");
      var em = li.querySelector("em");
      if (span && !span.hasAttribute("data-i18n")) span.setAttribute("data-i18n", "home.truth" + (i + 1));
      if (em && !em.hasAttribute("data-i18n")) em.setAttribute("data-i18n", "home.notGuaranteed");
    });

    var consult = document.querySelector(".consult-copy");
    if (consult) {
      [[".section-kicker", "home.consultKicker"], [".section-title", "home.consultTitle"], [".section-intro", "home.consultIntro"], [".btn", "cta.book"]].forEach(function (pair) {
        var el = consult.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
      var metrics = consult.querySelectorAll(".metric");
      if (metrics[0]) {
        var s0 = metrics[0].querySelector("strong");
        var sp0 = metrics[0].querySelector("span");
        if (s0 && !s0.hasAttribute("data-i18n")) s0.setAttribute("data-i18n", "home.m1");
        if (sp0 && !sp0.hasAttribute("data-i18n")) sp0.setAttribute("data-i18n", "home.m1s");
      }
      if (metrics[1]) {
        var s1 = metrics[1].querySelector("strong");
        var sp1 = metrics[1].querySelector("span");
        if (s1 && !s1.hasAttribute("data-i18n")) s1.setAttribute("data-i18n", "home.m2");
        if (sp1 && !sp1.hasAttribute("data-i18n")) sp1.setAttribute("data-i18n", "home.m2s");
      }
      if (metrics[2]) {
        var s2 = metrics[2].querySelector("strong");
        var sp2 = metrics[2].querySelector("span");
        if (s2 && !s2.hasAttribute("data-i18n")) s2.setAttribute("data-i18n", "home.m3");
        if (sp2 && !sp2.hasAttribute("data-i18n")) sp2.setAttribute("data-i18n", "home.m3s");
      }
    }

    var faqAside = document.querySelector("#faq .faq-aside");
    if (faqAside) {
      [[".section-kicker", "home.faqKicker"], [".section-title", "home.faqTitle"], [".section-intro", "home.faqIntro"], [".text-link", "cta.fullFaq"]].forEach(function (pair) {
        var el = faqAside.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }
    document.querySelectorAll("#faq .faq-item").forEach(function (item, i) {
      var n = i + 1;
      var btn = item.querySelector("button");
      var p = item.querySelector(".faq-panel-inner p");
      if (btn && !btn.hasAttribute("data-i18n")) btn.setAttribute("data-i18n", "home.faq" + n + "q");
      if (p && !p.hasAttribute("data-i18n")) p.setAttribute("data-i18n", "home.faq" + n + "a");
    });

    var final = document.querySelector(".final-cta");
    if (final) {
      [[".section-kicker", "home.beginKicker"], [".section-title", "home.beginTitle"], [".section-intro", "home.beginIntro"], [".btn-primary", "cta.book"], [".btn-secondary", "cta.contactUs"]].forEach(function (pair) {
        var el = final.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) el.setAttribute("data-i18n", pair[1]);
      });
    }
  }

  function markInnerPages() {
    var page = detectPage();
    if (page === "home") return;
    var hero = document.querySelector(".page-hero .container, .page-hero");
    if (!hero) return;
    var crumbTail = document.querySelector(".breadcrumb");
    if (crumbTail) {
      // last text node / last part after /
      var nodes = crumbTail.childNodes;
      // Prefer explicit span if present; else wrap last segment
      var eye = hero.querySelector(".eyebrow");
      var h1 = hero.querySelector("h1");
      var lede = hero.querySelector(".lede");
      var prefix = "page." + page + ".";
      if (dict.en[prefix + "eye"] && eye && !eye.hasAttribute("data-i18n")) eye.setAttribute("data-i18n", prefix + "eye");
      if (dict.en[prefix + "h1"] && h1 && !h1.hasAttribute("data-i18n")) h1.setAttribute("data-i18n", prefix + "h1");
      if (dict.en[prefix + "lede"] && lede && !lede.hasAttribute("data-i18n")) lede.setAttribute("data-i18n", prefix + "lede");
      if (dict.en[prefix + "crumb"] && crumbTail && !crumbTail.hasAttribute("data-i18n-crumb")) {
        crumbTail.setAttribute("data-i18n-crumb", "1");
        var homeLink = crumbTail.querySelector("a");
        var crumbKey = prefix + "crumb";
        crumbTail.replaceChildren();
        if (homeLink) {
          homeLink.setAttribute("data-i18n", "ui.home");
          crumbTail.appendChild(homeLink);
          crumbTail.appendChild(document.createTextNode(" / "));
        }
        var span = document.createElement("span");
        span.setAttribute("data-i18n", crumbKey);
        span.textContent = t(crumbKey);
        crumbTail.appendChild(span);
      }
    }

    if (page === "404") {
      var h = document.querySelector("main h1");
      var p = document.querySelector("main .lede, main p");
      var a = document.querySelector("main .btn");
      if (h && !h.hasAttribute("data-i18n")) h.setAttribute("data-i18n", "page.404.h1");
      if (p && !p.hasAttribute("data-i18n")) p.setAttribute("data-i18n", "page.404.lede");
      if (a && !a.hasAttribute("data-i18n")) a.setAttribute("data-i18n", "page.404.home");
    }
  }

  function markBook() {
    if (detectPage() !== "book") return;
    var metrics = document.querySelectorAll(".book-metrics .metric");
    [["book.m1", "book.m1s"], ["book.m2", "book.m2s"], ["book.m3", "book.m3s"]].forEach(function (keys, i) {
      var m = metrics[i];
      if (!m) return;
      var s = m.querySelector("strong");
      var sp = m.querySelector("span");
      if (s && !s.hasAttribute("data-i18n")) s.setAttribute("data-i18n", keys[0]);
      if (sp && !sp.hasAttribute("data-i18n")) sp.setAttribute("data-i18n", keys[1]);
    });
    var cover = document.querySelector(".book-info:not(.book-info-limit)");
    if (cover) {
      var ck = cover.querySelector(".section-kicker");
      var ct = cover.querySelector("h2");
      if (ck && !ck.hasAttribute("data-i18n")) ck.setAttribute("data-i18n", "book.coverKicker");
      if (ct && !ct.hasAttribute("data-i18n")) ct.setAttribute("data-i18n", "book.coverTitle");
      cover.querySelectorAll(".check-list li").forEach(function (li, i) {
        if (!li.hasAttribute("data-i18n")) li.setAttribute("data-i18n", "book.cover" + (i + 1));
      });
    }
    var limit = document.querySelector(".book-info-limit");
    if (limit) {
      var lk = limit.querySelector(".section-kicker");
      var lt = limit.querySelector("h2");
      var lp = limit.querySelector("p:not(.section-kicker)");
      if (lk && !lk.hasAttribute("data-i18n")) lk.setAttribute("data-i18n", "book.limitKicker");
      if (lt && !lt.hasAttribute("data-i18n")) lt.setAttribute("data-i18n", "book.limitTitle");
      if (lp && !lp.hasAttribute("data-i18n")) lp.setAttribute("data-i18n", "book.limitBody");
    }
    var note = document.getElementById("topic-note");
    if (note && !note.hasAttribute("data-i18n")) note.setAttribute("data-i18n", "book.topicNote");
    var head = document.querySelector(".book-form-head");
    if (head) {
      [[".section-kicker", "book.formKicker"], ["h2", "book.formTitle"], [".form-intro", "book.formIntro"]].forEach(function (pair) {
        var el = head.querySelector(pair[0]);
        if (el && !el.hasAttribute("data-i18n")) {
          el.setAttribute("data-i18n", pair[1]);
          if (pair[1] === "book.formIntro") el.setAttribute("data-i18n-html", "");
        }
      });
    }
    var legends = document.querySelectorAll(".book-form .form-block legend");
    ["book.legendContact", "book.legendAcademic", "book.legendTime"].forEach(function (key, i) {
      if (legends[i] && !legends[i].hasAttribute("data-i18n")) legends[i].setAttribute("data-i18n", key);
    });
    var foot = document.querySelector(".book-form-actions .form-footnote");
    if (foot && !foot.hasAttribute("data-i18n")) foot.setAttribute("data-i18n", "book.footnote");
    var submitLabel = document.querySelector(".book-form [type='submit'] .btn-label");
    if (submitLabel && !submitLabel.hasAttribute("data-i18n")) submitLabel.setAttribute("data-i18n", "book.formSubmit");
    var success = document.getElementById("consult-success");
    if (success) {
      var sh = success.querySelector("h2");
      var sa = success.querySelector(".form-success-actions .btn");
      if (sh && !sh.hasAttribute("data-i18n")) sh.setAttribute("data-i18n", "book.successTitle");
      if (sa && !sa.hasAttribute("data-i18n")) sa.setAttribute("data-i18n", "book.backHome");
    }
  }

  function markForms() {
    document.querySelectorAll("[data-form] label, [data-form] .field > span, [data-form] legend").forEach(function (el) {
      if (el.hasAttribute("data-i18n")) return;
      var text = (el.textContent || "").trim().toLowerCase();
      if (/full name|name/.test(text) && text.length < 20) el.setAttribute("data-i18n", "form.name");
      else if (/^email/.test(text)) el.setAttribute("data-i18n", "form.email");
      else if (/phone|whatsapp/.test(text)) el.setAttribute("data-i18n", "form.phone");
      else if (/message/.test(text)) el.setAttribute("data-i18n", "form.message");
      else if (/^study level/.test(text) && text.length < 24) el.setAttribute("data-i18n", "form.level");
      else if (/^topic/.test(text)) el.setAttribute("data-i18n", "form.topic");
    });
    document.querySelectorAll("[data-form] [type='submit'] .btn-label, [data-form] [type='submit']").forEach(function (el) {
      if (el.hasAttribute("data-i18n")) return;
      if (el.classList.contains("btn-label") || el.matches("[type='submit']")) {
        var label = el.classList.contains("btn-label") ? el : el.querySelector(".btn-label");
        if (label && !label.hasAttribute("data-i18n")) label.setAttribute("data-i18n", "form.submit");
        else if (!el.querySelector(".btn-label") && el.matches("[type='submit']") && !el.hasAttribute("data-i18n")) {
          el.setAttribute("data-i18n", "form.submit");
        }
      }
    });
  }

  function init() {
    buildSwitcher();
    markCommon();
    markHome();
    markInnerPages();
    markBook();
    markForms();
    var lang = getLang();
    if (lang === "bn") preloadBanglaFonts();
    apply(lang);
  }

  window.DeutschPathI18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: apply,
    SUPPORTED: SUPPORTED
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
