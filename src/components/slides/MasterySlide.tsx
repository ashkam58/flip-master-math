
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfessorEquals from '../ProfessorEquals';

const MasterySlide: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const masteryTopics = [
    {
      id: 'addition',
      title: 'Addition & Subtraction',
      description: 'Master moving terms with + and - operations',
      examples: ['x + 5 = 12', 'x - 3 = 8', '7 + x = 15'],
      rule: 'When + crosses the portal, it becomes -. When - crosses, it becomes +',
      color: 'from-comic-green to-comic-teal'
    },
    {
      id: 'multiplication',
      title: 'Multiplication & Division',
      description: 'Master moving terms with × and ÷ operations',
      examples: ['2x = 14', 'x ÷ 3 = 5', '4x = 20'],
      rule: 'When × crosses the portal, it becomes ÷. When ÷ crosses, it becomes ×',
      color: 'from-comic-purple to-comic-red'
    },
    {
      id: 'mixed',
      title: 'Mixed Operations',
      description: 'Master complex equations with multiple steps',
      examples: ['2x + 3 = 11', '3x - 5 = 16', '4x + 1 = 21'],
      rule: 'Solve step by step: move addition/subtraction first, then multiplication/division',
      color: 'from-comic-yellow to-comic-red'
    }
  ];

  const quizQuestions = [
    {
      question: 'What happens to +7 when it crosses the equal sign?',
      options: ['-7', '+7', '×7', '÷7'],
      correct: 0,
      explanation: '+7 becomes -7 when crossing the portal!'
    },
    {
      question: 'To solve 3x = 15, what operation do we use?',
      options: ['Add 3', 'Subtract 3', 'Multiply by 3', 'Divide by 3'],
      correct: 3,
      explanation: 'Since 3 is multiplying x, we divide both sides by 3!'
    },
    {
      question: 'In the equation x - 4 = 10, what should we do to isolate x?',
      options: ['Subtract 4', 'Add 4', 'Multiply by 4', 'Divide by 4'],
      correct: 1,
      explanation: 'Move -4 to the right side by adding 4 to both sides!'
    },
    {
      question: 'What is the first step in solving 2x + 5 = 13?',
      options: ['Divide by 2', 'Subtract 5', 'Add 5', 'Multiply by 2'],
      correct: 1,
      explanation: 'First move the +5 by subtracting 5 from both sides!'
    }
  ];

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setQuizScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz complete
      setShowQuiz(false);
    }
  };

  const getMasteryLevel = () => {
    const percentage = (quizScore / quizQuestions.length) * 100;
    if (percentage >= 80) return { level: 'ALGEBRA MASTER', emoji: '👑', color: 'text-yellow-600' };
    if (percentage >= 60) return { level: 'ADVANCED', emoji: '⭐', color: 'text-blue-600' };
    if (percentage >= 40) return { level: 'INTERMEDIATE', emoji: '📈', color: 'text-green-600' };
    return { level: 'BEGINNER', emoji: '🌱', color: 'text-purple-600' };
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-bangers text-4xl md:text-5xl text-comic-purple mb-4">
          MASTERY CHECK! 🎓
        </h2>
        <p className="font-comic text-xl text-comic-navy">
          Review the key concepts and test your knowledge!
        </p>
      </div>

      {!showQuiz ? (
        <>
          {/* Mastery Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masteryTopics.map((topic) => (
              <div
                key={topic.id}
                className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedTopic === topic.id ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
              >
                <div className={`bg-gradient-to-br ${topic.color} p-6 rounded-lg border-4 border-black text-white shadow-lg`}>
                  <h3 className="font-bangers text-2xl mb-3 text-center">{topic.title}</h3>
                  <p className="font-comic text-sm text-center mb-4">{topic.description}</p>
                  
                  {selectedTopic === topic.id && (
                    <div className="animate-fade-in space-y-3">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="font-comic text-sm font-bold mb-2">Key Rule:</div>
                        <div className="font-comic text-sm">{topic.rule}</div>
                      </div>
                      
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="font-comic text-sm font-bold mb-2">Examples:</div>
                        <div className="space-y-1">
                          {topic.examples.map((example, index) => (
                            <div key={index} className="font-comic text-sm">• {example}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Review */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-4 border-black">
            <h3 className="font-bangers text-3xl text-center text-comic-navy mb-6">QUICK REVIEW 📚</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-black">
                  <div className="font-bangers text-xl text-comic-red mb-2">THE FLIP RULES</div>
                  <ul className="font-comic space-y-1">
                    <li>• + becomes -</li>
                    <li>• - becomes +</li>
                    <li>• × becomes ÷</li>
                    <li>• ÷ becomes ×</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-black">
                  <div className="font-bangers text-xl text-comic-green mb-2">SOLVING STEPS</div>
                  <ol className="font-comic space-y-1">
                    <li>1. Move constants first</li>
                    <li>2. Then handle coefficients</li>
                    <li>3. Simplify each step</li>
                    <li>4. Check your answer!</li>
                  </ol>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <ProfessorEquals 
                  message="Remember: The portal maintains balance! Whatever you do to one side, you must do to the other! ⚖️"
                  size="large"
                />
              </div>
            </div>
          </div>

          {/* Start Quiz Button */}
          <div className="text-center">
            <Button onClick={startQuiz} className="comic-button bg-comic-red text-2xl px-8 py-4">
              Take the Mastery Quiz! 🧠
            </Button>
          </div>
        </>
      ) : (
        /* Quiz Section */
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-comic-purple to-comic-red text-white p-4 rounded-lg border-4 border-black">
            <div className="flex justify-between items-center">
              <div className="font-bangers text-xl">Question {currentQuestion + 1} of {quizQuestions.length}</div>
              <div className="font-bangers text-xl">Score: {quizScore}/{quizQuestions.length}</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border-4 border-black">
            <div className="text-center mb-6">
              <h3 className="font-bangers text-2xl text-comic-navy mb-4">
                {quizQuestions[currentQuestion].question}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`p-3 rounded-lg border-2 border-black font-comic text-lg transition-all duration-200 ${
                      selectedAnswer === index 
                        ? 'bg-comic-yellow scale-105' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {!showResult && (
                <Button 
                  onClick={submitAnswer} 
                  className="comic-button bg-comic-green mt-6" 
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              )}

              {showResult && (
                <div className="mt-6 animate-bounce-in">
                  <div className={`p-4 rounded-lg border-4 border-black ${
                    selectedAnswer === quizQuestions[currentQuestion].correct 
                      ? 'bg-green-100' 
                      : 'bg-red-100'
                  }`}>
                    <div className="font-bangers text-xl mb-2">
                      {selectedAnswer === quizQuestions[currentQuestion].correct ? '🎉 Correct!' : '❌ Not quite!'}
                    </div>
                    <div className="font-comic text-lg">
                      {quizQuestions[currentQuestion].explanation}
                    </div>
                  </div>
                  
                  <Button onClick={nextQuestion} className="comic-button bg-comic-teal mt-4">
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Results */}
      {!showQuiz && quizScore > 0 && (
        <div className="text-center bg-gradient-to-r from-purple-400 to-pink-400 text-white p-6 rounded-lg border-4 border-black animate-bounce-in">
          <h3 className="font-bangers text-3xl mb-4">QUIZ COMPLETE! 🎊</h3>
          <div className="space-y-2">
            <div className="font-bangers text-2xl">
              Final Score: {quizScore}/{quizQuestions.length}
            </div>
            <div className={`font-bangers text-xl ${getMasteryLevel().color}`}>
              {getMasteryLevel().emoji} {getMasteryLevel().level} {getMasteryLevel().emoji}
            </div>
            <div className="font-comic text-lg">
              You've demonstrated {getMasteryLevel().level.toLowerCase()} understanding of algebra transposing!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterySlide;
