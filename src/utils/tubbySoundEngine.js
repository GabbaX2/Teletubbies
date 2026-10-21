// tubbySoundEngine.js - Audio Engine 100% Web Audio API + Web Speech API (nessun file esterno)

class TubbySoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.hasInteracted = false;
    
    // Carica stato muto da localStorage
    try {
      const saved = localStorage.getItem('tubby_test_muted');
      if (saved !== null) {
        this.isMuted = JSON.parse(saved);
      }
    } catch {
      this.isMuted = false;
    }

    this.listeners = new Set();
  }

  // Inizializza AudioContext al primo gesto dell'utente
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.hasInteracted = true;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.isMuted));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('tubby_test_muted', JSON.stringify(this.isMuted));
    } catch {
      // ignore
    }
    this.notify();

    // Se stiamo riattivando l'audio, facciamo un piccolo suono di conferma
    if (!this.isMuted) {
      this.playClick();
      this.speakTeletubby("Eh-Oh!");
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
    return this.isMuted;
  }

  // --- SINTESI VOCALE TELE-TUBBY (Web Speech API) ---
  speakTeletubby(phrase, customPitch = 1.85, customRate = 1.05) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) return;

    try {
      // Annulla eventuali frasi precedenti in coda
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.pitch = customPitch; // Voce acuta infantile / Teletubby
      utterance.rate = customRate;
      utterance.volume = 0.95;

      // Cerca una voce italiana
      const voices = window.speechSynthesis.getVoices();
      const italianVoice = voices.find(v => v.lang.startsWith('it')) || voices[0];
      if (italianVoice) {
        utterance.voice = italianVoice;
      }
      utterance.lang = 'it-IT';

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("SpeechSynthesis error:", err);
    }
  }

  // --- SUONI PROCEDURALI (Web Audio API) ---

  // 1. Risata acuta e psichedelica del Sole Bambino
  playBabySunLaugh() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const mod = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();

    // LFO per effetto gorgoglio/risatina
    mod.frequency.setValueAtTime(14, t);
    mod.type = 'sine';
    modGain.gain.setValueAtTime(120, t);

    mod.connect(osc.frequency);

    osc.type = 'triangle';
    // Arpeggio di risatine a scalare
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(1400, t + 0.15);
    osc.frequency.exponentialRampToValueAtTime(950, t + 0.3);
    osc.frequency.exponentialRampToValueAtTime(1600, t + 0.45);
    osc.frequency.exponentialRampToValueAtTime(850, t + 0.65);
    osc.frequency.exponentialRampToValueAtTime(1800, t + 0.85);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 1.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    mod.start(t);
    osc.start(t);
    mod.stop(t + 1.15);
    osc.stop(t + 1.15);

    // Accompagnamento vocale facoltativo
    setTimeout(() => {
      this.speakTeletubby("Hi hi hi!", 2.0, 1.2);
    }, 250);
  }

  // 2. Risucchio folle e comico di Noo-Noo (Aspirapolvere)
  playNooNooSuction() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 1.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1; // Rumore bianco
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Filtro risonante passa-banda che sale (sluuuuurp!)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(8, t);
    filter.frequency.setValueAtTime(150, t);
    filter.frequency.exponentialRampToValueAtTime(1800, t + 0.9);
    filter.frequency.exponentialRampToValueAtTime(300, t + 1.15);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

    // Secondo oscillatore per il "motore"
    const motor = this.ctx.createOscillator();
    motor.type = 'sawtooth';
    motor.frequency.setValueAtTime(80, t);
    motor.frequency.linearRampToValueAtTime(180, t + 0.8);
    motor.frequency.linearRampToValueAtTime(50, t + 1.2);

    const motorGain = this.ctx.createGain();
    motorGain.gain.setValueAtTime(0.12, t);
    motorGain.gain.linearRampToValueAtTime(0.001, t + 1.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    motor.connect(motorGain);
    motorGain.connect(this.ctx.destination);

    noise.start(t);
    motor.start(t);
    noise.stop(t + 1.2);
    motor.stop(t + 1.2);

    // Suono "slurp" finale
    setTimeout(() => {
      this.playCustardSplash();
    }, 700);
  }

  // 3. Sirena / Tromba del megafono che spunta dal prato ("È L'ORA DEI TELE TUBBIES!")
  playSpeakerMegaphone() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [
      { f: 392.00, dur: 0.15 }, // G4
      { f: 523.25, dur: 0.15 }, // C5
      { f: 659.25, dur: 0.15 }, // E5
      { f: 783.99, dur: 0.45 }, // G5 (tenuta)
    ];

    let currentOffset = 0;
    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Suono metallico megafono tipo tromba da prato
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.f, t + currentOffset);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, t + currentOffset);
      filter.Q.setValueAtTime(3.5, t + currentOffset);

      gain.gain.setValueAtTime(0.01, t + currentOffset);
      gain.gain.linearRampToValueAtTime(0.2, t + currentOffset + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + currentOffset + note.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + currentOffset);
      osc.stop(t + currentOffset + note.dur);

      currentOffset += note.dur * 0.95;
    });

    setTimeout(() => {
      this.speakTeletubby("È l'ora dei Teletubbies!", 1.4, 0.95);
    }, 750);
  }

  // 4. Splash / Schizzo comico di Tubby Crema
  playCustardSplash() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    // Curva rapida discendente con squelch
    osc.frequency.setValueAtTime(700, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.28);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.3);
  }

  // 5. Salto del Tubby Toast (pop tostapane giocoso)
  playTubbyToastPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.12);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.25);
  }

  // 6. Jingle finale di vittoria / diagnosi pronta!
  playVictoryJingle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const chord = [
      { f: 523.25, time: 0 },    // C5
      { f: 659.25, time: 0.12 }, // E5
      { f: 783.99, time: 0.24 }, // G5
      { f: 1046.50, time: 0.36 },// C6
      { f: 1318.51, time: 0.48 } // E6
    ];

    chord.forEach(({ f, time }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t + time);

      gain.gain.setValueAtTime(0.18, t + time);
      gain.gain.exponentialRampToValueAtTime(0.001, t + time + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + time);
      osc.stop(t + time + 0.5);
    });

    setTimeout(() => {
      this.speakTeletubby("Tubby Ciao-Ciao!", 1.9, 1.1);
    }, 650);
  }

  // 7. Click leggero per bottoni e opzioni
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  // 8. Bip sintonizzazione antenna CRT
  playScanBeep(pitch = 440) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pitch, t);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.12);
  }
}

export const soundEngine = new TubbySoundEngine();
export default soundEngine;
