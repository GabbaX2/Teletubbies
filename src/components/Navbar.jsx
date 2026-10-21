// Navbar.jsx - Barra di navigazione scientifico-teletubbica
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Award } from 'lucide-react';
import soundEngine from '../utils/tubbySoundEngine';

export default function Navbar({ onResetHome, currentScreen }) {
  const [isMuted, setIsMuted] = useState(soundEngine.isMuted);

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe((muted) => {
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  const handleToggleMute = () => {
    const newMuted = soundEngine.toggleMute();
    setIsMuted(newMuted);
  };

  const handleLogoClick = () => {
    soundEngine.playTubbyToastPop();
    soundEngine.speakTeletubby("Tubby Test!");
    if (onResetHome && currentScreen !== 'home') {
      onResetHome();
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/75 border-b-2 border-emerald-500/20 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        
        {/* Brand & Titolo Ufficiale */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
          title="Torna alla Home / TubbyTest.it"
        >
          {/* Icona Toast Sorridente SVG */}
          <div className="w-10 h-10 rounded-2xl bg-amber-400 border-2 border-amber-600 flex items-center justify-center shadow-md transform group-hover:rotate-6 group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 100 100">
              <rect x="15" y="20" width="70" height="65" rx="18" fill="#F59E0B" stroke="#B45309" strokeWidth="8"/>
              <circle cx="38" cy="46" r="8" fill="#78350F"/>
              <circle cx="62" cy="46" r="8" fill="#78350F"/>
              <path d="M34 62 Q50 82 66 62" stroke="#78350F" strokeWidth="7" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                Tubby<span className="text-pink-600">Test</span><span className="text-emerald-600">.it</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full border border-purple-200">
                <Sparkles className="w-3 h-3 text-purple-600" />
                ISTA 2.0
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate max-w-[200px] sm:max-w-none">
              Istituto Superiore di Teletubbologia Applicata
            </p>
          </div>
        </div>

        {/* Certificato Badge & Tasto Mute */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Badge Altoparlante Prato */}
          <div className="hidden lg:flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200 shadow-sm">
            <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Certificato dall'Altoparlante dal 1997</span>
          </div>

          {/* Tasto Audio / Mute */}
          <button
            onClick={handleToggleMute}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all border ${
              isMuted
                ? 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                : 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
            }`}
            title={isMuted ? "Riattiva suoni Teletubby" : "Disattiva suoni"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-rose-600 animate-pulse" />
                <span className="hidden sm:inline">Muto</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Audio ON</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
