
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfessorEquals from '../ProfessorEquals';

const FlipRuleSlide: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    { before: 'x + 3 = 9', after: 'x = 9 - 3', explanation: '+ becomes - when crossing!' },
    { before: '2x = 10', after: 'x = 10 ÷ 2', explanation: '× becomes ÷ when crossing!' },
    { before: 'x - 5 = 7', after: 'x = 7 + 5', explanation: '- becomes + when crossing!' }
  ];

  const triggerFlip = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setShowAnimation(false);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-bangers text-4xl md:text-5xl text-comic-red mb-4">
          THE GREAT FLIP-A-ROO! 🔄
        </h2>
        <p className="font-comic text-xl text-comic-navy">
          When terms cross the portal, they flip their powers!
        </p>
      </div>

      {/* Interactive Example */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-4 border-black">
        <div className="flex items-center justify-center space-x-8 mb-6">
          {/* Left Side */}
          <div className="text-center">
            <div className="font-bangers text-3xl text-comic-navy mb-2">BEFORE</div>
            <div className={`font-comic text-2xl p-4 bg-white border-3 border-black rounded-lg ${showAnimation ? 'animate-bounce' : ''}`}>
              {examples[currentExample].before}
            </div>
          </div>

          {/* Portal */}
          <div className="relative">
            <div className={`portal-glow w-24 h-24 rounded-full flex items-center justify-center border-4 border-black ${showAnimation ? 'animate-spin' : ''}`}>
              <div className="font-bangers text-4xl text-white drop-shadow-lg">
                =
              </div>
            </div>
            {showAnimation && (
              <>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-comic-yellow rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-comic-teal rounded-full animate-ping"></div>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="text-center">
            <div className="font-bangers text-3xl text-comic-navy mb-2">AFTER</div>
            <div className={`font-comic text-2xl p-4 bg-white border-3 border-black rounded-lg ${showAnimation ? 'animate-flip' : ''}`}>
              {showAnimation ? '✨ FLIPPING... ✨' : examples[currentExample].after}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="text-center">
          <div className="speech-bubble inline-block">
            <p className="font-comic text-lg font-semibold text-comic-purple">
              {examples[currentExample].explanation}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={triggerFlip} className="comic-button bg-comic-yellow">
            🪄 Watch the Flip!
          </Button>
          <Button onClick={nextExample} className="comic-button bg-comic-teal">
            Next Example ➡️
          </Button>
        </div>
      </div>

      {/* Characters Commentary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <ProfessorEquals 
            message="Remember: Whatever operation you see, do the OPPOSITE when it crosses my portal!"
            size="medium"
          />
        </div>
        
        <div className="comic-panel bg-gradient-to-br from-comic-green/20 to-comic-yellow/20">
          <h3 className="font-bangers text-2xl text-comic-navy mb-4 text-center">THE FLIP RULES</h3>
          <ul className="space-y-2 font-comic text-lg">
            <li>➕ Plus becomes ➖ Minus</li>
            <li>➖ Minus becomes ➕ Plus</li>
            <li>✖️ Multiply becomes ➗ Divide</li>
            <li>➗ Divide becomes ✖️ Multiply</li>
          </ul>
          <div className="text-center mt-4">
            <span className="font-bangers text-xl text-comic-red">It's all about BALANCE! ⚖️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipRuleSlide;
