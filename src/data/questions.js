// questions.js - 8 Domande del Test Psicometrico Ufficiale

export const QUESTIONS = [
  {
    id: 1,
    code: "DIAG-01",
    category: "Protocollo Notturno & Ritmi Circadiani",
    question: "Sono le 3:30 di notte del sabato sera. In che stato ti trovi?",
    subtitle: "Analisi della capacità psicofisica di sopravvivere al post-serata.",
    options: [
      {
        id: "1a",
        text: "Tiro fuori dalla mia borsa misteriosa una pizza fredda, 3 cerotti e un cavatappi per salvare la situazione.",
        tag: "Soccorritore Caotico",
        scores: { 'tinky-winky': 3, 'laa-laa': 1 },
        sunReaction: {
          comment: "Quella borsa viola nasconde portali dimensionali proibiti!",
          expression: "shocked",
          sound: "click",
          speech: "Mamma mia che borsa!"
        }
      },
      {
        id: "1b",
        text: "Sto giudicando tutti dall'angolo del locale con le braccia conserte e il mio cappello preferito in testa.",
        tag: "Aura Underground",
        scores: { 'dipsy': 3, 'noo-noo': 1 },
        sunReaction: {
          comment: "Non ti muovi nemmeno se crolla il locale, che swag freddo...",
          expression: "judging",
          sound: "click",
          speech: "Troppo freddo per me!"
        }
      },
      {
        id: "1c",
        text: "Sto cantando e trascinando persone a caso in una coreografia disperata prima della chiusura.",
        tag: "Iperattività Molesta",
        scores: { 'laa-laa': 3, 'po': 1 },
        sunReaction: {
          comment: "La tua energia mi acceca più dei miei stessi raggi solari!",
          expression: "happy",
          sound: "toast",
          speech: "Canta, canta ancora!"
        }
      },
      {
        id: "1d",
        text: "Ho trovato un carrello della spesa o un monopattino e sto derapando in mezzo alla carreggiata.",
        tag: "Minaccia Stradale",
        scores: { 'po': 3, 'tinky-winky': 1 },
        sunReaction: {
          comment: "Frena pazzo furioso! Le tue rotule non sono rimborsabili!",
          expression: "creepy",
          sound: "laugh",
          speech: "Fii-po! Aiuto!"
        }
      },
      {
        id: "1e",
        text: "Sto già raccogliendo i bicchieri di plastica da terra e calcolando chi deve pagare il parcheggio.",
        tag: "Schiavo del Dovere",
        scores: { 'noo-noo': 3 },
        sunReaction: {
          comment: "Un elettrodomestico umano tra branchi di scimmie urlatrici...",
          expression: "judging",
          sound: "suction",
          speech: "Povero aspirapolvere!"
        }
      }
    ]
  },
  {
    id: 2,
    code: "DIAG-02",
    category: "Reperti Bagagliari & Archeologia dello Zaino",
    question: "Aprono a tradimento la tua borsa o il tuo zaino. Cosa ci trovano dentro?",
    subtitle: "Rilevazione degli scheletri (e degli snack scaduti) custoditi nel quotidiano.",
    options: [
      {
        id: "2a",
        text: "Uno scontrino del 2018, un telecomando senza pile, il caricatore di un amico e una crema mani al cocco.",
        tag: "Borsetta Senza Fondo",
        scores: { 'tinky-winky': 3, 'sun-god': 1 },
        sunReaction: {
          comment: "Un museo archeologico portatile. Ma il telecomando a che serviva?!",
          expression: "laughing",
          sound: "laugh",
          speech: "Che disordine magico!"
        }
      },
      {
        id: "2b",
        text: "Solo occhiali scuri vintage, cuffie con filo per sembrare alternativo e il mio fidato cappello.",
        tag: "Minimalismo di Facciata",
        scores: { 'dipsy': 3 },
        sunReaction: {
          comment: "Tanta posa, zero sostanza. Il cappello muccato domina!",
          expression: "judging",
          sound: "click",
          speech: "Swag approvato!"
        }
      },
      {
        id: "2c",
        text: "Glitter ovunque, 4 burrocacao identici, snack dolci e qualcosa di gomma super colorato.",
        tag: "Esplosione di Zucchero",
        scores: { 'laa-laa': 3, 'po': 1 },
        sunReaction: {
          comment: "I miei raggi solari riflettono sui tuoi glitter. Sto lacrimando!",
          expression: "happy",
          sound: "toast",
          speech: "Brilla come me!"
        }
      },
      {
        id: "2d",
        text: "Chiavi inglesi, pezzi di ricambio per le ruote, snack mangiati a metà e adrenalina pura.",
        tag: "Officina Anarchica",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Pronto a sabotare veicoli terrestri in qualsiasi istante!",
          expression: "creepy",
          sound: "megaphone",
          speech: "Pericolo pubblico!"
        }
      },
      {
        id: "2e",
        text: "Salviette disinfettanti antibatteriche, sacchetti per la differenziata e un'ansia incontenibile per i germi.",
        tag: "Kit di Decontaminazione",
        scores: { 'noo-noo': 3 },
        sunReaction: {
          comment: "Noo-Noo approva: il disinfettante è il vero profumo dell'anima.",
          expression: "divine",
          sound: "suction",
          speech: "Igiene prima di tutto!"
        }
      }
    ]
  },
  {
    id: 3,
    code: "DIAG-03",
    category: "Test di Reazione all'Autorità & Comandi Impartiti",
    question: "Un enorme megafono metallico spunta dal pavimento di camera tua e tuona: 'È L'ORA DI FARE QUALCOSA DI PRODUTTIVO!'. Tu come reagisci?",
    subtitle: "Misurazione della docilità rispetto agli obblighi del capitalismo e dei genitori.",
    options: [
      {
        id: "3a",
        text: "Gli lancio addosso la prima scarpa che trovo e mi giro dall'altra parte tirando su il piumone.",
        tag: "Resistenza Passiva",
        scores: { 'tinky-winky': 2, 'dipsy': 2 },
        sunReaction: {
          comment: "Bravo, ignora la società come ignori i messaggi delle 9:00!",
          expression: "laughing",
          sound: "megaphone",
          speech: "Dormi ancora un po'!"
        }
      },
      {
        id: "3b",
        text: "Metto il cappello sulle orecchie per non sentire e fingo che sia una traccia techno sperimentale.",
        tag: "Negazione Sonora",
        scores: { 'dipsy': 3 },
        sunReaction: {
          comment: "Il ritmo metallico del megafono è il nuovo singolo dell'estate!",
          expression: "happy",
          sound: "click",
          speech: "Tromba techno!"
        }
      },
      {
        id: "3c",
        text: "Urlo 'ANCORA, ANCORA!' con entusiasmo spropositato, finché il megafono non va in cortocircuito per il cringe.",
        tag: "Controffensiva Maniacale",
        scores: { 'laa-laa': 3, 'po': 1 },
        sunReaction: {
          comment: "Hai spaventato persino un megafono di metallo. Sei un mostro di allegria!",
          expression: "shocked",
          sound: "toast",
          speech: "Ancora, ancora!"
        }
      },
      {
        id: "3d",
        text: "Accendo il motore del monopattino e ci vado addosso a tutta velocità per abbatterlo come un birillo.",
        tag: "Attentato alle Infrastrutture",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Nessun megafono è sopravvissuto all'urto del metallo di Po!",
          expression: "creepy",
          sound: "megaphone",
          speech: "Fii-po distrugge tutto!"
        }
      },
      {
        id: "3e",
        text: "Rido dal soffitto guardando la scena: io non ricevo ordini, io sono il cielo stellare sopra di voi.",
        tag: "Superiorità Cosmica",
        scores: { 'sun-god': 3 },
        sunReaction: {
          comment: "Ah! Gli ordini terreni sono per la plebe a forma di pupazzo!",
          expression: "divine",
          sound: "laugh",
          speech: "Io sono il Sole!"
        }
      }
    ]
  },
  {
    id: 4,
    code: "DIAG-04",
    category: "Valutazione Nutrizionale & Crema-Dipendenza",
    question: "La macchinetta della Tubby Crema impazzisce ed eroga 40 litri di melma rosa fosforescente che inonda il salotto. Qual è la tua mossa?",
    subtitle: "Rapporto emotivo e digestivo con le sostanze pastose rosa.",
    options: [
      {
        id: "4a",
        text: "Cerco di raccoglierla tutta dentro la mia borsa rossa prima che qualcuno se ne accorga.",
        tag: "Occultamento di Prove",
        scores: { 'tinky-winky': 3 },
        sunReaction: {
          comment: "La borsa non si macchia, la borsa assorbe ogni peccato gastronomico.",
          expression: "shocked",
          sound: "custard",
          speech: "Tubby Crema nella borsa!"
        }
      },
      {
        id: "4b",
        text: "Faccio un video per le storie Instagram con didascalia sarcastica 'Contemporary Art Installation'.",
        tag: "Sfruttamento Social",
        scores: { 'dipsy': 2, 'sun-god': 2 },
        sunReaction: {
          comment: "10/10 per il sarcasmo, 0/10 per l'utilità nel pulire.",
          expression: "laughing",
          sound: "click",
          speech: "Guarda che influencer!"
        }
      },
      {
        id: "4c",
        text: "Mi tuffo a pancia avanti scivolando sul pavimento e gridando 'TUBBY CREMA PER TUTTI!'.",
        tag: "Idiozia Estatica",
        scores: { 'laa-laa': 3, 'po': 1 },
        sunReaction: {
          comment: "Sembrava una tragedia, l'hai trasformata in una pista di slittino rosa!",
          expression: "happy",
          sound: "custard",
          speech: "È l'ora della Tubby Crema!"
        }
      },
      {
        id: "4d",
        text: "Mangio fino al collasso respiratorio, poi uso la crema rimasta come carburante per il monopattino.",
        tag: "Metabolismo Impossibile",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Il tuo stomaco è una fornace nucleare di zuccheri raffinati!",
          expression: "creepy",
          sound: "custard",
          speech: "Ancora crema!"
        }
      },
      {
        id: "4e",
        text: "Urlo istericamente, accendo il motore al massimo e comincio ad aspirare la crema imprecando in 7 lingue.",
        tag: "Isteria Sanificatrice",
        scores: { 'noo-noo': 4 },
        sunReaction: {
          comment: "Sento il rumore di Noo-Noo fino quassù in orbita! SLUUUURP!",
          expression: "shocked",
          sound: "suction",
          speech: "Noo-Noo è furioso!"
        }
      }
    ]
  },
  {
    id: 5,
    code: "DIAG-05",
    category: "Dinamiche Relazionali di Branco & Tossicità Chat",
    question: "Scoppia una lite furibonda nel gruppo WhatsApp della comitiva (42 messaggi in 2 minuti). Qual è la tua condotta?",
    subtitle: "Analisi della sopravvivenza sociale in contesti ad alta concentrazione di dramma.",
    options: [
      {
        id: "5a",
        text: "Invio uno sticker assurdo fuori contesto di un gatto sgranato e chiedo 'A che ora ci vediamo stasera?'.",
        tag: "Pacifismo Distratto",
        scores: { 'tinky-winky': 3 },
        sunReaction: {
          comment: "Ignorare il dramma con un meme è la più alta forma di diplomazia.",
          expression: "happy",
          sound: "click",
          speech: "Eh-Oh! Tutto a posto!"
        }
      },
      {
        id: "5b",
        text: "Visualizzo, silenzio le notifiche per 1 anno e lascio che si scannino tra di loro senza digitare mezza parola.",
        tag: "Silenzio Radio Superbo",
        scores: { 'dipsy': 3 },
        sunReaction: {
          comment: "Freddo come l'azoto liquido. Dipsy non si sporca le mani nella plebe.",
          expression: "judging",
          sound: "click",
          speech: "Non ti curar di lor..."
        }
      },
      {
        id: "5c",
        text: "Mando una raffica di vocali da 4 minuti piangendo, urlando e dicendo che 'non siamo più gli stessi di una volta'.",
        tag: "Teatro Tragedia Greca",
        scores: { 'laa-laa': 4 },
        sunReaction: {
          comment: "Oscar per la miglior interpretazione melodrammatica su WhatsApp!",
          expression: "shocked",
          sound: "toast",
          speech: "Che dramma incredibile!"
        }
      },
      {
        id: "5d",
        text: "Scrivo 'Venitevi a picchiare sotto casa mia così facciamo prima' con allegata foto delle chiavi inglesi.",
        tag: "Provocazione Anarchica",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Po non vuole la pace, Po vuole vedere il colosseo moderno!",
          expression: "creepy",
          sound: "megaphone",
          speech: "Fii-po cerca rissa!"
        }
      },
      {
        id: "5e",
        text: "Non partecipo alla chat: sono quello che sta leggendo con la ciotola di popcorn facendo gli screenshot per il cugino.",
        tag: "Spettatore Onnipotente",
        scores: { 'sun-god': 4 },
        sunReaction: {
          comment: "Ah-ha-ha-ha! Lo screenshot è la testimonianza eterna del fallimento altrui!",
          expression: "divine",
          sound: "laugh",
          speech: "Rido forte dal cielo!"
        }
      }
    ]
  },
  {
    id: 6,
    code: "DIAG-06",
    category: "Espressione Somatica, Mobilità & Dress Code",
    question: "Devi presentarti a una cerimonia elegante (matrimonio / gala). Qual è il tuo mezzo d'arrivo e outfit d'ordinanza?",
    subtitle: "Incompatibilità genetica tra l'eleganza borghese e lo stile Teletubby.",
    options: [
      {
        id: "6a",
        text: "Abito impeccabile, ma come accessorio fondamentale la mia inseparabile borsetta rossa sgargiante.",
        tag: "Icona di Riconoscimento",
        scores: { 'tinky-winky': 3 },
        sunReaction: {
          comment: "La borsa rossa ruba la scena persino alla sposa!",
          expression: "happy",
          sound: "toast",
          speech: "Borsetta chic!"
        }
      },
      {
        id: "6b",
        text: "Smoking nero abbinato a sneakers da collezione e il mio cappello muccato peloso calato sugli occhi.",
        tag: "Alta Moda Eretica",
        scores: { 'dipsy': 4 },
        sunReaction: {
          comment: "Vogue Italia ti contatterà entro stasera per un servizio d'avanguardia.",
          expression: "judging",
          sound: "click",
          speech: "Troppo stile, Dipsy!"
        }
      },
      {
        id: "6c",
        text: "Arrivo saltellando a cavalcioni su una palla arancione gonfiabile gigante travolgendo gli invitati al buffet.",
        tag: "Ingresso Trionfale Molesto",
        scores: { 'laa-laa': 3 },
        sunReaction: {
          comment: "Hai appena centrato la torta nuziale rimbalzando. Meraviglioso!",
          expression: "laughing",
          sound: "laugh",
          speech: "Boom! Torta distrutta!"
        }
      },
      {
        id: "6d",
        text: "Entro direttamente in sala sgommando su un monopattino rosso fiammante vestito con tutina di latex.",
        tag: "Terrorismo della Ruota",
        scores: { 'po': 4 },
        sunReaction: {
          comment: "I camerieri stanno ancora raccogliendo i calici di champagne!",
          expression: "creepy",
          sound: "megaphone",
          speech: "Fii-po entra in derapata!"
        }
      },
      {
        id: "6e",
        text: "Non mi vesto: sono l'aurora dorata che fa brillare il catering e acceca i fotografi col riverbero.",
        tag: "Luminosità Insostenibile",
        scores: { 'sun-god': 3 },
        sunReaction: {
          comment: "Perché comprare un abito quando puoi semplicemente irradiare luce divina?",
          expression: "divine",
          sound: "laugh",
          speech: "Splendore cosmico!"
        }
      }
    ]
  },
  {
    id: 7,
    code: "DIAG-07",
    category: "Frequenza Psico-Visiva & Schermo della Pancia CRT",
    question: "I Teletubbies hanno un monitor CRT sulla pancia. Se accendessero il tuo schermo in questo momento, cosa trasmetterebbe?",
    subtitle: "Finestra sulle ossessioni mentali e sui loop neurologici primordiali.",
    options: [
      {
        id: "7a",
        text: "Un documentario incomprensibile su bambini che raccolgono carote in Olanda ripetuto due volte identico.",
        tag: "Loop Psichedelico Originale",
        scores: { 'tinky-winky': 3, 'laa-laa': 1 },
        sunReaction: {
          comment: "'Ancora! Ancora!'... E la carota olandese va in onda per sempre!",
          expression: "happy",
          sound: "toast",
          speech: "Ancora, ancora carote!"
        }
      },
      {
        id: "7b",
        text: "Una video-rassegna di dj set underground a 140 BPM registrati con telecamera sgranata in uno scantinato.",
        tag: "Frequenza Subwoofer",
        scores: { 'dipsy': 3 },
        sunReaction: {
          comment: "I bassi della tua pancia stanno facendo tremare le colline verdi!",
          expression: "judging",
          sound: "click",
          speech: "Bassi potenti!"
        }
      },
      {
        id: "7c",
        text: "Compilation di gattini che cadono dai divani con sottofondo di risatine acute e trombette clownesche.",
        tag: "Dopamina a Basso Costo",
        scores: { 'laa-laa': 3, 'sun-god': 1 },
        sunReaction: {
          comment: "Ah-ha-ha! Il gatto che cade dalla poltrona è arte pura!",
          expression: "laughing",
          sound: "laugh",
          speech: "Gattini buffi!"
        }
      },
      {
        id: "7d",
        text: "Film d'azione con esplosioni nucleari, inseguimenti a 300 km/h e nessun senso della trama logica.",
        tag: "Pirotecnica Distruttiva",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Il tuo schermo pancia rischia di fondere la plastilina protettiva!",
          expression: "creepy",
          sound: "megaphone",
          speech: "Esplosione totale!"
        }
      },
      {
        id: "7e",
        text: "Un canale di pulizia asmr con idropulitrice che toglie il muschio dai marciapiedi a getto continuo.",
        tag: "Soddisfazione Igienica",
        scores: { 'noo-noo': 4 },
        sunReaction: {
          comment: "Ahhhh... L'idropulitrice lava via il lerciume del mondo reale.",
          expression: "divine",
          sound: "suction",
          speech: "Che pulizia rilassante!"
        }
      }
    ]
  },
  {
    id: 8,
    code: "DIAG-08",
    category: "Resilienza ai Traumi Gastronomici Quotidiani",
    question: "Dramma a Teletubbylandia: ti cade l'ultimo Tubby Toast per terra dal lato perfettamente dorato e sorridente. Cosa fai?",
    subtitle: "Misura definitiva della tenuta mentale e della dignità personale.",
    options: [
      {
        id: "8a",
        text: "Regola dei 5 secondi? Macché: applico la 'Regola dei 5 secoli', soffio sulla polvere e lo mangio lo stesso.",
        tag: "Sistema Immunitario di Titanio",
        scores: { 'tinky-winky': 3, 'po': 1 },
        sunReaction: {
          comment: "Quel toast ha raccolto fauna microbica aliena, ma hai fame!",
          expression: "shocked",
          sound: "toast",
          speech: "Mangialo subito!"
        }
      },
      {
        id: "8b",
        text: "Lo guardo con disprezzo, calzo il cappello muccato e ordino un toast con avocado da 18 euro al bar chic.",
        tag: "Snobismo Ristorativo",
        scores: { 'dipsy': 3 },
        sunReaction: {
          comment: "18 euro per un toast... Il capitalismo ti ha rubato l'anima infantile!",
          expression: "judging",
          sound: "click",
          speech: "Troppo costoso!"
        }
      },
      {
        id: "8c",
        text: "Cado in ginocchio a terra urlando 'NOOOOO! IL TOAST DEL DESTINO!', piangendo come se fosse morta una persona cara.",
        tag: "Funerale del Carboidrato",
        scores: { 'laa-laa': 4 },
        sunReaction: {
          comment: "Un minuto di silenzio per il Tubby Toast caduto in battaglia...",
          expression: "laughing",
          sound: "toast",
          speech: "Addio Tubby Toast!"
        }
      },
      {
        id: "8d",
        text: "Mi fiondo a terra prima che tocchi il pavimento scivolando in ginocchio come un portiere dei mondiali.",
        tag: "Riflessi da Predatore",
        scores: { 'po': 3 },
        sunReaction: {
          comment: "Parata miracolosa! Quel carboidrato sorridente è salvo!",
          expression: "happy",
          sound: "megaphone",
          speech: "Salvataggio da campione!"
        }
      },
      {
        id: "8e",
        text: "NOO-NOO! Slurp istantaneo prima che chiunque possa intervenire: pavimento sanificato e niente toast per nessuno.",
        tag: "Intervento Sanitario Esecutivo",
        scores: { 'noo-noo': 4 },
        sunReaction: {
          comment: "Noo-Noo ha aspirato il toast! Sentite il suo rutto di trionfo!",
          expression: "creepy",
          sound: "suction",
          speech: "Slurp! Noo-Noo ha vinto!"
        }
      }
    ]
  }
];
