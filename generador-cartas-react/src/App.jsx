import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = [
    { name: "heart", symbol: "♥", color: "#ef4444" },
    { name: "diamond", symbol: "♦", color: "#ef4444" },
    { name: "spade", symbol: "♠", color: "#1e293b" },
    { name: "club", symbol: "♣", color: "#1e293b" }
  ];

  const [currentCard, setCurrentCard] = useState({ value: "A", suit: suits[0] });
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(450);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const [deckColor, setDeckColor] = useState('blue');

  const generateCard = () => {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    setCurrentCard({ value: randomValue, suit: randomSuit });
    setDeckColor(prev => prev === 'blue' ? 'red' : 'blue');
  };

  useEffect(() => {
    if (!isAutoRefresh) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          generateCard();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isAutoRefresh]);

  useEffect(() => {
    generateCard();
  }, []);

  const baseWidth = 300;
  const scaleFactor = Math.max(0.4, baseWidth / width);
  const dynamicMargin = (width / 5) + 20;
  const fontScale = Math.min(width / 3, height / 4.5);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white overflow-x-hidden poker-table-bg">
      
      <div className="flex flex-col md:flex-row items-center justify-center mb-12 relative w-full max-w-6xl">
        
        <div 
          id="deck-container" 
          className="relative hidden md:block"
          style={{
            width: '200px',
            height: '300px',
            marginRight: `${dynamicMargin}px`,
            transform: `scale(${scaleFactor})`,
          }}
        >
          <div className="deck-card w-full h-full z-10 translate-x-3 translate-y-3 opacity-40 shadow-sm bg-white"></div>
          <div className="deck-card w-full h-full z-20 translate-x-2 translate-y-2 opacity-60 shadow-md bg-white"></div>
          <div className="deck-card w-full h-full z-30 translate-x-1 translate-y-1 opacity-80 shadow-lg bg-white"></div>
          
          <div className="deck-card w-full h-full z-40 p-2 shadow-2xl border-2 border-white bg-slate-100">
            <div 
              className={`${deckColor === 'blue' ? 'card-back-pattern-blue' : 'card-back-pattern-red'} w-full h-full rounded-lg border-4 border-white flex items-center justify-center shadow-inner`}
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-4xl text-white">{deckColor === 'blue' ? '♠' : '♥'}</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="relative bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-500 ease-out overflow-hidden shrink-0"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <div 
            className="absolute top-4 left-6 select-none"
            style={{ 
              fontSize: `${fontScale * 0.5}px`,
              color: currentCard.suit.color 
            }}
          >
            {currentCard.suit.symbol}
          </div>
          
          <div 
            className="card-font font-bold select-none leading-none"
            style={{ 
              fontSize: `${fontScale * 1.2}px`,
              color: currentCard.suit.color 
            }}
          >
            {currentCard.value}
          </div>
          
          <div 
            className="absolute bottom-4 right-6 rotate-180 select-none"
            style={{ 
              fontSize: `${fontScale * 0.5}px`,
              color: currentCard.suit.color 
            }}
          >
            {currentCard.suit.symbol}
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-green-700 shadow-2xl flex flex-col gap-6 w-full max-w-md">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-black text-green-300 ml-1">
              Ancho
            </label>
            <input 
              type="range" 
              min="150" 
              max="500" 
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="w-full h-2 bg-green-900 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-[10px] text-green-400 font-mono">
              <span>{width}px</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-black text-green-300 ml-1">
              Alto
            </label>
            <input 
              type="range" 
              min="250" 
              max="700" 
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full h-2 bg-green-900 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-[10px] text-green-400 font-mono">
              <span>{height}px</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={() => {
              generateCard();
              setTimeLeft(10);
            }}
            className="group relative w-full py-4 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 active:scale-95 transition-all rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl overflow-hidden"
          >
            <span className="relative z-10">Generar Nueva Carta</span>
          </button>
          
          <div className="flex items-center justify-between px-2 bg-green-950/50 p-3 rounded-xl border border-green-800/50">
            <div className="flex flex-col">
              <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">
                Auto-refresco
              </span>
              <p className="text-green-200 text-xs font-mono">
                {isAutoRefresh ? `${timeLeft}s` : 'Pausado'}
              </p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isAutoRefresh}
                onChange={(e) => {
                  setIsAutoRefresh(e.target.checked);
                  if (e.target.checked) setTimeLeft(10);
                }}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App