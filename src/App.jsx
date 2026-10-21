// App.jsx - Single Page Application "TubbyTest.it"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import HillsBackground from './components/HillsBackground';
import BabySun from './components/BabySun';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import CRTScreen from './components/CRTScreen';
import ResultScreen from './components/ResultScreen';
import { ARCHETYPES } from './data/archetypes';
import soundEngine from './utils/tubbySoundEngine';

export default function App() {
  const [screen, setScreen] = useState('home'); // 'home' | 'quiz' | 'crt' | 'result'
  const [userName, setUserName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState({
    'tinky-winky': 0,
    'dipsy': 0,
    'laa-laa': 0,
    'po': 0,
    'noo-noo': 0,
    'sun-god': 0,
  });
  const [resultArchetypeId, setResultArchetypeId] = useState('tinky-winky');
  const [isSharedView, setIsSharedView] = useState(false);

  // Stato dinamico del Sole Bambino
  const [sunState, setSunState] = useState({
    expression: 'happy',
    comment: "Eh-Oh! Cliccami per solleticarmi i raggi o fai il test!"
  });

  // 1. Controlla parametri URL all'avvio (?user=Nome&type=archetipo)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const userParam = params.get('user');
      const typeParam = params.get('type');

      if (typeParam && ARCHETYPES[typeParam]) {
        setUserName(userParam ? decodeURIComponent(userParam) : 'Amico');
        setResultArchetypeId(typeParam);
        setIsSharedView(true);
        setScreen('result');
        setSunState({
          expression: 'divine',
          comment: `Referto di ${userParam || 'questo amico'}! Tu che Teletubby sei?`
        });
      }
    } catch (err) {
      console.warn("Errore lettura parametri URL:", err);
    }
  }, []);

  // Avvia il Quiz dalla Home
  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScores({
      'tinky-winky': 0,
      'dipsy': 0,
      'laa-laa': 0,
      'po': 0,
      'noo-noo': 0,
      'sun-god': 0,
    });
    setScreen('quiz');
    setSunState({
      expression: 'happy',
      comment: `Benvenuto all'esame, ${userName}! Rispondi con sincerità...`
    });
  };

  // Selezione Risposta in QuizScreen
  const handleSelectAnswer = (option) => {
    // 1. Aggiorna punteggi
    const newScores = { ...scores };
    if (option.scores) {
      Object.entries(option.scores).forEach(([arch, points]) => {
        newScores[arch] = (newScores[arch] || 0) + points;
      });
    }
    setScores(newScores);

    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    // 2. Reazione del Sole Bambino
    if (option.sunReaction) {
      setSunState({
        expression: option.sunReaction.expression || 'happy',
        comment: option.sunReaction.comment || null
      });
    }

    // 3. Verifica se ci sono altre domande o se passare al calcolo CRT
    if (currentQuestionIndex + 1 < 8) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calcola vincitore prima della scansione
      calculateAndSetResult(newScores);
      setScreen('crt');
      setSunState({
        expression: 'shocked',
        comment: "Analisi completata! Scansione pancia CRT in corso!"
      });
    }
  };

  // Navigazione domanda precedente
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      // Rimuovi l'ultima risposta data
      setAnswers(prev => prev.slice(0, -1));
    }
  };

  // Calcolo dell'archetipo vincente
  const calculateAndSetResult = (finalScores) => {
    let winningId = 'tinky-winky';
    let highestScore = -1;

    Object.entries(finalScores).forEach(([archId, score]) => {
      if (score > highestScore) {
        highestScore = score;
        winningId = archId;
      }
    });

    setResultArchetypeId(winningId);

    // Aggiorna l'URL senza ricaricare la pagina
    try {
      const newUrl = `${window.location.pathname}?user=${encodeURIComponent(userName || 'Paziente')}&type=${winningId}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    } catch {
      // ignore
    }
  };

  // Scansione CRT completata -> Mostra Risultato
  const handleCRTComplete = () => {
    setScreen('result');
    setIsSharedView(false);
    setSunState({
      expression: 'laughing',
      comment: "Ecco il tuo certificato ufficiale! Guardati e vergognati!"
    });
  };

  // Riavvia il Test
  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScores({
      'tinky-winky': 0,
      'dipsy': 0,
      'laa-laa': 0,
      'po': 0,
      'noo-noo': 0,
      'sun-god': 0,
    });
    setIsSharedView(false);
    setScreen('home');
    setSunState({
      expression: 'happy',
      comment: "Ancora, ancora! Facciamo un altro test!"
    });

    // Pulisci i parametri URL
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between font-sans selection:bg-pink-300">
      
      {/* Sfondo Colline di Teletubbylandia Windows XP */}
      <HillsBackground 
        onMegaphoneClick={() => {
          setSunState({
            expression: 'happy',
            comment: "È L'ORA DEI TELE TUBBIES! L'altoparlante comanda!"
          });
        }}
      />

      {/* Sole Bambino Interattivo in Alto a Destra */}
      <BabySun
        expression={sunState.expression}
        comment={sunState.comment}
        onEasterEgg={(quote) => {
          setSunState(prev => ({ ...prev, comment: quote }));
        }}
      />

      {/* Barra di Navigazione Superiore */}
      <Navbar 
        onResetHome={handleRestartTest}
        currentScreen={screen}
      />

      {/* Contenuto Principale Dinamico a seconda dello Screen */}
      <main className="flex-1 flex flex-col justify-center py-4">
        {screen === 'home' && (
          <HomeScreen
            userName={userName}
            setUserName={setUserName}
            onStartQuiz={handleStartQuiz}
            onSelectSunReaction={(reaction) => {
              setSunState({
                expression: reaction.expression,
                comment: reaction.comment
              });
            }}
          />
        )}

        {screen === 'quiz' && (
          <QuizScreen
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            userName={userName}
            onSelectAnswer={handleSelectAnswer}
            onPreviousQuestion={handlePreviousQuestion}
          />
        )}

        {screen === 'crt' && (
          <CRTScreen onComplete={handleCRTComplete} />
        )}

        {screen === 'result' && (
          <ResultScreen
            archetypeId={resultArchetypeId}
            userName={userName}
            isSharedView={isSharedView}
            onRestartTest={handleRestartTest}
          />
        )}
      </main>

    </div>
  );
}
