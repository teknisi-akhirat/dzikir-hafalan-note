export type DzikirItem = {
  id: string;
  nama: string;
  arab: string;
  terjemahan: string;
  kali: number;
};

// Sumber: Hisnul Muslim (Sa'id bin Ali al-Qahthani) — bab Dzikir Pagi & Petang.
// Teks Arab dan terjemahan telah diaudit ulang per Desember 2026.

export const DZIKIR_PAGI: DzikirItem[] = [
  {
    id: "taawudz",
    nama: "Ta'awudz",
    arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    terjemahan: "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
    kali: 1,
  },
  {
    id: "ayatkursi",
    nama: "Ayat Kursi",
    arab: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    terjemahan:
      "Allah, tidak ada Tuhan (yang berhak disembah) selain Dia, Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya). Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka, sedang mereka tidak mengetahui sesuatu pun dari ilmu-Nya kecuali apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi, dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi lagi Mahaagung. (QS. Al-Baqarah: 255)",
    kali: 1,
  },
  {
    id: "ikhlas",
    nama: "Surat Al-Ikhlas",
    arab: "قُلْ هُوَ اللَّهُ أَحَدٌ ۚ اللَّهُ الصَّمَدُ ۚ لَمْ يَلِدْ وَلَمْ يُولَدْ ۚ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    terjemahan:
      "Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat bergantung segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu pun yang setara dengan-Nya. (QS. Al-Ikhlas)",
    kali: 3,
  },
  {
    id: "falaq",
    nama: "Surat Al-Falaq",
    arab: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۙ مِنْ شَرِّ مَا خَلَقَ ۙ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۙ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۙ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    terjemahan:
      "Katakanlah: Aku berlindung kepada Tuhan yang menguasai waktu subuh, dari kejahatan makhluk-Nya, dari kejahatan malam apabila telah gelap gulita, dari kejahatan (perempuan-perempuan) tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki. (QS. Al-Falaq)",
    kali: 3,
  },
  {
    id: "naas",
    nama: "Surat An-Naas",
    arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۙ مَلِكِ النَّاسِ ۙ إِلَٰهِ النَّاسِ ۙ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۙ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۙ مِنَ الْجِنَّةِ وَالنَّاسِ",
    terjemahan:
      "Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia, Raja manusia, sembahan manusia, dari kejahatan (bisikan) setan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia. (QS. An-Naas)",
    kali: 3,
  },
  {
    id: "ashbahna",
    nama: "Doa Pagi (Ashbahnaa)",
    arab: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    terjemahan:
      "Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah Yang Maha Esa, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya pujian, dan Dia Mahakuasa atas segala sesuatu. Wahai Rabb-ku, aku memohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya, dan aku berlindung kepada-Mu dari kejahatan di hari ini dan kejahatan sesudahnya. Wahai Rabb-ku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabb-ku, aku berlindung kepada-Mu dari siksa di neraka dan siksa di alam kubur. (HR. Muslim)",
    kali: 1,
  },
  {
    id: "allahumma-bika",
    nama: "Doa Pagi (Allahumma bika)",
    arab: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    terjemahan:
      "Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu sore. Dengan rahmat dan pertolongan-Mu kami hidup dan dengan kehendak-Mu kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk). (HR. Tirmidzi, Abu Dawud, Ibnu Majah, Ahmad)",
    kali: 1,
  },
  {
    id: "sayyidul-istighfar",
    nama: "Sayyidul Istighfar",
    arab: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    terjemahan:
      "Ya Allah, Engkau adalah Rabb-ku, tidak ada ilah (yang berhak disembah) kecuali Engkau. Engkau yang menciptakanku dan aku adalah hamba-Mu. Aku menetapi perjanjian dan janji-Mu sesuai kemampuanku. Aku berlindung kepada-Mu dari keburukan apa yang telah aku perbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang dapat mengampuni dosa kecuali Engkau. (HR. Bukhari) — Sayyidul Istighfar (penghulu istighfar).",
    kali: 1,
  },
  {
    id: "afiat",
    nama: "Doa Memohon Keselamatan (Allahumma 'aafini)",
    arab: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ",
    terjemahan:
      "Ya Allah, berikanlah kesehatan pada tubuhku. Ya Allah, berikanlah kesehatan pada pendengaranku. Ya Allah, berikanlah kesehatan pada penglihatanku. Tidak ada ilah (yang berhak disembah) kecuali Engkau. Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kekufuran dan kefakiran, dan aku berlindung kepada-Mu dari siksa kubur. Tidak ada ilah (yang berhak disembah) kecuali Engkau. (HR. Abu Dawud, Ahmad)",
    kali: 3,
  },
  {
    id: "perlindungan-menyeluruh",
    nama: "Doa Perlindungan Menyeluruh",
    arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    terjemahan:
      "Ya Allah, sesungguhnya aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat. Ya Allah, sesungguhnya aku memohon kepada-Mu ampunan dan keselamatan dalam agama, dunia, keluarga, dan hartaku. Ya Allah, tutupilah auratku (aib dan sesuatu yang tidak layak dilihat orang) dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari depanku, belakangku, kananku, kiriku, dan atasku. Aku berlindung dengan keagungan-Mu agar tidak disambar dari bawahku (dibenamkan ke dalam bumi). (HR. Abu Dawud, Ibnu Majah, Ahmad)",
    kali: 1,
  },
  {
    id: "perlindungan-diri",
    nama: "Doa Perlindungan dari Kejahatan Diri & Setan",
    arab: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ",
    terjemahan:
      "Ya Allah, Yang Maha Mengetahui hal gaib dan yang nyata, wahai Rabb pencipta langit dan bumi, Rabb segala sesuatu dan Yang merajainya. Aku bersaksi bahwa tidak ada ilah (yang berhak disembah) kecuali Engkau. Aku berlindung kepada-Mu dari kejahatan diriku, dari kejahatan setan dan ajakannya untuk menyekutukan Allah, dan dari berbuat kejelekan terhadap diriku atau menyeretnya kepada seorang muslim. (HR. Tirmidzi, Abu Dawud)",
    kali: 1,
  },
  {
    id: "bismillah-perlindungan",
    nama: "Bismillah Perlindungan",
    arab: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
    terjemahan:
      "Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang berbahaya, baik di bumi maupun di langit, dan Dialah Yang Maha Mendengar lagi Maha Mengetahui. (HR. Abu Dawud, Tirmidzi, Ibnu Majah, Ahmad — barangsiapa mengucapkannya 3x pagi & sore, tidak akan ada sesuatu pun yang membahayakannya.)",
    kali: 3,
  },
  {
    id: "ridha-islam",
    nama: "Ridha dengan Allah, Islam & Nabi ﷺ",
    arab: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    terjemahan:
      "Aku ridha Allah sebagai Rabb-ku, Islam sebagai agamaku, dan Muhammad ﷺ sebagai nabiku. (HR. Abu Dawud, Tirmidzi, Ahmad — barangsiapa mengucapkannya 3x pagi & sore, menjadi kewajiban Allah meridhai dirinya pada hari kiamat.)",
    kali: 3,
  },
  {
    id: "ya-hayyu",
    nama: "Ya Hayyu Ya Qayyum",
    arab: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
    terjemahan:
      "Wahai Rabb Yang Mahahidup, wahai Rabb Yang berdiri sendiri (tidak butuh kepada makhluk-Nya), dengan rahmat-Mu aku memohon pertolongan. Perbaikilah segala urusanku dan jangan Engkau serahkan aku kepada diriku sendiri walau sekejap mata. (HR. Nasa'i, Hakim)",
    kali: 1,
  },
  {
    id: "fitrah-pagi",
    nama: "Doa Fitrah Pagi",
    arab: "أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    terjemahan:
      "Di waktu pagi kami berada di atas fitrah Islam, kalimat ikhlas (laa ilaaha illallaah), agama Nabi kami Muhammad ﷺ, dan agama bapak kami Ibrahim yang lurus dan berserah diri, dan beliau bukanlah termasuk orang-orang musyrik. (HR. Ahmad)",
    kali: 1,
  },
  {
    id: "tahlil",
    nama: "Tahlil",
    arab: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    terjemahan:
      "Tidak ada ilah (yang berhak disembah) kecuali Allah Yang Maha Esa, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala pujian, dan Dia Mahakuasa atas segala sesuatu. (HR. Ahmad — dianjurkan 10x atau 100x di pagi hari.)",
    kali: 100,
  },
  {
    id: "tasbih-makhluk",
    nama: "Tasbih Bilangan Makhluk",
    arab: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    terjemahan:
      "Mahasuci Allah, aku memuji-Nya sebanyak bilangan makhluk-Nya, seridha diri-Nya, seberat timbangan 'Arsy-Nya, dan sebanyak tinta (yang menulis) kalimat-kalimat-Nya. (HR. Muslim — diucapkan 3x di pagi hari.)",
    kali: 3,
  },
  {
    id: "ilmu-rezeki",
    nama: "Doa Ilmu, Rezeki & Amal",
    arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    terjemahan:
      "Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang halal & baik, dan amal yang diterima. (HR. Ibnu Majah, Ahmad)",
    kali: 1,
  },
  {
    id: "subhanallah-bihamdihi",
    nama: "Subhanallah wa Bihamdihi",
    arab: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    terjemahan:
      "Mahasuci Allah, aku memuji-Nya. (HR. Muslim — barangsiapa mengucapkannya 100x di pagi & sore, tidak ada seorang pun yang datang pada hari kiamat dengan amalan yang lebih baik darinya, kecuali yang mengucapkan seperti itu atau lebih banyak.)",
    kali: 100,
  },
  {
    id: "istighfar",
    nama: "Istighfar",
    arab: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    terjemahan:
      "Aku memohon ampun kepada Allah dan bertaubat kepada-Nya. (HR. Bukhari & Muslim — Rasulullah ﷺ beristighfar lebih dari 70x / 100x dalam sehari.)",
    kali: 100,
  },
];

