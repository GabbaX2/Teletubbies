// CRTScreen.jsx - Schermata di Calcolo "Scansione Tubby-Pancia CRT"
import React, { useState, useEffect } from 'react';
import soundEngine from '../utils/tubbySoundEngine';

const SCAN_MESSAGES = [
  "Sintonizzazione antenna cerebrale a 860 MHz...",
  "Calcolo percentuale di Tubby Crema nel flusso sanguigno...",
  "Interrogazione satellite del Sole Bambino...",
  "Verifica precedenti penali sul monopattino di Po...",
  "Scansione oggetti contundenti nella borsetta di Tinky Winky...",
  "Analisi microclima sotto il cappello muccato di Dipsy...",
  "Controllo filtri e ratti aspirati da Noo-Noo...",
  "Generazione Certificato Psico-Tubby Ufficiale..."
];

export default function CRTScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Esegui suono periodico di sintonizzazione frequenza CRT
    soundEngine.playScanBeep(520);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.2;
        if (next >= 100) {
          clearInterval(interval);
          soundEngine.playVictoryJingle();
          setTimeout(onComplete, 400);
          return 100;
        }

        // Cambia messaggio ogni ~15%
        const newMsgIdx = Math.min(
          Math.floor((next / 100) * SCAN_MESSAGES.length),
          SCAN_MESSAGES.length - 1
        );
        setMessageIndex(newMsgIdx);

        // Bip casuale di scansione
        if (Math.random() < 0.2) {
          soundEngine.playScanBeep(400 + Math.random() * 300);
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center justify-center animate-in fade-in select-none">
      
      {/* TV a Tubo Catodico (Stile Schermo della Pancia dei Teletubbies) */}
      <div className="relative w-full max-w-lg bg-slate-800 rounded-[40px] p-6 sm:p-8 shadow-2xl border-8 border-slate-700">
        
        {/* Antenne doppie sulla TV */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-12 pointer-events-none">
          <div className="w-1.5 h-14 bg-slate-400 rotate-[-25deg] origin-bottom rounded-full" />
          <div className="w-1.5 h-14 bg-slate-400 rotate-[25deg] origin-bottom rounded-full" />
        </div>

        {/* Schermo Curvo Interno con Effetto CRT e Scanlines */}
        <div className="relative aspect-video w-full bg-emerald-950 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-inner flex flex-col items-center justify-center p-6 text-center">
          
          {/* Scanlines animate */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-70 animate-crt-scan" />
          {/* Vignette CRT curvatura bordi */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-10" />

          {/* Bagliore verde fosfori */}
          <div className="relative z-20 space-y-4 w-full">
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 text-emerald-300 font-mono text-xs uppercase px-3 py-1 rounded-md border border-emerald-500/40">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SISTEMA DIAGNOSTICO TELE-BELLY v2.0</span>
            </div>

            {/* Radar / Segnale */}
            <div className="w-14 h-14 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/40 animate-ping" />
              <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Messaggio dinamico */}
            <div className="min-h-[48px] flex items-center justify-center">
              <p className="font-mono text-xs sm:text-sm text-emerald-300 tracking-wide font-bold animate-pulse">
                {SCAN_MESSAGES[messageIndex]}
              </p>
            </div>

            {/* Barra di avanzamento verde fosforo */}
            <div className="w-full max-w-xs mx-auto bg-emerald-950/80 rounded-full h-4 border border-emerald-500/50 p-0.5 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-75 shadow-[0_0_12px_#34D399]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="font-mono text-[11px] text-emerald-400/80 font-bold">
              {Math.round(progress)}% COMPLETATO
            </div>
          </div>
        </div>

        {/* Dettagli Hardware TV: Manopole e Griglia Altoparlante */}
        <div className="mt-5 flex items-center justify-between px-3">
          {/* Marchio TV */}
          <span className="font-bold text-xs text-slate-400 tracking-wider uppercase font-mono">
            TUBBY-VISION 1997
          </span>

          {/* Manopole del canale e volume */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-500 shadow flex items-center justify-center">
              <div className="w-1 h-3 bg-slate-300 rounded-full" />
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-500 shadow flex items-center justify-center">
              <div className="w-1 h-3 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
