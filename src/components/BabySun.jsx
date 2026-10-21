// BabySun.jsx - Il Sole Bambino Interattivo che reagisce in tempo reale
import React, { useState, useEffect } from 'react';
import soundEngine from '../utils/tubbySoundEngine';

export default function BabySun({
  expression = 'happy',
  comment = null,
  onEasterEgg = null,
  isFloating = true
}) {
  const [currentExpression, setCurrentExpression] = useState(expression);
  const [bubbleText, setBubbleText] = useState(comment);
  const [isWiggling, setIsWiggling] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);

  useEffect(() => {
    setCurrentExpression(expression);
    if (comment) {
      setBubbleText(comment);
    }
  }, [expression, comment]);

  const handleSunClick = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 900);

    const easterQuotes = [
      "Hi hi hi! Chi osa solleticare l'Astro Reale?",
      "Vedo tutto dall'alto! So cosa hai fatto ieri notte!",
      "È l'ora della Tubby Crema e delle scelte sbagliate!",
      "Ah-ha-ha-ha! Il tuo futuro è scritto nella marmellata!",
      "Non toccarmi la corona o faccio piovere Tubby Toast!",
      "Il Sole Bambino vede, giudica e ride di gusto!"
    ];

    const randomQuote = easterQuotes[easterEggCount % easterQuotes.length];
    setEasterEggCount(prev => prev + 1);
    setBubbleText(randomQuote);
    setCurrentExpression('laughing');

    soundEngine.playBabySunLaugh();

    if (onEasterEgg) {
      onEasterEgg(randomQuote);
    }
  };

  return (
    <div
      className={`z-40 select-none ${
        isFloating ? 'fixed top-3 right-3 sm:top-5 sm:right-6' : 'relative'
      } flex flex-col items-end pointer-events-auto`}
    >
      {/* Balloon del Fumetto / Commento */}
      {bubbleText && (
        <div className="relative mb-2 mr-2 max-w-[220px] sm:max-w-[280px] bg-white/95 backdrop-blur-sm border-2 border-amber-400 text-slate-800 text-xs sm:text-sm font-semibold p-2.5 sm:p-3 rounded-2xl shadow-xl animate-wobble transition-all">
          <p className="leading-snug text-amber-950">{bubbleText}</p>
          <div className="text-[10px] text-amber-600 font-bold mt-1 text-right">
            — Il Sole Bambino ☀️
          </div>
          {/* Coda del fumetto verso il sole */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r-2 border-b-2 border-amber-400 transform rotate-45" />
        </div>
      )}

      {/* Sole Interattivo SVG */}
      <button
        onClick={handleSunClick}
        title="Clicca per far ridere il Sole Bambino!"
        aria-label="Sole Bambino interattivo"
        className={`group relative outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
          isWiggling ? 'animate-bounce' : ''
        }`}
      >
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 drop-shadow-[0_0_25px_rgba(245,158,11,0.7)]">
          <svg viewBox="0 0 140 140" className="w-full h-full overflow-visible">
            {/* Raggi esterni rotanti */}
            <g className="animate-sun-spin-slow origin-center">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <path
                  key={deg}
                  d="M70 4 Q76 18 70 26 Q64 18 70 4 Z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="1.5"
                  transform={`rotate(${deg} 70 70)`}
                />
              ))}
            </g>

            {/* Raggi interni secondari */}
            <g className="animate-sun-spin-slow origin-center opacity-80" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
              {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
                <circle
                  key={deg}
                  cx="70"
                  cy="20"
                  r="4"
                  fill="#FBBF24"
                  transform={`rotate(${deg} 70 70)`}
                />
              ))}
            </g>

            {/* Disco Solare d'Oro */}
            <circle cx="70" cy="70" r="42" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3" />
            
            {/* Faccina Cicciotta da Bebè */}
            <circle cx="70" cy="70" r="34" fill="#FED7AA" />

            {/* Guance rosate */}
            <ellipse cx="53" cy="77" rx="6" ry="4" fill="#FB7185" fillOpacity="0.6" />
            <ellipse cx="87" cy="77" rx="6" ry="4" fill="#FB7185" fillOpacity="0.6" />

            {/* Occhi ed Espressioni Dinamiche */}
            {currentExpression === 'laughing' && (
              <>
                {/* Occhi chiusi ridenti a mezzaluna */}
                <path d="M52 64 Q60 55 68 64" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M72 64 Q80 55 88 64" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Bocca aperta ridente */}
                <path d="M57 75 Q70 95 83 75 Z" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />
                <path d="M63 76 Q70 82 77 76" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              </>
            )}

            {currentExpression === 'shocked' && (
              <>
                {/* Occhi sgranati */}
                <ellipse cx="58" cy="62" rx="7" ry="8" fill="#FFFFFF" stroke="#451A03" strokeWidth="2" />
                <ellipse cx="82" cy="62" rx="7" ry="8" fill="#FFFFFF" stroke="#451A03" strokeWidth="2" />
                <circle cx="58" cy="62" r="3.5" fill="#451A03" />
                <circle cx="82" cy="62" r="3.5" fill="#451A03" />
                {/* Bocca a O */}
                <ellipse cx="70" cy="80" rx="6" ry="8" fill="#7F1D1D" stroke="#451A03" strokeWidth="2" />
              </>
            )}

            {currentExpression === 'judging' && (
              <>
                {/* Occhi laterali sdegnosi */}
                <ellipse cx="58" cy="64" rx="6.5" ry="5.5" fill="#FFFFFF" stroke="#451A03" strokeWidth="1.8" />
                <ellipse cx="82" cy="64" rx="6.5" ry="5.5" fill="#FFFFFF" stroke="#451A03" strokeWidth="1.8" />
                <circle cx="54" cy="64" r="3.5" fill="#451A03" />
                <circle cx="78" cy="64" r="3.5" fill="#451A03" />
                {/* Sopracciglio alzato */}
                <path d="M76 56 Q83 50 90 55" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Smorfia di lato */}
                <path d="M62 80 Q72 76 80 82" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />
              </>
            )}

            {currentExpression === 'creepy' && (
              <>
                {/* Occhi furbetti e sorrisone esagerato */}
                <ellipse cx="58" cy="63" rx="7" ry="6" fill="#451A03" />
                <ellipse cx="82" cy="63" rx="7" ry="6" fill="#451A03" />
                <circle cx="60" cy="61" r="2.5" fill="#EF4444" />
                <circle cx="84" cy="61" r="2.5" fill="#EF4444" />
                <path d="M54 75 Q70 94 86 75" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </>
            )}

            {currentExpression === 'divine' && (
              <>
                {/* Beatitudine cosmica */}
                <path d="M52 64 Q60 58 68 64" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M72 64 Q80 58 88 64" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M60 76 Q70 86 80 76" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Corona luminosa */}
                <polygon points="56,36 63,26 70,36 77,26 84,36" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              </>
            )}

            {currentExpression === 'happy' && (
              <>
                {/* Occhi grandi ridenti standard */}
                <ellipse cx="58" cy="63" rx="6" ry="7" fill="#451A03" />
                <ellipse cx="82" cy="63" rx="6" ry="7" fill="#451A03" />
                <circle cx="56" cy="61" r="2.2" fill="#FFFFFF" />
                <circle cx="80" cy="61" r="2.2" fill="#FFFFFF" />
                {/* Dolce sorriso beato */}
                <path d="M58 75 Q70 87 82 75" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </>
            )}

            {/* Nasino piccolo */}
            <ellipse cx="70" cy="70" rx="2.5" ry="1.8" fill="#F472B6" />
          </svg>
        </div>
      </button>
    </div>
  );
}
