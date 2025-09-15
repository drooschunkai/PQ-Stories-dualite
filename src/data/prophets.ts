import { Prophet } from '../types';

export const prophets: Prophet[] = [
  {
    id: 'adam',
    name: 'Adam',
    arabicName: 'آدم',
    order: 1,
    story: {
      title: 'The First Human - Prophet Adam (AS)',
      content: [
        'Long, long ago, before any people lived on Earth, Allah decided to create the very first human being.',
        'Allah shaped Adam (peace be upon him) from clay with His own hands. The clay was smooth and perfect, like the most beautiful pottery.',
        'Then Allah breathed life into Adam. Suddenly, Adam opened his eyes and could see the beautiful world around him!',
        'Allah taught Adam the names of everything - the trees, the animals, the stars in the sky. Adam was very smart and learned quickly.',
        'The angels were amazed! They bowed down to Adam because Allah had made him so special.',
        'Allah created a beautiful garden called Jannah (Paradise) for Adam to live in. It had sweet fruits, cool shade, and everything Adam needed.',
        'Adam felt lonely, so Allah created Hawwa (Eve) to be his companion. They were happy together in the peaceful garden.',
        'Allah told them they could eat from any tree in the garden, except for one special tree.',
        'But Shaytan (Satan) whispered bad thoughts to them, and they forgot Allah\'s command and ate from that tree.',
        'Adam and Hawwa felt very sorry and asked Allah to forgive them. Allah, who is Most Merciful, forgave them because they were truly sorry.'
      ],
      setting: 'In a time before time, in a beautiful garden created by Allah',
      mainLesson: 'When we make mistakes, we should say sorry to Allah and ask for forgiveness. Allah always forgives those who are truly sorry.',
      reflectionQuestion: 'When you do something wrong, what should you do to make it right?',
      dua: {
        arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
        english: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
        transliteration: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal-khasireen'
      }
    },
    color: 'emerald',
    icon: '🌱'
  },
  {
    id: 'nuh',
    name: 'Nuh (Noah)',
    arabicName: 'نوح',
    order: 2,
    story: {
      title: 'The Great Flood - Prophet Nuh (AS)',
      content: [
        'Prophet Nuh (peace be upon him) lived in a time when people had forgotten about Allah.',
        'Nuh was a kind and patient man who loved Allah very much. He always prayed and remembered Allah.',
        'Allah chose Nuh to be His messenger. Nuh\'s job was to remind people to worship only Allah.',
        'For many, many years - almost 950 years! - Nuh told people about Allah with a gentle, caring voice.',
        'But most people didn\'t want to listen. They laughed at Nuh and said mean things to him.',
        'Nuh never got angry. He kept being kind and patient, just like a good teacher.',
        'Allah told Nuh that a big flood was coming. Only the people who believed in Allah would be saved.',
        'Allah commanded Nuh to build a huge boat called an ark. It was bigger than any boat people had ever seen!',
        'People laughed when they saw Nuh building the boat on dry land. But Nuh trusted Allah completely.',
        'Allah told Nuh to bring his family and two of every animal onto the boat - elephants, birds, lions, sheep, and many more!',
        'When the rain started, it poured and poured like never before. The water rose higher and higher.',
        'But inside the ark, Nuh and all the animals were safe and dry, protected by Allah\'s mercy.'
      ],
      setting: 'In an ancient land where people had beautiful cities but had forgotten their Creator',
      mainLesson: 'We should always be patient when teaching others about what is right, even if they don\'t listen at first.',
      reflectionQuestion: 'How can you be patient and kind when someone doesn\'t want to listen to good advice?',
      dua: {
        arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
        english: 'My Lord, forgive me and my parents and whoever enters my house as a believer and the believing men and believing women.',
        transliteration: 'Rabbi ighfir lee wa li-walidayya wa liman dakhala baytiya mu\'minan wa lil-mu\'mineena wal-mu\'minaat'
      }
    },
    color: 'blue',
    icon: '🚢'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim (Abraham)',
    arabicName: 'إبراهيم',
    order: 3,
    story: {
      title: 'The Friend of Allah - Prophet Ibrahim (AS)',
      content: [
        'Prophet Ibrahim (peace be upon him) lived in a land where people worshipped statues made of stone.',
        'Even as a young boy, Ibrahim was very smart. He looked at the stone statues and wondered: "How can these statues help anyone? They can\'t even move!"',
        'Ibrahim\'s father made these statues, but Ibrahim knew in his heart that only Allah, who created everything, deserved to be worshipped.',
        'One night, Ibrahim looked up at the beautiful stars twinkling in the dark sky. He felt Allah\'s presence everywhere.',
        'When people left their temple, Ibrahim went inside and broke all the statues except the biggest one.',
        'When people found the broken statues, they were very upset. Ibrahim showed them that the statues couldn\'t even protect themselves!',
        'The king was angry and decided to throw Ibrahim into a huge fire. But Ibrahim wasn\'t afraid because he trusted Allah completely.',
        'Something amazing happened! Allah made the fire cool and safe for Ibrahim. He walked out without even a tiny burn!',
        'Everyone was amazed at this miracle. They saw that Allah was truly powerful and protected those who believed in Him.',
        'Ibrahim married a good woman named Sarah, and Allah blessed them with a son named Ishaq (Isaac) when they were very old.',
        'Ibrahim also had another son named Ismail. Allah asked Ibrahim to take Ismail to a desert place that would later become Makkah.',
        'Ibrahim was a true friend of Allah because he always trusted Allah, even when things seemed difficult.'
      ],
      setting: 'In ancient Mesopotamia, a land of rivers and cities where people carved beautiful statues',
      mainLesson: 'We should always trust Allah, even when things seem scary or difficult. Allah always protects those who believe in Him.',
      reflectionQuestion: 'What does it mean to be a true friend of Allah?',
      dua: {
        arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
        english: 'Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing.',
        transliteration: 'Rabbana taqabbal minna innaka antas-Samee\'ul-\'Aleem'
      }
    },
    color: 'amber',
    icon: '⭐'
  },
  {
    id: 'yusuf',
    name: 'Yusuf (Joseph)',
    arabicName: 'يوسف',
    order: 4,
    story: {
      title: 'The Beautiful Dream - Prophet Yusuf (AS)',
      content: [
        'Prophet Yusuf (peace be upon him) was a very special young boy with the most beautiful character.',
        'One morning, Yusuf woke up excited. He had seen an amazing dream with eleven stars, the sun, and the moon bowing down to him!',
        'He told his loving father, Prophet Ya\'qub (Jacob), about the dream. His father smiled and knew this meant something wonderful.',
        'Yusuf had eleven brothers, but some of them felt jealous because their father loved Yusuf very much.',
        'The jealous brothers made a bad plan. They took Yusuf far away and put him in a deep, dark well.',
        'Yusuf was scared and alone in the well, but he remembered Allah and prayed. Allah comforted his heart.',
        'Some travelers found Yusuf and took him to Egypt, where he was sold as a servant to an important man.',
        'Even though Yusuf was far from home, he always remembered Allah and was honest and kind to everyone.',
        'Yusuf grew up to be very wise. Allah gave him the special gift of understanding dreams.',
        'When the king of Egypt had a confusing dream, only Yusuf could explain what it meant.',
        'Yusuf became a very important leader in Egypt and helped save people from a time when there wasn\'t enough food.',
        'Many years later, his brothers came to Egypt looking for food. Yusuf forgave them and brought his whole family to live safely in Egypt.'
      ],
      setting: 'In the ancient lands of Palestine and the magnificent kingdom of Egypt along the Nile River',
      mainLesson: 'Even when bad things happen to us, Allah has a plan. If we stay patient and keep doing good, Allah will help us.',
      reflectionQuestion: 'How can you forgive someone who has hurt your feelings?',
      dua: {
        arabic: 'رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ',
        english: 'My Lord, You have given me sovereignty and taught me the interpretation of dreams.',
        transliteration: 'Rabbi qad aataytanee minal-mulki wa \'allamtanee min ta\'weel il-ahaadeeth'
      }
    },
    color: 'purple',
    icon: '🌙'
  },
  {
    id: 'musa',
    name: 'Musa (Moses)',
    arabicName: 'موسى',
    order: 5,
    story: {
      title: 'The Staff and the Sea - Prophet Musa (AS)',
      content: [
        'Prophet Musa (peace be upon him) was born at a time when a mean king ruled Egypt.',
        'Baby Musa\'s mother put him in a basket and placed it gently in the river to keep him safe.',
        'The basket floated to the king\'s palace, where the queen found baby Musa and decided to raise him as her own son.',
        'Musa grew up in the palace, but Allah had special plans for him.',
        'One day, while taking care of sheep in the desert, Musa saw something amazing - a bush that was on fire but wasn\'t burning up!',
        'From the burning bush, Allah spoke to Musa and chose him to be a prophet.',
        'Allah gave Musa a wooden staff (a walking stick) that could do miracles.',
        'When Musa threw his staff on the ground, it turned into a big snake! When he picked it up, it became a staff again.',
        'Allah sent Musa to tell the mean king to let the people of Israel leave Egypt and worship Allah freely.',
        'The king said no many times, so Allah sent different signs to show His power.',
        'Finally, Musa led his people out of Egypt. But the king changed his mind and chased them with his army!',
        'When they reached the Red Sea, Musa raised his staff, and Allah made the water split apart like two walls!',
        'Musa and his people walked safely across on dry ground. When the king\'s army tried to follow, the water came back together.',
        'The people were free! They sang songs of happiness and thanked Allah for saving them.'
      ],
      setting: 'In ancient Egypt by the mighty Nile River and the vast desert where shepherds watched their flocks',
      mainLesson: 'Allah always helps those who stand up for what is right. We should never be afraid to do good when Allah is with us.',
      reflectionQuestion: 'When you see someone being treated unfairly, how can you help them?',
      dua: {
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
        english: 'My Lord, expand for me my chest and ease for me my task and untie the knot from my tongue that they may understand my speech.',
        transliteration: 'Rabbi ishrah lee sadree wa yassir lee amree wahlul \'uqdatan min lisanee yafqahoo qawlee'
      }
    },
    color: 'red',
    icon: '🔥'
  },
  {
    id: 'muhammad',
    name: 'Muhammad',
    arabicName: 'محمد',
    order: 25,
    story: {
      title: 'The Last Messenger - Prophet Muhammad (SAW)',
      content: [
        'Prophet Muhammad (peace and blessings be upon him) was born in the beautiful city of Makkah.',
        'Even as a child, Muhammad was known for being honest and trustworthy. People called him "Al-Ameen" (the trustworthy one).',
        'Muhammad grew up to be a kind and thoughtful man who often went to a quiet cave called Hira to think and pray.',
        'One special night, when Muhammad was 40 years old, the Angel Jibril (Gabriel) came to him in the cave.',
        'The angel told Muhammad that Allah had chosen him to be the last prophet, bringing the final message to all people.',
        'Muhammad felt scared at first, but his loving wife Khadijah comforted him and believed in him.',
        'Muhammad began teaching people about Allah, just like all the prophets before him had done.',
        'He taught people to be kind to their parents, to help the poor, to tell the truth, and to worship only Allah.',
        'Some people in Makkah didn\'t like his message and were mean to him, but Muhammad was always patient and forgiving.',
        'Allah revealed the Quran to Muhammad, a beautiful book full of guidance for all people until the end of time.',
        'Muhammad and his followers moved to a city called Madinah, where they built a peaceful community.',
        'Muhammad treated everyone with kindness - Muslims, Christians, Jews, and all people. He was a mercy to the whole world.',
        'Before Prophet Muhammad passed away, he had shared Allah\'s complete message with humanity.',
        'Muhammad is the last prophet, and his teachings will guide people until the Day of Judgment.'
      ],
      setting: 'In the sacred city of Makkah and the peaceful city of Madinah, in the beautiful desert of Arabia',
      mainLesson: 'Prophet Muhammad showed us how to live a good life by being kind, honest, and always remembering Allah. We should try to follow his beautiful example.',
      reflectionQuestion: 'What are three kind things Prophet Muhammad did that you can try to do too?',
      dua: {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ',
        english: 'O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim.',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammadin kama sallayta \'ala Ibraheema wa \'ala aali Ibraheema'
      }
    },
    color: 'green',
    icon: '🕌'
  }
];
