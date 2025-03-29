import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [activeBond, setActiveBond] = useState('covalent');

  const bonds = {
    covalent: {
      title: "Elektronenpaarbindung (kovalente Bindung)",
      description: "Zwei Atome teilen sich ein oder mehrere Elektronenpaare, um stabile Elektronenanordnungen zu erreichen.",
      example: "Wassermolekül (H₂O)",
      type: "intramolekular"
    },
    metallic: {
      title: "Metallbindung",
      description: "Atome geben ihre Valenzelektronen in ein gemeinsames Elektronengas ab, was zu einer starken Anziehung zwischen den positiv geladenen Metallionen und den frei beweglichen Elektronen führt.",
      example: "Metallisches Kupfer (Cu)",
      type: "intramolekular"
    },
    ionic: {
      title: "Ionenbindung",
      description: "Elektrostatische Anziehung zwischen positiv geladenen Kationen und negativ geladenen Anionen.",
      example: "Natriumchlorid (NaCl)",
      type: "intramolekular"
    },
    vanderwaals: {
      title: "Van-der-Waals-Kräfte",
      description: "Schwache Anziehungskräfte, die durch temporäre Dipole in Molekülen entstehen.",
      example: "Wechselwirkungen zwischen Edelgasatomen",
      type: "zwischenmolekular"
    },
    dipole: {
      title: "Dipol-Dipol-Wechselwirkungen",
      description: "Treten zwischen Molekülen mit permanenten Dipolen auf, bei denen positive und negative Teilladungen benachbarter Moleküle sich gegenseitig anziehen.",
      example: "Hydrogenchlorid (HCl)",
      type: "zwischenmolekular"
    },
    hydrogen: {
      title: "Wasserstoffbrückenbindungen",
      description: "Eine spezielle Art der Dipol-Dipol-Wechselwirkung, die auftritt, wenn ein Wasserstoffatom kovalent an stark elektronegative Atome wie Sauerstoff, Stickstoff oder Fluor gebunden ist.",
      example: "Wassermoleküle untereinander",
      type: "zwischenmolekular"
    }
  };

  // Komponentenrenderung für verschiedene Bindungsmodelle
  const renderBondModel = () => {
    switch(activeBond) {
      case 'covalent':
        return <CovalentBondModel />;
      case 'metallic':
        return <MetallicBondModel />;
      case 'ionic':
        return <IonicBondModel />;
      case 'vanderwaals':
        return <VanDerWaalsModel />;
      case 'dipole':
        return <DipoleDipoleModel />;
      case 'hydrogen':
        return <HydrogenBondModel />;
      default:
        return <CovalentBondModel />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Chemische Bindungen</h1>
          <p className="text-gray-600 mt-2">
            Interaktive Visualisierung verschiedener chemischer Bindungsarten
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="font-bold text-xl mb-4 text-gray-800">Bindungsarten</h2>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-700 mt-4 mb-2">Intramolekulare Bindungen</h3>
                {Object.entries(bonds)
                  .filter(([_, bondInfo]) => bondInfo.type === "intramolekular")
                  .map(([key, bondInfo]) => (
                    <button
                      key={key}
                      className={`w-full text-left p-2 rounded-md ${activeBond === key ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveBond(key)}
                    >
                      {bondInfo.title}
                    </button>
                  ))
                }
                
                <h3 className="font-semibold text-gray-700 mt-4 mb-2">Zwischenmolekulare Bindungen</h3>
                {Object.entries(bonds)
                  .filter(([_, bondInfo]) => bondInfo.type === "zwischenmolekular")
                  .map(([key, bondInfo]) => (
                    <button
                      key={key}
                      className={`w-full text-left p-2 rounded-md ${activeBond === key ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveBond(key)}
                    >
                      {bondInfo.title}
                    </button>
                  ))
                }
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{bonds[activeBond].title}</h2>
              <div className="text-sm bg-blue-50 text-blue-800 rounded-md p-2 inline-block mb-4">
                {bonds[activeBond].type === "intramolekular" ? "Intramolekulare Bindung" : "Zwischenmolekulare Bindung"}
              </div>
              
              <div className="text-gray-700 mb-6">
                <p className="mb-2">{bonds[activeBond].description}</p>
                <p className="font-semibold mt-2">Beispiel: {bonds[activeBond].example}</p>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Interaktives Modell</h3>
                <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
                  {renderBondModel()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulationskomponenten für verschiedene Bindungstypen

const CovalentBondModel = () => {
  const [vibrating, setVibrating] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative">
        <div className={`flex items-center justify-center ${vibrating ? 'animate-pulse' : ''}`}>
          <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">O</div>
          <div className="h-10 w-10 bg-blue-400 rounded-full absolute top-0 -right-8 flex items-center justify-center text-white font-bold">H</div>
          <div className="h-10 w-10 bg-blue-400 rounded-full absolute bottom-0 -right-8 flex items-center justify-center text-white font-bold">H</div>
          
          {/* Elektronenpaare */}
          <div className="absolute top-2 right-8 h-3 w-6 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-2 right-8 h-3 w-6 bg-yellow-300 rounded-full"></div>
        </div>
      </div>
      
      <button 
        onClick={() => setVibrating(!vibrating)} 
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {vibrating ? 'Stoppen' : 'Bindung aktivieren'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Elektronen werden zwischen Wasserstoff und Sauerstoff geteilt
      </p>
    </div>
  );
};

const MetallicBondModel = () => {
  const [animate, setAnimate] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-48">
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
          {Array(12).fill().map((_, i) => (
            <div key={i} className="h-12 w-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
              Cu<sup>+</sup>
            </div>
          ))}
          
          {/* Elektronengas */}
          {animate && Array(20).fill().map((_, i) => (
            <div 
              key={`e-${i}`} 
              className="absolute h-2 w-2 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `movingElectron ${2 + Math.random() * 3}s linear infinite`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => setAnimate(!animate)} 
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {animate ? 'Elektronengas stoppen' : 'Elektronengas anzeigen'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Metallionen im "Elektronengas" der abgegebenen Valenzelektronen
      </p>
      
      <style jsx>{`
        @keyframes movingElectron {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px); }
          50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px); }
          75% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

const IonicBondModel = () => {
  const [showAttraction, setShowAttraction] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative">
        <div className={`flex items-center justify-center gap-${showAttraction ? '6' : '16'} transition-all duration-1000`}>
          <div className="h-16 w-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">Na<sup>+</sup></div>
          <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">Cl<sup>-</sup></div>
          
          {/* Anziehungslinien */}
          {showAttraction && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-px bg-red-400 my-1 animate-pulse"></div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={() => setShowAttraction(!showAttraction)} 
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {showAttraction ? 'Trennen' : 'Anziehung zeigen'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Elektrostatische Anziehung zwischen Na<sup>+</sup> und Cl<sup>-</sup> Ionen
      </p>
    </div>
  );
};

const VanDerWaalsModel = () => {
  const [showForces, setShowForces] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative">
        <div className="flex items-center justify-center gap-8">
          {/* Zwei unpolare Moleküle */}
          <div className="relative h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center font-bold">
            Ar
            {showForces && (
              <>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-400 rounded-full animate-ping"></div>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 bg-blue-400 rounded-full animate-ping"></div>
              </>
            )}
          </div>
          
          <div className="relative h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center font-bold">
            Ar
            {showForces && (
              <>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-400 rounded-full animate-ping"></div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 bg-blue-400 rounded-full animate-ping"></div>
              </>
            )}
          </div>
          
          {/* Anziehungslinien */}
          {showForces && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-px bg-gray-400 my-2 animate-pulse opacity-50"></div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={() => setShowForces(!showForces)} 
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {showForces ? 'Kräfte ausblenden' : 'Temporäre Dipole zeigen'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Schwache Anziehungskräfte durch temporäre Ladungsverschiebungen
      </p>
    </div>
  );
};

const DipoleDipoleModel = () => {
  const [showDipoles, setShowDipoles] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative">
        <div className={`flex flex-col items-center gap-6 ${showDipoles ? 'animate-pulse' : ''}`}>
          {/* Erstes HCl-Molekül */}
          <div className="flex items-center">
            <div className="h-12 w-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">H</div>
            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">Cl</div>
            {showDipoles && (
              <>
                <div className="absolute -left-4 top-1/4 text-xl font-bold text-red-500">δ+</div>
                <div className="absolute -right-4 top-1/4 text-xl font-bold text-blue-500">δ-</div>
              </>
            )}
          </div>
          
          {/* Zweites HCl-Molekül (umgekehrt ausgerichtet) */}
          <div className="flex items-center">
            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">Cl</div>
            <div className="h-12 w-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">H</div>
            {showDipoles && (
              <>
                <div className="absolute -left-4 bottom-1/4 text-xl font-bold text-blue-500">δ-</div>
                <div className="absolute -right-4 bottom-1/4 text-xl font-bold text-red-500">δ+</div>
              </>
            )}
          </div>
          
          {/* Anziehungslinien */}
          {showDipoles && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-px h-full bg-gray-400 mx-1 inline-block animate-pulse"></div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={() => setShowDipoles(!showDipoles)} 
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {showDipoles ? 'Dipole ausblenden' : 'Dipole anzeigen'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Ausrichtung von HCl-Molekülen aufgrund permanenter Dipole
      </p>
    </div>
  );
};

const HydrogenBondModel = () => {
  const [showBonds, setShowBonds] = useState(false);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-48">
        {/* Wassermoleküle */}
        <div className="absolute top-0 left-1/4">
          <div className="relative">
            <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">O</div>
            <div className="h-8 w-8 bg-blue-400 rounded-full absolute -bottom-4 -left-4 flex items-center justify-center text-white font-bold">H</div>
            <div className="h-8 w-8 bg-blue-400 rounded-full absolute -bottom-4 -right-4 flex items-center justify-center text-white font-bold">H</div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-1/4">
          <div className="relative">
            <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">O</div>
            <div className="h-8 w-8 bg-blue-400 rounded-full absolute -top-4 -left-4 flex items-center justify-center text-white font-bold">H</div>
            <div className="h-8 w-8 bg-blue-400 rounded-full absolute -top-4 -right-4 flex items-center justify-center text-white font-bold">H</div>
          </div>
        </div>
        
        {/* Wasserstoffbrücke */}
        {showBonds && (
          <div className="absolute top-1/4 right-1/3 w-16 h-px bg-blue-500 rotate-45 animate-pulse">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-700">H-Brücke</div>
          </div>
        )}
      </div>
      
      <button 
        onClick={() => setShowBonds(!showBonds)} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {showBonds ? 'Brücken ausblenden' : 'H-Brücken anzeigen'}
      </button>
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Wasserstoffbrückenbindungen zwischen Wassermolekülen
      </p>
    </div>
  );
};

export default App;