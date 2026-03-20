import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "intro" },
  { id: 3, type: "biochem" },
  { id: 4, type: "brain" },
  { id: 5, type: "organs" },
  { id: 6, type: "survey" },
  { id: 7, type: "memo" },
  { id: 8, type: "conclusion" },
  { id: 9, type: "thanks" },
];

const SlideTitle = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
      <div className="mb-8 animate-float">
        <div className="text-8xl mb-4">🧬</div>
      </div>
      <p className="text-sm font-rubik font-medium tracking-[0.3em] uppercase text-purple-300 mb-6 opacity-80">
        Муниципальное автономное общеобразовательное учреждение
      </p>
      <h1 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-3 leading-tight">
        «Средняя школа №152 имени А.Д. Березина»
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full my-6" />
      <p className="text-lg font-rubik text-purple-200 mb-4">Итоговый индивидуальный проект</p>
      <h2 className="text-2xl md:text-3xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 mb-10 max-w-2xl leading-tight">
        «Влияние алкоголя на организм человека: биологические аспекты»
      </h2>
      <div className="glass-card px-10 py-5 rounded-2xl">
        <p className="text-white font-rubik font-medium">Выполнил: <span className="text-pink-300">Садомов Илья, 9Д класс</span></p>
        <p className="text-white/70 font-rubik text-sm mt-1">Руководитель: Садомова Екатерина Геннадьевна</p>
        <p className="text-purple-300 font-rubik text-sm mt-1">г. Красноярск, 2026</p>
      </div>
    </div>
  </div>
);

