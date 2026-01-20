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
  Utensils,
  Droplets,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState(0); // Default open first day
  const [checkedItems, setCheckedItems] = useState({});

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
      meals: '午餐 (桌菜 ¥600) / 晚餐: 自理',
      activities: [
        { time: '08:45', item: '桃園機場出發', desc: '搭乘 CI501 航班' },
        { time: '10:50', item: '抵達上海浦東', desc: '抵達後 ~ 先吃飯再往蘇州前去 ~' },
        { time: '下午', item: '前往蘇州', desc: '搭乘旅遊巴士，前往蘇州遊玩江南六大古鎮之一' },
        { time: '傍晚', item: '周莊古鎮', desc: '體驗「小橋流水人家」之美' },
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
      meals: '含早餐 / 午餐 / 晚餐',
      activities: [
        { time: '上午', item: '拙政園', desc: '中國四大園林之一' },
        { time: '上午', item: '虎丘', desc: '吳中第一名勝' },
        { time: '下午', item: '寒山寺', desc: '體會千年古剎意境' },
        { time: '傍晚', item: '逛七里山塘街', desc: '品嚐蘇州美食' },
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
      meals: '含早餐 / 午餐 / 晚餐',
      activities: [
        { time: '全天', item: '江南六大古鎮 南潯古鎮', desc: '遊玩 (搭乘旅遊巴士)' },
        { time: '下午', item: '烏鎮西柵', desc: '江南水鄉代表，烏鎮西柵景區' },
        { time: '晚上', item: '夜遊烏鎮', desc: '感受寧靜氛圍與絕美夜色' },
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
      meals: '含早餐 / 午餐 / 晚餐',
      activities: [
        { time: '上午', item: '烏鎮出發杭州', desc: '搭乘旅遊巴士前往' },
        { time: '下午', item: '遊玩杭州名片西湖', desc: '船遊西湖觀十景' },
        { time: '下午', item: '雷峰塔', desc: 'Vip 扶梯登雷峰塔' },
        { time: '晚上', item: '逛河坊街', desc: '尋找在地文創與小吃' },
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
      meals: '含早餐 / 午餐 / 晚餐',
      activities: [
        { time: '上午', item: '杭州出發上海', desc: '搭乘旅遊巴士前往' },
        { time: '下午', item: '東方明珠塔', desc: '登第 2 個球，俯瞰整個上海外貌' },
        { time: '下午', item: '城隍廟豫園', desc: '體驗繁華的老上海民俗氣息' },
        { time: '傍晚', item: '南京路步行街', desc: '穿梭於繁華的商業街區' },
        { time: '晚上', item: '外灘夜景', desc: '觀賞上海迷人夜色' },
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
      meals: '含早餐 / 午餐 / 晚餐 (飛機餐)',
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
                          <div key={actIndex} className="relative pl-8 group" onClick={() => toggleCheck(index, actIndex)}>
                            {/* Dot */}
                            <div className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 transition-colors duration-300 flex items-center justify-center
                              ${isChecked ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-gray-300'}`}>
                              {isChecked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                            </div>

                            {/* Content */}
                            <div className={`transition-all duration-300 cursor-pointer ${isChecked ? 'opacity-50 grayscale' : ''}`}>
                              <span className="text-sm font-bold text-indigo-600 mb-1 block uppercase tracking-wide">{act.time}</span>
                              <h4 className={`text-xl font-bold text-gray-800 ${isChecked ? 'line-through' : ''}`}>{act.item}</h4>
                              <p className="text-base text-gray-500 mt-1.5 leading-relaxed">{act.desc}</p>
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
