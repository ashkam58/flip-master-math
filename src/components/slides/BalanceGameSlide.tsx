
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const BalanceGameSlide: React.FC = () => {
  const [leftScale, setLeftScale] = useState(['2x', '+3']);
  const [rightScale, setRightScale] = useState(['15']);
  const [moves, setMoves] = useState<string[]>([]);
  const [isBalanced, setIsBalanced] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const moveAcross = (term: string, fromSide: 'left' | 'right') => {
    let flippedTerm = term;
    
    // Apply flipping rules
    if (term.startsWith('+')) {
      flippedTerm = '-' + term.slice(1);
    } else if (term.startsWith('-')) {
      flippedTerm = '+' + term.slice(1);
    } else if (term === '+3') {
      flippedTerm = '-3';
    } else if (term === '-3') {
      flippedTerm = '+3';
    }
    
    if (fromSide === 'left') {
      setLeftScale(prev => prev.filter(t => t !== term));
      setRightScale(prev => [...prev, flippedTerm]);
    } else {
      setRightScale(prev => prev.filter(t => t !== term));
      setLeftScale(prev => [...prev, flippedTerm]);
    }
    
    setMoves(prev => [...prev, `Moved ${term} → ${flippedTerm}`]);
  };

  const checkBalance = () => {
    // Check if we have x isolated on one side
    const leftHasOnlyX = leftScale.length === 1 && leftScale[0] === '2x';
    const rightIsSimplified = rightScale.every(term => !term.includes('x'));
    
    if (leftHasOnlyX && rightIsSimplified) {
      setIsBalanced(true);
      if (rightScale.includes('12') || (rightScale.includes('15') && rightScale.includes('-3'))) {
        setGameComplete(true);
      }
    }
  };

  const resetGame = () => {
    setLeftScale(['2x', '+3']);
    setRightScale(['15']);
    setMoves([]);
    setIsBalanced(false);
    setGameComplete(false);
  };

  const simplifyRight = () => {
    if (rightScale.includes('15') && rightScale.includes('-3')) {
      setRightScale(['12']);
      setMoves(prev => [...prev, 'Simplified: 15 - 3 = 12']);
    }
  };

  useEffect(() => {
    checkBalance();
  }, [leftScale, rightScale]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-bangers text-4xl md:text-5xl text-comic-green mb-4">
          BALANCE THE SCALE! ⚖️
        </h2>
        <p className="font-comic text-xl text-comic-navy">
          Move terms across the portal to isolate x!
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-comic-yellow/20 p-4 rounded-lg border-2 border-black text-center">
        <p className="font-comic text-lg">
          <strong>Goal:</strong> Get 'x' alone on the left side by moving terms across the equal sign!
        </p>
      </div>

      {/* Balance Scale Game */}
      <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-lg border-4 border-black">
        <div className="flex items-center justify-center space-x-8 mb-8">
          {/* Left Scale */}
          <div className="text-center">
            <div className="font-bangers text-2xl mb-4 text-comic-navy">LEFT SIDE</div>
            <div className="bg-white p-6 rounded-lg border-4 border-black min-h-[120px] w-48 flex flex-wrap items-center justify-center gap-2">
              {leftScale.map((term, index) => (
                <button
                  key={index}
                  onClick={() => moveAcross(term, 'left')}
                  className="bg-comic-teal text-white font-comic text-lg px-3 py-2 rounded-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Portal */}
          <div className="relative">
            <div className="portal-glow w-20 h-20 rounded-full flex items-center justify-center border-4 border-black">
              <div className="font-bangers text-3xl text-white drop-shadow-lg">
                =
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="font-comic text-sm text-comic-purple font-bold">FLIP PORTAL</div>
            </div>
          </div>

          {/* Right Scale */}
          <div className="text-center">
            <div className="font-bangers text-2xl mb-4 text-comic-navy">RIGHT SIDE</div>
            <div className="bg-white p-6 rounded-lg border-4 border-black min-h-[120px] w-48 flex flex-wrap items-center justify-center gap-2">
              {rightScale.map((term, index) => (
                <button
                  key={index}
                  onClick={() => moveAcross(term, 'right')}
                  className="bg-comic-red text-white font-comic text-lg px-3 py-2 rounded-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-6">
          {rightScale.includes('15') && rightScale.includes('-3') && (
            <Button onClick={simplifyRight} className="comic-button bg-comic-yellow">
              Simplify Right Side 🧮
            </Button>
          )}
          <Button onClick={resetGame} className="comic-button bg-comic-purple">
            Reset Game 🔄
          </Button>
        </div>

        {/* Status */}
        {isBalanced && !gameComplete && (
          <div className="text-center mb-4">
            <div className="bg-yellow-100 p-4 rounded-lg border-4 border-black">
              <div className="font-bangers text-xl text-comic-green">
                🎯 ALMOST THERE! Now simplify to get the final answer!
              </div>
            </div>
          </div>
        )}

        {gameComplete && (
          <div className="text-center mb-4 animate-bounce-in">
            <div className="bg-green-100 p-4 rounded-lg border-4 border-black">
              <div className="font-bangers text-2xl text-comic-green mb-2">
                🏆 PERFECT BALANCE ACHIEVED! 🏆
              </div>
              <div className="font-comic text-xl">
                2x = 12, so x = 6! You've mastered the art of balance!
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Move History */}
      {moves.length > 0 && (
        <div className="bg-white p-4 rounded-lg border-2 border-black">
          <div className="font-bangers text-lg mb-2 text-comic-navy">MOVE HISTORY:</div>
          <div className="space-y-1">
            {moves.map((move, index) => (
              <div key={index} className="font-comic text-sm text-comic-purple">
                {index + 1}. {move}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Game Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="comic-panel bg-gradient-to-br from-comic-teal/20 to-comic-green/20">
          <h3 className="font-bangers text-xl text-comic-navy mb-2 text-center">FLIP RULES</h3>
          <ul className="space-y-1 font-comic text-sm">
            <li>• +3 becomes -3</li>
            <li>• -3 becomes +3</li>
            <li>• Terms flip when crossing =</li>
          </ul>
        </div>
        
        <div className="comic-panel bg-gradient-to-br from-comic-yellow/20 to-comic-red/20">
          <h3 className="font-bangers text-xl text-comic-navy mb-2 text-center">GOAL</h3>
          <p className="font-comic text-sm">
            Isolate the variable (x) on one side to solve the equation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceGameSlide;
