// HomeScreen.jsx - Schermata Principale dell'Istituto di Teletubbologia
import React, { useState } from 'react';
import { 
  Sparkles, 
  Dice5, 
  ArrowRight, 
  Volume2, 
  Megaphone, 
  Waves, 
  Smile, 
  CheckCircle2, 
  FileText,
  ShieldAlert,
  Flame
} from 'lucide-react';
import TeletubbyAvatar from './TeletubbyAvatar';
import { ARCHETYPES } from '../data/archetypes';
import soundEngine from '../utils/tubbySoundEngine';

const RANDOM_NICKNAMES = [
  "Paziente Tubby #49",
  "Soggetto Alpha-Crema",
  "Dottor Toast Imburrato",
  "Cavia da Laboratorio #12",
  "Barone della Tubby Crema",
  "Pilota Clandestino di Po",
  "Custode della Borsetta Rossa",
  "Discepolo del Cappello Muccato",
  "Vittima dell'Aspirapolvere"
];

export default function HomeScreen({ userName, setUserName, onStartQuiz, onSelectSunReaction }) {
  const [selectedArchetypeModal, setSelectedArchetypeModal] = useState(null);
  const [nameError, setNameError] = useState(false);

  const handleRandomName = () => {
    soundEngine.playTubbyToastPop();
    const random = RANDOM_NICKNAMES[Math.floor(Math.random() * RANDOM_NICKNAMES.length)];
    setUserName(random);
    setNameError(false);
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      setNameError(true);
      soundEngine.playCustardSplash();
      if (onSelectSunReaction) {
        onSelectSunReaction({
          comment: "Eh no! Serve il tuo nome o codice paziente per la cartella clinica!",
          expression: "shocked",
          sound: "click",
          speech: "Inserisci il tuo nome!"
        });
      }
      return;
    }

    setNameError(false);
    soundEngine.playVictoryJingle();
    soundEngine.speakTeletubby("Eh-Oh! Iniziamo!");
    onStartQuiz();
  };

  const handleSoundboard = (type) => {
    switch (type) {
      case 'speaker':
        soundEngine.playSpeakerMegaphone();
        if (onSelectSunReaction) {
          onSelectSunReaction({
            comment: "È L'ORA DEI TELE TUBBIES! Spunta la tromba dal prato!",
            expression: "happy",
            sound: "megaphone",
            speech: "È l'ora dei Teletubbies!"
          });
        }
        break;
      case 'custard':
        soundEngine.playCustardSplash();
        soundEngine.speakTeletubby("È l'ora della Tubby Crema!", 1.9, 1.1);
        if (onSelectSunReaction) {
          onSelectSunReaction({
            comment: "SPLAT! Crema rosa dappertutto sul pavimento!",
            expression: "laughing",
            sound: "custard"
          });
        }
        break;
      case 'noo-noo':
        soundEngine.playNooNooSuction();
        soundEngine.speakTeletubby("Noo-Noo!", 1.2, 0.9);
        if (onSelectSunReaction) {
          onSelectSunReaction({
            comment: "SLUUUUURP! Noo-Noo sta risucchiando tutto!",
            expression: "creepy",
            sound: "suction"
          });
        }
        break;
      case 'sun':
        soundEngine.playBabySunLaugh();
        if (onSelectSunReaction) {
          onSelectSunReaction({
            comment: "Ah-ha-ha-ha! Rido delle vostre disgrazie quotidiane!",
            expression: "laughing",
            sound: "laugh"
          });
        }
        break;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-10">
      
      {/* Hero Section Card */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-300 relative overflow-hidden transition-all">
        {/* Nastro Ufficiale / Protocollo Clinico */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-md mb-5">
          <Sparkles className="w-4 h-4 animate-spin" />
          Test Psicometrico Ufficiale ISTA-2026
        </div>

        {/* Titolo Principale Satirico */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
          Scopri quale <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">Teletubby</span> si nasconde nella tua psiche
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">
          Dietro ai sorrisi e alla Tubby Crema si celano <strong className="text-slate-800">6 archetipi umani clinici</strong> scientificamente provati. Scopri chi sei davvero nel tuo gruppo di amici e perché ti sopportano ancora.
        </p>

        {/* Form Paziente & CTA Gigante */}
        <form onSubmit={handleStart} className="space-y-5 max-w-xl">
          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
              🏷️ Nome o Soprannome del Paziente:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (nameError) setNameError(false);
                }}
                placeholder="Es. Marco il Demone, Giulia Drama..."
                maxLength={32}
                className={`flex-1 px-4 py-3 sm:py-3.5 rounded-2xl bg-amber-50/70 border-2 text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-200 transition-all ${
                  nameError ? 'border-rose-500 ring-2 ring-rose-200' : 'border-amber-300 focus:border-amber-500'
                }`}
              />
              <button
                type="button"
                onClick={handleRandomName}
                title="Genera nome assurdo casuale"
                className="px-3.5 sm:px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded-2xl border-2 border-amber-300 flex items-center gap-1.5 transition-colors shadow-sm text-xs sm:text-sm"
              >
                <Dice5 className="w-5 h-5 text-amber-700" />
                <span className="hidden sm:inline">Casuale</span>
              </button>
            </div>
            {nameError && (
              <p className="text-xs text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Inserisci un nome prima di avviare l'analisi psicometrica!
              </p>
            )}
          </div>

          {/* Bottone CTA Gigante Animato */}
          <button
            type="submit"
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 p-1 font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-transparent">
              <span className="text-lg sm:text-2xl tracking-wide uppercase font-black drop-shadow-md">
                🔮 INIZIA L'ANALISI PSICO-TUBBY
              </span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </button>
        </form>

        {/* Note scientifiche a fondo card */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>8 Domande Psicometriche Calibrate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100% Client-Side (Zero Dati Raccolti)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Condivisione Immediata WhatsApp</span>
          </div>
        </div>
      </section>

      {/* Mini-Soundboard Interattiva */}
      <section className="bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg border-2 border-emerald-400">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-800">
              Mini-Soundboard di Teletubbylandia
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
            Web Audio Sintetizzato
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => handleSoundboard('speaker')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <Megaphone className="w-6 h-6 text-slate-700" />
            <span>📣 Altoparlante</span>
          </button>

          <button
            onClick={() => handleSoundboard('custard')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-pink-100 hover:bg-pink-200 border border-pink-300 text-pink-900 font-bold text-xs sm:text-sm gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <Waves className="w-6 h-6 text-pink-600" />
            <span>🥣 Tubby Crema</span>
          </button>

          <button
            onClick={() => handleSoundboard('noo-noo')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-sky-100 hover:bg-sky-200 border border-sky-300 text-sky-900 font-bold text-xs sm:text-sm gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-black">
              NN
            </div>
            <span>🧹 Noo-Noo</span>
          </button>

          <button
            onClick={() => handleSoundboard('sun')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 font-bold text-xs sm:text-sm gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <Smile className="w-6 h-6 text-amber-600" />
            <span>👶 Sole Bambino</span>
          </button>
        </div>
      </section>

      {/* Griglia "I 6 Archetipi Clinici" */}
      <section className="space-y-4">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            I 6 Archetipi della Psiche Teletubbica
          </h2>
          <p className="text-sm text-slate-700 font-medium">
            Classificazione diagnostica secondo il Manuale DSM-Tubby (Edizione 2026). Clicca una carta per visualizzare i dettagli clinici.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(ARCHETYPES).map((arch) => (
            <div
              key={arch.id}
              onClick={() => {
                soundEngine.playClick();
                setSelectedArchetypeModal(arch);
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border-2 hover:border-slate-800 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              style={{ borderColor: arch.color }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md text-white shadow-sm"
                    style={{ backgroundColor: arch.color }}
                  >
                    {arch.code}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">
                    Antenna: {arch.antennaType}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <TeletubbyAvatar type={arch.id} size="md" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                      {arch.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-600">
                      {arch.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs italic text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-3">
                  "{arch.motto}"
                </p>
              </div>

              <div className="text-[11px] font-bold text-purple-700 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                <span>Vedi Cartella Clinica</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Dettagli Archetipo Clinico */}
      {selectedArchetypeModal && (
        <div 
          onClick={() => setSelectedArchetypeModal(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 max-h-[90vh] overflow-y-auto space-y-4"
            style={{ borderColor: selectedArchetypeModal.color }}
          >
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-3">
                <TeletubbyAvatar type={selectedArchetypeModal.id} size="sm" />
                <div>
                  <h3 className="text-xl font-black text-slate-900">{selectedArchetypeModal.name}</h3>
                  <p className="text-xs font-bold text-slate-500">{selectedArchetypeModal.code} • {selectedArchetypeModal.title}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedArchetypeModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed">{selectedArchetypeModal.description}</p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-900">👜 Oggetto Feticcio:</div>
                <div className="text-slate-600">{selectedArchetypeModal.fetishItem}</div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-900">💊 Terapia Prescritta:</div>
                <div className="text-slate-600">{selectedArchetypeModal.therapy}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold pt-2">
                <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                  <span className="block font-bold">Miglior Amico:</span>
                  <span>{selectedArchetypeModal.affinities.bestFriend}</span>
                </div>
                <div className="p-2 bg-rose-50 text-rose-800 rounded-lg border border-rose-200">
                  <span className="block font-bold">Nemico Giurato:</span>
                  <span>{selectedArchetypeModal.affinities.worstEnemy}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedArchetypeModal(null)}
              className="w-full py-2.5 rounded-xl text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: selectedArchetypeModal.color }}
            >
              Chiudi Cartella
            </button>
          </div>
        </div>
      )}

      {/* Footer Disclaimer Satirico */}
      <footer className="text-center text-xs text-slate-700 pt-6 border-t border-white/40 space-y-1 select-none">
        <p className="font-bold">
          © 2026 TubbyTest.it — Istituto Superiore di Teletubbologia Applicata (ISTA)
        </p>
        <p className="text-[11px] text-slate-600 max-w-xl mx-auto">
          Progetto satirico indipendente e parodia psicometrica. Nessun Teletubby o aspirapolvere senziente è stato maltrattato per la formulazione dei quesiti. Tubby Crema e Tubby Toast sono marchi registrati dell'inconscio collettivo.
        </p>
      </footer>

    </div>
  );
}
