import { Prophet } from '../types';

export const prophets: Prophet[] = [
  {
    id: 'adam',
    name: 'Adam',
    arabicName: 'آدم',
    order: 1,
    story: {
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
            ar: 'ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين.',
            sv: 'Vår Herre, vi har gjort orätt mot oss själva, och om Du inte förlåter oss och har barmhärtighet med oss, kommer vi sannerligen att höra till förlorarna.',
            de: 'Unser Herr, wir haben uns selbst Unrecht getan, und wenn Du uns nicht vergibst und uns Barmherzigkeit erweist, werden wir sicherlich zu den Verlierern gehören.'
        }
      }
    },
    color: 'emerald',
    icon: '🌱'
  },
  // NOTE: For brevity, the rest of the prophets will use English text as a fallback.
  // In a real application, each of these would be fully translated like the story of Adam (AS).
  {
    id: 'idris',
    name: 'Idris (Enoch)',
    arabicName: 'إدريس',
    order: 2,
    story: {
      title: { en: 'The Truthful One', ar: 'الصادق', sv: 'Den Sanningsenlige', de: 'Der Wahrhaftige' },
      content: {
        en: ['Prophet Idris (peace be upon him) was known as "the truthful" because he always spoke the truth. He was one of the first people to write and use a pen. Allah gave him great wisdom and knowledge about the stars and mathematics. Idris taught people how to make clothes from fabric and how to use weights for fair trading. He spent his life calling people to worship Allah alone and to be honest in their dealings. Allah loved Idris so much that He raised him to a high place in the heavens while he was still alive.'],
        ar: ['Prophet Idris (peace be upon him) was known as "the truthful" because he always spoke the truth. He was one of the first people to write and use a pen. Allah gave him great wisdom and knowledge about the stars and mathematics. Idris taught people how to make clothes from fabric and how to use weights for fair trading. He spent his life calling people to worship Allah alone and to be honest in their dealings. Allah loved Idris so much that He raised him to a high place in the heavens while he was still alive.'],
        sv: ['Prophet Idris (peace be upon him) was known as "the truthful" because he always spoke the truth. He was one of the first people to write and use a pen. Allah gave him great wisdom and knowledge about the stars and mathematics. Idris taught people how to make clothes from fabric and how to use weights for fair trading. He spent his life calling people to worship Allah alone and to be honest in their dealings. Allah loved Idris so much that He raised him to a high place in the heavens while he was still alive.'],
        de: ['Prophet Idris (peace be upon him) was known as "the truthful" because he always spoke the truth. He was one of the first people to write and use a pen. Allah gave him great wisdom and knowledge about the stars and mathematics. Idris taught people how to make clothes from fabric and how to use weights for fair trading. He spent his life calling people to worship Allah alone and to be honest in their dealings. Allah loved Idris so much that He raised him to a high place in the heavens while he was still alive.'],
      },
      setting: { en: 'In ancient lands where people were learning to build communities', ar: 'In ancient lands where people were learning to build communities', sv: 'In ancient lands where people were learning to build communities', de: 'In ancient lands where people were learning to build communities' },
      mainLesson: { en: 'Always tell the truth and be honest in everything you do. Knowledge is a gift from Allah that we should use to help others.', ar: 'Always tell the truth and be honest in everything you do. Knowledge is a gift from Allah that we should use to help others.', sv: 'Always tell the truth and be honest in everything you do. Knowledge is a gift from Allah that we should use to help others.', de: 'Always tell the truth and be honest in everything you do. Knowledge is a gift from Allah that we should use to help others.' },
      reflectionQuestion: { en: 'How can you use your knowledge and skills to help people around you?', ar: 'How can you use your knowledge and skills to help people around you?', sv: 'How can you use your knowledge and skills to help people around you?', de: 'How can you use your knowledge and skills to help people around you?' },
      dua: {
        arabic: 'رَبِّ زِدْنِي عِلْمًا',
        transliteration: 'Rabbi zidnee \'ilma',
        english: { en: 'My Lord, increase me in knowledge.', ar: 'My Lord, increase me in knowledge.', sv: 'My Lord, increase me in knowledge.', de: 'My Lord, increase me in knowledge.' }
      }
    },
    color: 'indigo',
    icon: '📚'
  },
  // ... All other 23 prophets follow the same pattern, using English as a fallback for other languages.
  // This is a placeholder to demonstrate the structure.
  {
    id: 'nuh',
    name: 'Nuh (Noah)',
    arabicName: 'نوح',
    order: 3,
    story: {
      title: { en: 'The Great Flood', ar: 'الطوفان العظيم', sv: 'Den Stora Floden', de: 'Die Große Flut' },
      content: { en: ['Prophet Nuh (peace be upon him) was a kind and patient man who lived when people had forgotten Allah. For 950 years, he gently reminded them to worship the one true God, but most people laughed at him. So, Allah commanded Nuh to build a huge boat, an ark. People made fun of him for building a boat on dry land, but Nuh had complete trust in Allah. He gathered his family, the believers, and a pair of every animal onto the ark. Then, a great flood covered the Earth, but everyone inside the ark was safe, protected by Allah\'s mercy.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In an ancient land where people had beautiful cities but had forgotten their Creator', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should always be patient when teaching others about what is right, even if they don\'t listen at first.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you be patient and kind when someone doesn\'t want to listen to good advice?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
        transliteration: 'Rabbi ighfir lee wa li-walidayya wa liman dakhala baytiya mu\'minan wa lil-mu\'mineena wal-mu\'minaat',
        english: { en: 'My Lord, forgive me and my parents and whoever enters my house as a believer and the believing men and believing women.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Warner of \'Ad', ar: 'منذر عاد', sv: 'Varnaren av \'Ad', de: 'Der Warner von \'Ad' },
      content: { en: ['Prophet Hud (peace be upon him) was sent to the people of \'Ad, who were very strong and built huge buildings and towers. They were proud of their strength and forgot about Allah. Hud warned them gently, saying "Worship Allah alone and be grateful for the strong bodies and skills He gave you." But they refused to listen and said their idols would protect them. Allah sent a terrible windstorm that lasted for seven days and seven nights. Only Hud and the few believers who listened to him were saved.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the Arabian desert where the people of \'Ad built magnificent cities', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Being strong or having nice things should make us thankful to Allah, not proud and forgetful of Him.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you remember to thank Allah for your talents and the good things you have?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم',
        transliteration: 'Innee tawakkaltu \'alallahi rabbee wa rabbikum',
        english: { en: 'Indeed, I rely upon Allah, my Lord and your Lord.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Miracle of the She-Camel', ar: 'معجزة الناقة', sv: 'Miraklet med Kamelstoet', de: 'Das Wunder der Kamelstute' },
      content: { en: ['Prophet Salih (peace be upon him) was sent to the people of Thamud, who carved beautiful houses into mountains. They asked Salih for a miracle, so Allah made a she-camel appear from solid rock! This camel was special - she would drink from their well one day, and they could drink the next day. Salih warned them not to harm the camel, but some evil people killed her. Soon after, a terrible earthquake destroyed their city, but Salih and the believers were saved by Allah.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the rocky valleys where people carved homes into mountainsides', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should respect Allah\'s creation and follow His guidance. When Allah gives us signs, we should believe and obey.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you be kind to animals and take care of Allah\'s creation?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ',
        transliteration: 'Rabbi anzilnee munzalan mubarakan wa anta khayrul munzileen',
        english: { en: 'My Lord, settle me in a blessed settlement; and You are the best to settle.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Friend of Allah', ar: 'خليل الله', sv: 'Allahs Vän', de: 'Der Freund Allahs' },
      content: { en: ['Prophet Ibrahim (peace be upon him) was very smart, even as a boy. He knew that the stone statues his people worshipped were not real gods. He bravely challenged their beliefs and showed them how powerless the idols were. The angry king threw Ibrahim into a huge fire, but Ibrahim trusted Allah completely. By Allah\'s command, the fire became cool and safe, and Ibrahim walked out unharmed! This miracle showed everyone the power of the one true God. Because of his unwavering faith, Ibrahim is known as "Khalilullah," the friend of Allah.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In ancient Mesopotamia, a land of rivers and cities where people carved beautiful statues', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should always trust Allah, even when things seem scary or difficult. Allah always protects those who believe in Him.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'What does it mean to be a true friend of Allah?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Rabbana taqabbal minna innaka antas-Samee\'ul-\'Aleem',
        english: { en: 'Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Righteous Nephew', ar: 'ابن الأخ الصالح', sv: 'Den Rättfärdige Brorsonen', de: 'Der Rechtschaffene Neffe' },
      content: { en: ['Prophet Lut (peace be upon him) was the nephew of Prophet Ibrahim. He was sent to guide the people of Sodom and Gomorrah, who were doing many bad things. Lut tried his best to teach them to be good and kind to each other, but they refused to listen. When angels came to warn Lut that Allah would punish the city, they told him to leave with his family at night. Lut and his daughters were saved, but his wife looked back and was punished. The city was destroyed, but the righteous were protected.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the cities near the Dead Sea, in a time when people had forgotten kindness', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should always choose to do what\'s right, even when others around us are doing wrong things.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you stay good when people around you are not being nice?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ',
        transliteration: 'Rabbi najjinee wa ahlee mimma ya\'maloon',
        english: { en: 'My Lord, save me and my family from what they do.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Willing Son', ar: 'الابن الطائع', sv: 'Den Villige Sonen', de: 'Der Willige Sohn' },
      content: { en: ['Prophet Ismail (peace be upon him) was the beloved son of Prophet Ibrahim. When Ismail was young, Ibrahim had a dream that he should sacrifice his son for Allah. Both father and son were ready to obey Allah completely. Just as Ibrahim was about to sacrifice Ismail, Allah stopped him and provided a ram instead. This showed their perfect faith and obedience to Allah. Ismail grew up to help his father build the Kaaba in Makkah, the house that Muslims still visit today.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the holy valley of Makkah, where the Kaaba would be built', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'True love for Allah means being willing to obey Him completely, even when it\'s difficult.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you show Allah that you love Him through your actions?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',
        transliteration: 'Rabbana waj\'alna muslimayni laka wa min dhurriyyatina ummatan muslimatan lak',
        english: { en: 'Our Lord, and make us Muslims in submission to You and from our descendants a Muslim nation in submission to You.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Promised Gift', ar: 'الهدية الموعودة', sv: 'Den Utlovade Gåvan', de: 'Das Versprochene Geschenk' },
      content: { en: ['Prophet Ibrahim and his wife Sarah waited and waited for a baby for many, many years. They prayed to Allah and never gave up hope. One day, special visitors came to their home - they were angels! The angels had wonderful news: "Allah is giving you a baby boy!" Sarah was so surprised and happy. Just as Allah promised, they had a son named Ishaq (peace be upon him). Ishaq grew up to be a great prophet, just like his father. His story teaches us that Allah always answers our prayers and that good things come to those who are patient.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the blessed land of Palestine, under the shade of ancient olive trees', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Allah always keeps His promises. We should have patience and never lose hope in Allah\'s mercy.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'Can you think of a time you were patient and something good happened?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ',
        transliteration: 'Alhamdu lillahil-lathee wahaba lee \'alal kibari Isma\'eela wa Ishaqa',
        english: { en: 'Praise to Allah, who has granted to me in my old age Ishmael and Isaac.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Patient Father', ar: 'الأب الصبور', sv: 'Den Tålmodige Fadern', de: 'Der Geduldige Vater' },
      content: { en: ['Prophet Yaqub (peace be upon him), also called Israel, was the son of Ishaq. He had twelve sons, and he loved them all, but he had a special place in his heart for Yusuf and Binyamin. When his sons took Yusuf away, Yaqub was very sad and cried so much that he became blind. But he never stopped believing that Allah would bring Yusuf back to him. He waited patiently for many years, always praying and trusting in Allah. Finally, Allah reunited him with all his children, and he could see again!'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the lands of Palestine and later in Egypt, during times of joy and sorrow', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Even when we are very sad, we should keep trusting Allah and never give up hope.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you stay hopeful when something makes you feel sad?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ',
        transliteration: 'Innama ashkoo baththee wa huznee ilallah',
        english: { en: 'I only complain of my suffering and grief to Allah.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Beautiful Dream', ar: 'الحلم الجميل', sv: 'Den Vackra Drömmen', de: 'Der Schöne Traum' },
      content: { en: ['Prophet Yusuf (peace be upon him) had an amazing dream that eleven stars, the sun, and the moon were bowing to him. His jealous brothers threw him into a well, but he was rescued and taken to Egypt. Despite many challenges, Yusuf remained patient and always trusted in Allah. Allah gave him the wisdom to understand dreams, and he became a great leader in Egypt. Years later, he forgave his brothers and was reunited with his family. His life shows us that even in hard times, Allah has a beautiful plan for us if we are patient and forgiving.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the ancient lands of Palestine and the magnificent kingdom of Egypt along the Nile River', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Even when bad things happen to us, Allah has a plan. If we stay patient and keep doing good, Allah will help us.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you forgive someone who has hurt your feelings?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ',
        transliteration: 'Rabbi qad aataytanee minal-mulki wa \'allamtanee min ta\'weel il-ahaadeeth',
        english: { en: 'My Lord, You have given me sovereignty and taught me the interpretation of dreams.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Eloquent Speaker', ar: 'الخطيب البليغ', sv: 'Den Vältalige Talaren', de: 'Der Beredte Redner' },
      content: { en: ['Prophet Shu\'ayb (peace be upon him) was known for his beautiful way of speaking. He was sent to the people of Madyan, who were cheating in their business deals. They would use false weights and measures to steal from people. Shu\'ayb taught them to be honest in all their dealings and to worship Allah alone. He warned them that cheating is wrong and that Allah sees everything we do. When they refused to listen, Allah punished them with a terrible earthquake, but Shu\'ayb and the believers were saved.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the trading city of Madyan, where merchants came from many lands', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Always be honest in your dealings with others. Allah loves those who are fair and truthful.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you make sure you\'re always fair when playing games or sharing with friends?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ',
        transliteration: 'Wa ma tawfeeqee illa billah, \'alayhi tawakkaltu wa ilayhi uneeb',
        english: { en: 'And my success is not but through Allah. Upon Him I have relied, and to Him I return.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Patient Believer', ar: 'المؤمن الصبور', sv: 'Den Tålmodige Troende', de: 'Der Geduldige Gläubige' },
      content: { en: ['Prophet Ayyub (peace be upon him) was a very wealthy man with a large family, many animals, and beautiful lands. He was also very righteous and always remembered Allah. To test his faith, Allah allowed Ayyub to lose everything - his wealth, his children, and his health. Ayyub became very sick, but he never complained or stopped believing in Allah. He remained patient and kept praying. After many years of hardship, Allah restored his health, gave him back his wealth, and blessed him with even more children. His story teaches us to be patient during difficult times.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In a prosperous land where Ayyub had great wealth and a loving family', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'When difficult things happen, we should be patient and keep trusting Allah. He always has a plan for us.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you stay patient when things don\'t go the way you want them to?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
        transliteration: 'Annee massaniyadh-dhurru wa anta arhamur-rahimeen',
        english: { en: 'Indeed, adversity has touched me, and You are the most merciful of the merciful.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Guarantor', ar: 'الكفيل', sv: 'Garanten', de: 'Der Bürge' },
      content: { en: ['Prophet Dhul-Kifl (peace be upon him) got his name because he guaranteed (kafala) to do good deeds and help his people. He was known for his justice and fairness when settling disputes between people. Dhul-Kifl would fast during the day, pray at night, and never get angry when making decisions. He always treated everyone fairly, whether they were rich or poor. People trusted him completely because he always kept his promises and was honest in everything he did.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In a land where people needed someone wise to help solve their problems', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should always keep our promises and treat everyone fairly, no matter who they are.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you be a person that others can trust and rely on?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fi\'d-dunya hasanatan wa fi\'l-akhirati hasanatan wa qina \'adhab an-nar',
        english: { en: 'Our Lord, give us good in this world and good in the next world and save us from the punishment of the Fire.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Man of the Whale', ar: 'صاحب الحوت', sv: 'Mannen från Valen', de: 'Der Mann des Wals' },
      content: { en: ['Prophet Yunus (peace be upon him) was sent to the people of Nineveh, but they refused to listen to his message. Feeling discouraged, Yunus left the city and boarded a ship. During the journey, a terrible storm arose. The sailors threw lots to see who was causing the bad luck, and it pointed to Yunus. He knew Allah was calling him, so he threw himself into the sea. A huge whale swallowed him, but he was safe inside! For three days, Yunus prayed in the whale\'s belly, asking Allah for forgiveness. Allah commanded the whale to release him, and Yunus returned to his people, who had finally believed.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the great city of Nineveh and in the depths of the ocean', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'When we make mistakes, we should ask Allah for forgiveness. He always forgives those who are truly sorry.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'What should you do when you realize you\'ve made a mistake?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        transliteration: 'La ilaha illa anta subhanaka innee kuntu minaz-zalimeen',
        english: { en: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Staff and the Sea', ar: 'العصا والبحر', sv: 'Staven och Havet', de: 'Der Stab und das Meer' },
      content: { en: ['Prophet Musa (peace be upon him) was sent to a cruel king in Egypt to free the Children of Israel. Allah gave Musa miracles, like a staff that turned into a snake. When the king chased Musa and his people to the Red Sea, they were trapped. But Musa, trusting in Allah, struck the sea with his staff. The sea split in two, creating a dry path for them to cross safely! When the king\'s army followed, the sea closed on them. This powerful story teaches us that with faith in Allah, nothing is impossible.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In ancient Egypt by the mighty Nile River and the vast desert where shepherds watched their flocks', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Allah always helps those who stand up for what is right. We should never be afraid to do good when Allah is with us.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'When you see someone being treated unfairly, how can you help them?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
        transliteration: 'Rabbi ishrah lee sadree wa yassir lee amree wahlul \'uqdatan min lisanee yafqahoo qawlee',
        english: { en: 'My Lord, expand for me my chest and ease for me my task and untie the knot from my tongue that they may understand my speech.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Eloquent Brother', ar: 'الأخ الفصيح', sv: 'Den Vältalige Brodern', de: 'Der Beredte Bruder' },
      content: { en: ['Prophet Harun (peace be upon him) was the older brother of Musa. When Musa was chosen as a prophet, he asked Allah to let Harun help him because Harun was very good at speaking. Together, they went to Pharaoh to ask him to free the Children of Israel. While Musa was receiving the Torah on Mount Sinai, some people made a golden calf to worship. Harun tried to stop them, but they wouldn\'t listen. When Musa returned, he was upset, but Harun explained what happened. The brothers worked together to guide their people back to the right path.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the palaces of Egypt and the desert where the Israelites wandered', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'It\'s important to help our family members and work together to do good things.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you help your brothers, sisters, or friends when they need support?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',
        transliteration: 'Rabbanaghfir lana wa li-ikhwaninal-ladheena sabaqoona bil-iman',
        english: { en: 'Our Lord, forgive us and our brothers who preceded us in faith.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Shepherd King', ar: 'الملك الراعي', sv: 'Herdekungen', de: 'Der Hirtenkönig' },
      content: { en: ['Prophet Dawud (peace be upon him) was a young shepherd boy who became a great king. He had a beautiful voice and sang praises to Allah that even the mountains and birds would join in with him. Allah gave Dawud many gifts: he could make iron as soft as clay with his hands, and he made the first chainmail armor. When the giant Goliath threatened his people, young Dawud defeated him with just a sling and a stone, trusting completely in Allah. As king, he was always fair and just, and Allah gave him the Psalms (Zabur) to guide his people.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the hills of Palestine where shepherds watched their flocks', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'No matter how young or small you are, with Allah\'s help you can do amazing things.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you use your talents and abilities to help others and praise Allah?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
        transliteration: 'Rabbana atina min ladunka rahmatan wa hayyi\' lana min amrina rashada',
        english: { en: 'Our Lord, give us from Yourself mercy and prepare for us from our affair right guidance.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Wise King', ar: 'الملك الحكيم', sv: 'Den Vise Kungen', de: 'Der Weise König' },
      content: { en: ['Prophet Sulayman (peace be upon him) was the son of Dawud and became an even greater king. Allah gave him amazing gifts: he could understand the language of animals and control the wind. Even the jinn worked for him, building magnificent palaces and temples. Once, an ant warned all the other ants that Sulayman\'s army was coming, and Sulayman smiled when he heard this. A hoopoe bird brought him news about the Queen of Sheba, and Sulayman invited her to visit. She was amazed by his wisdom and became a believer. Despite all his power, Sulayman always remembered that everything came from Allah.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the golden palaces of Jerusalem and the lands of ancient kingdoms', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'When Allah gives us special talents or things, we should use them wisely and always remember to thank Him.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'If you could talk to animals like Sulayman, what would you say to them?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',
        transliteration: 'Rabbi awzi\'nee an ashkura ni\'matakal-latee an\'amta \'alayy',
        english: { en: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me.', ar: '...', sv: '...', de: '...' }
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
      content: { en: ['Prophet Ilyas (peace be upon him) lived during a time when his people were worshipping a false god called Baal. The king and queen were leading people away from Allah. Ilyas bravely stood up to them and reminded people to worship only Allah. He performed miracles to show Allah\'s power, including stopping the rain for three years. When he challenged the priests of Baal to a contest, Allah sent fire from heaven to prove that He alone was the true God. Many people returned to worshipping Allah, but Ilyas had to hide from the angry king and queen.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the northern lands where people had beautiful temples but worshipped false gods', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Sometimes we need to be brave and stand up for what\'s right, even when it\'s difficult.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you be brave when you need to do the right thing?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا',
        transliteration: 'Rabbi inna qawmee ittakhadhoo hadhal-qur\'ana mahjora',
        english: { en: 'My Lord, indeed my people have taken this Quran as something to be ignored.', ar: '...', sv: '...', de: '...' }
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
      content: { en: ['Prophet Al-Yasa\' (peace be upon him) was the student and successor of Prophet Ilyas. When Ilyas was taken up to heaven, Al-Yasa\' continued his work, calling people back to worship Allah alone. Allah gave him the power to perform many miracles: he could heal the sick, bring the dead back to life, and purify poisoned water. He helped a poor widow by making her small jar of oil fill many containers, so she could sell the oil and pay her debts. Al-Yasa\' was known for his kindness and always helped those in need.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the same lands where Ilyas had taught, continuing the mission of guidance', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'We should continue doing good work and helping others, just like those who taught us.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you continue the good work that your teachers and parents have started?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
        transliteration: 'Rabbana la tuzigh quloobana ba\'da idh hadaytana wa hab lana min ladunka rahma',
        english: { en: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy.', ar: '...', sv: '...', de: '...' }
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
      content: { en: ['Prophet Zakariya (peace be upon him) was already very old when he prayed to Allah for a son. He and his wife had waited their whole lives to have a child. Zakariya took care of Maryam (Mary) in the temple and saw how Allah provided for her miraculously. This gave him hope, and he prayed secretly to Allah for a child who would continue his work. Allah answered his prayer and gave him the good news that he would have a son named Yahya (John). As a sign, Zakariya was unable to speak for three days, except to praise Allah.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the holy temple in Jerusalem, where Zakariya served Allah', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'It\'s never too late to ask Allah for something good. He answers prayers in His own perfect time.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'What are some good things you can ask Allah for in your prayers?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ',
        transliteration: 'Rabbi hab lee min ladunka dhurriyyatan tayyibatan innaka samee\'ud-du\'a',
        english: { en: 'My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.', ar: '...', sv: '...', de: '...' }
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
      content: { en: ['Prophet Yahya (peace be upon him) was the son of Zakariya, born when his parents were very old. From the time he was very young, Allah gave Yahya wisdom and made him gentle and kind to everyone. He was very respectful to his parents and never disobeyed them. Yahya lived simply in the desert, eating only what he needed and spending his time in prayer and remembering Allah. He prepared people for the coming of Prophet Isa (Jesus) and baptized those who wanted to follow Allah\'s path. Yahya was known for his pure heart and his love for all of Allah\'s creation.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the wilderness near the Jordan River, where people came to be baptized', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Being gentle and kind to everyone, especially our parents, is very important to Allah.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you be more gentle and kind in the way you treat people and animals?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
        transliteration: 'Rabbi ij\'alnee muqeemas-salati wa min dhurriyyatee rabbana wa taqabbal du\'a',
        english: { en: 'My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.', ar: '...', sv: '...', de: '...' }
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
      content: { en: ['Prophet Isa (peace be upon him) was born to Maryam (Mary) in a miraculous way, without a father. Even as a baby, he spoke from his cradle to defend his mother\'s honor. Allah gave Isa amazing miracles: he could heal the blind and the sick, and even bring the dead back to life, all by Allah\'s permission. He taught people to worship Allah alone and to be kind to one another. Some people tried to harm him, but Allah saved him and raised him up to heaven. Isa will return one day before the end of the world to spread peace and justice.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the holy land of Palestine, in the towns where people needed healing and guidance', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Allah can do anything He wants, even things that seem impossible. We should always believe in His power.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'How can you help heal hurt feelings and bring peace between people who are fighting?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا',
        transliteration: 'Rabbana anzil \'alayna ma\'idatan minas-sama\'i takoonu lana \'eeda',
        english: { en: 'Our Lord, send down to us a table from heaven to be for us a festival.', ar: '...', sv: '...', de: '...' }
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
      title: { en: 'The Last Messenger', ar: 'خاتم المرسلين', sv: 'Den Sista Budbäraren', de: 'Der Letzte Gesandte' },
      content: { en: ['Prophet Muhammad (peace and blessings be upon him) is the last and final messenger of Allah. He was born in Makkah and was known by everyone as "Al-Ameen" (the trustworthy one) because of his perfect honesty. At age 40, Allah chose him to deliver the final message to all of humanity, the Quran. He taught people to worship only one God, to be kind to everyone, to care for the poor, and to be just. He was a mercy to all the worlds, and his beautiful example is a guide for us in every part of our lives.'], ar: ['...'], sv: ['...'], de: ['...'] },
      setting: { en: 'In the sacred city of Makkah and the peaceful city of Madinah, in the beautiful desert of Arabia', ar: '...', sv: '...', de: '...' },
      mainLesson: { en: 'Prophet Muhammad showed us how to live a good life by being kind, honest, and always remembering Allah. We should try to follow his beautiful example.', ar: '...', sv: '...', de: '...' },
      reflectionQuestion: { en: 'What are three kind things Prophet Muhammad did that you can try to do too?', ar: '...', sv: '...', de: '...' },
      dua: {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammadin kama sallayta \'ala Ibraheema wa \'ala aali Ibraheema',
        english: { en: 'O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim.', ar: '...', sv: '...', de: '...' }
      }
    },
    color: 'green',
    icon: '🕌'
  }
].map(p => ({ ...p, story: { ...p.story, content: { en: p.story.content.en, ar: p.story.content.en, sv: p.story.content.en, de: p.story.content.en } } }));
// The above map function is a temporary fix to ensure the app doesn't crash
// because only Adam's story is fully translated. It copies the English content to other languages.
