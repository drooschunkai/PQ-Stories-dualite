import { Prophet } from '../types';

// INSTRUCTIONS FOR AUDIO:
// The audio URLs below have been updated to use the correct .wav file extension to match the files in your GitHub repository.
// This resolves the "NotSupportedError" and ensures audio plays correctly.

export const prophets: Prophet[] = [
  {
    id: 'adam',
    name: 'Adam',
    arabicName: 'آدم',
    order: 1,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/adam.wav' },
      title: {
        en: 'The First Human',
        ar: 'الإنسان الأول',
        sv: 'Den Första Människan',
        de: 'Der Erste Mensch'
      },
      content: {
        en: [
          'Long, long ago, before any people lived on Earth, Allah decided to create the very first human being. Allah shaped Adam (peace be upon him) from clay and breathed life into him. Allah taught Adam the names of everything, and the angels were amazed by his knowledge. Allah created a beautiful garden called Jannah for Adam and his wife, Hawwa (Eve), to live in. They were happy, but they made a mistake by eating from a forbidden tree after listening to Shaytan. They felt very sorry and asked Allah for forgiveness. Allah, the Most Merciful, forgave them and sent them to Earth to be the first family and to guide humanity.'
        ],
        ar: [
          'منذ زمن بعيد، قبل أن يعيش أي إنسان على الأرض، قرر الله أن يخلق أول إنسان. شكل الله آدم (عليه السلام) من طين ونفخ فيه الروح. علم الله آدم أسماء كل شيء، ودهش الملائكة من علمه. خلق الله جنة جميلة تسمى جنة لآدم وزوجته حواء ليعيشا فيها. كانا سعيدين، لكنهما ارتكبا خطأ بأكل من شجرة محرمة بعد الاستماع إلى الشيطان. شعرا بالأسف الشديد وطلبا من الله المغفرة. الله، الرحمن الرحيم، غفر لهما وأرسلهما إلى الأرض ليكونوا أول عائلة ويهدوا البشرية.'
        ],
        sv: [
          'För länge, länge sedan, innan några människor levde på jorden, bestämde sig Allah för att skapa den allra första människan. Allah formade Adam (frid vare med honom) av lera och andades liv i honom. Allah lärde Adam namnen på allting, och änglarna blev förvånade över hans kunskap. Allah skapade en vacker trädgård som heter Jannah för Adam och hans fru, Hawwa (Eva), att bo i. De var lyckliga, men de gjorde ett misstag genom att äta från ett förbjudet träd efter att ha lyssnat på Shaytan. De kände sig mycket ledsna och bad Allah om förlåtelse. Allah, den Barmhärtigaste, förlät dem och skickade dem till jorden för att vara den första familjen och vägleda mänskligheten.'
        ],
        de: [
          'Vor langer, langer Zeit, bevor Menschen auf der Erde lebten, beschloss Allah, den allerersten Menschen zu erschaffen. Allah formte Adam (Friede sei mit ihm) aus Lehm und hauchte ihm Leben ein. Allah lehrte Adam die Namen aller Dinge, und die Engel waren erstaunt über sein Wissen. Allah schuf einen wunderschönen Garten namens Jannah für Adam und seine Frau Hawwa (Eva), um darin zu leben. Sie waren glücklich, aber sie machten einen Fehler, indem sie von einem verbotenen Baum aßen, nachdem sie auf Shaytan gehört hatten. Sie bereuten es sehr und baten Allah um Vergebung. Allah, der Barmherzigste, vergab ihnen und schickte sie auf die Erde, um die erste Familie zu sein und die Menschheit zu leiten.'
        ]
      },
      setting: {
        en: 'In a time before time, in a beautiful garden created by Allah',
        ar: 'في زمن قبل الزمن، في حديقة جميلة خلقها الله',
        sv: 'I en tid före tiden, i en vacker trädgård skapad av Allah',
        de: 'In einer Zeit vor der Zeit, in einem wunderschönen von Allah geschaffenen Garten'
      },
      mainLesson: {
        en: 'When we make mistakes, we should always say sorry to Allah and ask for forgiveness. Allah always forgives those who are truly sorry.',
        ar: 'عندما نرتكب الأخطاء، يجب أن نعتذر دائمًا إلى الله ونطلب المغفرة. الله يغفر دائمًا لمن يتوب بصدق.',
        sv: 'När vi gör misstag ska vi alltid be Allah om ursäkt och förlåtelse. Allah förlåter alltid dem som är genuint ångerfulla.',
        de: 'Wenn wir Fehler machen, sollten wir uns immer bei Allah entschuldigen und um Vergebung bitten. Allah vergibt immer denen, die es aufrichtig bereuen.'
      },
      reflectionQuestion: {
        en: 'When you do something wrong, what should you do to make it right?',
        ar: 'عندما تفعل شيئًا خاطئًا، ماذا يجب أن تفعل لتصحيحه؟',
        sv: 'När du gör något fel, vad ska du göra för att rätta till det?',
de: 'Wenn du etwas Falsches tust, was solltest du tun, um es wieder gutzumachen?'
      },
      dua: {
        arabic: 'رَبَّنَا ظَلَمْنَا أَنفُSَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
        transliteration: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal-khasireen',
        english: {
            en: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
            ar: 'ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحምና لنكونن من الخاسرين.',
            sv: 'Vår Herre, vi har gjort orätt mot oss själva, och om Du inte förlåter oss och har barmhärtighet med oss, kommer vi sannerligen att höra till förlorarna.',
            de: 'Unser Herr, wir haben uns selbst Unrecht getan, und wenn Du uns nicht vergibst und uns Barmherzigkeit erweist, werden wir sicherlich zu den Verlierern gehören.'
        }
      }
    },
    color: 'emerald',
    icon: '🌱'
  },
  {
    id: 'idris',
    name: 'Idris (Enoch)',
    arabicName: 'إدريس',
    order: 2,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/idris.wav' },
      title: { en: 'The Truthful One', ar: 'الصادق', sv: 'Den Sanningsenlige', de: 'Der Wahrhaftige' },
      content: {
        en: ['Prophet Idris (peace be upon him) was known as "the truthful" because he always spoke the truth. He was one of the first people to write and use a pen. Allah gave him great wisdom and knowledge about the stars and mathematics. Idris taught people how to make clothes from fabric and how to use weights for fair trading. He spent his life calling people to worship Allah alone and to be honest in their dealings. Allah loved Idris so much that He raised him to a high place in the heavens while he was still alive.'],
        ar: ['عُرف النبي إدريس (عليه السلام) بـ "الصادق" لأنه كان دائمًا يقول الحقيقة. كان من أوائل من كتبوا واستخدموا القلم. منحه الله حكمة عظيمة ومعرفة بالنجوم والرياضيات. علم إدريس الناس كيفية صنع الملابس من القماش وكيفية استخدام الأوزان للتجارة العادلة. قضى حياته يدعو الناس لعبادة الله وحده وأن يكونوا صادقين في تعاملاتهم. أحب الله إدريس كثيرًا لدرجة أنه رفعه إلى مكانة عالية في السماء وهو لا يزال على قيد الحياة.'],
        sv: ['Profeten Idris (frid vare med honom) var känd som "den sanningsenlige" eftersom han alltid talade sanning. Han var en av de första som skrev och använde en penna. Allah gav honom stor visdom och kunskap om stjärnorna och matematik. Idris lärde människor hur man gör kläder av tyg och hur man använder vikter för rättvis handel. Han tillbringade sitt liv med att kalla människor att dyrka Allah ensam och att vara ärliga i sina affärer. Allah älskade Idris så mycket att Han upphöjde honom till en hög plats i himlen medan han fortfarande levde.'],
        de: ['Prophet Idris (Friede sei mit ihm) war als "der Wahrhaftige" bekannt, weil er immer die Wahrheit sprach. Er war einer der ersten Menschen, der schrieb und einen Stift benutzte. Allah gab ihm große Weisheit und Wissen über die Sterne und Mathematik. Idris lehrte die Menschen, wie man Kleidung aus Stoff herstellt und wie man Gewichte für fairen Handel verwendet. Er verbrachte sein Leben damit, die Menschen aufzurufen, Allah allein anzubeten und in ihren Geschäften ehrlich zu sein. Allah liebte Idris so sehr, dass Er ihn zu einem hohen Platz im Himmel erhob, während er noch am Leben war.']
      },
      setting: { en: 'In ancient lands where people were learning to build communities', ar: 'في الأراضي القديمة حيث كان الناس يتعلمون بناء المجتمعات', sv: 'I forntida länder där människor lärde sig att bygga samhällen', de: 'In alten Ländern, in denen die Menschen lernten, Gemeinschaften aufzubauen' },
      mainLesson: { en: 'Always tell the truth and be honest in everything you do. Knowledge is a gift from Allah that we should use to help others.', ar: 'قل الحقيقة دائمًا وكن صادقًا في كل ما تفعله. المعرفة هبة من الله يجب أن نستخدمها لمساعدة الآخرين.', sv: 'Tala alltid sanning och var ärlig i allt du gör. Kunskap är en gåva från Allah som vi bör använda för att hjälpa andra.', de: 'Sage immer die Wahrheit und sei ehrlich in allem, was du tust. Wissen ist ein Geschenk von Allah, das wir nutzen sollten, um anderen zu helfen.' },
      reflectionQuestion: { en: 'How can you use your knowledge and skills to help people around you?', ar: 'كيف يمكنك استخدام معرفتك ومهاراتك لمساعدة الناس من حولك؟', sv: 'Hur kan du använda din kunskap och dina färdigheter för att hjälpa människor omkring dig?', de: 'Wie kannst du dein Wissen und deine Fähigkeiten einsetzen, um den Menschen um dich herum zu helfen?' },
      dua: {
        arabic: 'رَبِّ زِدْنِي عِلْمًا',
        transliteration: 'Rabbi zidnee \'ilma',
        english: { en: 'My Lord, increase me in knowledge.', ar: 'ربِّ، زدني علمًا.', sv: 'Min Herre, öka min kunskap.', de: 'Mein Herr, mehre mein Wissen.' }
      }
    },
    color: 'indigo',
    icon: '📚'
  },
  {
    id: 'nuh',
    name: 'Nuh (Noah)',
    arabicName: 'نوح',
    order: 3,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/nuh.wav' },
      title: { en: 'The Great Flood', ar: 'الطوفان العظيم', sv: 'Den Stora Floden', de: 'Die Große Flut' },
      content: { 
        en: ['Prophet Nuh (peace be upon him) was a kind and patient man who lived when people had forgotten Allah. For 950 years, he gently reminded them to worship the one true God, but most people laughed at him. So, Allah commanded Nuh to build a huge boat, an ark. People made fun of him for building a boat on dry land, but Nuh had complete trust in Allah. He gathered his family, the believers, and a pair of every animal onto the ark. Then, a great flood covered the Earth, but everyone inside the ark was safe, protected by Allah\'s mercy.'],
        ar: ['كان النبي نوح (عليه السلام) رجلاً طيبًا وصبورًا عاش عندما نسي الناس الله. لمدة 950 عامًا، ذكرهم بلطف بعبادة الإله الواحد الحقيقي، لكن معظم الناس سخروا منه. لذلك، أمر الله نوحًا ببناء سفينة ضخمة، فلك. سخر الناس منه لبنائه سفينة على أرض جافة، لكن نوح كان يثق بالله ثقة تامة. جمع عائلته والمؤمنين وزوجين من كل حيوان على الفلك. ثم غطى طوفان عظيم الأرض، لكن كل من كان داخل الفلك كان آمنًا، محميًا برحمة الله.'],
        sv: ['Profeten Nuh (frid vare med honom) var en snäll och tålmodig man som levde när människor hade glömt Allah. I 950 år påminde han dem vänligt om att dyrka den ende sanne Guden, men de flesta skrattade åt honom. Så befallde Allah Nuh att bygga en enorm båt, en ark. Folk gjorde narr av honom för att han byggde en båt på torra land, men Nuh hade fullständigt förtroende för Allah. Han samlade sin familj, de troende och ett par av varje djur på arken. Sedan täckte en stor översvämning jorden, men alla inne i arken var säkra, skyddade av Allahs nåd.'],
        de: ['Prophet Nuh (Friede sei mit ihm) war ein gütiger und geduldiger Mann, der lebte, als die Menschen Allah vergessen hatten. 950 Jahre lang erinnerte er sie sanft daran, den einen wahren Gott anzubeten, aber die meisten Leute lachten ihn aus. Also befahl Allah Nuh, ein riesiges Boot zu bauen, eine Arche. Die Leute machten sich über ihn lustig, weil er ein Boot auf trockenem Land baute, aber Nuh hatte volles Vertrauen in Allah. Er versammelte seine Familie, die Gläubigen und ein Paar von jedem Tier auf der Arche. Dann bedeckte eine große Flut die Erde, aber alle in der Arche waren sicher, geschützt durch Allahs Barmherzigkeit.']
       },
      setting: { en: 'In an ancient land where people had beautiful cities but had forgotten their Creator', ar: 'في أرض قديمة حيث كان للناس مدن جميلة لكنهم نسوا خالقهم', sv: 'I ett forntida land där människor hade vackra städer men hade glömt sin Skapare', de: 'In einem alten Land, wo die Menschen schöne Städte hatten, aber ihren Schöpfer vergessen hatten' },
      mainLesson: { en: 'We should always be patient when teaching others about what is right, even if they don\'t listen at first.', ar: 'يجب أن نتحلى بالصبر دائمًا عند تعليم الآخرين ما هو صحيح، حتى لو لم يستمعوا في البداية.', sv: 'Vi bör alltid ha tålamod när vi lär andra om vad som är rätt, även om de inte lyssnar först.', de: 'Wir sollten immer geduldig sein, wenn wir andere über das Richtige belehren, auch wenn sie zuerst nicht zuhören.' },
      reflectionQuestion: { en: 'How can you be patient and kind when someone doesn\'t want to listen to good advice?', ar: 'كيف يمكنك أن تكون صبورًا ولطيفًا عندما لا يرغب شخص ما في الاستماع إلى نصيحة جيدة؟', sv: 'Hur kan du vara tålmodig och snäll när någon inte vill lyssna på goda råd?', de: 'Wie kannst du geduldig und freundlich sein, wenn jemand nicht auf guten Rat hören will?' },
      dua: {
        arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
        transliteration: 'Rabbi ighfir lee wa li-walidayya wa liman dakhala baytiya mu\'minan wa lil-mu\'mineena wal-mu\'minaat',
        english: { en: 'My Lord, forgive me and my parents and whoever enters my house as a believer and the believing men and believing women.', ar: 'ربِّ، اغفر لي ولوالدي ولمن دخل بيتي مؤمنًا وللمؤمنين والمؤمنات.', sv: 'Min Herre, förlåt mig och mina föräldrar och den som träder in i mitt hus som troende och de troende männen och de troende kvinnorna.', de: 'Mein Herr, vergib mir und meinen Eltern und jedem, der mein Haus als Gläubiger betritt, und den gläubigen Männern und gläubigen Frauen.' }
      }
    },
    color: 'blue',
    icon: '🚢'
  },
  {
    id: 'hud',
    name: 'Hud',
    arabicName: 'هود',
    order: 4,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/hud.wav' },
      title: { en: 'The Warner of \'Ad', ar: 'منذر عاد', sv: 'Varnaren av \'Ad', de: 'Der Warner von \'Ad' },
      content: { 
        en: ['Prophet Hud (peace be upon him) was sent to the people of \'Ad, who were very strong and built huge buildings and towers. They were proud of their strength and forgot about Allah. Hud warned them gently, saying "Worship Allah alone and be grateful for the strong bodies and skills He gave you." But they refused to listen and said their idols would protect them. Allah sent a terrible windstorm that lasted for seven days and seven nights. Only Hud and the few believers who listened to him were saved.'],
        ar: ['أُرسل النبي هود (عليه السلام) إلى قوم عاد، الذين كانوا أقوياء جدًا وبنوا مبانٍ وأبراجًا ضخمة. كانوا فخورين بقوتهم ونسوا الله. حذرهم هود بلطف قائلاً: "اعبدوا الله وحده وكونوا شاكرين للأجساد القوية والمهارات التي منحكم إياها". لكنهم رفضوا الاستماع وقالوا إن أصنامهم ستحميهم. أرسل الله عاصفة رياح رهيبة استمرت سبعة أيام وسبع ليال. لم ينجُ إلا هود والمؤمنون القلائل الذين استمعوا إليه.'],
        sv: ['Profeten Hud (frid vare med honom) sändes till folket i \'Ad, som var mycket starka och byggde enorma byggnader och torn. De var stolta över sin styrka och glömde Allah. Hud varnade dem vänligt och sa: "Dyrka Allah ensam och var tacksamma för de starka kroppar och färdigheter Han gav er." Men de vägrade lyssna och sa att deras avgudar skulle skydda dem. Allah sände en fruktansvärd vindstorm som varade i sju dagar och sju nätter. Endast Hud och de få troende som lyssnade på honom räddades.'],
        de: ['Prophet Hud (Friede sei mit ihm) wurde zum Volk von \'Ad gesandt, das sehr stark war und riesige Gebäude und Türme baute. Sie waren stolz auf ihre Stärke und vergaßen Allah. Hud warnte sie sanft und sagte: "Betet Allah allein an und seid dankbar für die starken Körper und Fähigkeiten, die Er euch gegeben hat." Aber sie weigerten sich zuzuhören und sagten, ihre Götzen würden sie schützen. Allah sandte einen schrecklichen Windsturm, der sieben Tage und sieben Nächte andauerte. Nur Hud und die wenigen Gläubigen, die auf ihn hörten, wurden gerettet.']
       },
      setting: { en: 'In the Arabian desert where the people of \'Ad built magnificent cities', ar: 'في الصحراء العربية حيث بنى قوم عاد مدنًا رائعة', sv: 'I den arabiska öknen där folket i \'Ad byggde magnifika städer', de: 'In der arabischen Wüste, wo das Volk von \'Ad prächtige Städte baute' },
      mainLesson: { en: 'Being strong or having nice things should make us thankful to Allah, not proud and forgetful of Him.', ar: 'أن نكون أقوياء أو نمتلك أشياء جميلة يجب أن يجعلنا شاكرين لله، لا فخورين وناسين له.', sv: 'Att vara stark eller ha fina saker bör göra oss tacksamma mot Allah, inte stolta och glömska av Honom.', de: 'Stark zu sein oder schöne Dinge zu haben, sollte uns dankbar gegenüber Allah machen, nicht stolz und Ihn vergessend.' },
      reflectionQuestion: { en: 'How can you remember to thank Allah for your talents and the good things you have?', ar: 'كيف يمكنك أن تتذكر شكر الله على مواهبك والأشياء الجيدة التي لديك؟', sv: 'Hur kan du komma ihåg att tacka Allah för dina talanger och de goda saker du har?', de: 'Wie kannst du dich daran erinnern, Allah für deine Talente und die guten Dinge, die du hast, zu danken?' },
      dua: {
        arabic: 'إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم',
        transliteration: 'Innee tawakkaltu \'alallahi rabbee wa rabbikum',
        english: { en: 'Indeed, I rely upon Allah, my Lord and your Lord.', ar: 'إني توكلت على الله ربي وربكم.', sv: 'Sannerligen, jag förlitar mig på Allah, min Herre och er Herre.', de: 'Wahrlich, ich vertraue auf Allah, meinen Herrn und euren Herrn.' }
      }
    },
    color: 'yellow',
    icon: '🌪️'
  },
  {
    id: 'salih',
    name: 'Salih',
    arabicName: 'صالح',
    order: 5,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/salih.wav' },
      title: { en: 'The Miracle of the She-Camel', ar: 'معجزة الناقة', sv: 'Miraklet med Kamelstoet', de: 'Das Wunder der Kamelstute' },
      content: { 
        en: ['Prophet Salih (peace be upon him) was sent to the people of Thamud, who carved beautiful houses into mountains. They asked Salih for a miracle, so Allah made a she-camel appear from solid rock! This camel was special - she would drink from their well one day, and they could drink the next day. Salih warned them not to harm the camel, but some evil people killed her. Soon after, a terrible earthquake destroyed their city, but Salih and the believers were saved by Allah.'],
        ar: ['أُرسل النبي صالح (عليه السلام) إلى قوم ثمود، الذين نحتوا بيوتًا جميلة في الجبال. طلبوا من صالح معجزة، فجعل الله ناقة تظهر من صخرة صلبة! كانت هذه الناقة خاصة - كانت تشرب من بئرهم يومًا، ويشربون هم في اليوم التالي. حذرهم صالح من إيذاء الناقة، لكن بعض الأشرار قتلوها. بعد فترة وجيزة، دمر زلزال رهيب مدينتهم، لكن صالح والمؤمنين نجوا بفضل الله.'],
        sv: ['Profeten Salih (frid vare med honom) sändes till folket i Thamud, som högg vackra hus i bergen. De bad Salih om ett mirakel, så Allah lät en kamelsto dyka upp från massiv sten! Denna kamel var speciell - hon skulle dricka från deras brunn en dag, och de kunde dricka nästa dag. Salih varnade dem för att inte skada kamelen, men några onda människor dödade henne. Strax därefter förstörde en fruktansvärd jordbävning deras stad, men Salih och de troende räddades av Allah.'],
        de: ['Prophet Salih (Friede sei mit ihm) wurde zum Volk von Thamud gesandt, das wunderschöne Häuser in die Berge meißelte. Sie baten Salih um ein Wunder, also ließ Allah eine Kamelstute aus massivem Fels erscheinen! Dieses Kamel war besonders - sie trank an einem Tag aus ihrem Brunnen, und sie konnten am nächsten Tag trinken. Salih warnte sie, dem Kamel keinen Schaden zuzufügen, aber einige böse Leute töteten es. Bald darauf zerstörte ein schreckliches Erdbeben ihre Stadt, aber Salih und die Gläubigen wurden von Allah gerettet.']
       },
      setting: { en: 'In the rocky valleys where people carved homes into mountainsides', ar: 'في الوديان الصخرية حيث نحت الناس بيوتهم في سفوح الجبال', sv: 'I de klippiga dalarna där människor högg hem i bergssidorna', de: 'In den felsigen Tälern, wo die Menschen ihre Häuser in die Berghänge meißelten' },
      mainLesson: { en: 'We should respect Allah\'s creation and follow His guidance. When Allah gives us signs, we should believe and obey.', ar: 'يجب أن نحترم خلق الله ونتبع هدايته. عندما يعطينا الله آيات، يجب أن نؤمن ونطيع.', sv: 'Vi bör respektera Allahs skapelse och följa Hans vägledning. När Allah ger oss tecken, bör vi tro och lyda.', de: 'Wir sollten Allahs Schöpfung respektieren und Seiner Führung folgen. Wenn Allah uns Zeichen gibt, sollten wir glauben und gehorchen.' },
      reflectionQuestion: { en: 'How can you be kind to animals and take care of Allah\'s creation?', ar: 'كيف يمكنك أن تكون لطيفًا مع الحيوانات وتعتني بخلق الله؟', sv: 'Hur kan du vara snäll mot djur och ta hand om Allahs skapelse?', de: 'Wie kannst du freundlich zu Tieren sein und dich um Allahs Schöpfung kümmern?' },
      dua: {
        arabic: 'رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ',
        transliteration: 'Rabbi anzilnee munzalan mubarakan wa anta khayrul munzileen',
        english: { en: 'My Lord, settle me in a blessed settlement; and You are the best to settle.', ar: 'ربِّ، أنزلني منزلاً مباركًا وأنت خير المنزلين.', sv: 'Min Herre, låt mig landa på en välsignad plats; och Du är den bäste som ger landning.', de: 'Mein Herr, gewähre mir einen gesegneten Aufenthaltsort; und Du bist der beste, der einen Aufenthaltsort gewährt.' }
      }
    },
    color: 'orange',
    icon: '🐪'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim (Abraham)',
    arabicName: 'إبراهيم',
    order: 6,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/ibrahim.wav' },
      title: { en: 'The Friend of Allah', ar: 'خليل الله', sv: 'Allahs Vän', de: 'Der Freund Allahs' },
      content: { 
        en: ['Prophet Ibrahim (peace be upon him) was very smart, even as a boy. He knew that the stone statues his people worshipped were not real gods. He bravely challenged their beliefs and showed them how powerless the idols were. The angry king threw Ibrahim into a huge fire, but Ibrahim trusted Allah completely. By Allah\'s command, the fire became cool and safe, and Ibrahim walked out unharmed! This miracle showed everyone the power of the one true God. Because of his unwavering faith, Ibrahim is known as "Khalilullah," the friend of Allah.'],
        ar: ['كان النبي إبراهيم (عليه السلام) ذكيًا جدًا، حتى وهو صبي. كان يعلم أن التماثيل الحجرية التي يعبدها قومه ليست آلهة حقيقية. تحدى معتقداتهم بشجاعة وأراهم مدى عجز الأصنام. ألقى الملك الغاضب إبراهيم في نار ضخمة، لكن إبراهيم وثق بالله تمامًا. بأمر الله، أصبحت النار باردة وآمنة، وخرج إبراهيم سالمًا! أظهرت هذه المعجزة للجميع قوة الإله الواحد الحقيقي. بسبب إيمانه الراسخ، يُعرف إبراهيم بـ "خليل الله"، صديق الله.'],
        sv: ['Profeten Ibrahim (frid vare med honom) var mycket smart, även som pojke. Han visste att stenstatyerna som hans folk dyrkade inte var riktiga gudar. Han utmanade modigt deras tro och visade dem hur maktlösa avgudarna var. Den arga kungen kastade Ibrahim i en enorm eld, men Ibrahim litade fullständigt på Allah. På Allahs befallning blev elden sval och säker, och Ibrahim gick ut oskadd! Detta mirakel visade alla kraften hos den ende sanne Guden. På grund av sin orubbliga tro är Ibrahim känd som "Khalilullah", Allahs vän.'],
        de: ['Prophet Ibrahim (Friede sei mit ihm) war sehr klug, schon als Junge. Er wusste, dass die Steinstatuen, die sein Volk anbetete, keine echten Götter waren. Er forderte mutig ihren Glauben heraus und zeigte ihnen, wie machtlos die Götzen waren. Der wütende König warf Ibrahim in ein riesiges Feuer, aber Ibrahim vertraute Allah vollkommen. Auf Allahs Befehl wurde das Feuer kühl und sicher, und Ibrahim kam unversehrt heraus! Dieses Wunder zeigte allen die Macht des einen wahren Gottes. Wegen seines unerschütterlichen Glaubens ist Ibrahim als "Khalilullah", der Freund Allahs, bekannt.']
       },
      setting: { en: 'In ancient Mesopotamia, a land of rivers and cities where people carved beautiful statues', ar: 'في بلاد ما بين النهرين القديمة، أرض الأنهار والمدن حيث نحت الناس تماثيل جميلة', sv: 'I forntida Mesopotamien, ett land med floder och städer där människor högg vackra statyer', de: 'Im alten Mesopotamien, einem Land der Flüsse und Städte, wo die Menschen wunderschöne Statuen meißelten' },
      mainLesson: { en: 'We should always trust Allah, even when things seem scary or difficult. Allah always protects those who believe in Him.', ar: 'يجب أن نثق بالله دائمًا، حتى عندما تبدو الأمور مخيفة أو صعبة. الله يحمي دائمًا أولئك الذين يؤمنون به.', sv: 'Vi bör alltid lita på Allah, även när saker verkar skrämmande eller svåra. Allah skyddar alltid dem som tror på Honom.', de: 'Wir sollten immer auf Allah vertrauen, auch wenn die Dinge beängstigend oder schwierig erscheinen. Allah beschützt immer diejenigen, die an Ihn glauben.' },
      reflectionQuestion: { en: 'What does it mean to be a true friend of Allah?', ar: 'ماذا يعني أن تكون صديقًا حقيقيًا لله؟', sv: 'Vad betyder det att vara en sann vän till Allah?', de: 'Was bedeutet es, ein wahrer Freund Allahs zu sein?' },
      dua: {
        arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Rabbana taqabbal minna innaka antas-Samee\'ul-\'Aleem',
        english: { en: 'Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing.', ar: 'ربنا تقبل منا إنك أنت السميع العليم.', sv: 'Vår Herre, acceptera detta från oss. Sannerligen, Du är den Hörande, den Vetande.', de: 'Unser Herr, nimm dies von uns an. Wahrlich, Du bist der Hörende, der Wissende.' }
      }
    },
    color: 'amber',
    icon: '⭐'
  },
  {
    id: 'lut',
    name: 'Lut (Lot)',
    arabicName: 'لوط',
    order: 7,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/lut.wav' },
      title: { en: 'The Righteous Nephew', ar: 'ابن الأخ الصالح', sv: 'Den Rättfärdige Brorsonen', de: 'Der Rechtschaffene Neffe' },
      content: { 
        en: ['Prophet Lut (peace be upon him) was the nephew of Prophet Ibrahim. He was sent to guide the people of Sodom and Gomorrah, who were doing many bad things. Lut tried his best to teach them to be good and kind to each other, but they refused to listen. When angels came to warn Lut that Allah would punish the city, they told him to leave with his family at night. Lut and his daughters were saved, but his wife looked back and was punished. The city was destroyed, but the righteous were protected.'],
        ar: ['كان النبي لوط (عليه السلام) ابن أخ النبي إبراهيم. أُرسل لهداية أهل سدوم وعمورة، الذين كانوا يفعلون أشياء سيئة كثيرة. حاول لوط جاهدًا أن يعلمهم أن يكونوا صالحين ولطفاء مع بعضهم البعض، لكنهم رفضوا الاستماع. عندما جاء الملائكة لتحذير لوط بأن الله سيعاقب المدينة، طلبوا منه المغادرة مع عائلته ليلاً. نجا لوط وبناته، لكن زوجته نظرت إلى الوراء وعوقبت. دُمرت المدينة، لكن الصالحين كانوا محميين.'],
        sv: ['Profeten Lut (frid vare med honom) var brorson till profeten Ibrahim. Han sändes för att vägleda folket i Sodom och Gomorra, som gjorde många dåliga saker. Lut gjorde sitt bästa för att lära dem att vara goda och snälla mot varandra, men de vägrade lyssna. När änglar kom för att varna Lut för att Allah skulle straffa staden, sa de åt honom att lämna med sin familj på natten. Lut och hans döttrar räddades, men hans fru såg sig tillbaka och straffades. Staden förstördes, men de rättfärdiga skyddades.'],
        de: ['Prophet Lut (Friede sei mit ihm) war der Neffe von Prophet Ibrahim. Er wurde gesandt, um die Menschen von Sodom und Gomorra zu leiten, die viele schlechte Dinge taten. Lut versuchte sein Bestes, ihnen beizubringen, gut und freundlich zueinander zu sein, aber sie weigerten sich zuzuhören. Als Engel kamen, um Lut zu warnen, dass Allah die Stadt bestrafen würde, sagten sie ihm, er solle mit seiner Familie in der Nacht gehen. Lut und seine Töchter wurden gerettet, aber seine Frau schaute zurück und wurde bestraft. Die Stadt wurde zerstört, aber die Gerechten wurden beschützt.']
       },
      setting: { en: 'In the cities near the Dead Sea, in a time when people had forgotten kindness', ar: 'في المدن القريبة من البحر الميت، في زمن نسي فيه الناس اللطف', sv: 'I städerna nära Döda havet, i en tid då människor hade glömt vänlighet', de: 'In den Städten nahe dem Toten Meer, in einer Zeit, als die Menschen die Freundlichkeit vergessen hatten' },
      mainLesson: { en: 'We should always choose to do what\'s right, even when others around us are doing wrong things.', ar: 'يجب أن نختار دائمًا فعل ما هو صحيح، حتى عندما يفعل الآخرون من حولنا أشياء خاطئة.', sv: 'Vi bör alltid välja att göra det som är rätt, även när andra omkring oss gör fel saker.', de: 'Wir sollten immer wählen, das Richtige zu tun, auch wenn andere um uns herum falsche Dinge tun.' },
      reflectionQuestion: { en: 'How can you stay good when people around you are not being nice?', ar: 'كيف يمكنك أن تبقى صالحًا عندما لا يكون الناس من حولك لطفاء؟', sv: 'Hur kan du förbli god när människor omkring dig inte är snälla?', de: 'Wie kannst du gut bleiben, wenn die Leute um dich herum nicht nett sind?' },
      dua: {
        arabic: 'رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ',
        transliteration: 'Rabbi najjinee wa ahlee mimma ya\'maloon',
        english: { en: 'My Lord, save me and my family from what they do.', ar: 'ربِّ، نجني وأهلي مما يعملون.', sv: 'Min Herre, rädda mig och min familj från vad de gör.', de: 'Mein Herr, rette mich und meine Familie vor dem, was sie tun.' }
      }
    },
    color: 'teal',
    icon: '🏔️'
  },
  {
    id: 'ismail',
    name: 'Ismail (Ishmael)',
    arabicName: 'إسماعيل',
    order: 8,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/ismail.wav' },
      title: { en: 'The Willing Son', ar: 'الابن الطائع', sv: 'Den Villige Sonen', de: 'Der Willige Sohn' },
      content: { 
        en: ['Prophet Ismail (peace be upon him) was the beloved son of Prophet Ibrahim. When Ismail was young, Ibrahim had a dream that he should sacrifice his son for Allah. Both father and son were ready to obey Allah completely. Just as Ibrahim was about to sacrifice Ismail, Allah stopped him and provided a ram instead. This showed their perfect faith and obedience to Allah. Ismail grew up to help his father build the Kaaba in Makkah, the house that Muslims still visit today.'],
        ar: ['كان النبي إسماعيل (عليه السلام) الابن الحبيب للنبي إبراهيم. عندما كان إسماعيل صغيرًا، رأى إبراهيم حلمًا بأنه يجب أن يضحي بابنه من أجل الله. كان الأب والابن مستعدين لطاعة الله تمامًا. تمامًا كما كان إبراهيم على وشك التضحية بإسماعيل، أوقفه الله وقدم كبشًا بدلاً منه. أظهر هذا إيمانهم وطاعتهم الكاملة لله. نشأ إسماعيل ليساعد والده في بناء الكعبة في مكة، البيت الذي لا يزال المسلمون يزورونه حتى اليوم.'],
        sv: ['Profeten Ismail (frid vare med honom) var den älskade sonen till profeten Ibrahim. När Ismail var ung hade Ibrahim en dröm om att han skulle offra sin son för Allah. Både far och son var redo att lyda Allah fullständigt. Precis när Ibrahim skulle offra Ismail stoppade Allah honom och gav en bagge istället. Detta visade deras perfekta tro och lydnad mot Allah. Ismail växte upp och hjälpte sin far att bygga Kaba i Mecka, huset som muslimer fortfarande besöker idag.'],
        de: ['Prophet Ismail (Friede sei mit ihm) war der geliebte Sohn von Prophet Ibrahim. Als Ismail jung war, hatte Ibrahim einen Traum, dass er seinen Sohn für Allah opfern sollte. Vater und Sohn waren beide bereit, Allah vollständig zu gehorchen. Gerade als Ibrahim Ismail opfern wollte, hielt Allah ihn auf und stellte stattdessen einen Widder zur Verfügung. Dies zeigte ihren perfekten Glauben und Gehorsam gegenüber Allah. Ismail wuchs heran, um seinem Vater beim Bau der Kaaba in Mekka zu helfen, dem Haus, das Muslime heute noch besuchen.']
       },
      setting: { en: 'In the holy valley of Makkah, where the Kaaba would be built', ar: 'في وادي مكة المقدس، حيث ستبنى الكعبة', sv: 'I den heliga dalen i Mecka, där Kaba skulle byggas', de: 'Im heiligen Tal von Mekka, wo die Kaaba gebaut werden sollte' },
      mainLesson: { en: 'True love for Allah means being willing to obey Him completely, even when it\'s difficult.', ar: 'الحب الحقيقي لله يعني الاستعداد لطيعه بالكامل، حتى عندما يكون الأمر صعبًا.', sv: 'Sann kärlek till Allah innebär att vara villig att lyda Honom fullständigt, även när det är svårt.', de: 'Wahre Liebe zu Allah bedeutet, bereit zu sein, Ihm vollständig zu gehorchen, auch wenn es schwierig ist.' },
      reflectionQuestion: { en: 'How can you show Allah that you love Him through your actions?', ar: 'كيف يمكنك أن تظهر لله أنك تحبه من خلال أفعالك؟', sv: 'Hur kan du visa Allah att du älskar Honom genom dina handlingar?', de: 'Wie kannst du Allah durch deine Taten zeigen, dass du Ihn liebst?' },
      dua: {
        arabic: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',
        transliteration: 'Rabbana waj\'alna muslimayni laka wa min dhurriyyatina ummatan muslimatan lak',
        english: { en: 'Our Lord, and make us Muslims in submission to You and from our descendants a Muslim nation in submission to You.', ar: 'ربنا واجعلنا مسلمين لك ومن ذريتنا أمة مسلمة لك.', sv: 'Vår Herre, och gör oss till muslimer i underkastelse till Dig och från våra efterkommande en muslimsk nation i underkastelse till Dig.', de: 'Unser Herr, und mache uns zu Muslimen in Ergebenheit zu Dir und aus unserer Nachkommenschaft eine muslimische Nation in Ergebenheit zu Dir.' }
      }
    },
    color: 'green',
    icon: '🕋'
  },
  {
    id: 'ishaq',
    name: 'Ishaq (Isaac)',
    arabicName: 'إسحاق',
    order: 9,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/ishaq.wav' },
      title: { en: 'The Promised Gift', ar: 'الهدية الموعودة', sv: 'Den Utlovade Gåvan', de: 'Das Versprochene Geschenk' },
      content: { 
        en: ['Prophet Ibrahim and his wife Sarah waited and waited for a baby for many, many years. They prayed to Allah and never gave up hope. One day, special visitors came to their home - they were angels! The angels had wonderful news: "Allah is giving you a baby boy!" Sarah was so surprised and happy. Just as Allah promised, they had a son named Ishaq (peace be upon him). Ishaq grew up to be a great prophet, just like his father. His story teaches us that Allah always answers our prayers and that good things come to those who are patient.'],
        ar: ['انتظر النبي إبراهيم وزوجته سارة طفلاً لسنوات عديدة. صلوا إلى الله ولم يفقدوا الأمل أبدًا. في أحد الأيام، جاء زوار خاصون إلى منزلهم - كانوا ملائكة! كان لدى الملائكة أخبار رائعة: "الله يمنحكم طفلاً صبيًا!" كانت سارة مندهشة وسعيدة جدًا. تمامًا كما وعد الله، رزقا بابن اسمه إسحاق (عليه السلام). نشأ إسحاق ليصبح نبيًا عظيمًا، تمامًا مثل والده. تعلمنا قصته أن الله يجيب دائمًا على دعواتنا وأن الأشياء الجيدة تأتي لأولئك الذين يصبرون.'],
        sv: ['Profeten Ibrahim och hans fru Sarah väntade och väntade på ett barn i många, många år. De bad till Allah och gav aldrig upp hoppet. En dag kom speciella besökare till deras hem - de var änglar! Änglarna hade underbara nyheter: "Allah ger er en pojke!" Sarah blev så förvånad och glad. Precis som Allah lovade fick de en son som hette Ishaq (frid vare med honom). Ishaq växte upp och blev en stor profet, precis som sin far. Hans berättelse lär oss att Allah alltid besvarar våra böner och att goda saker kommer till dem som har tålamod.'],
        de: ['Prophet Ibrahim und seine Frau Sarah warteten viele, viele Jahre auf ein Baby. Sie beteten zu Allah und gaben die Hoffnung nie auf. Eines Tages kamen besondere Besucher in ihr Haus - es waren Engel! Die Engel hatten wunderbare Neuigkeiten: "Allah schenkt euch einen Jungen!" Sarah war so überrascht und glücklich. Genau wie Allah es versprochen hatte, bekamen sie einen Sohn namens Ishaq (Friede sei mit ihm). Ishaq wuchs zu einem großen Propheten heran, genau wie sein Vater. Seine Geschichte lehrt uns, dass Allah unsere Gebete immer erhört und dass gute Dinge zu denen kommen, die geduldig sind.']
       },
      setting: { en: 'In the blessed land of Palestine, under the shade of ancient olive trees', ar: 'في أرض فلسطين المباركة، تحت ظل أشجار الزيتون القديمة', sv: 'I det välsignade landet Palestina, i skuggan av gamla olivträd', de: 'Im gesegneten Land Palästina, im Schatten alter Olivenbäume' },
      mainLesson: { en: 'Allah always keeps His promises. We should have patience and never lose hope in Allah\'s mercy.', ar: 'الله يفي دائمًا بوعوده. يجب أن نتحلى بالصبر ولا نفقد الأمل أبدًا في رحمة الله.', sv: 'Allah håller alltid Sina löften. Vi bör ha tålamod och aldrig förlora hoppet om Allahs nåd.', de: 'Allah hält immer Seine Versprechen. Wir sollten Geduld haben und niemals die Hoffnung auf Allahs Barmherzigkeit verlieren.' },
      reflectionQuestion: { en: 'Can you think of a time you were patient and something good happened?', ar: 'هل يمكنك التفكير في وقت كنت فيه صبورًا وحدث شيء جيد؟', sv: 'Kan du komma på en gång då du var tålmodig och något bra hände?', de: 'Kannst du dich an eine Zeit erinnern, in der du geduldig warst und etwas Gutes passiert ist?' },
      dua: {
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ',
        transliteration: 'Alhamdu lillahil-lathee wahaba lee \'alal kibari Isma\'eela wa Ishaqa',
        english: { en: 'Praise to Allah, who has granted to me in my old age Ishmael and Isaac.', ar: 'الحمد لله الذي وهب لي على الكبر إسماعيل وإسحاق.', sv: 'Lovad vare Allah, som har beviljat mig i min ålderdom Ismael och Isak.', de: 'Lob sei Allah, der mir in meinem hohen Alter Ismael und Isaak geschenkt hat.' }
      }
    },
    color: 'sky',
    icon: '🎁'
  },
  {
    id: 'yaqub',
    name: 'Yaqub (Jacob)',
    arabicName: 'يعقوب',
    order: 10,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/yaqub.wav' },
      title: { en: 'The Patient Father', ar: 'الأب الصبور', sv: 'Den Tålmodige Fadern', de: 'Der Geduldige Vater' },
      content: { 
        en: ['Prophet Yaqub (peace be upon him), also called Israel, was the son of Ishaq. He had twelve sons, and he loved them all, but he had a special place in his heart for Yusuf and Binyamin. When his sons took Yusuf away, Yaqub was very sad and cried so much that he became blind. But he never stopped believing that Allah would bring Yusuf back to him. He waited patiently for many years, always praying and trusting in Allah. Finally, Allah reunited him with all his children, and he could see again!'],
        ar: ['النبي يعقوب (عليه السلام)، الذي يُدعى أيضًا إسرائيل، كان ابن إسحاق. كان لديه اثنا عشر ابنًا، وكان يحبهم جميعًا، لكن كان ليوسف وبنيامين مكانة خاصة في قلبه. عندما أخذ أبناؤه يوسف بعيدًا، كان يعقوب حزينًا جدًا وبكى كثيرًا حتى أصبح أعمى. لكنه لم يتوقف أبدًا عن الإيمان بأن الله سيعيد يوسف إليه. انتظر بصبر لسنوات عديدة، دائمًا يصلي ويثق بالله. أخيرًا، جمعه الله مع جميع أبنائه، واستطاع أن يرى مرة أخرى!'],
        sv: ['Profeten Yaqub (frid vare med honom), även kallad Israel, var son till Ishaq. Han hade tolv söner, och han älskade dem alla, men han hade en speciell plats i sitt hjärta för Yusuf och Binyamin. När hans söner tog bort Yusuf blev Yaqub mycket ledsen och grät så mycket att han blev blind. Men han slutade aldrig tro att Allah skulle föra Yusuf tillbaka till honom. Han väntade tålmodigt i många år, bad alltid och litade på Allah. Slutligen återförenade Allah honom med alla sina barn, och han kunde se igen!'],
        de: ['Prophet Yaqub (Friede sei mit ihm), auch Israel genannt, war der Sohn von Ishaq. Er hatte zwölf Söhne, und er liebte sie alle, aber er hatte einen besonderen Platz in seinem Herzen für Yusuf und Binyamin. Als seine Söhne Yusuf wegnahmen, war Yaqub sehr traurig und weinte so sehr, dass er blind wurde. Aber er hörte nie auf zu glauben, dass Allah Yusuf zu ihm zurückbringen würde. Er wartete geduldig viele Jahre, betete immer und vertraute auf Allah. Schließlich vereinte Allah ihn wieder mit all seinen Kindern, und er konnte wieder sehen!']
       },
      setting: { en: 'In the lands of Palestine and later in Egypt, during times of joy and sorrow', ar: 'في أراضي فلسطين ولاحقًا في مصر، في أوقات الفرح والحزن', sv: 'I Palestinas länder och senare i Egypten, under tider av glädje och sorg', de: 'In den Ländern Palästinas und später in Ägypten, in Zeiten der Freude und des Leids' },
      mainLesson: { en: 'Even when we are very sad, we should keep trusting Allah and never give up hope.', ar: 'حتى عندما نكون حزينين جدًا، يجب أن نستمر في الثقة بالله ولا نفقد الأمل أبدًا.', sv: 'Även när vi är mycket ledsna, bör vi fortsätta att lita på Allah och aldrig ge upp hoppet.', de: 'Auch wenn wir sehr traurig sind, sollten wir weiterhin auf Allah vertrauen und niemals die Hoffnung aufgeben.' },
      reflectionQuestion: { en: 'How can you stay hopeful when something makes you feel sad?', ar: 'كيف يمكنك أن تبقى متفائلاً عندما يحزنك شيء ما؟', sv: 'Hur kan du förbli hoppfull när något gör dig ledsen?', de: 'Wie kannst du hoffnungsvoll bleiben, wenn dich etwas traurig macht?' },
      dua: {
        arabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُZْنِي إِلَى اللَّهِ',
        transliteration: 'Innama ashkoo baththee wa huznee ilallah',
        english: { en: 'I only complain of my suffering and grief to Allah.', ar: 'إنما أشكو بثي وحزني إلى الله.', sv: 'Jag klagar endast över mitt lidande och min sorg till Allah.', de: 'Ich klage mein Leid und meinen Kummer nur Allah.' }
      }
    },
    color: 'violet',
    icon: '👨‍👦‍👦'
  },
  {
    id: 'yusuf',
    name: 'Yusuf (Joseph)',
    arabicName: 'يوسف',
    order: 11,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/yusuf.wav' },
      title: { en: 'The Beautiful Dream', ar: 'الحلم الجميل', sv: 'Den Vackra Drömmen', de: 'Der Schöne Traum' },
      content: { 
        en: ['Prophet Yusuf (peace be upon him) had an amazing dream that eleven stars, the sun, and the moon were bowing to him. His jealous brothers threw him into a well, but he was rescued and taken to Egypt. Despite many challenges, Yusuf remained patient and always trusted in Allah. Allah gave him the wisdom to understand dreams, and he became a great leader in Egypt. Years later, he forgave his brothers and was reunited with his family. His life shows us that even in hard times, Allah has a beautiful plan for us if we are patient and forgiving.'],
        ar: ['رأى النبي يوسف (عليه السلام) حلمًا مذهلاً بأن أحد عشر نجمًا والشمس والقمر يسجدون له. ألقاه إخوته الغيورون في بئر، لكن تم إنقاذه ونقله إلى مصر. على الرغم من العديد من التحديات، ظل يوسف صبورًا ويثق بالله دائمًا. منحه الله الحكمة لفهم الأحلام، وأصبح قائدًا عظيمًا في مصر. بعد سنوات، سامح إخوته واجتمع بعائلته. تظهر لنا حياته أنه حتى في الأوقات الصعبة، لدى الله خطة جميلة لنا إذا كنا صبورين ومتسامحين.'],
        sv: ['Profeten Yusuf (frid vare med honom) hade en fantastisk dröm om att elva stjärnor, solen och månen bugade för honom. Hans avundsjuka bröder kastade honom i en brunn, men han räddades och fördes till Egypten. Trots många utmaningar förblev Yusuf tålmodig och litade alltid på Allah. Allah gav honom visdomen att förstå drömmar, och han blev en stor ledare i Egypten. År senare förlät han sina bröder och återförenades med sin familj. Hans liv visar oss att även i svåra tider har Allah en vacker plan för oss om vi är tålmodiga och förlåtande.'],
        de: ['Prophet Yusuf (Friede sei mit ihm) hatte einen erstaunlichen Traum, dass elf Sterne, die Sonne und der Mond sich vor ihm verneigten. Seine eifersüchtigen Brüder warfen ihn in einen Brunnen, aber er wurde gerettet und nach Ägypten gebracht. Trotz vieler Herausforderungen blieb Yusuf geduldig und vertraute immer auf Allah. Allah gab ihm die Weisheit, Träume zu verstehen, und er wurde ein großer Führer in Ägypten. Jahre später vergab er seinen Brüdern und wurde mit seiner Familie wiedervereinigt. Sein Leben zeigt uns, dass Allah auch in schweren Zeiten einen schönen Plan für uns hat, wenn wir geduldig und vergebend sind.']
       },
      setting: { en: 'In the ancient lands of Palestine and the magnificent kingdom of Egypt along the Nile River', ar: 'في أراضي فلسطين القديمة ومملكة مصر الرائعة على طول نهر النيل', sv: 'I de forntida länderna Palestina och det magnifika kungariket Egypten längs Nilen', de: 'In den alten Ländern Palästinas und dem prächtigen Königreich Ägypten entlang des Nils' },
      mainLesson: { en: 'Even when bad things happen to us, Allah has a plan. If we stay patient and keep doing good, Allah will help us.', ar: 'حتى عندما تحدث لنا أشياء سيئة، لدى الله خطة. إذا بقينا صبورين واستمررنا في فعل الخير، سيساعدنا الله.', sv: 'Även när dåliga saker händer oss, har Allah en plan. Om vi förblir tålmodiga och fortsätter att göra gott, kommer Allah att hjälpa oss.', de: 'Auch wenn uns schlimme Dinge passieren, hat Allah einen Plan. Wenn wir geduldig bleiben und weiterhin Gutes tun, wird Allah uns helfen.' },
      reflectionQuestion: { en: 'How can you forgive someone who has hurt your feelings?', ar: 'كيف يمكنك أن تسامح شخصًا جرح مشاعرك؟', sv: 'Hur kan du förlåta någon som har sårat dina känslor?', de: 'Wie kannst du jemandem vergeben, der deine Gefühle verletzt hat?' },
      dua: {
        arabic: 'رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ',
        transliteration: 'Rabbi qad aataytanee minal-mulki wa \'allamtanee min ta\'weel il-ahaadeeth',
        english: { en: 'My Lord, You have given me sovereignty and taught me the interpretation of dreams.', ar: 'ربِّ، قد آتيتني من الملك وعلمتني من تأويل الأحاديث.', sv: 'Min Herre, Du har gett mig suveränitet och lärt mig tolkningen av drömmar.', de: 'Mein Herr, Du hast mir Herrschaft gegeben und mich die Deutung der Träume gelehrt.' }
      }
    },
    color: 'purple',
    icon: '🌙'
  },
  {
    id: 'shuayb',
    name: 'Shu\'ayb',
    arabicName: 'شعيب',
    order: 12,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/shuayb.wav' },
      title: { en: 'The Eloquent Speaker', ar: 'الخطيب البليغ', sv: 'Den Vältalige Talaren', de: 'Der Beredte Redner' },
      content: { 
        en: ['Prophet Shu\'ayb (peace be upon him) was known for his beautiful way of speaking. He was sent to the people of Madyan, who were cheating in their business deals. They would use false weights and measures to steal from people. Shu\'ayb taught them to be honest in all their dealings and to worship Allah alone. He warned them that cheating is wrong and that Allah sees everything we do. When they refused to listen, Allah punished them with a terrible earthquake, but Shu\'ayb and the believers were saved.'],
        ar: ['اشتهر النبي شعيب (عليه السلام) بأسلوبه الجميل في الكلام. أُرسل إلى أهل مدين، الذين كانوا يغشون في صفقاتهم التجارية. كانوا يستخدمون أوزانًا ومقاييس زائفة لسرقة الناس. علمهم شعيب أن يكونوا صادقين في جميع تعاملاتهم وأن يعبدوا الله وحده. حذرهم من أن الغش خطأ وأن الله يرى كل ما نفعل. عندما رفضوا الاستماع، عاقبهم الله بزلزال رهيب، لكن شعيب والمؤمنين نجوا.'],
        sv: ['Profeten Shu\'ayb (frid vare med honom) var känd för sitt vackra sätt att tala. Han sändes till folket i Madyan, som fuskade i sina affärsuppgörelser. De använde falska vikter och mått för att stjäla från folk. Shu\'ayb lärde dem att vara ärliga i alla sina affärer och att dyrka Allah ensam. Han varnade dem för att fusk är fel och att Allah ser allt vi gör. När de vägrade lyssna straffade Allah dem med en fruktansvärd jordbävning, men Shu\'ayb och de troende räddades.'],
        de: ['Prophet Shu\'ayb (Friede sei mit ihm) war für seine schöne Art zu sprechen bekannt. Er wurde zum Volk von Madyan gesandt, das bei seinen Geschäften betrog. Sie benutzten falsche Gewichte und Maße, um die Leute zu bestehlen. Shu\'ayb lehrte sie, in all ihren Geschäften ehrlich zu sein und Allah allein anzubeten. Er warnte sie, dass Betrug falsch ist und dass Allah alles sieht, was wir tun. Als sie sich weigerten zuzuhören, bestrafte Allah sie mit einem schrecklichen Erdbeben, aber Shu\'ayb und die Gläubigen wurden gerettet.']
       },
      setting: { en: 'In the trading city of Madyan, where merchants came from many lands', ar: 'في مدينة مدين التجارية، حيث أتى التجار من بلدان عديدة', sv: 'I handelsstaden Madyan, dit köpmän kom från många länder', de: 'In der Handelsstadt Madyan, wo Händler aus vielen Ländern kamen' },
      mainLesson: { en: 'Always be honest in your dealings with others. Allah loves those who are fair and truthful.', ar: 'كن دائمًا صادقًا في تعاملاتك مع الآخرين. الله يحب أولئك الذين هم عادلون وصادقون.', sv: 'Var alltid ärlig i dina affärer med andra. Allah älskar dem som är rättvisa och sanningsenliga.', de: 'Sei immer ehrlich in deinen Geschäften mit anderen. Allah liebt diejenigen, die fair und wahrhaftig sind.' },
      reflectionQuestion: { en: 'How can you make sure you\'re always fair when playing games or sharing with friends?', ar: 'كيف يمكنك التأكد من أنك دائمًا عادل عند لعب الألعاب أو المشاركة مع الأصدقاء؟', sv: 'Hur kan du se till att du alltid är rättvis när du spelar spel eller delar med vänner?', de: 'Wie kannst du sicherstellen, dass du immer fair bist, wenn du Spiele spielst oder mit Freunden teilst?' },
      dua: {
        arabic: 'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ',
        transliteration: 'Wa ma tawfeeqee illa billah, \'alayhi tawakkaltu wa ilayhi uneeb',
        english: { en: 'And my success is not but through Allah. Upon Him I have relied, and to Him I return.', ar: 'وما توفيقي إلا بالله عليه توكلت وإليه أنيب.', sv: 'Och min framgång är inte annat än genom Allah. På Honom har jag förlitat mig, och till Honom återvänder jag.', de: 'Und mein Erfolg ist nur durch Allah. Auf Ihn habe ich mich verlassen, und zu Ihm kehre ich zurück.' }
      }
    },
    color: 'cyan',
    icon: '⚖️'
  },
  {
    id: 'ayyub',
    name: 'Ayyub (Job)',
    arabicName: 'أيوب',
    order: 13,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/ayyub.wav' },
      title: { en: 'The Patient Believer', ar: 'المؤمن الصبور', sv: 'Den Tålmodige Troende', de: 'Der Geduldige Gläubige' },
      content: { 
        en: ['Prophet Ayyub (peace be upon him) was a very wealthy man with a large family, many animals, and beautiful lands. He was also very righteous and always remembered Allah. To test his faith, Allah allowed Ayyub to lose everything - his wealth, his children, and his health. Ayyub became very sick, but he never complained or stopped believing in Allah. He remained patient and kept praying. After many years of hardship, Allah restored his health, gave him back his wealth, and blessed him with even more children. His story teaches us to be patient during difficult times.'],
        ar: ['كان النبي أيوب (عليه السلام) رجلاً ثريًا جدًا لديه عائلة كبيرة، وحيوانات كثيرة، وأراضٍ جميلة. كان أيضًا صالحًا جدًا ويتذكر الله دائمًا. لاختبار إيمانه، سمح الله لأيوب أن يفقد كل شيء - ثروته، وأطفاله، وصحته. أصبح أيوب مريضًا جدًا، لكنه لم يشتكِ أبدًا أو يتوقف عن الإيمان بالله. ظل صبورًا واستمر في الصلاة. بعد سنوات عديدة من المشقة، أعاد الله صحته، وأعاد له ثروته، وباركه بمزيد من الأطفال. تعلمنا قصته أن نكون صبورين في الأوقات الصعبة.'],
        sv: ['Profeten Ayyub (frid vare med honom) var en mycket rik man med en stor familj, många djur och vackra marker. Han var också mycket rättfärdig och kom alltid ihåg Allah. För att pröva hans tro lät Allah Ayyub förlora allt - sin rikedom, sina barn och sin hälsa. Ayyub blev mycket sjuk, men han klagade aldrig eller slutade tro på Allah. Han förblev tålmodig och fortsatte att be. Efter många år av svårigheter återställde Allah hans hälsa, gav honom tillbaka hans rikedom och välsignade honom med ännu fler barn. Hans berättelse lär oss att vara tålmodiga under svåra tider.'],
        de: ['Prophet Ayyub (Friede sei mit ihm) war ein sehr reicher Mann mit einer großen Familie, vielen Tieren und schönen Ländereien. Er war auch sehr rechtschaffen und erinnerte sich immer an Allah. Um seinen Glauben zu prüfen, erlaubte Allah Ayyub, alles zu verlieren - seinen Reichtum, seine Kinder und seine Gesundheit. Ayyub wurde sehr krank, aber er beklagte sich nie oder hörte auf, an Allah zu glauben. Er blieb geduldig und betete weiter. Nach vielen Jahren der Not stellte Allah seine Gesundheit wieder her, gab ihm seinen Reichtum zurück und segnete ihn mit noch mehr Kindern. Seine Geschichte lehrt uns, in schwierigen Zeiten geduldig zu sein.']
       },
      setting: { en: 'In a prosperous land where Ayyub had great wealth and a loving family', ar: 'في أرض مزدهرة حيث كان لأيوب ثروة كبيرة وعائلة محبة', sv: 'I ett välmående land där Ayyub hade stor rikedom och en kärleksfull familj', de: 'In einem wohlhabenden Land, in dem Ayyub großen Reichtum und eine liebevolle Familie hatte' },
      mainLesson: { en: 'When difficult things happen, we should be patient and keep trusting Allah. He always has a plan for us.', ar: 'عندما تحدث أشياء صعبة، يجب أن نكون صبورين ونستمر في الثقة بالله. لديه دائمًا خطة لنا.', sv: 'När svåra saker händer, bör vi vara tålmodiga och fortsätta lita på Allah. Han har alltid en plan för oss.', de: 'Wenn schwierige Dinge passieren, sollten wir geduldig sein und weiterhin auf Allah vertrauen. Er hat immer einen Plan für uns.' },
      reflectionQuestion: { en: 'How can you stay patient when things don\'t go the way you want them to?', ar: 'كيف يمكنك أن تبقى صبورًا عندما لا تسير الأمور كما تريد؟', sv: 'Hur kan du förbli tålmodig när saker inte går som du vill?', de: 'Wie kannst du geduldig bleiben, wenn die Dinge nicht so laufen, wie du es willst?' },
      dua: {
        arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
        transliteration: 'Annee massaniyadh-dhurru wa anta arhamur-rahimeen',
        english: { en: 'Indeed, adversity has touched me, and You are the most merciful of the merciful.', ar: 'أني مسني الضر وأنت أرحم الراحمين.', sv: 'Sannerligen, motgång har drabbat mig, och Du är den barmhärtigaste av de barmhärtiga.', de: 'Wahrlich, Widrigkeit hat mich berührt, und Du bist der barmherzigste der Barmherzigen.' }
      }
    },
    color: 'emerald',
    icon: '🤲'
  },
  {
    id: 'dhulkifl',
    name: 'Dhul-Kifl',
    arabicName: 'ذو الكفل',
    order: 14,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/dhulKifl.wav' },
      title: { en: 'The Guarantor', ar: 'الكفيل', sv: 'Garanten', de: 'Der Bürge' },
      content: { 
        en: ['Prophet Dhul-Kifl (peace be upon him) got his name because he guaranteed (kafala) to do good deeds and help his people. He was known for his justice and fairness when settling disputes between people. Dhul-Kifl would fast during the day, pray at night, and never get angry when making decisions. He always treated everyone fairly, whether they were rich or poor. People trusted him completely because he always kept his promises and was honest in everything he did.'],
        ar: ['حصل النبي ذو الكفل (عليه السلام) على اسمه لأنه ضمن (كفل) فعل الخيرات ومساعدة قومه. كان معروفًا بعدله وإنصافه عند تسوية النزاعات بين الناس. كان ذو الكفل يصوم نهارًا، ويصلي ليلاً، ولا يغضب أبدًا عند اتخاذ القرارات. كان يعامل الجميع دائمًا بإنصاف، سواء كانوا أغنياء أم فقراء. وثق به الناس تمامًا لأنه كان يفي دائمًا بوعوده وكان صادقًا في كل ما يفعله.'],
        sv: ['Profeten Dhul-Kifl (frid vare med honom) fick sitt namn eftersom han garanterade (kafala) att göra goda gärningar och hjälpa sitt folk. Han var känd för sin rättvisa och opartiskhet när han löste tvister mellan människor. Dhul-Kifl fastade under dagen, bad på natten och blev aldrig arg när han fattade beslut. Han behandlade alltid alla rättvist, oavsett om de var rika eller fattiga. Folk litade fullständigt på honom eftersom han alltid höll sina löften och var ärlig i allt han gjorde.'],
        de: ['Prophet Dhul-Kifl (Friede sei mit ihm) erhielt seinen Namen, weil er garantierte (kafala), gute Taten zu vollbringen und seinem Volk zu helfen. Er war bekannt für seine Gerechtigkeit und Fairness bei der Beilegung von Streitigkeiten zwischen Menschen. Dhul-Kifl fastete tagsüber, betete nachts und wurde nie wütend, wenn er Entscheidungen traf. Er behandelte jeden immer fair, ob reich oder arm. Die Leute vertrauten ihm vollkommen, weil er immer seine Versprechen hielt und in allem, was er tat, ehrlich war.']
       },
      setting: { en: 'In a land where people needed someone wise to help solve their problems', ar: 'في أرض حيث احتاج الناس إلى شخص حكيم للمساعدة في حل مشاكلهم', sv: 'I ett land där människor behövde någon vis för att hjälpa till att lösa deras problem', de: 'In einem Land, in dem die Menschen jemanden Weisen brauchten, um ihre Probleme zu lösen' },
      mainLesson: { en: 'We should always keep our promises and treat everyone fairly, no matter who they are.', ar: 'يجب أن نفي دائمًا بوعودنا ونعامل الجميع بإنصاف، بغض النظر عمن هم.', sv: 'Vi bör alltid hålla våra löften och behandla alla rättvist, oavsett vem de är.', de: 'Wir sollten immer unsere Versprechen halten und jeden fair behandeln, egal wer sie sind.' },
      reflectionQuestion: { en: 'How can you be a person that others can trust and rely on?', ar: 'كيف يمكنك أن تكون شخصًا يمكن للآخرين الوثوق به والاعتماد عليه؟', sv: 'Hur kan du vara en person som andra kan lita på och förlita sig på?', de: 'Wie kannst du eine Person sein, der andere vertrauen und auf die sie sich verlassen können?' },
      dua: {
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fi\'d-dunya hasanatan wa fi\'l-akhirati hasanatan wa qina \'adhab an-nar',
        english: { en: 'Our Lord, give us good in this world and good in the next world and save us from the punishment of the Fire.', ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.', sv: 'Vår Herre, ge oss gott i denna värld och gott i nästa värld och rädda oss från eldens straff.', de: 'Unser Herr, gib uns Gutes in dieser Welt und Gutes in der nächsten Welt und bewahre uns vor der Strafe des Feuers.' }
      }
    },
    color: 'slate',
    icon: '🤝'
  },
  {
    id: 'yunus',
    name: 'Yunus (Jonah)',
    arabicName: 'يونس',
    order: 15,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/yunus.wav' },
      title: { en: 'The Man of the Whale', ar: 'صاحب الحوت', sv: 'Mannen från Valen', de: 'Der Mann des Wals' },
      content: { 
        en: ['Prophet Yunus (peace be upon him) was sent to the people of Nineveh, but they refused to listen to his message. Feeling discouraged, Yunus left the city and boarded a ship. During the journey, a terrible storm arose. The sailors threw lots to see who was causing the bad luck, and it pointed to Yunus. He knew Allah was calling him, so he threw himself into the sea. A huge whale swallowed him, but he was safe inside! For three days, Yunus prayed in the whale\'s belly, asking Allah for forgiveness. Allah commanded the whale to release him, and Yunus returned to his people, who had finally believed.'],
        ar: ['أُرسل النبي يونس (عليه السلام) إلى أهل نينوى، لكنهم رفضوا الاستماع إلى رسالته. شعر يونس بالإحباط، فغادر المدينة وركب سفينة. أثناء الرحلة، هبت عاصفة رهيبة. ألقى البحارة القرعة لمعرفة من يسبب سوء الحظ، وأشارت إلى يونس. علم أن الله يناديه، فألقى بنفسه في البحر. ابتلعه حوت ضخم، لكنه كان آمنًا في الداخل! لمدة ثلاثة أيام، صلى يونس في بطن الحوت، طالبًا المغفرة من الله. أمر الله الحوت بإطلاقه، وعاد يونس إلى قومه، الذين آمنوا أخيرًا.'],
        sv: ['Profeten Yunus (frid vare med honom) sändes till folket i Nineve, men de vägrade lyssna på hans budskap. Yunus kände sig modfälld, lämnade staden och gick ombord på ett skepp. Under resan uppstod en fruktansvärd storm. Sjöfararna kastade lott för att se vem som orsakade oturen, och den pekade på Yunus. Han visste att Allah kallade på honom, så han kastade sig i havet. En enorm val svalde honom, men han var säker inuti! I tre dagar bad Yunus i valens buk och bad Allah om förlåtelse. Allah befallde valen att släppa honom, och Yunus återvände till sitt folk, som äntligen hade trott.'],
        de: ['Prophet Yunus (Friede sei mit ihm) wurde zum Volk von Ninive gesandt, aber sie weigerten sich, auf seine Botschaft zu hören. Entmutigt verließ Yunus die Stadt und bestieg ein Schiff. Während der Reise brach ein schrecklicher Sturm aus. Die Seeleute warfen Lose, um zu sehen, wer das Unglück verursachte, und es zeigte auf Yunus. Er wusste, dass Allah ihn rief, also warf er sich ins Meer. Ein riesiger Wal verschluckte ihn, aber er war im Inneren sicher! Drei Tage lang betete Yunus im Bauch des Wals und bat Allah um Vergebung. Allah befahl dem Wal, ihn freizulassen, und Yunus kehrte zu seinem Volk zurück, das endlich geglaubt hatte.']
       },
      setting: { en: 'In the great city of Nineveh and in the depths of the ocean', ar: 'في مدينة نينوى العظيمة وفي أعماق المحيط', sv: 'I den stora staden Nineve och i havets djup', de: 'In der großen Stadt Ninive und in den Tiefen des Ozeans' },
      mainLesson: { en: 'When we make mistakes, we should ask Allah for forgiveness. He always forgives those who are truly sorry.', ar: 'عندما نرتكب أخطاء، يجب أن نطلب من الله المغفرة. إنه يغفر دائمًا لأولئك الذين يأسفون حقًا.', sv: 'När vi gör misstag, bör vi be Allah om förlåtelse. Han förlåter alltid dem som är genuint ledsna.', de: 'Wenn wir Fehler machen, sollten wir Allah um Vergebung bitten. Er vergibt immer denen, die es aufrichtig bereuen.' },
      reflectionQuestion: { en: 'What should you do when you realize you\'ve made a mistake?', ar: 'ماذا يجب أن تفعل عندما تدرك أنك ارتكبت خطأ؟', sv: 'Vad ska du göra när du inser att du har gjort ett misstag?', de: 'Was solltest du tun, wenn du merkst, dass du einen Fehler gemacht hast?' },
      dua: {
        arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        transliteration: 'La ilaha illa anta subhanaka innee kuntu minaz-zalimeen',
        english: { en: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.', ar: 'لا إله إلا أنت سبحانك إني كنت من الظالمين.', sv: 'Det finns ingen gudom utom Du; upphöjd är Du. Sannerligen, jag har varit en av de orättfärdiga.', de: 'Es gibt keine Gottheit außer Dir; erhaben bist Du. Wahrlich, ich bin einer der Missetäter gewesen.' }
      }
    },
    color: 'blue',
    icon: '🐋'
  },
  {
    id: 'musa',
    name: 'Musa (Moses)',
    arabicName: 'موسى',
    order: 16,
    story: {
       audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/musa.wav' },
      title: { en: 'The Staff and the Sea', ar: 'العصا والبحر', sv: 'Staven och Havet', de: 'Der Stab und das Meer' },
      content: { 
        en: ['Prophet Musa (peace be upon him) was sent to a cruel king in Egypt to free the Children of Israel. Allah gave Musa miracles, like a staff that turned into a snake. When the king chased Musa and his people to the Red Sea, they were trapped. But Musa, trusting in Allah, struck the sea with his staff. The sea split in two, creating a dry path for them to cross safely! When the king\'s army followed, the sea closed on them. This powerful story teaches us that with faith in Allah, nothing is impossible.'],
        ar: ['أُرسل النبي موسى (عليه السلام) إلى ملك قاسٍ في مصر لتحرير بني إسرائيل. أعطى الله موسى معجزات، مثل عصا تحولت إلى ثعبان. عندما طارد الملك موسى وقومه إلى البحر الأحمر، حوصروا. لكن موسى، واثقًا بالله، ضرب البحر بعصاه. انشق البحر إلى قسمين، مما خلق مسارًا جافًا لهم لعبوره بأمان! عندما تبع جيش الملك، أغلق البحر عليهم. تعلمنا هذه القصة القوية أنه بالإيمان بالله، لا شيء مستحيل.'],
        sv: ['Profeten Musa (frid vare med honom) sändes till en grym kung i Egypten för att befria Israels barn. Allah gav Musa mirakel, som en stav som förvandlades till en orm. När kungen förföljde Musa och hans folk till Röda havet, var de instängda. Men Musa, som litade på Allah, slog havet med sin stav. Havet delade sig i två, vilket skapade en torr väg för dem att korsa säkert! När kungens armé följde efter, stängdes havet över dem. Denna kraftfulla berättelse lär oss att med tro på Allah är ingenting omöjligt.'],
        de: ['Prophet Musa (Friede sei mit ihm) wurde zu einem grausamen König in Ägypten gesandt, um die Kinder Israels zu befreien. Allah gab Musa Wunder, wie einen Stab, der sich in eine Schlange verwandelte. Als der König Musa und sein Volk zum Roten Meer verfolgte, waren sie gefangen. Aber Musa, der auf Allah vertraute, schlug mit seinem Stab auf das Meer. Das Meer teilte sich in zwei Teile und schuf einen trockenen Weg, den sie sicher überqueren konnten! Als die Armee des Königs folgte, schloss sich das Meer über ihnen. Diese kraftvolle Geschichte lehrt uns, dass mit dem Glauben an Allah nichts unmöglich ist.']
       },
      setting: { en: 'In ancient Egypt by the mighty Nile River and the vast desert where shepherds watched their flocks', ar: 'في مصر القديمة بجانب نهر النيل العظيم والصحراء الشاسعة حيث كان الرعاة يراقبون قطعانهم', sv: 'I forntida Egypten vid den mäktiga Nilen och den vidsträckta öknen där herdar vaktade sina flockar', de: 'Im alten Ägypten am mächtigen Nil und in der weiten Wüste, wo Hirten ihre Herden hüteten' },
      mainLesson: { en: 'Allah always helps those who stand up for what is right. We should never be afraid to do good when Allah is with us.', ar: 'الله يساعد دائمًا أولئك الذين يدافعون عن الحق. يجب ألا نخاف أبدًا من فعل الخير عندما يكون الله معنا.', sv: 'Allah hjälper alltid dem som står upp för det som är rätt. Vi bör aldrig vara rädda för att göra gott när Allah är med oss.', de: 'Allah hilft immer denen, die für das Richtige eintreten. Wir sollten niemals Angst haben, Gutes zu tun, wenn Allah mit uns ist.' },
      reflectionQuestion: { en: 'When you see someone being treated unfairly, how can you help them?', ar: 'عندما ترى شخصًا يُعامل بشكل غير عادل، كيف يمكنك مساعدته؟', sv: 'När du ser någon bli orättvist behandlad, hur kan du hjälpa dem?', de: 'Wenn du siehst, dass jemand ungerecht behandelt wird, wie kannst du ihm helfen?' },
      dua: {
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
        transliteration: 'Rabbi ishrah lee sadree wa yassir lee amree wahlul \'uqdatan min lisanee yafqahoo qawlee',
        english: { en: 'My Lord, expand for me my chest and ease for me my task and untie the knot from my tongue that they may understand my speech.', ar: 'ربِّ، اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي.', sv: 'Min Herre, vidga mitt bröst för mig och underlätta min uppgift för mig och lös knuten från min tunga så att de kan förstå mitt tal.', de: 'Mein Herr, erweitere meine Brust für mich und erleichtere meine Aufgabe für mich und löse den Knoten von meiner Zunge, damit sie meine Rede verstehen mögen.' }
      }
    },
    color: 'red',
    icon: '🔥'
  },
  {
    id: 'harun',
    name: 'Harun (Aaron)',
    arabicName: 'هارون',
    order: 17,
    story: {
       audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/harun.wav' },
      title: { en: 'The Eloquent Brother', ar: 'الأخ الفصيح', sv: 'Den Vältalige Brodern', de: 'Der Beredte Bruder' },
      content: { 
        en: ['Prophet Harun (peace be upon him) was the older brother of Musa. When Musa was chosen as a prophet, he asked Allah to let Harun help him because Harun was very good at speaking. Together, they went to Pharaoh to ask him to free the Children of Israel. While Musa was receiving the Torah on Mount Sinai, some people made a golden calf to worship. Harun tried to stop them, but they wouldn\'t listen. When Musa returned, he was upset, but Harun explained what happened. The brothers worked together to guide their people back to the right path.'],
        ar: ['كان النبي هارون (عليه السلام) الأخ الأكبر لموسى. عندما اختير موسى نبيًا، طلب من الله أن يجعله هارون يساعده لأن هارون كان جيدًا جدًا في الكلام. ذهبا معًا إلى فرعون ليطلبا منه تحرير بني إسرائيل. بينما كان موسى يتلقى التوراة على جبل سيناء، صنع بعض الناس عجلًا ذهبيًا للعبادة. حاول هارون إيقافهم، لكنهم لم يستمعوا. عندما عاد موسى، كان منزعجًا، لكن هارون شرح ما حدث. عمل الأخوان معًا لإرشاد قومهم إلى الطريق الصحيح.'],
        sv: ['Profeten Harun (frid vare med honom) var Musas äldre bror. När Musa valdes till profet bad han Allah att låta Harun hjälpa honom eftersom Harun var mycket bra på att tala. Tillsammans gick de till Farao för att be honom befria Israels barn. Medan Musa tog emot Toran på berget Sinai, gjorde några människor en guldkalv för att dyrka. Harun försökte stoppa dem, men de lyssnade inte. När Musa återvände blev han upprörd, men Harun förklarade vad som hade hänt. Bröderna arbetade tillsammans för att vägleda sitt folk tillbaka till den rätta vägen.'],
        de: ['Prophet Harun (Friede sei mit ihm) war der ältere Bruder von Musa. Als Musa zum Propheten erwählt wurde, bat er Allah, Harun ihm helfen zu lassen, weil Harun sehr gut sprechen konnte. Gemeinsam gingen sie zum Pharao, um ihn zu bitten, die Kinder Israels freizulassen. Während Musa auf dem Berg Sinai die Thora empfing, machten einige Leute ein goldenes Kalb, um es anzubeten. Harun versuchte, sie aufzuhalten, aber sie hörten nicht zu. Als Musa zurückkam, war er verärgert, aber Harun erklärte, was passiert war. Die Brüder arbeiteten zusammen, um ihr Volk auf den richtigen Weg zurückzuführen.']
       },
      setting: { en: 'In the palaces of Egypt and the desert where the Israelites wandered', ar: 'في قصور مصر والصحراء حيث تاه بنو إسرائيل', sv: 'I Egyptens palats och öknen där israeliterna vandrade', de: 'In den Palästen Ägyptens und der Wüste, wo die Israeliten umherirrten' },
      mainLesson: { en: 'It\'s important to help our family members and work together to do good things.', ar: 'من المهم مساعدة أفراد عائلتنا والعمل معًا لفعل أشياء جيدة.', sv: 'Det är viktigt att hjälpa våra familjemedlemmar och arbeta tillsammans för att göra goda saker.', de: 'Es ist wichtig, unseren Familienmitgliedern zu helfen und zusammenzuarbeiten, um Gutes zu tun.' },
      reflectionQuestion: { en: 'How can you help your brothers, sisters, or friends when they need support?', ar: 'كيف يمكنك مساعدة إخوتك أو أخواتك أو أصدقائك عندما يحتاجون إلى الدعم؟', sv: 'Hur kan du hjälpa dina bröder, systrar eller vänner när de behöver stöd?', de: 'Wie kannst du deinen Brüdern, Schwestern oder Freunden helfen, wenn sie Unterstützung brauchen?' },
      dua: {
        arabic: 'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',
        transliteration: 'Rabbanaghfir lana wa li-ikhwaninal-ladheena sabaqoona bil-iman',
        english: { en: 'Our Lord, forgive us and our brothers who preceded us in faith.', ar: 'ربنا اغفر لنا ولإخواننا الذين سبقونا بالإيمان.', sv: 'Vår Herre, förlåt oss och våra bröder som föregick oss i tron.', de: 'Unser Herr, vergib uns und unseren Brüdern, die uns im Glauben vorausgegangen sind.' }
      }
    },
    color: 'amber',
    icon: '🗣️'
  },
  {
    id: 'dawud',
    name: 'Dawud (David)',
    arabicName: 'داود',
    order: 18,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/dawud.wav' },
      title: { en: 'The Shepherd King', ar: 'الملك الراعي', sv: 'Herdekungen', de: 'Der Hirtenkönig' },
      content: { 
        en: ['Prophet Dawud (peace be upon him) was a young shepherd boy who became a great king. He had a beautiful voice and sang praises to Allah that even the mountains and birds would join in with him. Allah gave Dawud many gifts: he could make iron as soft as clay with his hands, and he made the first chainmail armor. When the giant Goliath threatened his people, young Dawud defeated him with just a sling and a stone, trusting completely in Allah. As king, he was always fair and just, and Allah gave him the Psalms (Zabur) to guide his people.'],
        ar: ['كان النبي داود (عليه السلام) راعيًا شابًا أصبح ملكًا عظيمًا. كان لديه صوت جميل وغنى تسبيحات لله حتى أن الجبال والطيور كانت تشارك معه. أعطى الله داود هدايا كثيرة: كان يستطيع أن يجعل الحديد ناعمًا مثل الطين بيديه، وصنع أول درع من سلسلة. عندما هدد العملاق جالوت قومه، هزمه داود الشاب بحجر ومقلاع فقط، واثقًا تمامًا بالله. كملك، كان دائمًا عادلاً ومنصفًا، وأعطاه الله الزبور (المزامير) لإرشاد قومه.'],
        sv: ['Profeten Dawud (frid vare med honom) var en ung herdepojke som blev en stor kung. Han hade en vacker röst och sjöng lovsånger till Allah som till och med bergen och fåglarna stämde in i. Allah gav Dawud många gåvor: han kunde göra järn mjukt som lera med sina händer, och han gjorde den första ringbrynjan. När jätten Goliat hotade hans folk, besegrade unge Dawud honom med bara en slunga och en sten, med fullständigt förtroende för Allah. Som kung var han alltid rättvis och rättfärdig, och Allah gav honom Psalmerna (Zabur) för att vägleda sitt folk.'],
        de: ['Prophet Dawud (Friede sei mit ihm) war ein junger Hirtenjunge, der ein großer König wurde. Er hatte eine wunderschöne Stimme und sang Loblieder auf Allah, in die sogar die Berge und Vögel einstimmten. Allah gab Dawud viele Gaben: Er konnte Eisen mit seinen Händen so weich wie Ton machen, und er fertigte die erste Kettenrüstung an. Als der Riese Goliath sein Volk bedrohte, besiegte der junge Dawud ihn mit nur einer Schleuder und einem Stein, in vollem Vertrauen auf Allah. Als König war er immer fair und gerecht, und Allah gab ihm die Psalmen (Zabur), um sein Volk zu leiten.']
       },
      setting: { en: 'In the hills of Palestine where shepherds watched their flocks', ar: 'في تلال فلسطين حيث كان الرعاة يراقبون قطعانهم', sv: 'På Palestinas kullar där herdar vaktade sina flockar', de: 'In den Hügeln Palästinas, wo Hirten ihre Herden hüteten' },
      mainLesson: { en: 'No matter how young or small you are, with Allah\'s help you can do amazing things.', ar: 'بغض النظر عن مدى صغرك، بمساعدة الله يمكنك القيام بأشياء مذهلة.', sv: 'Oavsett hur ung eller liten du är, med Allahs hjälp kan du göra fantastiska saker.', de: 'Egal wie jung oder klein du bist, mit Allahs Hilfe kannst du erstaunliche Dinge tun.' },
      reflectionQuestion: { en: 'How can you use your talents and abilities to help others and praise Allah?', ar: 'كيف يمكنك استخدام مواهبك وقدراتك لمساعدة الآخرين وتسبيح الله؟', sv: 'Hur kan du använda dina talanger och förmågor för att hjälpa andra och prisa Allah?', de: 'Wie kannst du deine Talente und Fähigkeiten nutzen, um anderen zu helfen und Allah zu preisen?' },
      dua: {
        arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
        transliteration: 'Rabbana atina min ladunka rahmatan wa hayyi\' lana min amrina rashada',
        english: { en: 'Our Lord, give us from Yourself mercy and prepare for us from our affair right guidance.', ar: 'ربنا آتنا من لدنك رحمة وهيئ لنا من أمرنا رشدًا.', sv: 'Vår Herre, ge oss från Dig själv barmhärtighet och förbered för oss från vår affär rätt vägledning.', de: 'Unser Herr, gib uns von Dir Barmherzigkeit und bereite uns aus unserer Angelegenheit rechte Führung.' }
      }
    },
    color: 'yellow',
    icon: '👑'
  },
  {
    id: 'sulayman',
    name: 'Sulayman (Solomon)',
    arabicName: 'سليمان',
    order: 19,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/sulayman.wav' },
      title: { en: 'The Wise King', ar: 'الملك الحكيم', sv: 'Den Vise Kungen', de: 'Der Weise König' },
      content: { 
        en: ['Prophet Sulayman (peace be upon him) was the son of Dawud and became an even greater king. Allah gave him amazing gifts: he could understand the language of animals and control the wind. Even the jinn worked for him, building magnificent palaces and temples. Once, an ant warned all the other ants that Sulayman\'s army was coming, and Sulayman smiled when he heard this. A hoopoe bird brought him news about the Queen of Sheba, and Sulayman invited her to visit. She was amazed by his wisdom and became a believer. Despite all his power, Sulayman always remembered that everything came from Allah.'],
        ar: ['كان النبي سليمان (عليه السلام) ابن داود وأصبح ملكًا أعظم. أعطاه الله هدايا مذهلة: كان يستطيع فهم لغة الحيوانات والتحكم في الريح. حتى الجن عملوا له، وبنوا قصورًا ومعابد رائعة. ذات مرة، حذرت نملة جميع النمل الآخر من أن جيش سليمان قادم، وابتسم سليمان عندما سمع هذا. أحضر له طائر الهدهد أخبارًا عن ملكة سبأ، ودعاها سليمان لزيارته. دهشت بحكمته وأصبحت مؤمنة. على الرغم من كل قوته، تذكر سليمان دائمًا أن كل شيء جاء من الله.'],
        sv: ['Profeten Sulayman (frid vare med honom) var son till Dawud och blev en ännu större kung. Allah gav honom fantastiska gåvor: han kunde förstå djurens språk och kontrollera vinden. Till och med jinnerna arbetade för honom och byggde magnifika palats och tempel. En gång varnade en myra alla andra myror för att Sulaymans armé var på väg, och Sulayman log när han hörde detta. En härfågel kom med nyheter om drottningen av Saba, och Sulayman bjöd in henne på besök. Hon blev förvånad över hans visdom och blev en troende. Trots all sin makt kom Sulayman alltid ihåg att allt kom från Allah.'],
        de: ['Prophet Sulayman (Friede sei mit ihm) war der Sohn von Dawud und wurde ein noch größerer König. Allah gab ihm erstaunliche Gaben: Er konnte die Sprache der Tiere verstehen und den Wind kontrollieren. Sogar die Dschinn arbeiteten für ihn und bauten prächtige Paläste und Tempel. Einmal warnte eine Ameise alle anderen Ameisen, dass Sulaymans Armee kam, und Sulayman lächelte, als er das hörte. Ein Wiedehopf brachte ihm Nachrichten über die Königin von Saba, und Sulayman lud sie zu einem Besuch ein. Sie war erstaunt über seine Weisheit und wurde eine Gläubige. Trotz all seiner Macht erinnerte sich Sulayman immer daran, dass alles von Allah kam.']
       },
      setting: { en: 'In the golden palaces of Jerusalem and the lands of ancient kingdoms', ar: 'في قصور القدس الذهبية وأراضي الممالك القديمة', sv: 'I Jerusalems gyllene palats och de forntida kungadömenas länder', de: 'In den goldenen Palästen Jerusalems und den Ländern alter Königreiche' },
      mainLesson: { en: 'When Allah gives us special talents or things, we should use them wisely and always remember to thank Him.', ar: 'عندما يمنحنا الله مواهب أو أشياء خاصة، يجب أن نستخدمها بحكمة ونتذكر دائمًا أن نشكره.', sv: 'När Allah ger oss speciella talanger eller saker, bör vi använda dem klokt och alltid komma ihåg att tacka Honom.', de: 'Wenn Allah uns besondere Talente oder Dinge gibt, sollten wir sie weise nutzen und uns immer daran erinnern, Ihm zu danken.' },
      reflectionQuestion: { en: 'If you could talk to animals like Sulayman, what would you say to them?', ar: 'إذا استطعت التحدث إلى الحيوانات مثل سليمان، ماذا ستقول لهم؟', sv: 'Om du kunde tala med djur som Sulayman, vad skulle du säga till dem?', de: 'Wenn du wie Sulayman mit Tieren sprechen könntest, was würdest du ihnen sagen?' },
      dua: {
        arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',
        transliteration: 'Rabbi awzi\'nee an ashkura ni\'matakal-latee an\'amta \'alayy',
        english: { en: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me.', ar: 'ربِّ، أوزعني أن أشكر نعمتك التي أنعمت عليّ.', sv: 'Min Herre, gör det möjligt för mig att vara tacksam för Din ynnest som Du har skänkt mig.', de: 'Mein Herr, ermögliche mir, für Deine Gunst, die Du mir erwiesen hast, dankbar zu sein.' }
      }
    },
    color: 'gold',
    icon: '🦅'
  },
  {
    id: 'ilyas',
    name: 'Ilyas (Elijah)',
    arabicName: 'إلياس',
    order: 20,
    story: {
      title: { en: 'The Caller to Truth', ar: 'الداعي إلى الحق', sv: 'Kallaren till Sanningen', de: 'Der Rufer zur Wahrheit' },
      content: { 
        en: ['Prophet Ilyas (peace be upon him) lived during a time when his people were worshipping a false god called Baal. The king and queen were leading people away from Allah. Ilyas bravely stood up to them and reminded people to worship only Allah. He performed miracles to show Allah\'s power, including stopping the rain for three years. When he challenged the priests of Baal to a contest, Allah sent fire from heaven to prove that He alone was the true God. Many people returned to worshipping Allah, but Ilyas had to hide from the angry king and queen.'],
        ar: ['عاش النبي إلياس (عليه السلام) في زمن كان قومه يعبدون إلهًا باطلاً يسمى بعل. كان الملك والملكة يقودان الناس بعيدًا عن الله. وقف إلياس بشجاعة في وجههم وذكر الناس بعبادة الله وحده. أجرى معجزات لإظهار قوة الله، بما في ذلك إيقاف المطر لمدة ثلاث سنوات. عندما تحدى كهنة بعل في مسابقة، أرسل الله نارًا من السماء ليثبت أنه وحده الإله الحقيقي. عاد كثير من الناس إلى عبادة الله، لكن إلياس اضطر إلى الاختباء من الملك والملكة الغاضبين.'],
        sv: ['Profeten Ilyas (frid vare med honom) levde under en tid då hans folk dyrkade en falsk gud som hette Baal. Kungen och drottningen ledde folket bort från Allah. Ilyas stod modigt upp mot dem och påminde folket om att endast dyrka Allah. Han utförde mirakel för att visa Allahs makt, inklusive att stoppa regnet i tre år. När han utmanade Baals präster på en tävling, sände Allah eld från himlen för att bevisa att Han ensam var den sanne Guden. Många människor återvände till att dyrka Allah, men Ilyas var tvungen att gömma sig för den arga kungen och drottningen.'],
        de: ['Prophet Ilyas (Friede sei mit ihm) lebte zu einer Zeit, als sein Volk einen falschen Gott namens Baal anbetete. Der König und die Königin führten die Menschen von Allah weg. Ilyas trat ihnen mutig entgegen und erinnerte die Menschen daran, nur Allah anzubeten. Er vollbrachte Wunder, um Allahs Macht zu zeigen, einschließlich des Stoppens des Regens für drei Jahre. Als er die Priester des Baal zu einem Wettbewerb herausforderte, sandte Allah Feuer vom Himmel, um zu beweisen, dass Er allein der wahre Gott war. Viele Menschen kehrten zur Anbetung Allahs zurück, aber Ilyas musste sich vor dem wütenden König und der Königin verstecken.']
       },
      setting: { en: 'In the northern lands where people had beautiful temples but worshipped false gods', ar: 'في الأراضي الشمالية حيث كان للناس معابد جميلة لكنهم عبدوا آلهة باطلة', sv: 'I de norra länderna där människor hade vackra tempel men dyrkade falska gudar', de: 'In den nördlichen Ländern, wo die Menschen schöne Tempel hatten, aber falsche Götter anbeteten' },
      mainLesson: { en: 'Sometimes we need to be brave and stand up for what\'s right, even when it\'s difficult.', ar: 'أحيانًا نحتاج إلى أن نكون شجعانًا وندافع عن الحق، حتى عندما يكون الأمر صعبًا.', sv: 'Ibland måste vi vara modiga och stå upp för det som är rätt, även när det är svårt.', de: 'Manchmal müssen wir mutig sein und für das Richtige eintreten, auch wenn es schwierig ist.' },
      reflectionQuestion: { en: 'How can you be brave when you need to do the right thing?', ar: 'كيف يمكنك أن تكون شجاعًا عندما تحتاج إلى فعل الشيء الصحيح؟', sv: 'Hur kan du vara modig när du behöver göra det rätta?', de: 'Wie kannst du mutig sein, wenn du das Richtige tun musst?' },
      dua: {
        arabic: 'رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا',
        transliteration: 'Rabbi inna qawmee ittakhadhoo hadhal-qur\'ana mahjora',
        english: { en: 'My Lord, indeed my people have taken this Quran as something to be ignored.', ar: 'ربِّ، إن قومي اتخذوا هذا القرآن مهجورًا.', sv: 'Min Herre, sannerligen har mitt folk tagit denna Koran som något att ignorera.', de: 'Mein Herr, wahrlich, mein Volk hat diesen Koran als etwas Ignoriertes genommen.' }
      }
    },
    color: 'red',
    icon: '⚡'
  },
  {
    id: 'alyasa',
    name: 'Al-Yasa\' (Elisha)',
    arabicName: 'اليسع',
    order: 21,
    story: {
      title: { en: 'The Successor', ar: 'الخليفة', sv: 'Efterträdaren', de: 'Der Nachfolger' },
      content: { 
        en: ['Prophet Al-Yasa\' (peace be upon him) was the student and successor of Prophet Ilyas. When Ilyas was taken up to heaven, Al-Yasa\' continued his work, calling people back to worship Allah alone. Allah gave him the power to perform many miracles: he could heal the sick, bring the dead back to life, and purify poisoned water. He helped a poor widow by making her small jar of oil fill many containers, so she could sell the oil and pay her debts. Al-Yasa\' was known for his kindness and always helped those in need.'],
        ar: ['كان النبي اليسع (عليه السلام) تلميذ وخليفة النبي إلياس. عندما رُفع إلياس إلى السماء، واصل اليسع عمله، داعيًا الناس إلى عبادة الله وحده. منحه الله القدرة على أداء العديد من المعجزات: كان يستطيع شفاء المرضى، وإحياء الموتى، وتطهير المياه المسمومة. ساعد أرملة فقيرة بجعل جرتها الصغيرة من الزيت تملأ العديد من الأوعية، حتى تتمكن من بيع الزيت وسداد ديونها. كان اليسع معروفًا بلطفه وكان يساعد دائمًا المحتاجين.'],
        sv: ['Profeten Al-Yasa\' (frid vare med honom) var elev och efterträdare till profeten Ilyas. När Ilyas togs upp till himlen fortsatte Al-Yasa\' sitt arbete och kallade folket tillbaka till att endast dyrka Allah. Allah gav honom kraften att utföra många mirakel: han kunde bota sjuka, återuppväcka de döda och rena förgiftat vatten. Han hjälpte en fattig änka genom att få hennes lilla oljekruka att fylla många behållare, så att hon kunde sälja oljan och betala sina skulder. Al-Yasa\' var känd för sin vänlighet och hjälpte alltid de behövande.'],
        de: ['Prophet Al-Yasa\' (Friede sei mit ihm) war der Schüler und Nachfolger von Prophet Ilyas. Als Ilyas in den Himmel aufgenommen wurde, setzte Al-Yasa\' seine Arbeit fort und rief die Menschen zurück, um allein Allah anzubeten. Allah gab ihm die Macht, viele Wunder zu vollbringen: Er konnte Kranke heilen, Tote wieder zum Leben erwecken und vergiftetes Wasser reinigen. Er half einer armen Witwe, indem er ihren kleinen Ölkrug viele Behälter füllen ließ, damit sie das Öl verkaufen und ihre Schulden bezahlen konnte. Al-Yasa\' war für seine Freundlichkeit bekannt und half immer den Bedürftigen.']
       },
      setting: { en: 'In the same lands where Ilyas had taught, continuing the mission of guidance', ar: 'في نفس الأراضي التي علم فيها إلياس، مواصلاً مهمة الهداية', sv: 'I samma länder där Ilyas hade undervisat, fortsatte uppdraget med vägledning', de: 'In denselben Ländern, in denen Ilyas gelehrt hatte, setzte er die Mission der Führung fort' },
      mainLesson: { en: 'We should continue doing good work and helping others, just like those who taught us.', ar: 'يجب أن نستمر في عمل الخير ومساعدة الآخرين، تمامًا مثل أولئك الذين علمونا.', sv: 'Vi bör fortsätta att göra gott arbete och hjälpa andra, precis som de som lärde oss.', de: 'Wir sollten weiterhin gute Arbeit leisten und anderen helfen, genau wie diejenigen, die uns gelehrt haben.' },
      reflectionQuestion: { en: 'How can you continue the good work that your teachers and parents have started?', ar: 'كيف يمكنك مواصلة العمل الجيد الذي بدأه معلموك ووالداك؟', sv: 'Hur kan du fortsätta det goda arbete som dina lärare och föräldrar har påbörjat?', de: 'Wie kannst du die gute Arbeit fortsetzen, die deine Lehrer und Eltern begonnen haben?' },
      dua: {
        arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
        transliteration: 'Rabbana la tuzigh quloobana ba\'da idh hadaytana wa hab lana min ladunka rahma',
        english: { en: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy.', ar: 'ربنا لا تزغ قلوبنا بعد إذ هديتنا وهب لنا من لدنك رحمة.', sv: 'Vår Herre, låt inte våra hjärtan avvika efter att Du har väglett oss och ge oss från Dig själv barmhärtighet.', de: 'Unser Herr, lass unsere Herzen nicht abweichen, nachdem Du uns geleitet hast, und gewähre uns von Dir Barmherzigkeit.' }
      }
    },
    color: 'green',
    icon: '🌿'
  },
  {
    id: 'zakariya',
    name: 'Zakariya (Zacharias)',
    arabicName: 'زكريا',
    order: 22,
    story: {
      title: { en: 'The Elderly Father', ar: 'الأب الشيخ', sv: 'Den Äldre Fadern', de: 'Der Ältere Vater' },
      content: { 
        en: ['Prophet Zakariya (peace be upon him) was already very old when he prayed to Allah for a son. He and his wife had waited their whole lives to have a child. Zakariya took care of Maryam (Mary) in the temple and saw how Allah provided for her miraculously. This gave him hope, and he prayed secretly to Allah for a child who would continue his work. Allah answered his prayer and gave him the good news that he would have a son named Yahya (John). As a sign, Zakariya was unable to speak for three days, except to praise Allah.'],
        ar: ['كان النبي زكريا (عليه السلام) كبيرًا في السن عندما دعا الله ليرزقه ابنًا. انتظر هو وزوجته طوال حياتهما لإنجاب طفل. اعتنى زكريا بمريم في الهيكل ورأى كيف رزقها الله بمعجزة. أعطاه هذا الأمل، فدعا الله سرًا ليرزقه طفلاً يواصل عمله. استجاب الله لدعائه وبشره بأنه سيرزق بابن اسمه يحيى. كعلامة، لم يتمكن زكريا من الكلام لمدة ثلاثة أيام، إلا لتمجيد الله.'],
        sv: ['Profeten Zakariya (frid vare med honom) var redan mycket gammal när han bad till Allah om en son. Han och hans fru hade väntat hela sina liv på att få ett barn. Zakariya tog hand om Maryam (Maria) i templet och såg hur Allah mirakulöst försörjde henne. Detta gav honom hopp, och han bad i hemlighet till Allah om ett barn som skulle fortsätta hans arbete. Allah besvarade hans bön och gav honom den goda nyheten att han skulle få en son som hette Yahya (Johannes). Som ett tecken kunde Zakariya inte tala på tre dagar, förutom att prisa Allah.'],
        de: ['Prophet Zakariya (Friede sei mit ihm) war bereits sehr alt, als er zu Allah um einen Sohn betete. Er und seine Frau hatten ihr ganzes Leben darauf gewartet, ein Kind zu bekommen. Zakariya kümmerte sich um Maryam (Maria) im Tempel und sah, wie Allah sie auf wundersame Weise versorgte. Das gab ihm Hoffnung, und er betete heimlich zu Allah um ein Kind, das seine Arbeit fortsetzen würde. Allah erhörte sein Gebet und gab ihm die gute Nachricht, dass er einen Sohn namens Yahya (Johannes) haben würde. Als Zeichen konnte Zakariya drei Tage lang nicht sprechen, außer um Allah zu preisen.']
       },
      setting: { en: 'In the holy temple in Jerusalem, where Zakariya served Allah', ar: 'في الهيكل المقدس في القدس، حيث خدم زكريا الله', sv: 'I det heliga templet i Jerusalem, där Zakariya tjänade Allah', de: 'Im heiligen Tempel in Jerusalem, wo Zakariya Allah diente' },
      mainLesson: { en: 'It\'s never too late to ask Allah for something good. He answers prayers in His own perfect time.', ar: 'ليس من المتأخر أبدًا أن تطلب من الله شيئًا جيدًا. إنه يجيب على الدعاء في وقته المثالي.', sv: 'Det är aldrig för sent att be Allah om något gott. Han besvarar böner i Sin egen perfekta tid.', de: 'Es ist nie zu spät, Allah um etwas Gutes zu bitten. Er erhört Gebete zu Seiner eigenen perfekten Zeit.' },
      reflectionQuestion: { en: 'What are some good things you can ask Allah for in your prayers?', ar: 'ما هي بعض الأشياء الجيدة التي يمكنك أن تطلبها من الله في صلاتك؟', sv: 'Vilka är några goda saker du kan be Allah om i dina böner?', de: 'Was sind einige gute Dinge, um die du Allah in deinen Gebeten bitten kannst?' },
      dua: {
        arabic: 'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ',
        transliteration: 'Rabbi hab lee min ladunka dhurriyyatan tayyibatan innaka samee\'ud-du\'a',
        english: { en: 'My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.', ar: 'ربِّ، هب لي من لدنك ذرية طيبة إنك سميع الدعاء.', sv: 'Min Herre, ge mig från Dig själv en god avkomma. Sannerligen, Du är den som hör bönen.', de: 'Mein Herr, gewähre mir von Dir eine gute Nachkommenschaft. Wahrlich, Du bist der Hörer des Gebets.' }
      }
    },
    color: 'purple',
    icon: '🤲'
  },
  {
    id: 'yahya',
    name: 'Yahya (John)',
    arabicName: 'يحيى',
    order: 23,
    story: {
      title: { en: 'The Gentle Prophet', ar: 'النبي الرقيق', sv: 'Den Milde Profeten', de: 'Der Sanfte Prophet' },
      content: { 
        en: ['Prophet Yahya (peace be upon him) was the son of Zakariya, born when his parents were very old. From the time he was very young, Allah gave Yahya wisdom and made him gentle and kind to everyone. He was very respectful to his parents and never disobeyed them. Yahya lived simply in the desert, eating only what he needed and spending his time in prayer and remembering Allah. He prepared people for the coming of Prophet Isa (Jesus) and baptized those who wanted to follow Allah\'s path. Yahya was known for his pure heart and his love for all of Allah\'s creation.'],
        ar: ['كان النبي يحيى (عليه السلام) ابن زكريا، وُلد عندما كان والديه كبيرين في السن. منذ صغره، أعطى الله يحيى الحكمة وجعله لطيفًا وطيبًا مع الجميع. كان محترمًا جدًا لوالديه ولم يعصهما أبدًا. عاش يحيى ببساطة في الصحراء، يأكل فقط ما يحتاجه ويقضي وقته في الصلاة وذكر الله. أعد الناس لمجيء النبي عيسى وعمد أولئك الذين أرادوا اتباع طريق الله. كان يحيى معروفًا بقلبه النقي وحبه لجميع خلق الله.'],
        sv: ['Profeten Yahya (frid vare med honom) var son till Zakariya, född när hans föräldrar var mycket gamla. Från det att han var mycket ung gav Allah Yahya visdom och gjorde honom mild och snäll mot alla. Han var mycket respektfull mot sina föräldrar och lydde dem aldrig. Yahya levde enkelt i öknen, åt bara vad han behövde och tillbringade sin tid i bön och minne av Allah. Han förberedde folket för profeten Isas (Jesus) ankomst och döpte dem som ville följa Allahs väg. Yahya var känd för sitt rena hjärta och sin kärlek till hela Allahs skapelse.'],
        de: ['Prophet Yahya (Friede sei mit ihm) war der Sohn von Zakariya, geboren, als seine Eltern sehr alt waren. Von klein auf gab Allah Yahya Weisheit und machte ihn sanft und freundlich zu allen. Er war sehr respektvoll gegenüber seinen Eltern und gehorchte ihnen nie. Yahya lebte einfach in der Wüste, aß nur, was er brauchte, und verbrachte seine Zeit im Gebet und im Gedenken an Allah. Er bereitete die Menschen auf das Kommen von Prophet Isa (Jesus) vor und taufte diejenigen, die Allahs Weg folgen wollten. Yahya war bekannt für sein reines Herz und seine Liebe zu Allahs ganzer Schöpfung.']
       },
      setting: { en: 'In the wilderness near the Jordan River, where people came to be baptized', ar: 'في البرية بالقرب من نهر الأردن، حيث جاء الناس ليتعمدوا', sv: 'I vildmarken nära Jordanfloden, dit folk kom för att döpas', de: 'In der Wildnis nahe dem Jordan, wo die Menschen zur Taufe kamen' },
      mainLesson: { en: 'Being gentle and kind to everyone, especially our parents, is very important to Allah.', ar: 'أن نكون لطفاء وطيبين مع الجميع، وخاصة والدينا، أمر مهم جدًا عند الله.', sv: 'Att vara mild och snäll mot alla, särskilt våra föräldrar, är mycket viktigt för Allah.', de: 'Sanft und freundlich zu allen zu sein, besonders zu unseren Eltern, ist Allah sehr wichtig.' },
      reflectionQuestion: { en: 'How can you be more gentle and kind in the way you treat people and animals?', ar: 'كيف يمكنك أن تكون أكثر لطفًا وطيبة في طريقة معاملتك للناس والحيوانات؟', sv: 'Hur kan du vara mer mild och snäll i ditt sätt att behandla människor och djur?', de: 'Wie kannst du sanfter und freundlicher im Umgang mit Menschen und Tieren sein?' },
      dua: {
        arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
        transliteration: 'Rabbi ij\'alnee muqeemas-salati wa min dhurriyyatee rabbana wa taqabbal du\'a',
        english: { en: 'My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.', ar: 'ربِّ، اجعلني مقيم الصلاة ومن ذريتي ربنا وتقبل دعاء.', sv: 'Min Herre, gör mig till en som upprättar bönen, och från mina efterkommande. Vår Herre, och acceptera min bön.', de: 'Mein Herr, mache mich zu einem, der das Gebet verrichtet, und aus meiner Nachkommenschaft. Unser Herr, und nimm mein Gebet an.' }
      }
    },
    color: 'teal',
    icon: '🕊️'
  },
  {
    id: 'isa',
    name: 'Isa (Jesus)',
    arabicName: 'عيسى',
    order: 24,
    story: {
      title: { en: 'The Miracle Child', ar: 'الطفل المعجزة', sv: 'Mirakelbarnet', de: 'Das Wunderkind' },
      content: { 
        en: ['Prophet Isa (peace be upon him) was born to Maryam (Mary) in a miraculous way, without a father. Even as a baby, he spoke from his cradle to defend his mother\'s honor. Allah gave Isa amazing miracles: he could heal the blind and the sick, and even bring the dead back to life, all by Allah\'s permission. He taught people to worship Allah alone and to be kind to one another. Some people tried to harm him, but Allah saved him and raised him up to heaven. Isa will return one day before the end of the world to spread peace and justice.'],
        ar: ['وُلد النبي عيسى (عليه السلام) لمريم بطريقة معجزة، بدون أب. حتى وهو طفل، تكلم من مهده ليدافع عن شرف والدته. أعطى الله عيسى معجزات مذهلة: كان يستطيع شفاء الأعمى والمريض، وحتى إحياء الموتى، كل ذلك بإذن الله. علم الناس عبادة الله وحده وأن يكونوا لطفاء مع بعضهم البعض. حاول بعض الناس إيذاءه، لكن الله أنقذه ورفعه إلى السماء. سيعود عيسى يومًا ما قبل نهاية العالم لنشر السلام والعدل.'],
        sv: ['Profeten Isa (frid vare med honom) föddes av Maryam (Maria) på ett mirakulöst sätt, utan en far. Redan som spädbarn talade han från sin vagga för att försvara sin mors heder. Allah gav Isa fantastiska mirakel: han kunde bota blinda och sjuka, och till och med återuppväcka de döda, allt med Allahs tillåtelse. Han lärde människor att endast dyrka Allah och att vara snälla mot varandra. Vissa människor försökte skada honom, men Allah räddade honom och lyfte upp honom till himlen. Isa kommer att återvända en dag före världens ände för att sprida fred och rättvisa.'],
        de: ['Prophet Isa (Friede sei mit ihm) wurde auf wundersame Weise von Maryam (Maria) geboren, ohne einen Vater. Schon als Baby sprach er aus seiner Wiege, um die Ehre seiner Mutter zu verteidigen. Allah gab Isa erstaunliche Wunder: Er konnte Blinde und Kranke heilen und sogar Tote wieder zum Leben erwecken, alles mit Allahs Erlaubnis. Er lehrte die Menschen, allein Allah anzubeten und freundlich zueinander zu sein. Einige Leute versuchten, ihm zu schaden, aber Allah rettete ihn und hob ihn in den Himmel. Isa wird eines Tages vor dem Ende der Welt zurückkehren, um Frieden und Gerechtigkeit zu verbreiten.']
       },
      setting: { en: 'In the holy land of Palestine, in the towns where people needed healing and guidance', ar: 'في أرض فلسطين المقدسة، في البلدات التي احتاج فيها الناس إلى الشفاء والإرشاد', sv: 'I det heliga landet Palestina, i städerna där människor behövde helande och vägledning', de: 'Im heiligen Land Palästina, in den Städten, wo die Menschen Heilung und Führung brauchten' },
      mainLesson: { en: 'Allah can do anything He wants, even things that seem impossible. We should always believe in His power.', ar: 'الله يستطيع أن يفعل أي شيء يريده، حتى الأشياء التي تبدو مستحيلة. يجب أن نؤمن دائمًا بقوته.', sv: 'Allah kan göra vad Han vill, även saker som verkar omöjliga. Vi bör alltid tro på Hans makt.', de: 'Allah kann alles tun, was Er will, sogar Dinge, die unmöglich erscheinen. Wir sollten immer an Seine Macht glauben.' },
      reflectionQuestion: { en: 'How can you help heal hurt feelings and bring peace between people who are fighting?', ar: 'كيف يمكنك المساعدة في شفاء المشاعر المجروحة وإحلال السلام بين المتقاتلين؟', sv: 'Hur kan du hjälpa till att läka sårade känslor och skapa fred mellan människor som bråkar?', de: 'Wie kannst du helfen, verletzte Gefühle zu heilen und Frieden zwischen streitenden Menschen zu schaffen?' },
      dua: {
        arabic: 'رَبَّنَا أَنZِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا',
        transliteration: 'Rabbana anzil \'alayna ma\'idatan minas-sama\'i takoonu lana \'eeda',
        english: { en: 'Our Lord, send down to us a table from heaven to be for us a festival.', ar: 'ربنا أنزل علينا مائدة من السماء تكون لنا عيدًا.', sv: 'Vår Herre, sänd ner till oss ett bord från himlen för att vara för oss en högtid.', de: 'Unser Herr, sende uns einen Tisch vom Himmel herab, der für uns ein Fest sein soll.' }
      }
    },
    color: 'blue',
    icon: '✨'
  },
  {
    id: 'muhammad',
    name: 'Muhammad',
    arabicName: 'محمد',
    order: 25,
    story: {
      audioUrl: { en: 'https://cdn.jsdelivr.net/gh/drooschunkai/PQ-Stories-dualite@main/public/audio/muhammad.wav' },
      title: { en: 'The Last Messenger', ar: 'خاتم المرسلين', sv: 'Den Sista Budbäraren', de: 'Der Letzte Gesandte' },
      content: { 
        en: ['Prophet Muhammad (peace and blessings be upon him) is the last and final messenger of Allah. He was born in Makkah and was known by everyone as "Al-Ameen" (the trustworthy one) because of his perfect honesty. At age 40, Allah chose him to deliver the final message to all of humanity, the Quran. He taught people to worship only one God, to be kind to everyone, to care for the poor, and to be just. He was a mercy to all the worlds, and his beautiful example is a guide for us in every part of our lives.'],
        ar: ['النبي محمد (صلى الله عليه وسلم) هو آخر وخاتم رسل الله. وُلد في مكة وكان معروفًا لدى الجميع بـ "الأمين" بسبب صدقه الكامل. في سن الأربعين، اختاره الله ليوصل الرسالة النهائية إلى البشرية جمعاء، القرآن. علم الناس عبادة إله واحد فقط، وأن يكونوا لطفاء مع الجميع، وأن يهتموا بالفقراء، وأن يكونوا عادلين. كان رحمة للعالمين، ومثاله الجميل هو دليل لنا في كل جزء من حياتنا.'],
        sv: ['Profeten Muhammad (frid och välsignelser vare med honom) är den sista och slutgiltiga budbäraren från Allah. Han föddes i Mecka och var känd av alla som "Al-Ameen" (den pålitlige) på grund av sin perfekta ärlighet. Vid 40 års ålder valde Allah honom att leverera det slutgiltiga budskapet till hela mänskligheten, Koranen. Han lärde människor att endast dyrka en Gud, att vara snälla mot alla, att ta hand om de fattiga och att vara rättvisa. Han var en nåd för alla världar, och hans vackra exempel är en guide för oss i varje del av våra liv.'],
        de: ['Prophet Muhammad (Friede und Segen seien auf ihm) ist der letzte und endgültige Gesandte Allahs. Er wurde in Mekka geboren und war bei allen als "Al-Ameen" (der Vertrauenswürdige) bekannt wegen seiner vollkommenen Ehrlichkeit. Im Alter von 40 Jahren wählte Allah ihn, um die endgültige Botschaft an die gesamte Menschheit, den Koran, zu überbringen. Er lehrte die Menschen, nur einen Gott anzubeten, zu allen freundlich zu sein, sich um die Armen zu kümmern und gerecht zu sein. Er war eine Barmherzigkeit für alle Welten, und sein schönes Beispiel ist ein Leitfaden für uns in jedem Teil unseres Lebens.']
       },
      setting: { en: 'In the sacred city of Makkah and the peaceful city of Madinah, in the beautiful desert of Arabia', ar: 'في مدينة مكة المكرمة ومدينة المدينة المنورة، في صحراء الجزيرة العربية الجميلة', sv: 'I den heliga staden Mecka och den fridfulla staden Madinah, i den vackra arabiska öknen', de: 'In der heiligen Stadt Mekka und der friedlichen Stadt Madinah, in der wunderschönen Wüste Arabiens' },
      mainLesson: { en: 'Prophet Muhammad showed us how to live a good life by being kind, honest, and always remembering Allah. We should try to follow his beautiful example.', ar: 'أرانا النبي محمد كيف نعيش حياة صالحة من خلال اللطف والصدق وذكر الله دائمًا. يجب أن نحاول اتباع مثاله الجميل.', sv: 'Profeten Muhammad visade oss hur man lever ett gott liv genom att vara snäll, ärlig och alltid minnas Allah. Vi bör försöka följa hans vackra exempel.', de: 'Prophet Muhammad hat uns gezeigt, wie man ein gutes Leben führt, indem man freundlich, ehrlich und sich immer an Allah erinnert. Wir sollten versuchen, seinem schönen Beispiel zu folgen.' },
      reflectionQuestion: { en: 'What are three kind things Prophet Muhammad did that you can try to do too?', ar: 'ما هي ثلاثة أشياء لطيفة فعلها النبي محمد يمكنك أن تحاول فعلها أيضًا؟', sv: 'Vilka är tre snälla saker som profeten Muhammad gjorde som du också kan försöka göra?', de: 'Was sind drei freundliche Dinge, die Prophet Muhammad getan hat, die du auch versuchen kannst zu tun?' },
      dua: {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammadin kama sallayta \'ala Ibraheema wa \'ala aali Ibraheema',
        english: { en: 'O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim.', ar: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم.', sv: 'O Allah, sänd böner över Muhammad och Muhammads familj, som Du sände böner över Ibrahim och Ibrahims familj.', de: 'O Allah, sende Gebete auf Muhammad und die Familie von Muhammad, wie Du Gebete auf Ibrahim und die Familie von Ibrahim gesandt hast.' }
      }
    },
    color: 'green',
    icon: '🕌'
  }
];
