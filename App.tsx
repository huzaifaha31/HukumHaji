
import React, { useState, useEffect } from 'react';
import { Book, ShieldCheck, Compass, Menu, X, ChevronUp, Award } from 'lucide-react';

// --- Components ---

const Translation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 text-sm mt-2 leading-relaxed border-r-2 border-emerald-100 pr-3 italic">
    {children}
  </p>
);

const HadithBox: React.FC<{ text: string; translation: string; takhrij: string }> = ({ text, translation, takhrij }) => (
  <div className="my-6 p-6 bg-emerald-50 border-r-4 border-emerald-600 rounded-l-lg shadow-sm">
    <p className="hadith-font text-2xl leading-relaxed text-emerald-900 mb-2">{text}</p>
    <p className="text-emerald-800 text-base mb-4 italic font-medium">Terjemahan: {translation}</p>
    <div className="text-xs text-emerald-700 italic border-t border-emerald-200 pt-3">
      <strong>تخريج الحديث (Sumber):</strong> {takhrij}
    </div>
  </div>
);

const VocabItem: React.FC<{ word: string; meaning: string; translation: string }> = ({ word, meaning, translation }) => (
  <div className="mb-4 last:mb-0 border-b border-amber-100 pb-3 last:border-0">
    <div className="flex gap-4 items-start">
      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-bold whitespace-nowrap">{word}:</span>
      <span className="text-gray-800 font-medium">{meaning}</span>
    </div>
    <p className="text-amber-700 text-sm mt-1 pr-4 italic">Maksud: {translation}</p>
  </div>
);

const RulingItem: React.FC<{ title: string; titleMalay: string; content: string; translation: string }> = ({ title, titleMalay, content, translation }) => (
  <div className="mb-8 last:mb-0 bg-white/50 p-4 rounded-xl border border-gray-100 shadow-sm">
    <h4 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
      {title} | {titleMalay}
    </h4>
    <div className="text-gray-800 leading-relaxed whitespace-pre-wrap mb-3">{content}</div>
    <div className="text-gray-600 text-sm leading-relaxed pr-4 border-r-2 border-amber-200 italic">
      {translation}
    </div>
  </div>
);

const ChapterTitle: React.FC<{ arabic: string; malay: string }> = ({ arabic, malay }) => (
  <div className="text-center mb-10 pb-6 border-b-2 border-amber-200 relative">
    <h2 className="text-3xl font-bold text-emerald-800 mb-2">{arabic}</h2>
    <p className="text-xl font-bold text-emerald-600">{malay}</p>
    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-400"></div>
  </div>
);

