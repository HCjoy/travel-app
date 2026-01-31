import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Coffee,
  Hotel,
  Plane,
  Camera,
  Info,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Droplets,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState(0); // Default open first day
  const [checkedItems, setCheckedItems] = useState({});
  const [imageIndexes, setImageIndexes] = useState({}); // 追蹤每個景點的當前圖片索引

  // 切換到下一張圖片
  const nextImage = (key, totalImages) => {
    setImageIndexes(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % totalImages
    }));
  };

  // 切換到上一張圖片
  const prevImage = (key, totalImages) => {
    setImageIndexes(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) - 1 + totalImages) % totalImages
    }));
  };

  // 行程數據配置
  const itineraryData = [
    {
      day: 1,
      date: '2026/2/1 (日)',
      city: '台北 ➔ 蘇州',
      title: '周莊古鎮巡禮',
      color: 'from-blue-500 to-teal-400',
      icon: <Plane className="w-5 h-5" />,
      stay: '蘇州石湖智選酒店',
      address: '蘇州, 吳中區, 長橋街道 長蠡路 67 號美成坊 39 幢 3-9 層',
      meals: '午餐 (桌菜 ¥600) / 早、晚餐自理',
      activities: [
        { time: '08:45', item: '桃園機場出發', desc: '搭乘 CI501 航班' },
        { time: '10:50', item: '抵達上海浦東', desc: '抵達後 ~ 先吃飯再往蘇州前去 ~' },
        { time: '下午', item: '前往蘇州', desc: '搭乘旅遊巴士，前往蘇州遊玩江南六大古鎮之一' },
        {
          time: '傍晚',
          item: '周莊古鎮',
          desc: '體驗「小橋流水人家」之美',
          images: [
            './images/zhouzhuang/01.png',
            './images/zhouzhuang/02.png',
            './images/zhouzhuang/03.png',
            './images/zhouzhuang/04.png'
          ],
          intro: '周莊是江南六大古鎮之首，始建於北宋，已有900餘年歷史。古鎮四面環水，因河成鎮，依水成街，以街為市。井字形河道上保存著14座古石橋，構成一幅「小橋、流水、人家」的江南水墨畫。代表景點有雙橋、沈廳、張廳等。'
        },
      ]
    },
    {
      day: 2,
      date: '2026/2/2 (一)',
      city: '蘇州',
      title: '園林藝術與古街',
      color: 'from-teal-500 to-green-400',
      icon: <Camera className="w-5 h-5" />,
      stay: '蘇州石湖智選酒店',
      address: '蘇州, 吳中區, 長橋街道 長蠡路 67 號美成坊 39 幢 3-9 層',
      meals: '含早餐 / 午、晚餐自理',
      activities: [
        {
          time: '上午',
          item: '拙政園',
          desc: '中國四大園林之一',
          images: [
            './images/zhuozhengyuan/01.jpg',
            './images/zhuozhengyuan/02.jpg',
            './images/zhuozhengyuan/03.jpg',
            './images/zhuozhengyuan/04.jpg'
          ],
          intro: '拙政園是蘇州最大的古典園林，始建於明代正德年間，為中國四大名園之一，也是世界文化遺產。園內以水為中心，山水縈繞、花木繁茂，亭台樓閣皆臨水而建，充分體現了「江南園林甲天下，蘇州園林甲江南」的意境。'
        },
        {
          time: '上午',
          item: '虎丘',
          desc: '吳中第一名勝',
          images: [
            './images/huqiu/01.png',
            './images/huqiu/02.png',
            './images/huqiu/03.png',
            './images/huqiu/04.png'
          ],
          intro: '虎丘有「吳中第一名勝」之譽，距今已有2500多年歷史。相傳春秋時期吳王闔閭葬於此，葬後三日有白虎蹲踞其上，故名虎丘。最著名的是傾斜的雲巖寺塔，被稱為「中國的比薩斜塔」，已有千年歷史。'
        },
        {
          time: '下午',
          item: '寒山寺',
          desc: '體會千年古剎意境',
          images: [
            './images/hanshansi/01.png',
            './images/hanshansi/02.png',
            './images/hanshansi/03.png',
            './images/hanshansi/04.png'
          ],
          intro: '寒山寺始建於南朝梁代，因唐代高僧寒山子曾來此修行而得名。唐代詩人張繼的《楓橋夜泊》使其聞名天下：「姑蘇城外寒山寺，夜半鐘聲到客船」。每年除夕，寺內會敲響108響鐘聲，吸引無數遊客前來聆聽。'
        },
        {
          time: '傍晚',
          item: '逛七里山塘街',
          desc: '品嚐蘇州美食',
          images: [
            './images/shantangjie/01.png',
            './images/shantangjie/02.png',
            './images/shantangjie/03.png',
            './images/shantangjie/04.png',
            './images/shantangjie/05.png'
          ],
          intro: '山塘街被譽為「姑蘇第一名街」，始建於唐代，由詩人白居易主持開鑿。全長約七里，故稱「七里山塘」。沿街有眾多歷史建築、傳統商舖和特色小吃，夜晚時分，兩岸燈火闌珊，古橋流水，別有一番江南風情。'
        },
      ]
    },
    {
      day: 3,
      date: '2026/2/3 (二)',
      city: '蘇州 ➔ 烏鎮',
      title: '水鄉古鎮雙響',
      color: 'from-indigo-500 to-purple-400',
      icon: <MapPin className="w-5 h-5" />,
      stay: '烏鎮開元大酒店大堂',
      address: '桐鄉, 子夜路 72 號東柵景區門口 (近烏鎮汽車站)',
      meals: '含早餐 / 午、晚餐自理',
      activities: [
        {
          time: '全天',
          item: '江南六大古鎮 南潯古鎮',
          desc: '遊玩 (搭乘旅遊巴士)',
          images: [
            './images/nanxun/01.png',
            './images/nanxun/02.png',
            './images/nanxun/03.png',
            './images/nanxun/04.png',
            './images/nanxun/05.png'
          ],
          intro: '南潯古鎮是江南六大古鎮之一，以深厚的文化底蘊和獨特的中西合璧建築聞名。明清時期因蠶絲業繁榮，富商巨賈雲集，留下了小蓮莊、嘉業堂藏書樓等眾多精美建築。古鎮水網密布，小橋流水，是攝影愛好者的天堂。'
        },
        {
          time: '下午',
          item: '烏鎮西柵',
          desc: '江南水鄉代表，烏鎮西柵景區',
          images: [
            './images/wuzhen/01.png',
            './images/wuzhen/02.png',
            './images/wuzhen/03.png',
            './images/wuzhen/04.png'
          ],
          intro: '烏鎮西柵是國家5A級旅遊景區，擁有1300年歷史。這裡完整保留了晚清和民國時期的建築風貌，石板路、烏篷船、木雕花窗構成典型的江南水鄉畫卷。西柵夜景尤為迷人，燈火倒映水中，宛如人間仙境。'
        },
        {
          time: '晚上',
          item: '夜遊烏鎮',
          desc: '感受寧靜氛圍與絕美夜色',
          images: [
            './images/wuzhen-night/01.png',
            './images/wuzhen-night/02.png',
            './images/wuzhen-night/03.png',
            './images/wuzhen-night/04.png'
          ],
          intro: '烏鎮夜景被譽為「中國最美夜景」之一。入夜後，古鎮燈火通明，木構建築在暖黃燈光下顯得格外溫馨。沿著石板路漫步，或乘坐烏篷船穿梭於水巷之間，感受這座千年古鎮的寧靜與浪漫。'
        },
      ]
    },
    {
      day: 4,
      date: '2026/2/4 (三)',
      city: '烏鎮 ➔ 杭州',
      title: '西湖美景與雷峰塔',
      color: 'from-emerald-500 to-cyan-400',
      icon: <MapPin className="w-5 h-5" />,
      stay: '杭州樸憬酒店',
      address: '杭州, 拱墅區, 香積寺路 201 號 13 層',
      meals: '含早餐 / 午、晚餐自理',
      activities: [
        { time: '上午', item: '烏鎮出發杭州', desc: '搭乘旅遊巴士前往' },
        {
          time: '下午',
          item: '遊玩杭州名片西湖',
          desc: '船遊西湖觀十景',
          images: [
            './images/xihu/01.png',
            './images/xihu/02.png',
            './images/xihu/03.png',
            './images/xihu/04.png'
          ],
          intro: '西湖是中國十大風景名勝之一，2011年列入世界文化遺產。自古以來，「上有天堂，下有蘇杭」道盡杭州之美。西湖十景包括蘇堤春曉、斷橋殘雪、平湖秋月等，四季皆有不同風情。泛舟湖上，可盡覽湖光山色，感受千年詩畫意境。'
        },
        {
          time: '下午',
          item: '雷峰塔',
          desc: 'Vip 扶梯登雷峰塔',
          images: [
            './images/leifengta/01.png',
            './images/leifengta/02.png',
            './images/leifengta/03.png',
            './images/leifengta/04.png',
            './images/leifengta/05.png'
          ],
          intro: '雷峰塔始建於北宋，因《白蛇傳》的傳說而家喻戶曉。現塔為2002年重建，塔內設有電梯和扶梯，可登至塔頂俯瞰整個西湖美景。夕陽西下時，「雷峰夕照」為西湖十景之一，金色餘暉灑落塔身，美不勝收。'
        },
        {
          time: '晚上',
          item: '逛河坊街',
          desc: '尋找在地文創與小吃',
          images: [
            './images/hefangjie/01.png',
            './images/hefangjie/02.png',
            './images/hefangjie/03.png',
            './images/hefangjie/04.png',
            './images/hefangjie/05.png'
          ],
          intro: '河坊街是杭州最著名的歷史街區，代表著杭州的歷史文化和商業文化。街道保留了清末民初的建築風格，匯集了眾多老字號商舖、傳統手工藝店和各式杭州小吃。漫步其間，可品嚐蔥包檜、定勝糕等地道美食。'
        },
      ]
    },
    {
      day: 5,
      date: '2026/2/5 (四)',
      city: '杭州 ➔ 上海',
      title: '魔都地標巡遊',
      color: 'from-purple-600 to-pink-500',
      icon: <Camera className="w-5 h-5" />,
      stay: '上海景萊酒店 (靜安大寧店)',
      address: '上海, 靜安區, 滬太路 951 號 3 幢',
      meals: '含早餐 / 午、晚餐自理',
      activities: [
        { time: '上午', item: '杭州出發上海', desc: '搭乘旅遊巴士前往' },
        {
          time: '下午',
          item: '東方明珠塔',
          desc: '登第 2 個球，俯瞰整個上海外貌',
          images: [
            './images/dongfangmingzhu/01.png',
            './images/dongfangmingzhu/02.png'
          ],
          intro: '東方明珠廣播電視塔是上海的標誌性建築，高468米，設計靈感來自唐代詩人白居易「大珠小珠落玉盤」的詩句。塔內設有觀光層、旋轉餐廳和歷史博物館。登上觀光球可360度俯瞰上海灘、黃浦江和浦東新區的壯麗景色。'
        },
        {
          time: '下午',
          item: '城隍廟豫園',
          desc: '體驗繁華的老上海民俗氣息',
          images: [
            './images/yuyuan/01.png',
            './images/yuyuan/02.png',
            './images/yuyuan/03.png',
            './images/yuyuan/04.png',
            './images/yuyuan/05.png'
          ],
          intro: '豫園始建於明代嘉靖年間，是江南古典園林的典範。園內有三穗堂、大假山、點春堂等景點，融合了明清園林藝術之精華。周邊的城隍廟商圈匯聚了各式傳統小吃、老字號商舖和民俗工藝品，是體驗老上海風情的最佳去處。'
        },
        {
          time: '傍晚',
          item: '南京路步行街',
          desc: '穿梭於繁華的商業街區',
          images: [
            './images/nanjinglu/01.png',
            './images/nanjinglu/02.png',
            './images/nanjinglu/03.png',
            './images/nanjinglu/04.png',
            './images/nanjinglu/05.png'
          ],
          intro: '南京路是中國第一條商業步行街，被譽為「中華商業第一街」，全長約5.5公里。這裡匯聚了上百家老字號商店和現代購物中心，霓虹燈閃爍，人潮如織，是體驗上海繁華都市氛圍的絕佳地點。'
        },
        {
          time: '晚上',
          item: '外灘夜景',
          desc: '觀賞上海迷人夜色',
          images: [
            './images/waitan/01.png',
            './images/waitan/02.png',
            './images/waitan/03.png',
            './images/waitan/04.png'
          ],
          intro: '外灘是上海最具代表性的景點，西側矗立著52幢風格迥異的萬國建築群，東側隔江相望的是璀璨的陸家嘴金融中心。夜幕降臨，兩岸燈火輝煌，黃浦江上遊船穿梭，構成一幅現代都市與歷史建築交相輝映的絕美畫卷。'
        },
      ]
    },
    {
      day: 6,
      date: '2026/2/6 (五)',
      city: '上海 ➔ 台北',
      title: '滿載而歸',
      color: 'from-gray-500 to-slate-400',
      icon: <Plane className="w-5 h-5" />,
      stay: '溫馨家園',
      meals: '含早餐、晚餐 (飛機餐) / 午餐自理',
      activities: [
        { time: '全天', item: '安排上海送機', desc: '搭乘旅遊巴士前往上海浦東機場' },
        { time: '19:50', item: '搭乘 CI504', desc: '出發時間' },
        { time: '21:55', item: '抵達桃園', desc: '抵達時間' },
        { time: '結束', item: '回到溫馨家園', desc: '期待下一次相遇' },
      ]
    }
  ];



  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? -1 : index);
  };

  const toggleCheck = (dayIndex, actIndex) => {
    const key = `${dayIndex}-${actIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20 max-w-2xl mx-auto shadow-2xl overflow-hidden relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-b-[3rem] shadow-lg sticky top-0 z-20">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">蘇杭古鎮·六日遊</h1>
            <p className="text-blue-100 text-lg mt-2 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> 2026年2月1日 - 2月6日
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <span className="text-sm font-bold block text-center uppercase tracking-wider">6天5晚</span>
          </div>
        </div>

        {/* Progress Bar (Mockup) */}
        <div className="mt-8">
          <div className="flex justify-between text-base text-blue-100 mb-2">
            <span>旅程進度</span>
            <span>{Object.keys(checkedItems).length} / {itineraryData.reduce((acc, curr) => acc + curr.activities.length, 0)} 項體驗</span>
          </div>
          <div className="h-3 bg-blue-900/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/90 rounded-full transition-all duration-500"
              style={{ width: `${(Object.keys(checkedItems).length / 20) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex justify-center my-6 px-4 sticky top-48 z-10">
        <div className="bg-white p-1.5 rounded-full shadow-md flex w-full max-w-md">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'itinerary' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'}`}
          >
            每日行程
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'details' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'}`}
          >
            貼心服務
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 space-y-6">

        {/* Itinerary View */}
        {activeTab === 'itinerary' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {itineraryData.map((day, index) => (
              <div
                key={index}
                className={`bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${expandedDay === index ? 'ring-4 ring-indigo-100 shadow-xl' : ''}`}
              >
                {/* Day Header */}
                <div
                  onClick={() => toggleDay(index)}
                  className="p-6 flex items-center justify-between cursor-pointer active:bg-gray-50"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${day.color} flex flex-col items-center justify-center text-white shadow-sm`}>
                      <span className="text-xs font-bold opacity-80 uppercase">Day</span>
                      <span className="text-2xl font-bold leading-none">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-2xl">{day.city}</h3>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                        {day.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedDay === index ? <ChevronUp className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedDay === index && (
                  <div className="px-6 pb-6 pt-0 bg-gray-50/50">
                    <div className="h-px w-full bg-gray-100 mb-6"></div>

                    {/* Hotel & Food Badges */}
                    <div className="space-y-4 mb-8">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-orange-50 text-orange-700 text-sm font-bold border border-orange-100 shadow-sm">
                          <Hotel className="w-5 h-5" /> 住宿: {day.stay}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-green-50 text-green-700 text-sm font-bold border border-green-100 shadow-sm">
                          <Utensils className="w-5 h-5" /> {day.meals}
                        </span>
                      </div>
                      {day.address && (
                        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-start gap-3">
                          <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                          <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">酒店住址</span>
                            <span className="text-base text-gray-700 font-medium leading-relaxed">{day.address}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="space-y-6 pl-4 relative border-l-4 border-indigo-100 ml-2 my-4">
                      {day.activities.map((act, actIndex) => {
                        const isChecked = checkedItems[`${index}-${actIndex}`];
                        return (
                          <div key={actIndex} className="relative pl-8 group">
                            {/* Dot */}
                            <div
                              className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 transition-colors duration-300 flex items-center justify-center cursor-pointer
                              ${isChecked ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-gray-300'}`}
                              onClick={() => toggleCheck(index, actIndex)}
                            >
                              {isChecked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                            </div>

                            {/* Content */}
                            <div className={`transition-all duration-300 ${isChecked ? 'opacity-50 grayscale' : ''}`}>
                              <div className="cursor-pointer" onClick={() => toggleCheck(index, actIndex)}>
                                <span className="text-sm font-bold text-indigo-600 mb-1 block uppercase tracking-wide">{act.time}</span>
                                <h4 className={`text-xl font-bold text-gray-800 ${isChecked ? 'line-through' : ''}`}>{act.item}</h4>
                                <p className="text-base text-gray-500 mt-1.5 leading-relaxed">{act.desc}</p>
                              </div>

                              {/* 景點圖片與介紹 */}
                              {act.image && (
                                <div className="mt-4 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                  <div className="relative h-48 overflow-hidden">
                                    <img
                                      src={act.image}
                                      alt={act.item}
                                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute bottom-3 left-4 right-4">
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-sm font-bold shadow-sm">
                                        <Camera className="w-4 h-4" />
                                        {act.item}
                                      </span>
                                    </div>
                                  </div>
                                  {act.intro && (
                                    <div className="p-4">
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {act.intro}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* 多圖輪播 */}
                              {act.images && act.images.length > 0 && (
                                <div className="mt-4 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                  <div className="relative h-56 overflow-hidden">
                                    {/* 圖片 */}
                                    <img
                                      src={act.images[imageIndexes[`${index}-${actIndex}`] || 0]}
                                      alt={`${act.item} - ${(imageIndexes[`${index}-${actIndex}`] || 0) + 1}`}
                                      className="w-full h-full object-cover transition-all duration-500"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                    {/* 左右切換按鈕 */}
                                    <button
                                      onClick={(e) => { e.stopPropagation(); prevImage(`${index}-${actIndex}`, act.images.length); }}
                                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                                    >
                                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                                    </button>
                                    <button
                                      onClick={(e) => { e.stopPropagation(); nextImage(`${index}-${actIndex}`, act.images.length); }}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                                    >
                                      <ChevronRight className="w-6 h-6 text-gray-700" />
                                    </button>

                                    {/* 圓點指示器 */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                      {act.images.map((_, imgIdx) => (
                                        <button
                                          key={imgIdx}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setImageIndexes(prev => ({ ...prev, [`${index}-${actIndex}`]: imgIdx }));
                                          }}
                                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${(imageIndexes[`${index}-${actIndex}`] || 0) === imgIdx
                                            ? 'bg-white scale-125'
                                            : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                        />
                                      ))}
                                    </div>

                                    {/* 圖片計數 */}
                                    <div className="absolute top-3 right-3">
                                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-bold">
                                        <Camera className="w-3.5 h-3.5" />
                                        {(imageIndexes[`${index}-${actIndex}`] || 0) + 1} / {act.images.length}
                                      </span>
                                    </div>

                                    {/* 景點名稱標籤 */}
                                    <div className="absolute bottom-12 left-4 right-4">
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-gray-800 text-sm font-bold shadow-sm">
                                        <Camera className="w-4 h-4" />
                                        {act.item}
                                      </span>
                                    </div>
                                  </div>
                                  {act.intro && (
                                    <div className="p-4">
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {act.intro}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="text-center py-10 text-gray-400 text-base font-medium">
              我們期待為您創造美好回憶
            </div>
          </div>
        )}

        {/* Details View */}
        {activeTab === 'details' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Service Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-2xl flex items-center gap-3 mb-6">
                <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Droplets className="w-6 h-6" />
                </span>
                貼心服務
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-blue-50/50 p-5 rounded-2xl">
                  <CheckCircle2 className="w-7 h-7 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-lg font-bold text-gray-700 block mb-1">每日礦泉水</span>
                    <span className="text-base text-gray-500 leading-relaxed">車上每日備有充足礦泉水，隨取隨用。</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-blue-50/50 p-5 rounded-2xl">
                  <Utensils className="w-7 h-7 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-lg font-bold text-gray-700 block mb-1">美食推薦</span>
                    <span className="text-base text-gray-500 leading-relaxed">行程用餐可靈活安排，導遊可推薦當地特色餐廳（如松鶴樓、外婆家等）。</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Weather & Cloths (Mock) */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-[2rem] shadow-md text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <Info className="w-7 h-7" /> 2月出行小貼士
              </h3>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-2"><span>❄️</span> <span><span className="font-bold">天氣：</span> 江浙滬2月初氣溫較低（0-10℃），濕冷為主。</span></p>
                <p className="flex items-start gap-2"><span>🧥</span> <span><span className="font-bold">穿衣：</span> 建議穿著羽絨服、保暖內衣，攜帶雨具（江南煙雨多）。</span></p>
                <p className="flex items-start gap-2"><span>👟</span> <span><span className="font-bold">鞋履：</span> 園林和古鎮步行較多，請穿舒適的平底鞋。</span></p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-2xl mb-6">緊急聯絡</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-green-50 text-green-700 py-5 rounded-2xl font-bold text-lg border border-green-100 flex items-center justify-center gap-3 hover:bg-green-100 active:scale-95 transition-all">
                  聯繫導遊
                </button>
                <button className="flex-1 bg-gray-50 text-gray-700 py-5 rounded-2xl font-bold text-lg border border-gray-100 flex items-center justify-center gap-3 hover:bg-gray-100 active:scale-95 transition-all">
                  客服熱線
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button for Map (Visual Only) */}
      <div className="fixed bottom-10 right-10 z-30">
        <button
          onClick={() => setActiveTab('itinerary')}
          className="w-20 h-20 bg-indigo-600 rounded-full shadow-2xl shadow-indigo-600/40 flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <Calendar className="w-10 h-10" />
        </button>
      </div>

    </div>

  );
};

export default App;
