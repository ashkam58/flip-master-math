
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProfessorEquals from '../ProfessorEquals';

const CelebrationSlide: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [achievementCount, setAchievementCount] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);

  const achievements = [
    { title: 'Portal Master', description: 'Learned the Flip Rules', emoji: '🌟', delay: 0 },
    { title: 'Equation Solver', description: 'Completed Practice Problems', emoji: '🧮', delay: 500 },
    { title: 'Balance Keeper', description: 'Mastered the Scale Game', emoji: '⚖️', delay: 1000 },
    { title: 'Speed Demon', description: 'Conquered the Time Challenge', emoji: '⚡', delay: 1500 },
    { title: 'Knowledge Seeker', description: 'Passed the Mastery Quiz', emoji: '🎓', delay: 2000 },
    { title: 'Algebra Warrior', description: 'Completed the Adventure!', emoji: '🏆', delay: 2500 }
  ];

  useEffect(() => {
    setShowConfetti(true);
    
    achievements.forEach((_, index) => {
      setTimeout(() => {
        setAchievementCount(prev => prev + 1);
      }, achievements[index].delay);
    });
  }, []);

  const generateCertificate = () => {
    setShowCertificate(true);
  };

  const restartAdventure = () => {
    window.location.reload();
  };

  return (
    <div className="space-y-8 relative overflow-hidden">
      {/* Confetti Background Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-bounce ${
                ['bg-comic-yellow', 'bg-comic-red', 'bg-comic-teal', 'bg-comic-purple'][i % 4]
              } w-3 h-3 rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Celebration */}
      <div className="text-center space-y-6 relative z-10">
        <div className="animate-bounce-in">
          <h1 className="font-bangers text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-comic-red via-comic-yellow to-comic-purple mb-4">
            CONGRATULATIONS!
          </h1>
          <div className="font-bangers text-3xl md:text-4xl text-comic-navy">
            🎉 YOU'VE CONQUERED EQUATIA! 🎉
          </div>
        </div>

        <div className="bg-gradient-to-r from-comic-yellow via-comic-red to-comic-purple p-2 rounded-lg border-4 border-black">
          <div className="bg-white p-6 rounded-lg">
            <p className="font-comic text-xl md:text-2xl text-comic-navy">
              You have successfully mastered the ancient art of 
              <span className="font-bangers text-comic-red text-2xl md:text-3xl"> ALGEBRA TRANSPOSING!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Unlocked Animation */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg border-4 border-black">
        <h2 className="font-bangers text-3xl text-center text-comic-navy mb-6">
          🏆 ACHIEVEMENTS UNLOCKED! 🏆
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.slice(0, achievementCount).map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white p-4 rounded-lg border-2 border-black shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{achievement.emoji}</div>
                <div className="font-bangers text-lg text-comic-purple">{achievement.title}</div>
                <div className="font-comic text-sm text-gray-600">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professor's Final Message */}
      <div className="flex justify-center">
        <ProfessorEquals 
          message="Outstanding work, young mathematician! You've learned to navigate the mysteries of my portal and maintain the sacred balance of equations. The kingdom of Equatia is forever in your debt! 🌟"
          size="large"
        />
      </div>

      {/* Skills Mastered Summary */}
      <div className="bg-gradient-to-r from-comic-green to-comic-teal p-6 rounded-lg border-4 border-black text-white">
        <h3 className="font-bangers text-3xl text-center mb-6">SKILLS MASTERED</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ The Flip Rules</div>
              <div className="font-comic text-sm">+ ↔ -, × ↔ ÷</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ Equation Solving</div>
              <div className="font-comic text-sm">Isolating variables step by step</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ Balance Maintenance</div>
              <div className="font-comic text-sm">What you do to one side, do to the other</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ Multi-step Problems</div>
              <div className="font-comic text-sm">Complex equations with multiple operations</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ Speed & Accuracy</div>
              <div className="font-comic text-sm">Quick problem solving under pressure</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="font-bangers text-lg">✅ Mathematical Confidence</div>
              <div className="font-comic text-sm">Ready for advanced algebra topics!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      {!showCertificate ? (
        <div className="text-center">
          <Button onClick={generateCertificate} className="comic-button bg-comic-yellow text-2xl px-8 py-4">
            Generate Your Certificate! 📜
          </Button>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg border-4 border-black animate-scale-in">
          <div className="text-center space-y-4">
            <div className="border-4 border-comic-navy p-6 bg-white">
              <div className="font-bangers text-4xl text-comic-red mb-2">🏆 CERTIFICATE OF MASTERY 🏆</div>
              <div className="font-comic text-xl mb-4">This certifies that</div>
              <div className="font-bangers text-3xl text-comic-purple mb-4">ALGEBRA ADVENTURE GRADUATE</div>
              <div className="font-comic text-lg mb-4">
                has successfully completed the Quest of Equatia and mastered the ancient art of
              </div>
              <div className="font-bangers text-2xl text-comic-red mb-4">ALGEBRA TRANSPOSING</div>
              <div className="font-comic text-sm text-gray-600">
                Awarded on {new Date().toLocaleDateString()}
              </div>
              <div className="mt-4 flex justify-center">
                <div className="font-bangers text-lg text-comic-navy">
                  Professor Equals, Guardian of the Equal Portal
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-comic-purple to-comic-red p-6 rounded-lg border-4 border-black text-white">
        <h3 className="font-bangers text-3xl text-center mb-4">WHAT'S NEXT? 🚀</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-2">📚</div>
            <div className="font-bangers text-lg">Advanced Algebra</div>
            <div className="font-comic text-sm">Quadratic equations, factoring, and more!</div>
          </div>
          <div>
            <div className="text-2xl mb-2">📐</div>
            <div className="font-bangers text-lg">Geometry Adventures</div>
            <div className="font-comic text-sm">Explore shapes, angles, and proofs!</div>
          </div>
          <div>
            <div className="text-2xl mb-2">🧮</div>
            <div className="font-bangers text-lg">Pre-Calculus Quest</div>
            <div className="font-comic text-sm">Functions, graphs, and limits await!</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button onClick={restartAdventure} className="comic-button bg-comic-green text-xl px-6 py-3">
          Start Adventure Again! 🔄
        </Button>
        <Button 
          onClick={() => window.print()} 
          className="comic-button bg-comic-teal text-xl px-6 py-3"
        >
          Print Certificate 🖨️
        </Button>
      </div>

      {/* Final Message */}
      <div className="text-center bg-gradient-to-r from-comic-yellow to-comic-orange p-4 rounded-lg border-4 border-black">
        <p className="font-comic text-lg">
          Thank you for joining us on this mathematical adventure! 
          <br />
          <span className="font-bangers text-xl text-comic-red">Keep practicing and stay curious! 🌟</span>
        </p>
      </div>
    </div>
  );
};

export default CelebrationSlide;