const SubSectionTitle: React.FC<{ arabic: string; malay: string }> = ({ arabic, malay }) => (
  <div className="mt-12 mb-6 flex items-center gap-3">
    <Award className="text-amber-600 shrink-0" size={28} />
    <div>
      <h3 className="text-2xl font-bold text-amber-900">{arabic}</h3>
      <p className="text-lg font-bold text-amber-700">{malay}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chap1');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    { id: 'chap1', label: 'الباب الأول | Bab 1', icon: <Book size={20} /> },
    { id: 'chap2', label: 'الباب الثاني | Bab 2', icon: <ShieldCheck size={20} /> },
    { id: 'chap3', label: 'الباب الثالث | Bab 3', icon: <Compass size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] pb-20">
      <header className="relative bg-emerald-900 text-white pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">أحكام الحج</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-6">Hukum-Hukum Haji</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto italic">
            Nota fقه الشاملة (Fikah Lengkap) mengenai syarat wajib, larangan ihram, serta hukum fawat dan ihsar.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-[#fdfbf7]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,121.81,154.55,133.1,234.39,120,283.43,112.08,312,86.22,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="hidden md:flex justify-center sticky top-6 z-40 px-4">
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-full px-6 py-3 flex gap-4 border border-emerald-100">
          {chapters.map((chap) => (
            <button
              key={chap.id}
              onClick={() => scrollToSection(chap.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold ${
                activeTab === chap.id ? 'bg-emerald-600 text-white shadow-md' : 'text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              {chap.icon}
              {chap.label}
            </button>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute bottom-24 left-6 bg-white rounded-2xl shadow-2xl p-6 min-w-[240px]" onClick={e => e.stopPropagation()}>
            {chapters.map((chap) => (
              <button
                key={chap.id}
                onClick={() => scrollToSection(chap.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all font-bold ${
                  activeTab === chap.id ? 'bg-emerald-600 text-white' : 'text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                {chap.icon}
                {chap.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 mt-12 max-w-4xl">
        {/* Chapter 1 */}
        <section id="chap1" className="mb-24 scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-sm border border-emerald-50 p-8 md:p-12">
            <ChapterTitle arabic="الباب الأول: شروط وجوب الحج" malay="Bab Pertama: Syarat-Syarat Wajib Haji" />
            
            <SubSectionTitle arabic="أولا : الاستطاعة" malay="Pertama: Al-Istita'ah (Kemampuan)" />
            <HadithBox 
              text="عَنِ ابْنِ عُمَرَ اللهِ قَالَ : جَاءَ رَجُلٌ إِلَى النَّبِيِّ ، فَقَالَ : يَا رَسُولَ اللهِ، مَا يُوجِبُ الحَجَّ؟ قَالَ: «الزَّادُ وَالرَّاحِلَةُ»."
              translation="Daripada Ibnu Umar r.a., beliau berkata: Seorang lelaki datang kepada Nabi SAW lalu bertanya: 'Wahai Rasulullah, apakah yang mewajibkan haji?' Baginda bersabda: 'Bekalan dan kenderaan.'"
              takhrij="أخرجه الترمذي وابن ماجه، وقال الترمذي: هذا حديث حسن."
            />
            <HadithBox 
              text="عَنْ أَنَسٍ الله عَنِ النَّبِيِّ ، فِي قَوْلِهِ تَبَارَكَ وَتَعَالَى: ﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا ﴾ [آل عمران: ۹۷] قَالَ: قِيلَ: يَا رَسُولَ اللَّهِ مَا السَّبِيلُ؟ قَالَ: «الزَّادُ وَالرَّاحِلَةُ»."
              translation="Daripada Anas r.a. daripada Nabi SAW berkaitan firman Allah SWT: 'Dan Allah mewajibkan manusia mengerjakan ibadat Haji dengan mengunjungi Baitullah bagi sesiapa yang mampu sampai kepadanya.' Baginda ditanya: 'Wahai Rasulullah, apakah maksud jalan (kemampuan) itu?' Baginda bersabda: 'Bekalan dan kenderaan.'"
              takhrij="أخرجه الحاكم في المستدرك والدارقطني، وقال الحاكم: هذا حديث صحيح على شرط مسلم."
            />
            
            <div className="bg-amber-50/50 p-6 rounded-2xl mb-8 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-4 text-xl">المفردات | Perbendaharaan Kata:</h4>
              <VocabItem word="الزاد" meaning="الطعام المصنوع للسفر، والجمع أزواد، وهي بمثابة النقود في هذا الزمن." translation="Bekalan makanan yang disediakan untuk musafir, jamaknya adalah Azwad; ia setaraf dengan wang tunai pada zaman sekarang." />
              <VocabItem word="الراحلة" meaning="الناقة التي تصلح للسفر ، وهي وسائل المواصلات في هذا الزمن." translation="Unta yang sesuai untuk perjalanan jauh; ia merujuk kepada segala jenis pengangkutan pada zaman sekarang." />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="دل ظاهر الحديثين على أنَّه يُشترط لوجوب الحج: القدرة على توفير الزَّادِ والرَّاحِلَةِ."
                translation="Zahir kedua-dua hadis ini menunjukkan bahawa syarat wajib haji ialah kemampuan untuk menyediakan bekalan (wang/makanan) dan kenderaan."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="فسر جمهور العلماء الاستطاعة في قوله تعالى : ﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾ بتوفر الزاد والراحلة، وعليه من توفرت له وسائل المواصلات، وكان معه المال الكافي وجب عليه الحج، ومن لم تتوفر لديه سقط عنه الحج، ووجه الاستدلال : أَنَّ الله تعالى جعل هذا الخطاب مخصوصاً لمن اتصف بهذه الصفة، ثم فصل في الحديثين معنى الاستطاعة وهما الزاد والراحلة، في حين فسر المالكية معنى الاستطاعة في الآية بـ 'القدرة الجسدية'، فقالوا: من استطاع المشي بنفسه، ووجد الزاد، وجب عليه فرض الحج."
                translation="Majoriti ulama menafsirkan 'kemampuan' (istita'ah) dalam ayat tersebut sebagai ketersediaan bekalan dan kenderaan. Maka, sesiapa yang mempunyai pengangkutan dan wang yang mencukupi, wajiblah dia menunaikan haji. Manakala Mazhab Maliki menafsirkan kemampuan itu sebagai 'kemampuan fizikal', iaitu sesiapa yang mampu berjalan sendiri dan mempunyai bekalan, maka wajiblah dia menunaikan haji."
              />
              <RulingItem 
                title="المسألة الثالثة" 
                titleMalay="Masalah Ketiga"
                content="فسرت الأحاديث السابقة السبيل في الآية بالزاد، وقد فُسِّرَ الزَّاد بمعنى طعام المسافر، لكنه يشمل في هذا الزمن كل ما يحتاج إليه مريد الحج من النفقات، كما وفسرت الراحلة بالناقة القوية القادرة على السفر، ويشمل الآن وسائل النقل الحديثة كلها؛ مثل : السَّيَّارة، والطائرة، والقطار ونحوها."
                translation="Hadis-hadis tersebut menafsirkan 'jalan' sebagai bekalan, yang kini merangkumi segala perbelanjaan haji. Manakala 'kenderaan' yang dahulunya unta, kini merangkumi pengangkutan moden seperti kereta, kapal terbang, dan kereta api."
              />
            </div>

            <SubSectionTitle arabic="ثانيا : البلوغ" malay="Kedua: Al-Bulugh (Baligh)" />
            <HadithBox 
              text="عَنِ ابْنِ عَبَّاسٍ رضي الله عنهما قَالَ: رَفَعَتِ امْرَأَةٌ صَبِيًّا لَهَا، فَقَالَتْ : يَا رَسُولَ اللَّهِ، أَهْذَا حَجٌ؟ قَالَ: «نَعَمْ، وَلَكِ أَجْرٌ»."
              translation="Daripada Ibnu Abbas r.a., beliau berkata: Seorang wanita mengangkat seorang kanak-kanak lalu bertanya: 'Ya Rasulullah, adakah kanak-kanak ini boleh mengerjakan haji?' Baginda bersabda: 'Ya, dan bagimu pahala.'"
              takhrij="أخرجه مسلم في صحيحه، وأبو داود والنسائي."
            />
            <HadithBox 
              text="عَنِ ابْنِ عَبَّاسٍ رضي الله عنهما قَالَ: قَالَ رَسُولُ اللهِ ﷺ : «أَيُّمَا صَبِي حَجَّ ثُمَّ بَلَغَ الحنث فَعَلَيْهِ أَنْ يَحُجَّ حَجَّةً أُخْرَى»."
              translation="Daripada Ibnu Abbas r.a., beliau berkata: Rasulullah SAW bersabda: 'Mana-mana kanak-kanak yang mengerjakan haji kemudian dia mencapai umur baligh (taklif), maka wajib ke atasnya untuk mengerjakan haji semula (haji fardu).'"
              takhrij="أخرجه البيهقي في السنن الكبرى والطبراني."
            />
            
            <div className="bg-amber-50/50 p-6 rounded-2xl mb-8 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-4 text-xl">المفردات | Perbendaharaan Kata:</h4>
              <VocabItem word="الصبي" meaning="اسم يقع على الإنسان منذ الولادة إلى أن يحتلم." translation="Nama yang diberikan kepada manusia sejak lahir sehinggalah dia bermimpi basah (baligh)." />
              <VocabItem word="بلغ الحنث" meaning="بلغ سن التكليف." translation="Mencapai usia mukallaf (dipertanggungjawabkan dengan syariat)." />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="دل ظاهر الحديثين على صحة حج الصبي سواء أكان مميزا أو غير مميز، وأنه إذا بلغ سن التكليف وجب عليه حج الفرض. وقد دل ظاهر حديث ابن عباس الأول على أنَّ أَهل الصبي يُؤجَرُون على تعليم أبنائهم الطاعات."
                translation="Hadis ini menunjukkan sahnya haji kanak-kanak sama ada dia sudah mumayyiz atau belum. Namun apabila baligh, dia wajib menunaikan haji fardu semula. Ibu bapa juga mendapat pahala kerana mendidik anak dalam ketaatan."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="ما حكم حج الصبي؟ ذهب جمهور العلماء إلى صحة حج الصبي سواء أكان مميزاً أم غير مميز، لكن لا تسقط عنه حجة الإسلام، وعليه؛ فإنَّ الصَّغير إذا ارتكب محظوراً من محظورات الحج وجبت عليه الفدية التي تدفع من مال الولي. واستدل الجمهور بحديث عبد الله بن عباس الأول، وقالوا: إن جواب النبي ب (نعم) دل على صحة حج الصبي. وقال أبو حنيفة: لَا يَصِحُ إِحْرَامُهُ، وَلَا يَلْزَمُهُ شَيْءٌ مِنْ مَحْظُورَاتِ الْإِحْرَامِ، وَإِنَّمَا يُحَبُّ بِهِ عَلَى جِهَةِ التَّدْرِيبِ، واحتج بحديث عَائِشَةَ، أَنَّ رَسُولَ الله ﷺ قَالَ: «رُفِعَ الْقَلَمُ عَنْ ثَلَاثَةٍ: عَنْ النَّائِمِ حَتَّى يَسْتَيْقِظَ، وَعَنْ الصَّغِيرِ حَتَّى يَكْبَر، وعن المجنون حتى يفيق». وهذا هو الرأي الراجح."
                translation="Apakah hukum haji kanak-kanak? Majoriti ulama berpendapat ia sah tetapi tidak menggugurkan kewajipan haji Islam setelah baligh. Fidyah bagi larangan ihram dibayar daripada harta wali. Abu Hanifah berpendapat ihramnya tidak sah dan ia sekadar latihan. Pendapat yang rajah (kuat) adalah pendapat majoriti."
              />
            </div>

            <SubSectionTitle arabic="ثالثاً: المحرم للمرأة" malay="Ketiga: Mahram Bagi Wanita" />
            <HadithBox 
              text="عَنِ ابْنِ عَبَّاسٍ رضي الله عنهما أَنَّهُ سَمِعَ النَّبِيَّ ، يَقُولُ: «لَا يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ، وَلَا تُسَافِرَنَّ امْرَأَةٌ إِلَّا وَمَعَهَا مَحْرَمٌ» ، فَقَامَ رَجُلٌ فَقَالَ : يَا رَسُولَ اللَّهِ، اكْتُتِبْتُ فِي غَزْوَةِ كَذَا وَكَذَا ، وَخَرَجَتِ امْرَأَتِي حَاجَةً، قَالَ: «اذْهَبْ فَحُجَّ مَعَ امْرَأَتِكَ»"
              translation="Daripada Ibnu Abbas r.a., beliau mendengar Nabi SAW bersabda: 'Janganlah seorang lelaki bersendirian (berkhalwat) dengan seorang wanita, dan janganlah seorang wanita bermusafir melainkan bersama mahramnya.' Seorang lelaki berdiri dan bertanya: 'Ya Rasulullah, saya telah mendaftar untuk berperang dalam perang sekian-sekian, manakala isteri saya keluar untuk mengerjakan haji.' Baginda bersabda: 'Pergilah dan kerjakan haji bersama isterimu.'"
              takhrij="أخرجه البخاري ومسلم."
            />

            <div className="bg-amber-50/50 p-6 rounded-2xl mb-8 border border-amber-100">
              <VocabItem word="الخلوة" meaning="الانفراد بالمرأة وحدها بحيث لا يصل إليهما أحد." translation="Berdua-duaan dengan wanita di mana tidak ada orang lain yang boleh sampai kepada mereka." />
              <VocabItem word="المَحْرَمِ" meaning="مَنْ لَا يَحِلُّ لَهُ نكاحُها مِنَ الْأَقَارِبِ." translation="Orang yang haram baginya untuk mengahwini wanita tersebut daripada kalangan kaum kerabat." />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="يدلُّ ظاهر قوله : «لاَ يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ إِلَّا وَمَعَهَا مَحْرَمٌ »، على تحريم انفراد الرجل بالمرأة إلا إذا كان معها رجل ذو قرابة تحرم عليه نكاحها على التأبيد، ومثله الزوج."
                translation="Hadis ini menunjukkan keharaman seorang lelaki berdua-duaan dengan wanita melainkan jika bersama mahram yang haram dikahwini selama-lamanya, atau bersama suaminya."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="يدل ظاهر قوله أيضاً : «وَلَا تُسَافِرَنَّ امْرَأَةٌ إِلَّا وَمَعَهَا مَحْرَمٌ» على تحريم سفر المرأة إلا مع ذي قرابة محرمة أو زوج سواء كان سفراً طويلاً أو قصيراً، وهذا قول جمهور العلماء."
                translation="Zahir hadis ini juga menunjukkan keharaman wanita bermusafir melainkan bersama mahram atau suami, sama ada perjalanan itu jauh atau dekat. Ini adalah pendapat majoriti ulama."
              />
              <RulingItem 
                title="المسألة الثالثة" 
                titleMalay="Masalah Ketiga"
                content="اختلف العلماء في اشتراط المحرم لوجوب الحج: القول الأول: وجود المحرم شرط لوجوب الحج (أبو حنيفة وأحمد). القول الثاني: عدم اشتراط المحرم إذا توفر الأمن بوجود رفقة صالحة (الشافعي ومالك)."
                translation="Ulama berbeza pendapat: (1) Mahram adalah syarat wajib haji bagi wanita (Abu Hanifah & Ahmad). (2) Mahram bukan syarat wajib jika ada jaminan keamanan seperti teman wanita yang dipercayai (Syafi'i & Malik)."
              />
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section id="chap2" className="mb-24 scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-sm border border-emerald-50 p-8 md:p-12">
            <ChapterTitle arabic="الباب الثاني: محظورات الإحرام" malay="Bab Kedua: Larangan-Larangan Ihram" />

            <SubSectionTitle arabic="أولا : المخيط من الثياب وما غطى الرأس والكعبين" malay="Pertama: Pakaian Berjahit, Menutup Kepala & Buku Lali" />
            <HadithBox 
              text="سُئِلَ رَسُولُ اللَّهِ ﷺ: مَا يَلْبَسُ المِحْرِمُ مِنَ الثَّيَابِ ؟ فَقَالَ: «لاَ يَلْبَسِ القَمِيصَ، وَلَا العَمَائِمَ، وَلَا السَّرَاوِيلَاتِ، وَلَا البُرْتُسَ، وَلاَ ثَوْبًا مَسَّهُ زَعْفَرَانٌ، وَلَا وَرْسٌ، وَإِنْ لَمْ يَجِدْ نَعْلَيْنِ فَلْيَلْبَسِ الخُفَّيْنِ وَلْيَقْطَعْهُمَا حَتَّى يَكُونَا أَسْفَلَ مِنَ الكَعْبَيْنِ»"
              translation="Rasulullah SAW ditanya: 'Apakah yang boleh dipakai oleh orang yang berihram?' Baginda bersabda: 'Janganlah memakai baju, serban, seluar, jubah bertopi (برنس), dan jangan memakai kain yang dicelup dengan za'faran atau wars. Jika tidak menemui selipar, pakailah khuf tetapi potonglah ia sehingga berada di bawah buku lali.'"
              takhrij="أخرجه البخاري ومسلم."
            />

            <div className="bg-amber-50/50 p-6 rounded-2xl mb-8 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-4 text-xl">المفردات | Perbendaharaan Kata:</h4>
              <VocabItem word="القميص" meaning="ما فُصل على البدن فصار له أكمام وجيب." translation="Pakaian yang dijahit mengikut bentuk badan yang mempunyai lengan dan poket (seperti kemeja/jubah)." />
              <VocabItem word="السراويلات" meaning="ما فصل على جزء البدن الأسفل." translation="Pakaian yang dijahit mengikut bentuk bahagian bawah badan (seluar)." />
              <VocabItem word="زعفران / ورس" meaning="نباتات تستخدم لتلوين وتطييب الملابس." translation="Tumbuhan yang digunakan untuk memberi warna dan bau harum pada pakaian." />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama (Lelaki)"
                content="أجمع أهل العلم على أَنَّ مَنْع لبس المخيط خاص بالرجال دون النساء. ذكر البرنس والعمامة يدل على عدم جواز تغطية الرأس للرجال."
                translation="Ulama sepakat bahawa larangan memakai pakaian berjahit hanya khusus bagi lelaki. Larangan memakai serban dan 'burnus' menunjukkan haramnya menutup kepala bagi lelaki."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua (Wanita)"
                content="يحظر على المرأة تغطية وجهها ويديها لقوله ﷺ : «ولا تَنْتَقِبُ المرأة ولا تلبس القفازين»، وهذا قول الجمهور."
                translation="Wanita dilarang menutup muka dan memakai sarung tangan berdasarkan sabda Nabi SAW: 'Janganlah wanita berihram memakai purdah dan jangan memakai sarung tangan.' Ini pendapat majoriti."
              />
            </div>

            <SubSectionTitle arabic="ثانيا : النكاح" malay="Kedua: Pernikahan" />
            <HadithBox 
              text="عن عُثْمَانَ بْنَ عَفَّانَ، قَالَ رَسُولُ الله ﷺ: «لَا يَنْكِحُ الْمُحْرِمُ، وَلَا يُنْكَحُ، وَلَا يَخْطُبُ»"
              translation="Daripada Uthman bin Affan r.a., Rasulullah SAW bersabda: 'Orang yang dalam ihram tidak boleh berkahwin, tidak boleh mengahwinkan orang lain, dan tidak boleh meminang.'"
              takhrij="أخرجه أحمد، ومسلم، والنسائي."
            />
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="دل النهي في الحديث على تحريم النكاح على المحرم. اختلف العلماء: الجمهور قالوا يحرم عقد النكاح، بينما الحنفية قالوا يجوز العقد ويحرم الجماع فقط."
                translation="Larangan ini menunjukkan haramnya nikah bagi orang berihram. Majoriti ulama menafsirkan nikah sebagai 'akad nikah' (maka akad tidak sah), manakala Mazhab Hanafi menafsirkannya sebagai 'persetubuhan' (maka akad sah tetapi haram bersetubuh)."
              />
            </div>

            <SubSectionTitle arabic="ثالثا : الصيد" malay="Ketiga: Memburu" />
            <HadithBox 
              text="قَالَ رَسُولُ الله ﷺ لأصحابه المحرمين عن صيد غير المحرم: «هَلْ مِنْكُمْ أَحَدٌ أَمَرَهُ، أَوْ أَشَارَ إِلَيْهِ بِشَيْءٍ؟ قَالَ قَالُوا : لا ، قَالَ: فَكُلُوا مَا بَقِيَ مِنْ لَحْمِهَا»."
              translation="Rasulullah SAW bersabda kepada para sahabat yang berihram mengenai hasil buruan orang yang tidak berihram: 'Adakah sesiapa di antara kamu yang menyuruhnya atau memberi isyarat kepadanya?' Mereka menjawab: 'Tidak.' Baginda bersabda: 'Maka makanlah baki dagingnya.'"
              takhrij="أخرجه البخاري ومسلم."
            />
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="يدل الحديثان على تحريم الصيد على المحرم لقوله تعالى: ﴿يَأَيُّهَا الَّذِينَ ءَامَنُوا لَا تَقْتُلُوا الصَّيْدَ وَأَنتُمْ حُرُمٌ﴾."
                translation="Hadis ini menunjukkan keharaman memburu bagi orang berihram selaras dengan firman Allah: 'Wahai orang yang beriman, janganlah kamu membunuh binatang buruan semasa kamu dalam ihram.'"
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="يجوز للمحرم أكل الصيد بشرطين: أن لا يُساعد في الصيد، وأن لا يُصطاد الصيد لأجله."
                translation="Orang berihram dibenarkan makan daging buruan dengan dua syarat: dia tidak membantu dalam pemburuan tersebut, dan binatang itu tidak diburu khas untuknya."
              />
            </div>
          </div>
        </section>

        {/* Chapter 3 */}
        <section id="chap3" className="mb-24 scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-sm border border-emerald-50 p-8 md:p-12">
            <ChapterTitle arabic="الباب الثالث: الفوات والإحصار" malay="Bab Ketiga: Al-Fawat & Al-Ihsar" />
            
            <div className="bg-blue-50 p-6 rounded-2xl mb-12 border border-blue-100 flex flex-col gap-4">
               <div>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded font-bold">الفوات (Al-Fawat):</span>
                  <p className="text-gray-700 mt-2">Terlepas waktu wukuf di Arafah pada waktu dan tempat yang ditetapkan.</p>
               </div>
               <div className="border-t border-blue-100 pt-3">
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded font-bold">الإحصار (Al-Ihsar):</span>
                  <p className="text-gray-700 mt-2">Terhalang daripada meneruskan manasik haji disebabkan musuh atau penyakit.</p>
               </div>
            </div>

            <SubSectionTitle arabic="أولاً : الفوات" malay="Pertama: Al-Fawat (Terlepas Waktu)" />
            <HadithBox 
              text="فَقَالَ رَسُولُ الله ﷺ : «الْحَجُّ عَرَفَةٌ، فَمَنْ أَدْرَكَ لَيْلَةَ عَرَفَةَ قَبْلَ طُلُوعِ الْفَجْرِ مِنْ لَيْلَةِ جَمْعٍ، فَقَدْ تَمَّ حَجُّهُ»"
              translation="Rasulullah SAW bersabda: 'Haji itu adalah Arafah. Sesiapa yang sempat sampai di Arafah pada malam hari sebelum terbit fajar pada malam perkumpulan (Muzdalifah), maka sempurnalah hajinya (dari segi rukun wukuf).'"
              takhrij="أخرجه الترمذي والنسائي."
            />
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="دل ظاهر الحديث على أَنَّ الوقوف بعرفة أهم أركان الحج، حيث إنه الركن الذي يفوت الحج بفواته."
                translation="Zahir hadis menunjukkan bahawa wukuf di Arafah adalah rukun haji yang paling utama, di mana haji akan terbatal (fawat) jika rukun ini terlepas."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="من فاته وقوف عرفة يجب عليه التحلل بأداء أفعال العمرة، وعليه قضاء الحج في العام القادم."
                translation="Sesiapa yang terlepas wukuf di Arafah wajib bertahlul dengan melakukan amalan umrah (tawaf & sa'i), dan wajib mengqadakan hajinya pada tahun hadapan."
              />
            </div>

            <SubSectionTitle arabic="ثانياً: الإحصار" malay="Kedua: Al-Ihsar (Terhalang)" />
            <HadithBox 
              text="عَنْ ابْنِ عَبَّاسٍ رضي الله عنهما: «قَدْ أُحْصِرَ رَسُولُ اللَّهِ ﷺ ، فَحَلَقَ رَأْسَهُ، وَجَامَعَ نِسَاءَهُ، وَنَحَرَ هَدْيَهُ، حَتَّى اعْتَمَرَ عَاماً قَابِلاً»"
              translation="Daripada Ibnu Abbas r.a.: 'Sesungguhnya Rasulullah SAW telah terhalang (semasa Umrah Hudaybiyah), lalu Baginda mencukur rambutnya, menyembelih binatang sembelihan (hadyu), sehinggalah Baginda mengerjakan Umrah pada tahun hadapan.'"
              takhrij="أخرجه البخاري."
            />
            <HadithBox 
              text="فَقَالَ لَهَا: « حُجي وَاشْتَرِطِي، وَقُولِي : اللَّهُمَّ مَحِلِّي حَيْثُ حَبَسْتَنِي»"
              translation="Baginda bersabda kepada Duba'ah (yang sakit): 'Mengerjakan hajilah dan buatlah syarat, katakanlah: Ya Allah, tempat tahallulku adalah di mana Engkau menghalangku.'"
              takhrij="أخرجه البخاري ومسلم."
            />
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-900 mb-4 text-xl underline decoration-amber-300 decoration-4 underline-offset-4">استنباط المسائل والأحكام | Kesimpulan Masalah & Hukum:</h4>
              <RulingItem 
                title="المسألة الأولى" 
                titleMalay="Masalah Pertama"
                content="يجوز للمحصر أن يتحلل من إحرامه، وذلك بأن ينوي التحلل ويذبح شاة."
                translation="Harus bagi orang yang terhalang (ihsar) untuk bertahallul daripada ihramnya dengan berniat tahallul dan menyembelih seekor kambing."
              />
              <RulingItem 
                title="المسألة الثانية" 
                titleMalay="Masalah Kedua"
                content="دليل على وجوب قضاء الحج لمن أحصر عنه، سواء كان حجاً أو عمرة."
                translation="Hadis ini menjadi dalil kewajipan mengqadakan haji atau umrah bagi sesiapa yang terhalang daripadanya (bagi haji/umrah wajib)."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-emerald-100 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-xl">تم بحمد الله | Segala Puji Bagi Allah</p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-sm opacity-60">مذكرة أحكام الحج - Terjemahan Bahasa Melayu</p>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all z-50">
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;