export const DZIKIR_PETANG: DzikirItem[] = [
  DZIKIR_PAGI[0], // Ta'awudz
  DZIKIR_PAGI[1], // Ayat Kursi
  DZIKIR_PAGI[2], // Al-Ikhlas
  DZIKIR_PAGI[3], // Al-Falaq
  DZIKIR_PAGI[4], // An-Naas
  {
    id: "amsayna",
    nama: "Doa Petang (Amsainaa)",
    arab: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    terjemahan:
      "Kami telah memasuki waktu sore dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah Yang Maha Esa, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya pujian, dan Dia Mahakuasa atas segala sesuatu. Wahai Rabb-ku, aku memohon kepada-Mu kebaikan di malam ini dan kebaikan sesudahnya, dan aku berlindung kepada-Mu dari kejahatan di malam ini dan kejahatan sesudahnya. Wahai Rabb-ku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabb-ku, aku berlindung kepada-Mu dari siksa di neraka dan siksa di alam kubur. (HR. Muslim)",
    kali: 1,
  },
  {
    id: "allahumma-bika-petang",
    nama: "Doa Petang (Allahumma bika)",
    arab: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    terjemahan:
      "Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu sore, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi. Dengan rahmat dan pertolongan-Mu kami hidup dan dengan kehendak-Mu kami mati. Dan kepada-Mu tempat kembali. (HR. Tirmidzi, Abu Dawud, Ibnu Majah, Ahmad)",
    kali: 1,
  },
  DZIKIR_PAGI[7], // Sayyidul Istighfar
  DZIKIR_PAGI[8], // 'Aafini
  DZIKIR_PAGI[9], // Perlindungan menyeluruh
  DZIKIR_PAGI[10], // Perlindungan diri & setan
  DZIKIR_PAGI[11], // Bismillah
  DZIKIR_PAGI[12], // Ridha
  DZIKIR_PAGI[13], // Ya Hayyu Ya Qayyum
  {
    id: "fitrah-petang",
    nama: "Doa Fitrah Petang",
    arab: "أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    terjemahan:
      "Di waktu sore kami berada di atas fitrah Islam, kalimat ikhlas (laa ilaaha illallaah), agama Nabi kami Muhammad ﷺ, dan agama bapak kami Ibrahim yang lurus dan berserah diri, dan beliau bukanlah termasuk orang-orang musyrik. (HR. Ahmad)",
    kali: 1,
  },
  DZIKIR_PAGI[15], // Tahlil
  DZIKIR_PAGI[18], // Subhanallah wa bihamdihi 100x
  DZIKIR_PAGI[19], // Istighfar 100x
  {
    id: "kalimat-tammat",
    nama: "Doa Perlindungan Petang (Kalimat Tammat)",
    arab: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    terjemahan:
      "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan. (HR. Muslim — barangsiapa membacanya 3x di sore hari, tidak akan membahayakan dirinya racun/binatang berbisa pada malam itu.)",
    kali: 3,
  },
];
