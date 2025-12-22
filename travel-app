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

const TravelApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState(0); // Default open first day
  const [checkedItems, setCheckedItems] = useState({});

  // 行程數據配置
  const itineraryData = [
    {
      day: 1,
      date: '2月1日',
      city: '上海 ➔ 蘇州',
      title: '周莊夢裡水鄉',
      color: 'from-blue-500 to-teal-400',
      icon: <Plane className="w-5 h-5" />,
      stay: '蘇州',
      meals: '自理 / 推薦當地美食',
      activities: [
        { time: '中午', item: '上海接機 (預計中午到達)', desc: '專車接機，開啟旅程' },
        { time: '下午', item: '前往蘇州', desc: '乘車前往「人間天堂」蘇州' },
        { time: '傍晚', item: '周莊古鎮', desc: '遊覽江南六大古鎮之一，體驗「小橋流水人家」' },
      ]
    },
    {
      day: 2,
      date: '2月2日',
      city: '蘇州',
      title: '蘇州園林與姑蘇城',
      color: 'from-teal-500 to-green-400',
      icon: <Camera className="w-5 h-5" />,
      stay: '蘇州',
      meals: '含早餐',
      activities: [
        { time: '上午', item: '拙政園', desc: '中國四大園林之一，一步一景' },
        { time: '上午', item: '虎丘 & 寒山寺', desc: '吳中第一名勝與千年古剎' },
        { time: '下午', item: '七里山塘街', desc: '姑蘇第一名街，體驗老蘇州生活' },
        { time: '晚上', item: '品嚐蘇州美食', desc: '推薦：松鼠桂魚、響油鱔糊' },
      ]
    },
    {
      day: 3,
      date: '2月3日',
      city: '蘇州 ➔ 烏鎮',
      title: '古鎮雙重奏',
      color: 'from-indigo-500 to-purple-400',
      icon: <MapPin className="w-5 h-5" />,
      stay: '烏鎮',
      meals: '含早餐',
      activities: [
        { time: '上午', item: '南潯古鎮', desc: '中西合璧的江南名鎮' },
        { time: '下午', item: '烏鎮西柵景區', desc: '江南水鄉代表，似水年華拍攝地' },
        { time: '晚上', item: '夜遊烏鎮', desc: '欣賞絕美的水鄉夜景，燈光倒影' },
      ]
    },
    {
      day: 4,
      date: '2月4日',
      city: '烏鎮 ➔ 杭州',
      title: '西湖斷橋與雷峰塔',
      color: 'from-emerald-500 to-cyan-400',
      icon: <MapPin className="w-5 h-5" />,
      stay: '杭州',
      meals: '含早餐',
      activities: [
        { time: '上午', item: '前往杭州', desc: '出發前往「人間天堂」杭州' },
        { time: '下午', item: '船遊西湖', desc: '觀西湖十景，感受淡妝濃抹總相宜' },
        { time: '下午', item: '登雷峰塔', desc: 'VIP扶梯登頂，俯瞰西湖全景' },
        { time: '晚上', item: '河坊街', desc: '逛南宋皇城根下的老街' },
      ]
    },
    {
      day: 5,
      date: '2月5日',
      city: '杭州 ➔ 上海',
      title: '魔都風雲與外灘夜景',
      color: 'from-purple-600 to-pink-500',
      icon: <Camera className="w-5 h-5" />,
      stay: '上海',
      meals: '含早餐',
      activities: [
        { time: '上午', item: '返回上海', desc: '結束杭州行程，返回上海' },
        { time: '下午', item: '東方明珠塔', desc: '登第2個球，俯瞰萬國建築群與陸家嘴' },
        { time: '下午', item: '城隍廟豫園', desc: '體驗老上海的繁華與民俗' },
        { time: '傍晚', item: '南京路步行街', desc: '中華商業第一街' },
        { time: '晚上', item: '外灘夜景', desc: '吹著江風，看兩岸燈火輝煌' },
      ]
    },
    {
      day: 6,
      date: '2月6日',
      city: '上海 ➔ 返程',
      title: '溫馨返程',
      color: 'from-gray-500 to-slate-400',
      icon: <Plane className="w-5 h-5" />,
      stay: '溫馨家園',
      meals: '含早餐',
      activities: [
        { time: '全天', item: '送機服務', desc: '根據航班安排送機' },
        { time: '結束', item: '返回溫馨家園', desc: '期待下一次的相遇' },
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
    <div className="min-h-screen bg-gray-50 font-sans pb-20 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-20">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">江浙滬·六日遊</h1>
            <p className="text-blue-100 text-sm mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> 2月1日 - 2月6日
            </p>
          </div>
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <span className="text-xs font-bold block text-center">6天</span>
            <span className="text-xs block text-center">5晚</span>
          </div>
        </div>
        
        {/* Progress Bar (Mockup) */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-blue-100 mb-1">
            <span>旅程進度</span>
            <span>{Object.keys(checkedItems).length} / {itineraryData.reduce((acc, curr) => acc + curr.activities.length, 0)} 項體驗</span>
          </div>
          <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/90 rounded-full transition-all duration-500"
              style={{ width: `${(Object.keys(checkedItems).length / 20) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex justify-center my-4 px-4 sticky top-28 z-10">
        <div className="bg-white p-1 rounded-full shadow-md flex w-full max-w-xs">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'itinerary' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'}`}
          >
            每日行程
          </button>
          <button 
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'details' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'}`}
          >
            貼心服務
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 space-y-4">
        
        {/* Itinerary View */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {itineraryData.map((day, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${expandedDay === index ? 'ring-2 ring-indigo-100 shadow-md' : ''}`}
              >
                {/* Day Header */}
                <div 
                  onClick={() => toggleDay(index)}
                  className="p-4 flex items-center justify-between cursor-pointer active:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${day.color} flex flex-col items-center justify-center text-white shadow-sm`}>
                      <span className="text-xs font-medium opacity-80">Day</span>
                      <span className="text-lg font-bold leading-none">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{day.city}</h3>
                      <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1">
                        {day.icon} {day.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedDay === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedDay === index && (
                  <div className="px-4 pb-4 pt-0 bg-gray-50/50">
                    <div className="h-px w-full bg-gray-100 mb-4"></div>
                    
                    {/* Hotel & Food Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100">
                        <Hotel className="w-3 h-3" /> 宿: {day.stay}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-medium border border-green-100">
                        <Utensils className="w-3 h-3" /> {day.meals}
                      </span>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4 pl-2 relative border-l-2 border-indigo-100 ml-1.5 my-2">
                      {day.activities.map((act, actIndex) => {
                        const isChecked = checkedItems[`${index}-${actIndex}`];
                        return (
                          <div key={actIndex} className="relative pl-6 group" onClick={() => toggleCheck(index, actIndex)}>
                            {/* Dot */}
                            <div className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 flex items-center justify-center
                              ${isChecked ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-gray-300'}`}>
                              {isChecked && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                            </div>
                            
                            {/* Content */}
                            <div className={`transition-all duration-300 cursor-pointer ${isChecked ? 'opacity-50 grayscale' : ''}`}>
                              <span className="text-xs font-bold text-indigo-600 mb-0.5 block">{act.time}</span>
                              <h4 className={`text-sm font-bold text-gray-800 ${isChecked ? 'line-through' : ''}`}>{act.item}</h4>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{act.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="text-center py-6 text-gray-400 text-xs">
              我們期待為您創造美好回憶
            </div>
          </div>
        )}

        {/* Details View */}
        {activeTab === 'details' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Service Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Droplets className="w-4 h-4" />
                </span>
                貼心服務
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-gray-700 block">每日礦泉水</span>
                    <span className="text-xs text-gray-500">車上每日備有充足礦泉水，隨取隨用。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl">
                  <Utensils className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-gray-700 block">美食推薦</span>
                    <span className="text-xs text-gray-500">行程用餐可靈活安排，導遊可推薦當地特色餐廳（如松鶴樓、外婆家等）。</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Weather & Cloths (Mock) */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 rounded-2xl shadow-md text-white">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" /> 2月出行小貼士
              </h3>
              <div className="space-y-3 text-sm opacity-90">
                <p>❄️ <span className="font-bold">天氣：</span> 江浙滬2月初氣溫較低（0-10℃），濕冷為主。</p>
                <p>🧥 <span className="font-bold">穿衣：</span> 建議穿著羽絨服、保暖內衣，攜帶雨具（江南煙雨多）。</p>
                <p>👟 <span className="font-bold">鞋履：</span> 園林和古鎮步行較多，請穿舒適的平底鞋。</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-gray-800 mb-4">緊急聯絡</h3>
               <div className="flex gap-3">
                 <button className="flex-1 bg-green-50 text-green-700 py-3 rounded-xl font-medium text-sm border border-green-100 flex items-center justify-center gap-2 hover:bg-green-100 active:scale-95 transition-transform">
                   聯繫導遊
                 </button>
                 <button className="flex-1 bg-gray-50 text-gray-700 py-3 rounded-xl font-medium text-sm border border-gray-100 flex items-center justify-center gap-2 hover:bg-gray-100 active:scale-95 transition-transform">
                   客服熱線
                 </button>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button for Map (Visual Only) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button 
          onClick={() => setActiveTab('itinerary')}
          className="w-14 h-14 bg-indigo-600 rounded-full shadow-xl shadow-indigo-600/30 flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <Calendar className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};

export default TravelApp;
