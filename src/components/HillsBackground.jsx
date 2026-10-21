// HillsBackground.jsx - Paesaggio di Teletubbylandia con colline verdi morbide stile Windows XP
import React from 'react';
import soundEngine from '../utils/tubbySoundEngine';

export default function HillsBackground({ onMegaphoneClick }) {
  const handleMegaphone = (e) => {
    e.stopPropagation();
    soundEngine.playSpeakerMegaphone();
    if (onMegaphoneClick) onMegaphoneClick();
  };

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Cielo Azzurro Teletubby */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8] via-[#7DD3FC] to-[#BAE6FD]" />

      {/* Nuvole animate soffici */}
      <div className="absolute top-10 left-[8%] animate-float-slow opacity-85">
        <svg width="120" height="45" viewBox="0 0 120 45" fill="#FFFFFF">
          <circle cx="30" cy="28" r="18" />
          <circle cx="55" cy="20" r="22" />
          <circle cx="85" cy="26" r="16" />
          <rect x="25" y="26" width="65" height="18" rx="8" />
        </svg>
      </div>

      <div className="absolute top-24 right-[25%] animate-float-fast opacity-75 hidden sm:block">
        <svg width="150" height="55" viewBox="0 0 150 55" fill="#FFFFFF">
          <circle cx="40" cy="35" r="20" />
          <circle cx="70" cy="25" r="26" />
          <circle cx="105" cy="32" r="20" />
          <rect x="35" y="32" width="75" height="22" rx="10" />
        </svg>
      </div>

      <div className="absolute top-36 left-[35%] animate-float-slow opacity-60">
        <svg width="90" height="35" viewBox="0 0 90 35" fill="#FFFFFF">
          <circle cx="25" cy="22" r="14" />
          <circle cx="45" cy="16" r="17" />
          <circle cx="68" cy="20" r="13" />
          <rect x="20" y="20" width="50" height="14" rx="6" />
        </svg>
      </div>

      {/* Cupola Superiore della Casa dei Teletubbies (in lontananza a sinistra) */}
      <div className="absolute bottom-28 left-[5%] opacity-90 hidden md:block">
        <svg width="110" height="60" viewBox="0 0 110 60">
          <path d="M10 60 C10 15, 100 15, 100 60 Z" fill="#65A30D" stroke="#4D7C0F" strokeWidth="3" />
          {/* Finestre rotonde della cupola */}
          <circle cx="38" cy="40" r="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          <circle cx="55" cy="32" r="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          <circle cx="72" cy="40" r="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          {/* Tubo camino che sbuffa vapore rosa */}
          <rect x="52" y="10" width="6" height="14" rx="2" fill="#94A3B8" />
          <circle cx="55" cy="6" r="4" fill="#F472B6" fillOpacity="0.7" className="animate-ping" />
        </svg>
      </div>

      {/* Megafono / Altoparlante che spunta dal prato (interattivo!) */}
      <div 
        onClick={handleMegaphone}
        className="absolute bottom-24 right-[12%] sm:right-[18%] pointer-events-auto cursor-pointer group transition-transform hover:scale-110 active:scale-95"
        title="Clicca l'Altoparlante che spunta dal prato!"
      >
        <svg width="70" height="90" viewBox="0 0 70 90" className="overflow-visible drop-shadow-lg">
          {/* Tromba d'argento metallica */}
          <path d="M35 85 L35 45 C35 30, 48 20, 62 12 L65 30 C55 35, 45 42, 45 50 L45 85 Z" 
                fill="#94A3B8" stroke="#475569" strokeWidth="2.5" />
          <ellipse cx="63" cy="21" rx="8" ry="14" fill="#334155" stroke="#1E293B" strokeWidth="2" />
          {/* Base canna che spunta dal terreno */}
          <rect x="33" y="75" width="14" height="20" rx="3" fill="#64748B" />
          {/* Ciuffo d'erba alla base */}
          <path d="M22 90 Q30 75 35 90 Q40 72 45 90 Q52 76 60 90 Z" fill="#4FA828" />
          {/* Onde sonore al passaggio del mouse */}
          <g className="opacity-0 group-hover:opacity-100 transition-opacity">
            <path d="M68 12 Q78 21 68 30" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M74 6 Q88 21 74 36" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </div>

      {/* Colline Verdi Sovrapposte (Layers SVG stile Windows XP / Teletubbies) */}
      
      {/* Collina 1: Lontana / Più chiara */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[38vh]">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#86EFAC"
            fillOpacity="0.8"
            d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,213.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Collina 2: Intermedia classica Teletubbylandia (#76C84D) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[32vh]">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#76C84D"
            d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,64C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Collina 3: Primo piano morbido (#4FA828 & #387B1D) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[22vh]">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#4FA828"
            d="M0,160L60,181.3C120,203,240,245,360,240C480,235,600,181,720,170.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Fiori colorati sparsi sui prati */}
      <div className="absolute bottom-4 left-[15%] opacity-80 hidden sm:block">
        <svg width="40" height="30" viewBox="0 0 40 30">
          <circle cx="15" cy="15" r="4" fill="#F472B6" />
          <circle cx="15" cy="8" r="4" fill="#F472B6" />
          <circle cx="22" cy="15" r="4" fill="#F472B6" />
          <circle cx="8" cy="15" r="4" fill="#F472B6" />
          <circle cx="15" cy="15" r="3" fill="#FDE047" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-[32%] opacity-80 hidden sm:block">
        <svg width="35" height="25" viewBox="0 0 35 25">
          <circle cx="15" cy="12" r="4" fill="#EAB308" />
          <circle cx="15" cy="6" r="4" fill="#EAB308" />
          <circle cx="20" cy="12" r="4" fill="#EAB308" />
          <circle cx="9" cy="12" r="4" fill="#EAB308" />
          <circle cx="15" cy="12" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="absolute bottom-3 left-[70%] opacity-80 hidden sm:block">
        <svg width="30" height="22" viewBox="0 0 30 22">
          <circle cx="12" cy="10" r="3.5" fill="#EF4444" />
          <circle cx="12" cy="5" r="3.5" fill="#EF4444" />
          <circle cx="17" cy="10" r="3.5" fill="#EF4444" />
          <circle cx="7" cy="10" r="3.5" fill="#EF4444" />
          <circle cx="12" cy="10" r="2.5" fill="#FEF08A" />
        </svg>
      </div>
    </div>
  );
}
