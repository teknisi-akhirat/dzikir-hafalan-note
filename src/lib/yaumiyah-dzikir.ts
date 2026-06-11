export type DzikirItem = {
  id: string;
  nama: string;
  arab: string;
  terjemahan: string;
  kali: number;
};

export const DZIKIR_PAGI: DzikirItem[] = [
  { id: "taawudz", nama: "Ta'awudz", arab: "أَعُوذُ بِاللَّهِ مِنْ الشَّيْطَانِ الرَّجِيمِ", terjemahan: "Aku berlindung kepada Allah dari godaan syaitan yang terkutuk", kali: 1 },
  { id: "ayatkursi", nama: "Ayat Kursi", arab: "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", terjemahan: "Allah tidak ada Ilah melainkan Dia Yang Hidup Kekal. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi...", kali: 1 },
  { id: "ikhlas", nama: "Surat Al-Ikhlas", arab: "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", terjemahan: "Katakanlah: Dia-lah Allah Yang Maha Esa, Allah tempat bergantung, tidak beranak dan tidak diperanakkan, tidak ada yang setara dengan-Nya", kali: 3 },
  { id: "falaq", nama: "Surat Al-Falaq", arab: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", terjemahan: "Katakanlah: Aku berlindung kepada Rabb yang menguasai waktu Shubuh, dari kejahatan makhluk-Nya, dari kejahatan malam, dari sihir, dan dari kejahatan orang yang dengki", kali: 3 },
  { id: "naas", nama: "Surat An-Naas", arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ", terjemahan: "Katakanlah: Aku berlindung kepada Rabb manusia, Raja manusia, Sembahan manusia, dari kejahatan bisikan syaitan yang bersembunyi, dari golongan jin dan manusia", kali: 3 },
  { id: "ashbahna", nama: "Doa Pagi (Ashbahna)", arab: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", terjemahan: "Kami memasuki waktu pagi dan kerajaan hanya milik Allah... Ya Rabb, aku mohon kebaikan hari ini dan sesudahnya, aku berlindung dari kemalasan dan kejelekan hari tua, serta dari siksa neraka dan kubur", kali: 1 },
  { id: "allahumma-bika", nama: "Doa Pagi (Allahumma bika)", arab: "اَللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ", terjemahan: "Ya Allah, dengan rahmat-Mu kami memasuki pagi, dengan rahmat-Mu kami memasuki sore, dengan kehendak-Mu kami hidup dan mati, dan kepada-Mu kebangkitan", kali: 1 },
  { id: "sayyidul-istighfar", nama: "Sayyidul Istighfar", arab: "اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ خَلَقْتَنِيْ وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ", terjemahan: "Ya Allah, Engkau Rabb-ku, tidak ada Ilah selain Engkau. Engkau menciptakanku dan aku hamba-Mu. Aku berlindung dari kejelekan yang kuperbuat, mengakui nikmat dan dosaku — ampunilah aku, sesungguhnya tidak ada yang mengampuni dosa selain Engkau", kali: 1 },
  { id: "afiat", nama: "Doa Afiat", arab: "اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ لاَ إِلَـهَ إِلاَّ أَنْتَ اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ لاَ إِلَـهَ إِلاَّ أَنْتَ", terjemahan: "Ya Allah, selamatkanlah tubuhku, pendengaranku, penglihatanku. Aku berlindung dari kekufuran, kefakiran, dan siksa kubur", kali: 3 },
  { id: "perlindungan-menyeluruh", nama: "Doa Perlindungan Menyeluruh", arab: "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِيْ وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ وَمِنْ فَوْقِيْ وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ", terjemahan: "Ya Allah, aku memohon maaf dan keselamatan di dunia dan akhirat, dalam agama, dunia, keluarga dan hartaku. Tutupilah aibku, tentramkan rasa takutku, peliharalah aku dari semua arah", kali: 1 },
  { id: "perlindungan-diri", nama: "Doa Perlindungan dari Kejahatan Diri", arab: "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرُّهُ إِلَى مُسْلِمٍ", terjemahan: "Ya Allah Yang Maha Mengetahui yang ghaib dan nyata, Pencipta langit dan bumi. Aku berlindung dari kejahatan diriku, syaitan dan ajakannya berbuat syirik", kali: 1 },
  { id: "bismillah-perlindungan", nama: "Bismillah Perlindungan", arab: "بِسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي اْلأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيْعُ الْعَلِيْمُ", terjemahan: "Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang membahayakan di bumi maupun di langit. Dia Maha Mendengar lagi Maha Mengetahui", kali: 3 },
  { id: "ridha-islam", nama: "Ridha dengan Islam", arab: "رَضِيْتُ بِاللهِ رَبًّا وَبِاْلإِسْلاَمِ دِيْنًا وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", terjemahan: "Aku ridha Allah sebagai Rabb-ku, Islam sebagai agamaku, dan Muhammad ﷺ sebagai Nabiku", kali: 3 },
  { id: "ya-hayyu", nama: "Ya Hayyu Ya Qayyum", arab: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ أَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ", terjemahan: "Wahai Rabb Yang Maha Hidup, dengan rahmat-Mu aku meminta pertolongan. Perbaikilah seluruh urusanku dan jangan serahkan aku kepada diriku sendiri sekejap pun", kali: 1 },
  { id: "fitrah-pagi", nama: "Doa Fitrah Pagi", arab: "أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ", terjemahan: "Di waktu pagi kami berada di atas fitrah Islam, kalimat ikhlas, agama Nabi Muhammad ﷺ dan agama Ibrahim yang hanif dan muslim", kali: 1 },
  { id: "tahlil", nama: "Tahlil", arab: "لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ", terjemahan: "Tidak ada Ilah yang berhak diibadahi selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Milik-Nya kerajaan dan pujian, Dia Maha Kuasa atas segala sesuatu", kali: 10 },
  { id: "tasbih-makhluk", nama: "Tasbih Bilangan Makhluk", arab: "سُبْحَانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ", terjemahan: "Mahasuci Allah, aku memuji-Nya sebanyak bilangan makhluk-Nya, sesuai keridaan-Nya, seberat Arsy-Nya, dan sebanyak tinta kalimat-Nya", kali: 3 },
  { id: "ilmu-rezeki", nama: "Doa Ilmu & Rezeki", arab: "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً", terjemahan: "Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang halal, dan amalan yang diterima", kali: 1 },
  { id: "subhanallah-bihamdihi", nama: "Subhanallah wa Bihamdihi", arab: "سُبْحَانَ اللهِ وَبِحَمْدِهِ", terjemahan: "Mahasuci Allah, aku memuji-Nya", kali: 100 },
  { id: "istighfar", nama: "Istighfar", arab: "أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ", terjemahan: "Aku memohon ampunan kepada Allah dan bertaubat kepada-Nya", kali: 100 },
];

export const DZIKIR_PETANG: DzikirItem[] = [
  DZIKIR_PAGI[0],
  DZIKIR_PAGI[1],
  DZIKIR_PAGI[2],
  DZIKIR_PAGI[3],
  DZIKIR_PAGI[4],
  { id: "amsayna", nama: "Doa Petang (Amsayna)", arab: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", terjemahan: "Kami memasuki waktu sore dan kerajaan hanya milik Allah... Ya Rabb, aku mohon kebaikan malam ini dan sesudahnya, aku berlindung dari kemalasan dan kejelekan hari tua, serta dari siksa neraka dan kubur", kali: 1 },
  { id: "allahumma-bika-petang", nama: "Doa Petang (Allahumma bika)", arab: "اَللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيْرُ", terjemahan: "Ya Allah, dengan rahmat-Mu kami memasuki sore, dengan rahmat-Mu kami memasuki pagi, dengan kehendak-Mu kami hidup dan mati, dan kepada-Mu tempat kembali", kali: 1 },
  DZIKIR_PAGI[7],
  DZIKIR_PAGI[8],
  DZIKIR_PAGI[9],
  DZIKIR_PAGI[10],
  DZIKIR_PAGI[11],
  DZIKIR_PAGI[12],
  DZIKIR_PAGI[13],
  { id: "fitrah-petang", nama: "Doa Fitrah Petang", arab: "أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ", terjemahan: "Di waktu sore kami berada di atas fitrah Islam, kalimat ikhlas, agama Nabi Muhammad ﷺ dan agama Ibrahim yang hanif dan muslim", kali: 1 },
  DZIKIR_PAGI[15],
  DZIKIR_PAGI[18],
  DZIKIR_PAGI[19],
  { id: "kalimat-tammat", nama: "Doa Perlindungan Petang", arab: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", terjemahan: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya", kali: 3 },
];
