// QuizScreen.jsx - Il Quiz Psicometrico con Barra Tubby Toast & Reazioni Dinamiche
import React, { useState } from 'react';
import { Sparkles, ArrowLeft, Check, HelpCircle } from 'lucide-react';
import { QUESTIONS } from '../data/questions';
import soundEngine from '../utils/tubbySoundEngine';

export default function QuizScreen({
  currentQuestionIndex,
  answers,
  onSelectAnswer,
  onPreviousQuestion,
  userName
}) {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const currentQ = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;

  const handleOptionClick = (option) => {
    setSelectedOptionId(option.id);

    // Esegui suono specifico o predefinito
    if (option.sunReaction?.sound === 'suction') {
      soundEngine.playNooNooSuction();
    } else if (option.sunReaction?.sound === 'custard') {
      soundEngine.playCustardSplash();
    } else if (option.sunReaction?.sound === 'laugh') {
      soundEngine.playBabySunLaugh();
    } else if (option.sunReaction?.sound === 'megaphone') {
      soundEngine.playSpeakerMegaphone();
    } else {
      soundEngine.playTubbyToastPop();
    }

    if (option.sunReaction?.speech) {
      soundEngine.speakTeletubby(option.sunReaction.speech);
    }

    // Breve timeout per micro-animazione e passaggio alla domanda successiva
    setTimeout(() => {
      onSelectAnswer(option);
      setSelectedOptionId(null);
    }, 450);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8 space-y-6">
      
      {/* Barra di Avanzamento con Tubby Toast */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-amber-300">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-700 font-black">🍞 Avanzamento Tubby Toast:</span>
            <span className="text-slate-500">
              Quesito {currentQuestionIndex + 1} di {totalQuestions}
            </span>
          </div>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-xs font-black">
            {Math.round(((currentQuestionIndex) / totalQuestions) * 100)}% Completato
          </span>
        </div>

        {/* 8 Fette di Tubby Toast Sorridenti */}
        <div className="grid grid-cols-8 gap-1.5 sm:gap-3">
          {QUESTIONS.map((q, idx) => {
            const isCompleted = idx < currentQuestionIndex;
            const isCurrent = idx === currentQuestionIndex;

            return (
              <div
                key={q.id}
                className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl transition-all ${
                  isCompleted
                    ? 'bg-amber-500 text-white shadow-md scale-100'
                    : isCurrent
                    ? 'bg-amber-100 border-2 border-amber-500 shadow-lg scale-110 animate-bounce'
                    : 'bg-slate-100/70 opacity-40 border border-slate-200'
                }`}
                title={`Domanda ${idx + 1}`}
              >
                {/* SVG Tubby Toast con Faccina */}
                <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-8 sm:h-8">
                  <rect
                    x="15"
                    y="18"
                    width="70"
                    height="68"
                    rx="18"
                    fill={isCompleted ? "#D97706" : isCurrent ? "#F59E0B" : "#CBD5E1"}
                    stroke={isCompleted ? "#78350F" : isCurrent ? "#B45309" : "#94A3B8"}
                    strokeWidth="7"
                  />
                  {/* Occhi del Toast */}
                  <circle
                    cx="38"
                    cy="45"
                    r="6"
                    fill={isCompleted ? "#FFFFFF" : isCurrent ? "#78350F" : "#64748B"}
                  />
                  <circle
                    cx="62"
                    cy="45"
                    r="6"
                    fill={isCompleted ? "#FFFFFF" : isCurrent ? "#78350F" : "#64748B"}
                  />
                  {/* Sorriso del Toast */}
                  <path
                    d="M34 60 Q50 78 66 60"
                    stroke={isCompleted ? "#FFFFFF" : isCurrent ? "#78350F" : "#64748B"}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[9px] sm:text-[10px] font-black mt-0.5">
                  #{idx + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scheda Domanda Principale */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative transition-all">
        
        {/* Header Domanda */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="bg-purple-700 text-white font-black text-xs px-2.5 py-1 rounded-md tracking-wider">
              {currentQ.code}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide">
              {currentQ.category}
            </span>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Paziente: <span className="font-bold text-slate-800">{userName || "Anonimo"}</span>
          </div>
        </div>

        {/* Titolo e Sottotitolo */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-2">
          {currentQ.question}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6 italic">
          💡 {currentQ.subtitle}
        </p>

        {/* Opzioni di Risposta */}
        <div className="space-y-3 sm:space-y-3.5">
          {currentQ.options.map((opt, i) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleOptionClick(opt)}
                disabled={selectedOptionId !== null}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all group flex items-start gap-3.5 select-none ${
                  isSelected
                    ? 'bg-amber-100 border-amber-500 ring-4 ring-amber-300 scale-[1.02]'
                    : 'bg-white hover:bg-amber-50/60 border-slate-200 hover:border-amber-400 hover:shadow-md'
                }`}
              >
                {/* Lettera Opzione */}
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 group-hover:bg-amber-200 text-slate-700'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {opt.tag}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {opt.text}
                  </p>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center animate-ping">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Navigazione */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          {currentQuestionIndex > 0 ? (
            <button
              onClick={() => {
                soundEngine.playClick();
                onPreviousQuestion();
              }}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Quesito Precedente
            </button>
          ) : (
            <div />
          )}

          <div className="text-[11px] text-slate-500 font-semibold italic flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            Il Sole Bambino sta valutando le tue risposte...
          </div>
        </div>

      </div>

    </div>
  );
}
