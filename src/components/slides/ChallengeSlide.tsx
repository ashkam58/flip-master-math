
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ChallengeSlide: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [challengeComplete, setChallengeComplete] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const challenges = [
    {
      equation: 'x + 5 = 12',
      correctAnswer: 'x = 7',
      solution: 'x = 12 - 5',
      difficulty: 'Easy',
      points: 10
    },
    {
      equation: '3x = 18',
      correctAnswer: 'x = 6',
      solution: 'x = 18 ÷ 3',
      difficulty: 'Easy',
      points: 10
    },
    {
      equation: 'x - 8 = 15',
      correctAnswer: 'x = 23',
      solution: 'x = 15 + 8',
      difficulty: 'Medium',
      points: 15
    },
    {
      equation: '4x + 2 = 18',
      correctAnswer: 'x = 4',
      solution: '4x = 18 - 2, then x = 16 ÷ 4',
      difficulty: 'Hard',
      points: 20
    },
    {
      equation: '2x - 7 = 13',
      correctAnswer: 'x = 10',
      solution: '2x = 13 + 7, then x = 20 ÷ 2',
      difficulty: 'Hard',
      points: 20
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setChallengeComplete(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startChallenge = () => {
    setIsActive(true);
    setTimeLeft(60);
    setScore(0);
    setCurrentChallenge(0);
    setChallengeComplete(false);
    setUserAnswer('');
    setFeedback(null);
  };

  const submitAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === challenges[currentChallenge].correctAnswer.toLowerCase().trim();
    
    if (isCorrect) {
      setScore(prev => prev + challenges[currentChallenge].points);
      setFeedback('correct');
      
      setTimeout(() => {
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge(prev => prev + 1);
          setUserAnswer('');
          setFeedback(null);
        } else {
          setIsActive(false);
          setChallengeComplete(true);
        }
      }, 1500);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback(null);
      }, 1500);
    }
  };

  const getScoreRating = () => {
    if (score >= 80) return { rating: 'LEGENDARY MASTER!', color: 'text-yellow-600', emoji: '👑' };
    if (score >= 60) return { rating: 'ALGEBRA WARRIOR!', color: 'text-green-600', emoji: '⚔️' };
    if (score >= 40) return { rating: 'EQUATION EXPLORER!', color: 'text-blue-600', emoji: '🗺️' };
    return { rating: 'MATH APPRENTICE!', color: 'text-purple-600', emoji: '📚' };
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-bangers text-4xl md:text-5xl text-comic-red mb-4">
          SPEED CHALLENGE! ⚡
        </h2>
        <p className="font-comic text-xl text-comic-navy">
          Solve as many equations as you can in 60 seconds!
        </p>
      </div>

      {!isActive && !challengeComplete && (
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-comic-red to-comic-yellow p-6 rounded-lg border-4 border-black">
            <h3 className="font-bangers text-3xl text-white mb-4">CHALLENGE RULES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white font-comic">
              <div>
                <div className="font-bold text-lg">⏱️ TIME LIMIT</div>
                <div>60 seconds</div>
              </div>
              <div>
                <div className="font-bold text-lg">🎯 SCORING</div>
                <div>Easy: 10pts, Medium: 15pts, Hard: 20pts</div>
              </div>
              <div>
                <div className="font-bold text-lg">🏆 GOAL</div>
                <div>Maximize your score!</div>
              </div>
            </div>
          </div>
          
          <Button onClick={startChallenge} className="comic-button bg-comic-green text-2xl px-8 py-4">
            START CHALLENGE! 🚀
          </Button>
        </div>
      )}

      {isActive && (
        <div className="space-y-6">
          {/* Status Bar */}
          <div className="flex justify-between items-center bg-comic-navy text-white p-4 rounded-lg border-4 border-black">
            <div className="font-bangers text-xl">
              ⏱️ TIME: {timeLeft}s
            </div>
            <div className="font-bangers text-xl">
              Question {currentChallenge + 1}/{challenges.length}
            </div>
            <div className="font-bangers text-xl">
              🏆 SCORE: {score}
            </div>
          </div>

          {/* Current Challenge */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-4 border-black">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full border-2 border-black font-comic font-bold ${
                  challenges[currentChallenge].difficulty === 'Easy' ? 'bg-green-200' :
                  challenges[currentChallenge].difficulty === 'Medium' ? 'bg-yellow-200' : 'bg-red-200'
                }`}>
                  {challenges[currentChallenge].difficulty} - {challenges[currentChallenge].points} pts
                </span>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-4 border-black shadow-lg mb-6">
                <div className="font-comic text-4xl text-comic-red font-bold">
                  {challenges[currentChallenge].equation}
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer (e.g., x = 7)"
                  className="font-comic text-xl p-3 border-2 border-black rounded-lg w-full max-w-md mx-auto block text-center"
                  onKeyPress={(e) => e.key === 'Enter' && userAnswer.trim() && submitAnswer()}
                  autoFocus
                />
                <Button 
                  onClick={submitAnswer} 
                  className="comic-button bg-comic-yellow" 
                  disabled={!userAnswer.trim()}
                >
                  Submit Answer! ⚡
                </Button>
              </div>
            </div>

            {/* Feedback */}
            {feedback && (
              <div className={`text-center p-4 rounded-lg border-4 border-black animate-bounce-in ${
                feedback === 'correct' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className="font-bangers text-2xl">
                  {feedback === 'correct' ? '🎉 CORRECT! +' + challenges[currentChallenge].points + ' points!' : '❌ Try the next one!'}
                </div>
                {feedback === 'correct' && (
                  <div className="font-comic text-lg mt-2">
                    Solution: {challenges[currentChallenge].solution}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {challengeComplete && (
        <div className="text-center space-y-6 animate-bounce-in">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-8 rounded-lg border-4 border-black text-white">
            <h3 className="font-bangers text-4xl mb-4">CHALLENGE COMPLETE! 🎊</h3>
            
            <div className="space-y-4 text-2xl">
              <div className="font-bangers">
                FINAL SCORE: {score} points
              </div>
              
              <div className={`font-bangers ${getScoreRating().color}`}>
                {getScoreRating().emoji} {getScoreRating().rating} {getScoreRating().emoji}
              </div>
              
              <div className="font-comic text-lg">
                You solved {Math.floor(score / 15)} equations correctly!
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button onClick={startChallenge} className="comic-button bg-comic-green">
              Try Again! 🔄
            </Button>
          </div>

          {/* Achievement Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { threshold: 20, title: 'First Steps', emoji: '👶', desc: 'Scored 20+ points' },
              { threshold: 40, title: 'Getting Good', emoji: '📈', desc: 'Scored 40+ points' },
              { threshold: 60, title: 'Math Warrior', emoji: '⚔️', desc: 'Scored 60+ points' },
              { threshold: 80, title: 'Algebra Master', emoji: '👑', desc: 'Scored 80+ points' }
            ].map((badge, index) => (
              <div key={index} className={`p-3 rounded-lg border-2 border-black text-center ${
                score >= badge.threshold ? 'bg-yellow-200 animate-pulse' : 'bg-gray-200'
              }`}>
                <div className="text-2xl mb-1">{badge.emoji}</div>
                <div className="font-comic text-sm font-bold">{badge.title}</div>
                <div className="font-comic text-xs">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeSlide;
