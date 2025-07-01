
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfessorEquals from '../ProfessorEquals';

const PracticeSlide: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const problems = [
    {
      equation: 'x + 7 = 15',
      solution: 'x = 15 - 7',
      answer: 'x = 8',
      hint: 'Move +7 to the right side by flipping it to -7'
    },
    {
      equation: '3x = 21',
      solution: 'x = 21 ÷ 3',
      answer: 'x = 7',
      hint: 'The 3 is multiplying x, so divide both sides by 3'
    },
    {
      equation: 'x - 4 = 12',
      solution: 'x = 12 + 4',
      answer: 'x = 16',
      hint: 'Move -4 to the right side by flipping it to +4'
    }
  ];

  const checkAnswer = () => {
    const correct = userAnswer.toLowerCase().trim() === problems[currentProblem].answer.toLowerCase().trim();
    setIsCorrect(correct);
    setShowSolution(true);
  };

  const nextProblem = () => {
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(prev => prev + 1);
      setUserAnswer('');
      setShowSolution(false);
      setIsCorrect(null);
    }
  };

  const resetProblem = () => {
    setUserAnswer('');
    setShowSolution(false);
    setIsCorrect(null);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-bangers text-4xl md:text-5xl text-comic-purple mb-4">
          PRACTICE TIME! 🎯
        </h2>
        <p className="font-comic text-xl text-comic-navy">
          Let's solve some equations together!
        </p>
      </div>

      {/* Problem Counter */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-comic-yellow/20 px-4 py-2 rounded-lg border-2 border-black">
          <span className="font-bangers text-xl">Problem {currentProblem + 1} of {problems.length}</span>
        </div>
      </div>

      {/* Main Practice Area */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg border-4 border-black">
        <div className="text-center mb-6">
          <div className="font-bangers text-3xl text-comic-navy mb-4">SOLVE THIS EQUATION:</div>
          
          {/* Current Problem */}
          <div className="bg-white p-6 rounded-lg border-4 border-black shadow-lg mb-6">
            <div className="font-comic text-4xl text-comic-red font-bold">
              {problems[currentProblem].equation}
            </div>
          </div>

          {/* Input Area */}
          {!showSolution && (
            <div className="space-y-4">
              <div>
                <label className="font-comic text-lg font-semibold block mb-2">Your Answer:</label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer (e.g., x = 8)"
                  className="font-comic text-xl p-3 border-2 border-black rounded-lg w-full max-w-md mx-auto block text-center"
                />
              </div>
              <Button onClick={checkAnswer} className="comic-button bg-comic-green" disabled={!userAnswer.trim()}>
                Check Answer! ✅
              </Button>
            </div>
          )}

          {/* Solution Display */}
          {showSolution && (
            <div className="space-y-4 animate-bounce-in">
              <div className={`p-4 rounded-lg border-4 border-black ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                <div className="font-bangers text-2xl mb-2">
                  {isCorrect ? '🎉 CORRECT! 🎉' : '❌ Not quite right!'}
                </div>
                <div className="font-comic text-lg">
                  <strong>Solution Steps:</strong>
                </div>
                <div className="font-comic text-xl mt-2">
                  {problems[currentProblem].equation} → {problems[currentProblem].solution}
                </div>
                <div className="font-comic text-xl font-bold text-comic-green">
                  {problems[currentProblem].answer}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                {currentProblem < problems.length - 1 ? (
                  <Button onClick={nextProblem} className="comic-button bg-comic-yellow">
                    Next Problem ➡️
                  </Button>
                ) : (
                  <div className="text-center">
                    <div className="font-bangers text-2xl text-comic-green mb-2">
                      🏆 ALL PROBLEMS COMPLETE! 🏆
                    </div>
                    <Button onClick={() => setCurrentProblem(0)} className="comic-button bg-comic-purple">
                      Practice Again 🔄
                    </Button>
                  </div>
                )}
                <Button onClick={resetProblem} className="comic-button bg-comic-teal">
                  Try Again 🔄
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Hint Section */}
        {!showSolution && (
          <div className="mt-6">
            <div className="bg-comic-yellow/20 p-4 rounded-lg border-2 border-black">
              <div className="font-bangers text-lg text-comic-navy mb-2">💡 HINT:</div>
              <div className="font-comic text-base">
                {problems[currentProblem].hint}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Professor Commentary */}
      <div className="flex justify-center">
        <ProfessorEquals 
          message="Remember: Whatever crosses my portal must flip its operation! Keep practicing and you'll master this ancient art! 🧙‍♂️"
          size="medium"
        />
      </div>
    </div>
  );
};

export default PracticeSlide;
