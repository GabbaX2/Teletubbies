// TeletubbyAvatar.jsx - Illustrazioni SVG Custom dei 6 Personaggi con antenne distintive
import React from 'react';

export default function TeletubbyAvatar({ type = 'tinky-winky', size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-52 h-52',
    cert: 'w-64 h-64 md:w-72 md:h-72',
  }[size] || 'w-24 h-24';

  switch (type) {
    case 'tinky-winky':
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
            {/* Sfondo cerchio aura */}
            <circle cx="80" cy="80" r="74" fill="#F3E8FF" />
            
            {/* Antenna: Triangolo Invertito */}
            <line x1="80" y1="52" x2="80" y2="35" stroke="#7E22CE" strokeWidth="7" strokeLinecap="round" />
            <polygon points="80,10 58,35 102,35" fill="#7E22CE" stroke="#581C87" strokeWidth="3" />
            
            {/* Orecchie */}
            <ellipse cx="28" cy="85" rx="12" ry="16" fill="#A855F7" stroke="#7E22CE" strokeWidth="3" />
            <ellipse cx="132" cy="85" rx="12" ry="16" fill="#A855F7" stroke="#7E22CE" strokeWidth="3" />
            
            {/* Testa Tinky Winky */}
            <ellipse cx="80" cy="90" rx="52" ry="46" fill="#7E22CE" stroke="#581C87" strokeWidth="3.5" />
            
            {/* Faccia argentata/incarnato */}
            <ellipse cx="80" cy="93" rx="38" ry="32" fill="#FDE047" fillOpacity="0.3" stroke="#9333EA" strokeWidth="2" />
            <ellipse cx="80" cy="93" rx="36" ry="30" fill="#FED7AA" />
            
            {/* Occhi grandi espressivi */}
            <ellipse cx="66" cy="88" rx="8" ry="10" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <ellipse cx="94" cy="88" rx="8" ry="10" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <circle cx="68" cy="88" r="4.5" fill="#3B2610" />
            <circle cx="96" cy="88" r="4.5" fill="#3B2610" />
            <circle cx="66" cy="85" r="1.8" fill="#FFFFFF" />
            <circle cx="94" cy="85" r="1.8" fill="#FFFFFF" />
            
            {/* Guance rosa */}
            <ellipse cx="53" cy="99" rx="5" ry="3" fill="#FB7185" fillOpacity="0.6" />
            <ellipse cx="107" cy="99" rx="5" ry="3" fill="#FB7185" fillOpacity="0.6" />
            
            {/* Naso e Sorriso */}
            <ellipse cx="80" cy="96" rx="3.5" ry="2.5" fill="#F472B6" />
            <path d="M69 104 Q80 117 91 104" stroke="#881337" strokeWidth="3.5" strokeLinecap="round" fill="#FDA4AF" />
            
            {/* Mini Borsetta Rossa sull'angolo */}
            <g transform="translate(100, 100) scale(0.48)">
              <rect x="0" y="15" width="46" height="38" rx="8" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
              <path d="M12 15 C12 0, 34 0, 34 15" fill="none" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
              <circle cx="23" cy="30" r="4" fill="#FDE047" stroke="#B45309" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      );

    case 'dipsy':
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
            {/* Cerchio aura */}
            <circle cx="80" cy="80" r="74" fill="#ECFCCB" />
            
            {/* Antenna: Asta dritta rigida */}
            <line x1="80" y1="46" x2="80" y2="10" stroke="#65A30D" strokeWidth="9" strokeLinecap="round" />
            <circle cx="80" cy="8" r="5" fill="#84CC16" stroke="#4D7C0F" strokeWidth="2" />
            
            {/* Orecchie a ventola */}
            <ellipse cx="28" cy="88" rx="13" ry="16" fill="#84CC16" stroke="#4D7C0F" strokeWidth="3" />
            <ellipse cx="132" cy="88" rx="13" ry="16" fill="#84CC16" stroke="#4D7C0F" strokeWidth="3" />
            
            {/* Testa verde acido */}
            <ellipse cx="80" cy="90" rx="52" ry="46" fill="#65A30D" stroke="#3F6212" strokeWidth="3.5" />
            
            {/* Viso più scuro / caratteristico */}
            <ellipse cx="80" cy="94" rx="36" ry="30" fill="#E2B184" />
            
            {/* Occhi con sguardo giudicante/swag */}
            <ellipse cx="66" cy="90" rx="8" ry="9" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <ellipse cx="94" cy="90" rx="8" ry="9" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <circle cx="68" cy="91" r="4.5" fill="#292524" />
            <circle cx="96" cy="91" r="4.5" fill="#292524" />
            {/* Sopracciglio alzato scettico */}
            <path d="M58 80 Q66 76 74 81" stroke="#3F6212" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M86 83 Q94 77 102 81" stroke="#3F6212" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            
            {/* Sorriso di lato sornione */}
            <path d="M72 108 Q82 114 93 105" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            
            {/* Cappello muccato iconico calato sulla fronte */}
            <g transform="translate(38, 38)">
              {/* Tesa del cappello da pescatore */}
              <ellipse cx="42" cy="24" rx="46" ry="11" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
              <path d="M12 22 L20 2 C20 0, 64 0, 64 2 L72 22 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
              {/* Chiazze muccate nere */}
              <path d="M26 12 Q32 6 38 12 Q34 18 28 17 Z" fill="#0F172A" />
              <path d="M48 6 Q58 4 56 14 Q48 16 46 10 Z" fill="#0F172A" />
              <ellipse cx="22" cy="24" rx="7" ry="3" fill="#0F172A" />
              <ellipse cx="62" cy="25" rx="8" ry="4" fill="#0F172A" />
            </g>
          </svg>
        </div>
      );

    case 'laa-laa':
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
            {/* Cerchio aura */}
            <circle cx="80" cy="80" r="74" fill="#FEF9C3" />
            
            {/* Antenna: Ricciolo a spirale */}
            <path d="M80 50 C80 32, 106 28, 96 12 C88 -2, 65 4, 74 22 C78 28, 80 38, 80 50" 
                  fill="none" stroke="#EAB308" strokeWidth="8" strokeLinecap="round" />
            <circle cx="96" cy="12" r="5" fill="#FACC15" />
            
            {/* Orecchie */}
            <ellipse cx="28" cy="85" rx="12" ry="16" fill="#FACC15" stroke="#CA8A04" strokeWidth="3" />
            <ellipse cx="132" cy="85" rx="12" ry="16" fill="#FACC15" stroke="#CA8A04" strokeWidth="3" />
            
            {/* Testa gialla */}
            <ellipse cx="80" cy="90" rx="52" ry="46" fill="#EAB308" stroke="#A16207" strokeWidth="3.5" />
            
            {/* Faccina allegra */}
            <ellipse cx="80" cy="93" rx="36" ry="30" fill="#FED7AA" />
            
            {/* Occhioni spalancati ed eccitati */}
            <ellipse cx="66" cy="88" rx="8.5" ry="10.5" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <ellipse cx="94" cy="88" rx="8.5" ry="10.5" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <circle cx="67" cy="88" r="4.8" fill="#451A03" />
            <circle cx="95" cy="88" r="4.8" fill="#451A03" />
            <circle cx="65" cy="84" r="2.2" fill="#FFFFFF" />
            <circle cx="93" cy="84" r="2.2" fill="#FFFFFF" />
            
            {/* Guanciotte rosse */}
            <ellipse cx="52" cy="99" rx="6" ry="4" fill="#FB7185" fillOpacity="0.75" />
            <ellipse cx="108" cy="99" rx="6" ry="4" fill="#FB7185" fillOpacity="0.75" />
            
            {/* Sorriso apertissimo drama queen */}
            <path d="M68 102 Q80 122 92 102 Z" fill="#E11D48" stroke="#881337" strokeWidth="2.5" />
            <ellipse cx="80" cy="111" rx="6" ry="3" fill="#FDA4AF" />
            
            {/* Palla arancione gigante di fianco */}
            <g transform="translate(102, 98) scale(0.5)">
              <circle cx="32" cy="32" r="28" fill="#EA580C" stroke="#C2410C" strokeWidth="3.5" />
              <ellipse cx="24" cy="20" rx="8" ry="4" fill="#FDBA74" fillOpacity="0.8" transform="rotate(-30 24 20)" />
            </g>
          </svg>
        </div>
      );

    case 'po':
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
            {/* Cerchio aura */}
            <circle cx="80" cy="80" r="74" fill="#FEE2E2" />
            
            {/* Antenna: Asta con Anello cerchio in cima */}
            <line x1="80" y1="50" x2="80" y2="34" stroke="#DC2626" strokeWidth="7" strokeLinecap="round" />
            <circle cx="80" cy="20" r="14" fill="none" stroke="#DC2626" strokeWidth="6" />
            
            {/* Orecchie tonde piccine */}
            <ellipse cx="30" cy="88" rx="11" ry="14" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
            <ellipse cx="130" cy="88" rx="11" ry="14" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
            
            {/* Testa rossa (più piccina e tonda) */}
            <ellipse cx="80" cy="91" rx="50" ry="45" fill="#DC2626" stroke="#991B1B" strokeWidth="3.5" />
            
            {/* Faccina dolce ma demoniaca */}
            <ellipse cx="80" cy="94" rx="35" ry="30" fill="#FFEDD5" />
            
            {/* Occhi spalancati carini e folli */}
            <ellipse cx="66" cy="89" rx="8.5" ry="10" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <ellipse cx="94" cy="89" rx="8.5" ry="10" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
            <circle cx="66" cy="89" r="4.5" fill="#1C1917" />
            <circle cx="94" cy="89" r="4.5" fill="#1C1917" />
            <circle cx="64" cy="86" r="2.2" fill="#FFFFFF" />
            <circle cx="92" cy="86" r="2.2" fill="#FFFFFF" />
            
            {/* Guanciotte vivaci */}
            <ellipse cx="53" cy="98" rx="5" ry="3.5" fill="#F43F5E" fillOpacity="0.7" />
            <ellipse cx="107" cy="98" rx="5" ry="3.5" fill="#F43F5E" fillOpacity="0.7" />
            
            {/* Sorriso beffardo "fii-po!" */}
            <path d="M70 105 Q80 116 90 105" stroke="#991B1B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            
            {/* Mini monopattino rosso all'angolo */}
            <g transform="translate(98, 98) scale(0.46)">
              <line x1="10" y1="45" x2="45" y2="45" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
              <line x1="42" y1="45" x2="38" y2="12" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="28" y1="12" x2="48" y2="12" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
              <circle cx="12" cy="48" r="6" fill="#475569" stroke="#0F172A" strokeWidth="2" />
              <circle cx="44" cy="48" r="6" fill="#475569" stroke="#0F172A" strokeWidth="2" />
            </g>
          </svg>
        </div>
      );

    case 'noo-noo':
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
            {/* Cerchio aura */}
            <circle cx="80" cy="80" r="74" fill="#E0F2FE" />
            
            {/* Corpo Noo-Noo: Cilindro/Carena blu elettrico */}
            <path d="M35 118 C35 70, 125 70, 125 118 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="4" />
            
            {/* Fanali / Occhi giganteschi e goffi sulla cupola */}
            <ellipse cx="62" cy="62" rx="15" ry="17" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
            <ellipse cx="98" cy="62" rx="15" ry="17" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
            
            {/* Pupille strabiche o scioccate */}
            <circle cx="66" cy="63" r="7" fill="#0F172A" />
            <circle cx="94" cy="63" r="7" fill="#0F172A" />
            <circle cx="68" cy="60" r="2.5" fill="#FFFFFF" />
            <circle cx="96" cy="60" r="2.5" fill="#FFFFFF" />
            
            {/* Tubo flessibile di aspirazione frontale (beccuccio) */}
            <path d="M80 82 C80 95, 70 102, 60 110 C50 118, 52 135, 75 138 C95 140, 102 125, 96 112 C92 105, 80 95, 80 82" 
                  fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
            {/* Beccuccio d'aspirazione nero metallico con vortice */}
            <ellipse cx="78" cy="136" rx="12" ry="7" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            <ellipse cx="78" cy="136" rx="7" ry="3.5" fill="#38BDF8" />
            
            {/* Spazzole laterali / ruote inferiori */}
            <rect x="30" y="118" width="18" height="10" rx="3" fill="#334155" />
            <rect x="112" y="118" width="18" height="10" rx="3" fill="#334155" />
            <line x1="30" y1="128" x2="48" y2="128" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3 3" />
            <line x1="112" y1="128" x2="130" y2="128" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3 3" />

            {/* Badge RARO */}
            <g transform="translate(10, 16)">
              <rect width="44" height="16" rx="4" fill="#0284C7" />
              <text x="22" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">RARO</text>
            </g>
          </svg>
        </div>
      );

    case 'sun-god':
    default:
      return (
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg">
            {/* Aura dorata divina */}
            <circle cx="80" cy="80" r="74" fill="#FEF3C7" />
            
            {/* Raggi fiammeggianti rotanti */}
            <g className="animate-sun-spin-slow origin-center">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <path
                  key={deg}
                  d="M80 8 Q86 24 80 32 Q74 24 80 8 Z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="1.5"
                  transform={`rotate(${deg} 80 80)`}
                />
              ))}
            </g>
            
            {/* Disco solare principale */}
            <circle cx="80" cy="80" r="48" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3" />
            
            {/* Faccina baby sun radiosa */}
            <circle cx="80" cy="80" r="40" fill="#FED7AA" />
            
            {/* Guanciotte solari */}
            <circle cx="62" cy="88" r="8" fill="#FB7185" fillOpacity="0.5" />
            <circle cx="98" cy="88" r="8" fill="#FB7185" fillOpacity="0.5" />
            
            {/* Occhioni ridenti da neonato onnisciente */}
            <ellipse cx="68" cy="74" rx="7" ry="8" fill="#451A03" />
            <ellipse cx="92" cy="74" rx="7" ry="8" fill="#451A03" />
            <circle cx="66" cy="71" r="2.5" fill="#FFFFFF" />
            <circle cx="90" cy="71" r="2.5" fill="#FFFFFF" />
            
            {/* Risata cosmica spalancata */}
            <path d="M66 86 Q80 106 94 86 Z" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />
            <path d="M72 87 Q80 94 88 87" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            
            {/* Corona leggendaria */}
            <g transform="translate(56, 32)">
              <polygon points="0,14 12,2 24,14 36,2 48,14 42,20 6,20" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="12" cy="2" r="2.5" fill="#EF4444" />
              <circle cx="24" cy="14" r="2.5" fill="#3B82F6" />
              <circle cx="36" cy="2" r="2.5" fill="#10B981" />
            </g>

            {/* Badge LEGENDARY */}
            <g transform="translate(8, 12)">
              <rect width="58" height="16" rx="4" fill="#D97706" />
              <text x="29" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">LEGENDARY</text>
            </g>
          </svg>
        </div>
      );
  }
}
