import React, { useState, useEffect } from 'react';
import { 
  EcommerceGrowthChart, 
  SpeedComparisonChart, 
  ErrorComparisonChart,
  UzumMetricsChart 
} from './Charts';
import { FlowType } from '../types';
import { ArrowDown, Box, FileText, Activity, Clock, Server, Cpu, Globe, Target, Truck, ShieldCheck, Cloud, Zap } from 'lucide-react';

// --- Shared Components ---
const GlassCard = ({ children, className = '', glowColor = '' }: { children: React.ReactNode, className?: string, glowColor?: string }) => {
  const glowStyle = glowColor ? { boxShadow: `0 0 20px -5px ${glowColor}` } : {};
  return (
    <div 
      className={`bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/15 ${className}`}
      style={glowStyle}
    >
      {children}
    </div>
  );
};

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden snap-start relative ${className}`}>
    <div className="max-w-6xl w-full z-10 relative">
      {children}
    </div>
  </section>
);

const NeonText = ({ children, color = 'cyan' }: { children: React.ReactNode, color?: 'cyan' | 'green' | 'red' | 'yellow' | 'purple' }) => {
  const colors = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]',
    green: 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]',
    red: 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]',
    yellow: 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]',
    purple: 'text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]',
  };
  return <span className={`font-bold ${colors[color]}`}>{children}</span>;
};

// --- SLIDE 1: Hero ---
export const HeroSlide = () => (
  <Section className="text-center">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
    
    <div className="space-y-8 animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 pb-2">
        Информационные потоки
        <br />
        в коммерции
      </h1>
      <p className="text-2xl md:text-3xl text-cyan-200 font-light">
        Стратегический актив XXI века
      </p>
      
      <div className="bg-slate-900/50 inline-block p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm max-w-2xl mx-auto">
        <p className="text-xl text-gray-300 mb-4">
          Почему информация движется медленнее, чем товар?
        </p>
        <p className="text-2xl text-cyan-400 font-bold">
          И как это стоит $655,000 за 5 лет
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-base md:text-lg text-gray-300">
           <div className="flex items-center gap-3 justify-center bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/50 transition">
             <Target className="w-5 h-5 text-cyan-400" /> 
             <span className="font-semibold">Жураев Бекзод</span>
           </div>
           <div className="flex items-center gap-3 justify-center bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/50 transition">
             <Activity className="w-5 h-5 text-cyan-400" /> 
             <span className="font-semibold">Каюмов Умар</span>
           </div>
           <div className="flex items-center gap-3 justify-center bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/50 transition">
             <Globe className="w-5 h-5 text-cyan-400" /> 
             <span className="font-semibold">Фозилов Шавкат</span>
           </div>
           <div className="flex items-center gap-3 justify-center bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/50 transition">
             <Zap className="w-5 h-5 text-cyan-400" /> 
             <span className="font-semibold">Юлдашев Элбек</span>
           </div>
        </div>
      </div>
      
      <div className="mt-16 animate-bounce text-cyan-400 opacity-70">
        <ArrowDown className="w-8 h-8 mx-auto" />
      </div>
    </div>
  </Section>
);

// --- SLIDE 2: The Gap ---
export const GapSlide = () => (
  <Section>
    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
      Парадокс XXI века: Разрыв скорости
    </h2>
    <div className="grid md:grid-cols-2 gap-12 mb-12">
      <GlassCard className="text-center flex flex-col items-center">
        <div className="text-6xl mb-4">📦</div>
        <div className="text-5xl font-bold text-cyan-400 mb-2">24 часа</div>
        <p className="text-xl font-semibold">Доставка товара</p>
        <p className="text-sm text-gray-400 mt-2">от пункта А до пункта Б</p>
      </GlassCard>
      
      <GlassCard className="text-center flex flex-col items-center border-red-500/30">
        <div className="text-6xl mb-4">📄</div>
        <div className="text-5xl font-bold text-red-400 mb-2">48 часов</div>
        <p className="text-xl font-semibold">Прибытие документов</p>
        <p className="text-sm text-gray-400 mt-2">часто позже, чем сам товар</p>
      </GlassCard>
    </div>
    
    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-red-300 mb-2 flex items-center gap-2">
        <Activity className="w-5 h-5" /> Результат:
      </h3>
      <p className="text-gray-300">
        Асинхронность создаёт финансовые потери и операционные сбои. 
        В традиционной логистике <span className="text-cyan-400 font-bold">50-70% информационных потоков</span> — это товаросопроводительные документы.
      </p>
    </div>
  </Section>
);

// --- SLIDE 3: Typology (Interactive Flip Cards) ---
const FlipCard = ({ flow }: { flow: FlowType }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-64 cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <GlassCard className="h-full flex flex-col items-center justify-center text-center hover:border-cyan-400/50">
            <div className="text-4xl mb-4">{flow.icon}</div>
            <h3 className="text-xl font-bold text-cyan-400">{flow.name}</h3>
            <p className="text-xs text-gray-500 mt-4 absolute bottom-4">Нажми, чтобы узнать детали</p>
          </GlassCard>
        </div>
        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <GlassCard className="h-full flex flex-col items-center justify-center bg-slate-900/90 border-cyan-500/50">
            <p className="text-sm text-gray-200 mb-4 text-center">{flow.description}</p>
            <div className="text-xs text-cyan-300 bg-cyan-900/30 p-2 rounded w-full text-center">
              Example:<br/>{flow.example}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export const TypologySlide = () => {
  const flowTypes: FlowType[] = [
    { name: "Горизонтальные", icon: "↔️", description: "Сообщения между участниками одного уровня", example: "Два дистрибьютора координируют заказы" },
    { name: "Вертикальные", icon: "⬇️", description: "От руководства к звеньям", example: "Директива о снижении запасов на 20%" },
    { name: "Опережающие", icon: "⏭️", description: "Предшествуют материальному потоку", example: "Уведомление об отправке (ASN)" },
    { name: "Запаздывающие", icon: "⏮️", description: "После выполнения операции", example: "Отчёт о приёмке товара" },
    { name: "Управленческие", icon: "📋", description: "Для принятия решений", example: "Еженедельный отчёт о KPI" },
    { name: "Операционные", icon: "🔄", description: "Регулируют текущие процессы", example: "GPS-трекинг в реальном времени" },
  ];

  return (
    <Section>
      <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
        7 типов информационных потоков
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {flowTypes.map((flow, idx) => (
          <FlipCard key={idx} flow={flow} />
        ))}
      </div>
    </Section>
  );
};

// --- SLIDE 4: Evolution ---
export const EvolutionSlide = () => (
  <Section>
    <h2 className="text-4xl font-bold mb-16 text-center">Эволюция технологий (1985-2025)</h2>
    <div className="relative border-l-4 border-gradient-to-b from-cyan-500 to-green-500 ml-4 md:ml-1/2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:w-1 md:before:h-full md:before:bg-gradient-to-b md:before:from-cyan-500 md:before:to-green-500">
      
      {/* Item 1 */}
      <div className="mb-8 relative md:flex md:justify-between md:items-center group">
        <div className="hidden md:block md:w-5/12 text-right pr-8">
           <span className="text-3xl font-bold text-gray-700">1970s</span>
        </div>
        <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 z-10"></div>
        <div className="pl-8 md:pl-0 md:w-5/12">
          <GlassCard>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">📄 Традиционный документооборот</h3>
            <p className="text-sm text-gray-300">Бумага, курьер, архивы</p>
            <div className="flex gap-4 mt-2 text-xs text-red-400">
              <span>Ошибки: 10-15%</span>
              <span>Скорость: 3-5 дней</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Item 2 */}
      <div className="mb-8 relative md:flex md:justify-between md:items-center flex-row-reverse group">
        <div className="hidden md:block md:w-5/12 text-left pl-8">
           <span className="text-3xl font-bold text-gray-700">2000s</span>
        </div>
        <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-900 z-10"></div>
        <div className="pl-8 md:pl-0 md:w-5/12">
          <GlassCard>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">🔌 EDI (Data Interchange)</h3>
            <p className="text-sm text-gray-300">Точка-к-точке, B2B стандарты</p>
            <div className="flex gap-4 mt-2 text-xs text-yellow-200">
              <span>Ошибки: 1%</span>
              <span>ROI: 116% / год</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Item 3 (Restored) */}
      <div className="mb-8 relative md:flex md:justify-between md:items-center group">
        <div className="hidden md:block md:w-5/12 text-right pr-8">
           <span className="text-3xl font-bold text-gray-700">2018</span>
        </div>
        <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-cyan-300 border-4 border-slate-900 z-10"></div>
        <div className="pl-8 md:pl-0 md:w-5/12">
          <GlassCard>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">☁️ Облачные платформы</h3>
            <p className="text-sm text-gray-300">Real-time, многие-ко-многим</p>
            <div className="flex gap-4 mt-2 text-xs text-cyan-200">
              <span>Ошибки: 0.5%</span>
              <span>ROI: 120% / год</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Item 4 */}
      <div className="mb-8 relative md:flex md:justify-between md:items-center flex-row-reverse group">
        <div className="hidden md:block md:w-5/12 text-left pl-8">
           <span className="text-3xl font-bold text-gray-700">2025+</span>
        </div>
        <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-green-400 border-4 border-slate-900 z-10"></div>
        <div className="pl-8 md:pl-0 md:w-5/12">
          <GlassCard className="bg-green-500/10 border-green-500/30">
            <h3 className="text-xl font-bold text-green-400 mb-2">🤖 AI + IoT + Blockchain</h3>
            <p className="text-sm text-gray-300">E-logistika 🇺🇿, Real-time прогнозы</p>
            <div className="flex gap-4 mt-2 text-xs text-green-200">
              <span>Ошибки: 0.1%</span>
              <span>ROI: 280% / год</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </Section>
);

// --- SLIDE 5: Market Chart ---
export const MarketSlide = () => (
  <Section>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">Рынок e-commerce Узбекистана</h2>
    <p className="text-center text-gray-400 mb-8">Прогноз 2024-2030 (CAGR ~30%)</p>
    
    <div className="h-[350px] w-full bg-slate-800/50 p-4 rounded-xl border border-white/5 mb-6">
      <EcommerceGrowthChart />
    </div>
    
    <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
      <GlassCard className="text-center py-4">
        <p className="text-gray-400 text-sm">2024</p>
        <p className="text-2xl font-bold text-cyan-400">$1.2B</p>
        <p className="text-xs text-gray-500 mt-1">U.S. Trade Admin.</p>
      </GlassCard>
      <GlassCard className="text-center py-4">
        <p className="text-gray-400 text-sm">2027</p>
        <p className="text-2xl font-bold text-cyan-400">$2.2B</p>
        <p className="text-xs text-gray-500 mt-1">KPMG Forecast</p>
      </GlassCard>
      <GlassCard className="text-center py-4">
        <p className="text-gray-400 text-sm">2030</p>
        <p className="text-2xl font-bold text-green-400">$4.3B</p>
        <p className="text-xs text-gray-500 mt-1">CAGR 30%</p>
      </GlassCard>
    </div>

    <div className="text-xs text-gray-500 text-center">
      <p>📊 Источники: KPMG Report Aug 2023 | Statista Market Forecast | U.S. Trade Administration</p>
      <p className="mt-1">KPMG CAGR 2023-2027: 41-47% | 2030 прогноз по консервативному 30% CAGR</p>
    </div>
  </Section>
);

// --- SLIDE 6: Cases ---
export const CasesSlide = () => (
  <Section>
    <h2 className="text-4xl font-bold mb-12 text-center">Три гиганта логистики</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Amazon */}
      <GlassCard className="hover:border-cyan-400 group">
        <div className="flex items-center gap-3 mb-4">
          <Box className="text-cyan-400" />
          <h3 className="text-2xl font-bold text-cyan-400">Amazon</h3>
        </div>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex justify-between">
            <span>Same-day:</span>
            <span className="text-cyan-400 font-bold">60% заказов</span>
          </li>
          <li className="flex justify-between">
            <span>Обработка:</span>
            <span className="text-cyan-400 font-bold">15 мин</span>
          </li>
          <li className="text-xs text-gray-500 mt-2">
            Используют 1M+ роботов. Инвестиции $50B/год.
          </li>
        </ul>
      </GlassCard>

      {/* Cainiao */}
      <GlassCard className="hover:border-green-400 group">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="text-green-400" />
          <h3 className="text-2xl font-bold text-green-400">Cainiao</h3>
        </div>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex justify-between">
            <span>Китай:</span>
            <span className="text-green-400 font-bold">24 часа</span>
          </li>
          <li className="flex justify-between">
            <span>Global:</span>
            <span className="text-green-400 font-bold">72 часа</span>
          </li>
          <li className="text-xs text-gray-500 mt-2">
            Экономия 260 млн человеко-часов в день.
          </li>
        </ul>
      </GlassCard>

      {/* Uzum */}
      <GlassCard className="hover:border-yellow-400 group border-yellow-500/30">
        <div className="flex items-center gap-3 mb-4">
          <Truck className="text-yellow-400" />
          <h3 className="text-2xl font-bold text-yellow-400">Uzum Market</h3>
        </div>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex justify-between">
            <span>Оборот 2024:</span>
            <span className="text-yellow-400 font-bold">$300M</span>
          </li>
          <li className="flex justify-between">
            <span>Рост:</span>
            <span className="text-yellow-400 font-bold">45% YoY</span>
          </li>
          <li className="text-xs text-gray-500 mt-2">
            Развитие сети PUDO (500 пунктов к 2027).
          </li>
        </ul>
      </GlassCard>
    </div>
  </Section>
);

// --- SLIDE 7: ROI Calculator ---
export const RoiCalculatorSlide = () => {
  const [docs, setDocs] = useState(50000);
  const [staff, setStaff] = useState(4);

  const paperCosts = docs * 0.30;
  const laborSavings = staff * 5000 * 0.75;
  const archiveSavings = 12000 * 0.6;
  const otherSavings = 8000 * 0.6;
  
  const baseCost = paperCosts + (staff * 5000) + 12000 + 8000;
  const yearlyEconomics = paperCosts + laborSavings + archiveSavings + otherSavings;
  const ediCost = 30000;
  const roi = ((yearlyEconomics - ediCost) / ediCost) * 100;
  const payback = (ediCost / yearlyEconomics) * 12;

  return (
    <Section>
      <h2 className="text-4xl font-bold mb-6 text-center">Калькулятор ROI внедрения EDI</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5" /> Параметры
          </h3>
          
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Документов в год: <span className="text-cyan-400">{docs.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min="1000" max="200000" step="1000"
              value={docs}
              onChange={(e) => setDocs(Number(e.target.value))}
              className="w-full accent-cyan-400 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Сотрудников бэк-офиса: <span className="text-cyan-400">{staff}</span>
            </label>
            <input 
              type="range" 
              min="1" max="20" step="1"
              value={staff}
              onChange={(e) => setStaff(Number(e.target.value))}
              className="w-full accent-cyan-400 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-400 mt-8">
            <p className="text-xs text-gray-400">Базовые затраты (ежегодно без EDI)</p>
            <p className="text-2xl font-bold text-cyan-400">${baseCost.toLocaleString()}</p>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-bold text-green-400 mb-6">Результаты</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 rounded-lg border-l-4 border-green-500 flex justify-between items-center">
              <span className="text-sm text-gray-300">Годовая экономия</span>
              <span className="text-2xl font-bold text-green-400">${yearlyEconomics.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
            </div>
            
            <div className="p-4 bg-cyan-500/10 rounded-lg border-l-4 border-cyan-500 flex justify-between items-center">
              <span className="text-sm text-gray-300">Инвестиция в EDI</span>
              <span className="text-2xl font-bold text-cyan-400">${ediCost.toLocaleString()}</span>
            </div>

            <div className="p-4 bg-yellow-500/10 rounded-lg border-l-4 border-yellow-500 flex justify-between items-center">
              <span className="text-sm text-gray-300">Окупаемость</span>
              <span className="text-2xl font-bold text-yellow-400">{payback.toFixed(1)} мес</span>
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg border border-cyan-500/30 text-center">
              <p className="text-sm text-gray-400 mb-1">ROI за 12 месяцев</p>
              <p className="text-5xl font-bold text-green-400 drop-shadow-lg">{roi.toFixed(0)}%</p>
              <p className="text-xs text-gray-500 mt-2">Чистая прибыль: ${(yearlyEconomics - ediCost).toLocaleString()}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};

// --- SLIDE 8: Technology Comparison ---
export const ComparisonSlide = () => (
  <Section>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Сравнение технологий: Скорость & Качество</h2>
    <p className="text-center text-gray-400 mb-8">4 уровня цифровизации информационных потоков</p>

    <div className="grid md:grid-cols-2 gap-8 h-[320px] mb-8">
      <GlassCard className="flex flex-col">
        <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4" /> Скорость обработки (часы)
        </h3>
        <div className="flex-1 min-h-0">
          <SpeedComparisonChart />
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">DCS-IS-EDI, GraceBlood EDI benchmarks</p>
      </GlassCard>
      <GlassCard className="flex flex-col">
        <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Уровень ошибок (%)
        </h3>
        <div className="flex-1 min-h-0">
          <ErrorComparisonChart />
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">Industry standard accuracy metrics</p>
      </GlassCard>
    </div>

    <div className="grid grid-cols-4 gap-4">
        <GlassCard className="text-center p-4">
            <p className="text-red-400 font-bold mb-2 text-sm">📄 Бумага</p>
            <p className="text-gray-300 text-xs">72 ч, 12% ошибок</p>
            <p className="text-gray-400 text-xs mt-2">ROI: 0%</p>
        </GlassCard>
        <GlassCard className="text-center p-4">
            <p className="text-yellow-400 font-bold mb-2 text-sm">🔌 EDI</p>
            <p className="text-gray-300 text-xs">8 ч, 1% ошибок</p>
            <p className="text-yellow-300 text-xs mt-2">ROI: 116%</p>
        </GlassCard>
        <GlassCard className="text-center p-4">
            <p className="text-cyan-400 font-bold mb-2 text-sm">☁️ Cloud</p>
            <p className="text-gray-300 text-xs">4 ч, 0.5% ошибок</p>
            <p className="text-cyan-300 text-xs mt-2">ROI: 120%</p>
        </GlassCard>
        <GlassCard className="text-center p-4 border-green-500/30">
            <p className="text-green-400 font-bold mb-2 text-sm">🤖 AI</p>
            <p className="text-gray-300 text-xs">2 ч, 0.1% ошибок</p>
            <p className="text-green-300 text-xs mt-2">ROI: 280%</p>
        </GlassCard>
    </div>
  </Section>
);

// --- SLIDE 9: Uzum Case Study ---
export const UzumSlide = () => (
  <Section>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Узум Market: Прогнозный ROI облачной видимости</h2>
    <p className="text-center text-gray-400 mb-8">Гипотетический сценарий на основе реальных метрик Узума 2024 + Supply Chain Visibility ROI Framework</p>
    
    <div className="h-[300px] w-full bg-slate-800/50 p-4 rounded-xl mb-6">
      <UzumMetricsChart />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <GlassCard className="text-center py-3">
        <p className="text-gray-400 text-sm">Инвестиция</p>
        <p className="text-2xl font-bold text-cyan-400">$43K</p>
        <p className="text-xs text-gray-600 mt-1">SaaS + IoT</p>
      </GlassCard>
      <GlassCard className="text-center py-3">
        <p className="text-gray-400 text-sm">Годовая выгода</p>
        <p className="text-2xl font-bold text-green-400">$255K</p>
        <p className="text-xs text-gray-600 mt-1">Efficiency gains</p>
      </GlassCard>
      <GlassCard className="text-center border-green-500/50 py-3">
        <p className="text-gray-400 text-sm">ROI (1 год)</p>
        <p className="text-2xl font-bold text-green-400">493%</p>
        <p className="text-xs text-gray-600 mt-1">Payback: 2 мес</p>
      </GlassCard>
    </div>

    <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-cyan-400 mb-4">Финансовый разбор (типовой сценарий на основе Holocene EU):</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
            <div className="flex justify-between"><span>✅ On-Time Delivery:</span> <span className="text-green-400 font-bold">+15% = $25K</span></div>
            <div className="flex justify-between"><span>✅ Inventory Accuracy:</span> <span className="text-green-400 font-bold">+16% = $40K</span></div>
            <div className="flex justify-between"><span>✅ Forecast Accuracy:</span> <span className="text-green-400 font-bold">+19% = $60K</span></div>
            <div className="flex justify-between"><span>✅ Delivery Time opt:</span> <span className="text-green-400 font-bold">-37% = $35K</span></div>
            <div className="flex justify-between"><span>✅ Picking Error Rate:</span> <span className="text-green-400 font-bold">-86% = $15K</span></div>
            <div className="flex justify-between"><span>✅ Cust. Satisfaction:</span> <span className="text-green-400 font-bold">+16% = $80K</span></div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between text-xs text-gray-500">
            <p>📌 Реальные данные Узума 2024: uzum.com/press-center</p>
            <p>🎯 ИТОГО: $255K за 12 месяцев</p>
            <p>📌 Methodology: Holocene EU Framework</p>
        </div>
    </GlassCard>
  </Section>
);

// --- SLIDE 10: Roadmap ---
export const RoadmapSlide = () => (
  <Section>
    <h2 className="text-4xl font-bold mb-10 text-center">Стратегия Узбекистана: Roadmap 2025-2030</h2>
    <div className="grid md:grid-cols-1 gap-4 space-y-2">
      <GlassCard className="border-l-4 border-cyan-400 py-4">
        <div className="flex gap-4 items-start">
          <div className="text-2xl font-bold text-cyan-400">1️⃣</div>
          <div>
            <h3 className="text-lg font-bold text-cyan-400">E-logistika как национальный фундамент</h3>
            <p className="text-sm text-gray-300">Запущена ноябрь 2025 | Электронные документы, GPS real-time, интеграция с таможней</p>
            <p className="text-xs text-cyan-300 mt-1">📍 От электронных документов → к полной интеграции UNECE стандартов к 2027</p>
          </div>
        </div>
      </GlassCard>
      
      <GlassCard className="border-l-4 border-green-400 py-4">
         <div className="flex gap-4 items-start">
          <div className="text-2xl font-bold text-green-400">2️⃣</div>
          <div>
            <h3 className="text-lg font-bold text-green-400">PUDO-сеть и логистические центры</h3>
            <p className="text-sm text-gray-300">500+ пунктов выдачи к 2027 | 3-5 региональных центров | Микро-склады в районах</p>
            <p className="text-xs text-green-300 mt-1">💰 Инвестиции: $800M-1.2B | Цель: Same-day доставка в Ташкенте</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="border-l-4 border-yellow-400 py-4">
         <div className="flex gap-4 items-start">
          <div className="text-2xl font-bold text-yellow-400">3️⃣</div>
          <div>
            <h3 className="text-lg font-bold text-yellow-400">Привлечение международных операторов</h3>
            <p className="text-sm text-gray-300">DHL, FedEx, DPD, Cainiao для экспортных маршрутов | Трансфер технологий</p>
            <p className="text-xs text-yellow-300 mt-1">🌍 Узбекистан как логистический хаб Центральной Азии</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="border-l-4 border-purple-400 py-4">
         <div className="flex gap-4 items-start">
          <div className="text-2xl font-bold text-purple-400">4️⃣</div>
          <div>
            <h3 className="text-lg font-bold text-purple-400">Стандартизация & UNECE compliance</h3>
            <p className="text-sm text-gray-300">Полное соответствие UNECE стандартам к 2027 | Интеграция с TRACECA коридором</p>
            <p className="text-xs text-purple-300 mt-1">✈️ Транзит Азия-Европа: потенциал $10B+/год</p>
          </div>
        </div>
      </GlassCard>
    </div>

    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <GlassCard className="p-4">
            <p className="text-gray-400 text-xs mb-1">Прогноз e-commerce</p>
            <p className="text-2xl font-bold text-cyan-400">$4.3B</p>
            <p className="text-[10px] text-gray-400">к 2030 (CAGR 30%)</p>
        </GlassCard>
        <GlassCard className="p-4">
            <p className="text-gray-400 text-xs mb-1">Инвестиции в инфра</p>
            <p className="text-2xl font-bold text-green-400">$2-3B</p>
            <p className="text-[10px] text-gray-400">2025-2030</p>
        </GlassCard>
        <GlassCard className="p-4">
            <p className="text-gray-400 text-xs mb-1">Доля в розницы</p>
            <p className="text-2xl font-bold text-yellow-400">12%</p>
            <p className="text-[10px] text-gray-400">к 2030 (vs 4% в 2024)</p>
        </GlassCard>
    </div>
  </Section>
);

// --- SLIDE 11: Conclusion ---
export const ConclusionSlide = () => (
  <Section className="text-center">
    <h2 className="text-5xl font-bold mb-12">Цена бездействия</h2>
    
    <div className="bg-red-900/20 border-2 border-red-500/50 p-12 rounded-2xl max-w-3xl mx-auto mb-12 backdrop-blur-sm">
      <p className="text-gray-400 text-lg mb-6">Если игнорировать цифровую трансформацию:</p>
      <NeonText color="cyan"><span className="text-7xl block my-6">$655,000</span></NeonText>
      <p className="text-2xl text-red-400 font-semibold">потеряно за 5 лет</p>
      <p className="text-sm text-gray-500 mt-4">(Для СМБ компании с 50K документами/год)</p>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
        <GlassCard className="text-left">
            <h3 className="text-lg font-bold text-red-400 mb-4">❌ Без цифровизации</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                <li>✗ 12% ошибок в документах</li>
                <li>✗ 3-5 дней обработки заказов</li>
                <li>✗ $70K/год операционных затрат</li>
                <li>✗ 70% человеческого труда = архивирование</li>
            </ul>
        </GlassCard>
        <GlassCard className="text-left">
            <h3 className="text-lg font-bold text-green-400 mb-4">✅ С цифровизацией</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ 0.1% ошибок</li>
                <li>✓ 2-4 часа обработки</li>
                <li>✓ $9.2K/год затрат</li>
                <li>✓ AI автоматизирует 90% процессов</li>
            </ul>
        </GlassCard>
    </div>

    <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl max-w-2xl mx-auto">
      <p className="text-xl text-gray-200">
        Компании, решающие задачу информационных потоков сегодня,<br/>
        <NeonText color="green">станут ЛИДЕРАМИ завтра.</NeonText>
      </p>
    </div>
    
    <div className="mt-12 text-sm text-gray-500">
      Uzbekistan Logistics Transformation 2025
    </div>
  </Section>
);
