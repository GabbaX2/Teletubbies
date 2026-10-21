// ResultScreen.jsx - Certificato Clinico Ufficiale & Condivisione WhatsApp
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Share2, 
  Copy, 
  Check, 
  RotateCcw, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Users, 
  ExternalLink,
  Printer
} from 'lucide-react';
import TeletubbyAvatar from './TeletubbyAvatar';
import { ARCHETYPES } from '../data/archetypes';
import soundEngine from '../utils/tubbySoundEngine';

export default function ResultScreen({
  archetypeId,
  userName,
  isSharedView = false,
  onRestartTest
}) {
  const [copied, setCopied] = useState(false);
  const archetype = ARCHETYPES[archetypeId] || ARCHETYPES['tinky-winky'];
  const certRef = useRef(null);

  useEffect(() => {
    // Spara i coriandoli all'apertura del certificato
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7E22CE', '#65A30D', '#EAB308', '#DC2626', '#0284C7', '#F59E0B']
      });
    } catch {
      // ignore
    }

    // Voce di annuncio
    soundEngine.speakTeletubby(archetype.name + "! " + archetype.quote);
  }, [archetype]);

  // Genera URL di condivisione permanente
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(userName || 'Amico')}&type=${archetype.id}`
    : '';

  const shareText = `🚨 DIAGNOSI UFFICIALE ISTA!\nSecondo l'Istituto Superiore di Teletubbologia, ${userName ? `*${userName}*` : 'il sottoscritto'} è ufficialmente *${archetype.name.toUpperCase()}* (${archetype.code})!\n\n"${archetype.title}"\n\n🔮 Scopri anche tu che Teletubby sei nel nostro gruppo di amici:\n${shareUrl}`;

  const handleShareWhatsApp = () => {
    soundEngine.playTubbyToastPop();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = async () => {
    soundEngine.playClick();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Errore copia appunti:', err);
    }
  };

  const handlePrint = () => {
    soundEngine.playClick();
    window.print();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8 space-y-6">
      
      {/* Banner se si sta visualizzando il risultato condiviso da un amico */}
      {isSharedView && (
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 rounded-2xl p-4 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-bounce">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-black tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
              Certificato Condiviso
            </span>
            <p className="font-extrabold text-sm sm:text-base mt-1">
              Stai visualizzando il referto ufficiale di <span className="underline">{userName}</span>!
            </p>
          </div>
          <button
            onClick={onRestartTest}
            className="px-5 py-2.5 rounded-xl bg-white text-purple-900 font-black text-xs sm:text-sm shadow-md hover:bg-amber-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            🔮 Fai anche tu il Test!
          </button>
        </div>
      )}

      {/* CARD CERTIFICATO UFFICIALE (Stampabile / Condivisibile) */}
      <div 
        ref={certRef}
        className="bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl border-4 relative overflow-hidden space-y-6 select-none"
        style={{ borderColor: archetype.color }}
      >
        {/* Timbro Ufficiale Ist. Teletubbologia sullo sfondo */}
        <div className="absolute top-8 right-6 sm:right-10 pointer-events-none opacity-20 sm:opacity-30 transform rotate-12">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-dashed border-red-700 flex flex-col items-center justify-center p-2 text-center text-red-700 font-mono font-black">
            <span className="text-[9px] sm:text-[11px] uppercase tracking-widest">ISTITUTO SUPERIORE</span>
            <span className="text-xs sm:text-sm font-black my-0.5">TELETUBBOLOGIA</span>
            <span className="text-[8px] sm:text-[10px] bg-red-700 text-white px-2 py-0.5 rounded">OMOLOGATO</span>
            <span className="text-[8px] sm:text-[9px] mt-1">REG. 1997-2026</span>
          </div>
        </div>

        {/* Intestazione Certificato */}
        <div className="border-b-2 border-slate-200 pb-5">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
            <Award className="w-4 h-4 text-amber-500" />
            Certificato Diagnostico Ufficiale DSM-Tubby • ISTA
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            Referto Psico-Tubby di <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">{userName || "Paziente #01"}</span>
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Rilasciato a Teletubbylandia in data odierna • Valido per la giustificazione delle serate
          </p>
        </div>

        {/* Corpo Principale del Certificato */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Avatar Personaggio con Antennina */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <TeletubbyAvatar type={archetype.id} size="lg" />
            </div>
            
            <div 
              className="mt-3 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-sm"
              style={{ backgroundColor: archetype.color }}
            >
              {archetype.code}
            </div>

            <h2 className="text-xl font-black text-slate-900 mt-2">
              {archetype.name}
            </h2>
            <p className="text-xs font-bold text-slate-600">
              {archetype.title}
            </p>
            <span className="text-[10px] text-slate-500 font-semibold mt-1">
              Rarità: {archetype.rarity}
            </span>
          </div>

          {/* Dettagli e Descrizione Clinica */}
          <div className="md:col-span-7 space-y-3.5">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                Diagnosi Psico-Comportamentale:
              </span>
              <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed mt-1.5">
                {archetype.description}
              </p>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200">
              <span className="text-xs font-black text-amber-900 block">
                👜 Oggetto Feticcio d'Ordinanza:
              </span>
              <span className="text-xs text-amber-800 font-medium">
                {archetype.fetishItem}
              </span>
            </div>

            <div className="p-3 bg-rose-50/80 rounded-xl border border-rose-200">
              <span className="text-xs font-black text-rose-900 block">
                💊 Prescrizione Terapeutica:
              </span>
              <span className="text-xs text-rose-800 font-medium">
                {archetype.therapy}
              </span>
            </div>
          </div>

        </div>

        {/* 4 Barre Statistiche Cliniche (0-100%) */}
        <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500" />
            Parametri Biometrici e Indicatori di Rischio:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Livello di Caos */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>🔥 Livello di Caos Primordiale:</span>
                <span>{archetype.stats.caos}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-600 transition-all duration-1000"
                  style={{ width: `${archetype.stats.caos}%` }}
                />
              </div>
            </div>

            {/* Dipendenza da Tubby Crema */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>🥣 Dipendenza da Tubby Crema:</span>
                <span>{archetype.stats.crema}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-pink-500 transition-all duration-1000"
                  style={{ width: `${archetype.stats.crema}%` }}
                />
              </div>
            </div>

            {/* Pericolosità Sociale */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>⚠️ Pericolosità Sociale & WhatsApp:</span>
                <span>{archetype.stats.danger}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-rose-600 transition-all duration-1000"
                  style={{ width: `${archetype.stats.danger}%` }}
                />
              </div>
            </div>

            {/* Resistenza a Noo-Noo */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>🧹 Tolleranza all'Aspirapolvere Noo-Noo:</span>
                <span>{archetype.stats.nooNooResistance}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-sky-500 transition-all duration-1000"
                  style={{ width: `${archetype.stats.nooNooResistance}%` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Affinità nel Gruppo di Amici */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-start gap-2.5">
            <span className="text-xl">🍻</span>
            <div>
              <span className="text-xs font-black uppercase text-emerald-900 block">
                Migliore Amico di Sbronze:
              </span>
              <p className="text-xs text-emerald-800 font-medium">
                {archetype.affinities.bestFriend}
              </p>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl flex items-start gap-2.5">
            <span className="text-xl">💣</span>
            <div>
              <span className="text-xs font-black uppercase text-rose-900 block">
                Chi ti farà Esaurire il Sistema Nervoso:
              </span>
              <p className="text-xs text-rose-800 font-medium">
                {archetype.affinities.worstEnemy}
              </p>
            </div>
          </div>
        </div>

        {/* Firma Commissione Scientifica */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            Firma Direttore: <span className="font-bold text-slate-800">Dott. Altoparlante del Prato</span>
          </div>
          <div>
            Codice Fiscale Tubby: <span className="font-bold text-slate-800">CUSTARD97-TUBBY-01</span>
          </div>
        </div>

      </div>

      {/* BOTTONI AZIONE: WHATSAPP, COPIA LINK, RESTART */}
      <div className="space-y-3">
        
        {/* Tasto Gigante Condividi su WhatsApp */}
        <button
          onClick={handleShareWhatsApp}
          className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-3"
        >
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>📲 Condividi il tuo risultato su WhatsApp</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Tasto Copia Link */}
          <button
            onClick={handleCopyLink}
            className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-black">Link Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>📋 Copia Link</span>
              </>
            )}
          </button>

          {/* Tasto Stampa Certificato */}
          <button
            onClick={handlePrint}
            className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>🖨️ Stampa Referto</span>
          </button>

          {/* Tasto Rifai il Test */}
          <button
            onClick={() => {
              soundEngine.playTubbyToastPop();
              onRestartTest();
            }}
            className="py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 border-2 border-purple-300 text-purple-900 font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-purple-700" />
            <span>🔄 Rifai il Test</span>
          </button>

        </div>

      </div>

    </div>
  );
}
