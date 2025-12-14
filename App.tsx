import React, { useState, useEffect, useCallback } from 'react';
import { 
  HeroSlide, GapSlide, TypologySlide, EvolutionSlide, 
  MarketSlide, CasesSlide, RoiCalculatorSlide, 
  ComparisonSlide, UzumSlide, RoadmapSlide, ConclusionSlide 
} from './components/PresentationSlides';
import { ChevronDown, ChevronUp, Maximize2 } from 'lucide-react';

const slides = [
  HeroSlide,
  GapSlide,
  TypologySlide,
  EvolutionSlide,
  MarketSlide,
  CasesSlide,
  RoiCalculatorSlide,
  ComparisonSlide,
  UzumSlide,
  RoadmapSlide,
  ConclusionSlide
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(curr => Math.min(curr + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(curr => Math.max(curr - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
        nextSlide();
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.code)) {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="bg-slate-900 text-white min-h-screen w-full overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
      
      {/* Main Content Area */}
      <main className="relative z-10 w-full h-screen flex flex-col">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Slide Render */}
        <div className="flex-1 w-full h-full relative animate-in fade-in zoom-in-95 duration-500" key={currentSlide}>
          <CurrentSlideComponent />
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
           <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 bg-cyan-500/20 backdrop-blur border border-cyan-500/50 rounded-full hover:bg-cyan-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <ChevronDown className="w-6 h-6 text-cyan-100" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="fixed bottom-8 left-8 z-50 text-slate-500 font-mono text-sm">
          SLIDE {currentSlide + 1} <span className="text-slate-700">/</span> {slides.length}
        </div>
      </main>
    </div>
  );
}