const SlideIntro = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-8">
        <span className="slide-badge">Введение</span>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-3">Зачем это важно?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl mb-3">⚠️</div>
          <h3 className="text-lg font-oswald font-bold text-pink-300 mb-3">Актуальность</h3>
          <ul className="space-y-2">
            {["Алкоголь широко распространён среди молодёжи", "Подростки не знают реальных биологических последствий", "Существует миф о «безопасности» пива и коктейлей"].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-white/80 font-rubik text-sm">
                <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-2xl border-l-4 border-pink-400">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-base font-oswald font-bold text-orange-300 mb-1">Цель</h3>
            <p className="text-white/80 font-rubik text-sm">Изучить механизмы действия алкоголя на организм и создать памятку для сверстников</p>
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="text-base font-oswald font-bold text-purple-300 mb-3">Задачи</h3>
            <ul className="space-y-1">
              {["Изучить историю употребления алкоголя", "Рассмотреть биохимию этанола", "Проанализировать влияние на органы", "Провести опрос среди одноклассников", "Создать памятку «Биология трезвости»"].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 font-rubik text-xs">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideBiochem = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-6">
        <span className="slide-badge">Биохимия</span>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-3">
          Этанол C₂H₅OH — <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">клеточный яд</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-6">
        {[
          { icon: "🫀", step: "1", title: "Всасывание", desc: "20% в желудке, 80% в кишечнике" },
          { icon: "🩸", step: "2", title: "Кровь", desc: "Этанол разносится по всем органам" },
          { icon: "🔬", step: "3", title: "Обезвреживание", desc: "Происходит в печени" },
        ].map((item) => (
          <div key={item.step} className="glass-card p-5 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-2 right-3 text-purple-400/20 font-oswald font-black text-5xl">{item.step}</div>
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-oswald font-bold text-white text-lg mb-1">{item.title}</h3>
            <p className="text-white/60 font-rubik text-xs">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="glass-card p-5 rounded-2xl border border-red-500/30 bg-red-500/10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">☠️</span>
          <div>
            <h3 className="font-oswald font-bold text-red-300 text-xl mb-2">Главная опасность: Ацетальдегид</h3>
            <p className="text-white/80 font-rubik text-sm mb-2">В печени этанол превращается в токсичное вещество, которое:</p>
            <div className="flex gap-4 flex-wrap">
              {["Вызывает похмелье", "Разрушает клетки изнутри", "Накапливается при избытке"].map((item, i) => (
                <span key={i} className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full font-rubik text-xs border border-red-500/30">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideBrain = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-6">
        <span className="slide-badge">Нейробиология</span>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-3">
          Мозг страдает <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">первым и сильнее всего</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="font-oswald font-bold text-purple-300 text-lg mb-3">Что происходит</h3>
            {["Этанол легко проникает в нейроны", "Нарушается передача сигналов между клетками", "Нервные клетки массово гибнут"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-300 text-xs">!</span>
                </div>
                <p className="text-white/80 font-rubik text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-5 rounded-2xl border-l-4 border-orange-400">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🧒</span>
              <h3 className="font-oswald font-bold text-orange-300 text-base">Подростки в зоне риска</h3>
            </div>
            <p className="text-white/80 font-rubik text-sm">Мозг подростка более уязвим — разрушение происходит быстрее, чем у взрослых</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-oswald font-bold text-pink-300 text-lg mb-4">Последствия</h3>
          <div className="space-y-3">
            {[
              { icon: "📉", label: "Ухудшение памяти и внимания" },
              { icon: "🎓", label: "Снижение интеллекта и способности учиться" },
              { icon: "🚶", label: "Нарушение координации и речи" },
              { icon: "😶", label: "Деградация личности при регулярном употреблении" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-white/80 font-rubik text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideOrgans = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-6">
        <span className="slide-badge">Органы</span>
        <h2 className="text-4xl font-oswald font-bold text-white mt-3">Удар по всему организму</h2>
      </div>
      <div className="grid grid-cols-5 gap-3 mb-5">
        {[
          { organ: "Печень", emoji: "🟡", effect: "Жировая дистрофия → гепатит → цирроз (необратимо)", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/30" },
          { organ: "Сердце", emoji: "❤️", effect: "Склеивание эритроцитов → тромбы → инфаркты, инсульты", color: "from-red-500/20 to-pink-500/20", border: "border-red-500/30" },
          { organ: "Желудок", emoji: "🟢", effect: "Ожог слизистой → гастрит, язва", color: "from-green-500/20 to-teal-500/20", border: "border-green-500/30" },
          { organ: "Поджелудочная", emoji: "🔵", effect: "Разрушение тканей → панкреатит", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
          { organ: "Репродуктивная", emoji: "🧬", effect: "Снижение тестостерона, бесплодие, поражение половых клеток → больные дети", color: "from-purple-500/20 to-violet-500/20", border: "border-purple-500/30" },
        ].map((item, i) => (
          <div key={i} className={`rounded-2xl p-4 bg-gradient-to-b ${item.color} border ${item.border} flex flex-col items-center text-center`}>
            <span className="text-3xl mb-2">{item.emoji}</span>
            <h3 className="font-oswald font-bold text-white text-sm mb-2">{item.organ}</h3>
            <p className="text-white/60 font-rubik text-xs leading-relaxed">{item.effect}</p>
          </div>
        ))}
      </div>
      <div className="glass-card p-4 rounded-2xl border border-yellow-500/40 bg-yellow-500/10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🍺</span>
          <p className="text-yellow-200 font-rubik font-medium text-sm">
            <strong className="text-yellow-300">Важно!</strong> Пиво и коктейли — это ТОТ ЖЕ алкоголь. Одна бутылка пива = 50 г водки по воздействию на мозг.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SurveyBar = ({ label, value, max, color }: { label: string; value: number; max: number; color: string }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth((value / max) * 100), 400);
    return () => clearTimeout(t);
  }, [value, max]);
  const gradientMap: Record<string, string> = {
    "text-purple-400": "from-purple-500 to-pink-500",
    "text-pink-400": "from-pink-500 to-red-500",
    "text-orange-400": "from-orange-500 to-yellow-500",
    "text-cyan-400": "from-cyan-500 to-blue-500",
  };
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-white/80 font-rubik text-xs">{label}</span>
        <span className={`font-oswald font-bold text-sm ${color}`}>{value}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradientMap[color] || "from-purple-500 to-pink-500"} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SlideSurvey = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-6">
        <span className="slide-badge">Исследование</span>
        <h2 className="text-4xl font-oswald font-bold text-white mt-3">Результаты опроса <span className="text-purple-400">30 учеников</span> 9-х классов</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="font-oswald font-bold text-purple-300 mb-3">Пробовали алкоголь?</h3>
            <SurveyBar label="Да" value={63} max={100} color="text-pink-400" />
            <SurveyBar label="Нет" value={37} max={100} color="text-purple-400" />
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="font-oswald font-bold text-orange-300 mb-3">Пиво безвредно?</h3>
            <SurveyBar label="Да" value={17} max={100} color="text-pink-400" />
            <SurveyBar label="Нет" value={53} max={100} color="text-purple-400" />
            <SurveyBar label="Не знают" value={30} max={100} color="text-orange-400" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="font-oswald font-bold text-pink-300 mb-3">Какой орган страдает первым?</h3>
            <SurveyBar label="Печень" value={70} max={100} color="text-orange-400" />
            <SurveyBar label="Мозг" value={13} max={100} color="text-purple-400" />
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <h3 className="font-oswald font-bold text-cyan-300 mb-3">Алкоголь влияет на умственное развитие?</h3>
            <SurveyBar label="Да" value={43} max={100} color="text-purple-400" />
            <SurveyBar label="Нет / не уверены" value={57} max={100} color="text-pink-400" />
          </div>
          <div className="glass-card p-4 rounded-2xl border border-yellow-400/40 bg-yellow-400/10">
            <p className="text-yellow-200 font-rubik text-xs leading-relaxed">
              <strong className="text-yellow-300">Вывод:</strong> Подростки знают о вреде для печени, но НЕ знают о вреде для мозга. Многие ошибочно считают пиво безопасным.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideMemo = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-6">
        <span className="slide-badge">Памятка</span>
        <h2 className="text-4xl font-oswald font-bold text-white mt-3">Биология трезвости: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">5 фактов</span></h2>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {[
          { num: "1", icon: "🧠", title: "МОЗГ", desc: "Алкоголь убивает нейроны. Клетки мозга не восстанавливаются. Снижается память и IQ.", color: "from-purple-600/40 to-purple-800/40", border: "border-purple-400/40" },
          { num: "2", icon: "🫀", title: "ПЕЧЕНЬ", desc: "Разрушается поэтапно: ожирение → гепатит → цирроз. Цирроз — это навсегда.", color: "from-orange-600/40 to-red-800/40", border: "border-orange-400/40" },
          { num: "3", icon: "❤️", title: "СЕРДЦЕ", desc: "Алкоголь склеивает эритроциты. Образуются тромбы → риск инфаркта и инсульта.", color: "from-red-600/40 to-pink-800/40", border: "border-red-400/40" },
          { num: "4", icon: "🧬", title: "БУДУЩИЕ ДЕТИ", desc: "Алкоголь повреждает ДНК половых клеток → риск рождения больных детей.", color: "from-blue-600/40 to-violet-800/40", border: "border-blue-400/40" },
          { num: "5", icon: "🍺", title: "ПИВО НЕ БЕЗОПАСНО", desc: "В пиве и коктейлях тот же этанол. Газ и сахар ускоряют всасывание яда в кровь.", color: "from-yellow-600/40 to-amber-800/40", border: "border-yellow-400/40" },
        ].map((item) => (
          <div key={item.num} className={`rounded-2xl p-4 bg-gradient-to-b ${item.color} border ${item.border} flex flex-col relative overflow-hidden`}>
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <span className="font-oswald font-black text-white/20 text-2xl">{item.num}</span>
            </div>
            <span className="text-3xl mb-3">{item.icon}</span>
            <h3 className="font-oswald font-black text-white text-xs tracking-widest mb-2">{item.title}</h3>
            <p className="text-white/70 font-rubik text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideConclusion = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col justify-center px-16">
      <div className="mb-8">
        <span className="slide-badge">Итоги</span>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-3">Главные выводы</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {[
            { icon: "🧠", text: "Алкоголь — клеточный яд, убивающий нейроны" },
            { icon: "🫀", text: "Печень разрушается необратимо (цирроз)" },
            { icon: "❤️", text: "Сердце и сосуды страдают от тромбов" },
            { icon: "🧬", text: "Поражение половых клеток влияет на здоровье будущих детей" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl flex items-center gap-4">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-white/90 font-rubik font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="glass-card p-6 rounded-2xl border border-red-500/40 bg-red-500/10 text-center">
            <p className="text-2xl mb-2">❌</p>
            <p className="font-oswald font-black text-red-300 text-2xl tracking-wide">БЕЗВРЕДНЫХ ДОЗ НЕ СУЩЕСТВУЕТ!</p>
            <p className="text-white/60 font-rubik text-sm mt-2">Особенно опасен алкоголь для подростков — организм ещё формируется</p>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-green-500/40 bg-green-500/10 text-center">
            <p className="text-2xl mb-2">📋</p>
            <p className="font-oswald font-bold text-green-300 text-lg">Результат работы</p>
            <p className="text-white/70 font-rubik text-sm mt-1">Создана памятка «Биология трезвости», которая поможет сверстникам сделать осознанный выбор</p>
          </div>
          <div className="text-center">
            <p className="font-oswald font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 text-xl">Знание биологии = осознанный выбор в пользу здоровья!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideThanks = ({ visible }: { visible: boolean }) => (
  <div className={`slide-content ${visible ? "slide-enter" : ""}`}>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
      <div className="text-9xl mb-8 animate-float">🎓</div>
      <h1 className="text-5xl md:text-7xl font-oswald font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 mb-6">Спасибо за внимание!</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full mb-8" />
      <p className="text-xl font-rubik text-white/70 mb-8">Готов ответить на ваши вопросы</p>
      <div className="glass-card px-10 py-5 rounded-2xl">
        <p className="text-white/60 font-rubik text-sm">Выполнил: <span className="text-pink-300 font-medium">Садомов Илья, 9Д класс</span></p>
        <p className="text-white/60 font-rubik text-sm mt-1">Руководитель: <span className="text-purple-300 font-medium">Садомова Екатерина Геннадьевна</span></p>
      </div>
    </div>
  </div>
);

const slideComponents = [SlideTitle, SlideIntro, SlideBiochem, SlideBrain, SlideOrgans, SlideSurvey, SlideMemo, SlideConclusion, SlideThanks];
const slideTitles = ["Титульный", "Введение", "Биохимия", "Мозг и НС", "Органы", "Опрос", "Памятка", "Заключение", "Спасибо"];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 380);
  }, [animating, current]);

  const next = useCallback(() => { if (current < slides.length - 1) goTo(current + 1); }, [current, goTo]);
  const prev = useCallback(() => { if (current > 0) goTo(current - 1); }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slideComponents[current];

  return (
    <div className="presentation-root">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="noise-overlay" />

      {/* Slide number */}
      <div className="absolute top-6 right-8 z-20 flex items-center gap-3">
        <span className="font-oswald text-white/30 text-sm tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Current slide label */}
      <div className="absolute top-6 left-8 z-20">
        <span className="font-rubik text-white/30 text-xs tracking-widest uppercase">{slideTitles[current]}</span>
      </div>

      {/* Slide */}
      <div
        className={`slide-wrapper ${animating ? (direction === "next" ? "slide-out-left" : "slide-out-right") : "slide-in"}`}
      >
        <SlideComponent visible={!animating} />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-between px-8">
        <button onClick={prev} disabled={current === 0} className="nav-btn" aria-label="Назад">
          <Icon name="ChevronLeft" size={22} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-3 bg-gradient-to-r from-purple-400 to-pink-400" : "w-3 h-3 bg-white/20 hover:bg-white/40"}`}
              title={slideTitles[i]}
            />
          ))}
        </div>

        <button onClick={next} disabled={current === slides.length - 1} className="nav-btn" aria-label="Вперёд">
          <Icon name="ChevronRight" size={22} />
        </button>
      </div>

      <div className="absolute bottom-[34px] right-8 z-20 text-white/20 font-rubik text-xs hidden md:block">
        ← → для навигации
      </div>
    </div>
  );
}
