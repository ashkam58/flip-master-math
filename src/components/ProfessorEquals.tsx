
import React from 'react';

interface ProfessorEqualsProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

const ProfessorEquals: React.FC<ProfessorEqualsProps> = ({ 
  message, 
  size = 'medium',
  animated = true 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Professor Equals Avatar */}
      <div className={`relative ${sizeClasses[size]} ${animated ? 'animate-bounce-in' : ''}`}>
        <div className="w-full h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-full border-4 border-black shadow-lg relative overflow-hidden">
          {/* Wizard Hat */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-700 border-2 border-black rounded-t-full">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-comic-yellow rounded-full"></div>
          </div>
          
          {/* Face */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            {/* Eyes */}
            <div className="flex space-x-2 mb-1">
              <div className="w-2 h-2 bg-white rounded-full border border-black">
                <div className="w-1 h-1 bg-black rounded-full mt-0.5 ml-0.5"></div>
              </div>
              <div className="w-2 h-2 bg-white rounded-full border border-black">
                <div className="w-1 h-1 bg-black rounded-full mt-0.5 ml-0.5"></div>
              </div>
            </div>
            
            {/* Mustache */}
            <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto mb-1"></div>
            
            {/* Mouth */}
            <div className="w-3 h-1.5 bg-pink-400 rounded-full mx-auto"></div>
          </div>
          
          {/* Equal Sign on Chest */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="text-white font-bangers text-lg font-bold">=</div>
          </div>
        </div>
        
        {/* Magic Sparkles */}
        {animated && (
          <>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-comic-yellow rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-comic-teal rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-3 w-1 h-1 bg-comic-red rounded-full animate-bounce"></div>
          </>
        )}
      </div>
      
      {/* Speech Bubble */}
      {message && (
        <div className="speech-bubble max-w-md text-center animate-fade-in">
          <p className="font-comic text-lg font-semibold text-comic-navy">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfessorEquals;
