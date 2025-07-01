
import React from 'react';
import ProfessorEquals from '../ProfessorEquals';

const IntroComicSlide: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      {/* Title Panel */}
      <div className="bg-gradient-to-r from-comic-red to-comic-yellow p-6 rounded-lg border-4 border-black shadow-lg transform -rotate-1">
        <h1 className="font-bangers text-4xl md:text-6xl text-white drop-shadow-lg">
          WELCOME TO EQUATIA!
        </h1>
        <p className="font-comic text-lg md:text-xl text-white mt-2 font-bold">
          The Land Where Numbers Dance Across Portals!
        </p>
      </div>

      {/* Portal Effect */}
      <div className="relative my-8">
        <div className="portal-glow w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 border-black">
          <div className="font-bangers text-6xl text-white drop-shadow-lg animate-pulse">
            =
          </div>
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-comic-yellow rounded-full animate-bounce"></div>
        <div className="absolute -top-2 -right-6 w-6 h-6 bg-comic-teal rounded-full animate-pulse"></div>
        <div className="absolute -bottom-6 left-8 w-4 h-4 bg-comic-red rounded-full animate-ping"></div>
      </div>

      {/* Professor Introduction */}
      <ProfessorEquals 
        size="large"
        message="Greetings, young mathematicians! I am Professor Equals, keeper of the Sacred Equal Sign Portal. When numbers cross through my portal... THEY TRANSFORM! ✨"
      />

      {/* Comic Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="comic-panel bg-gradient-to-br from-comic-teal/20 to-comic-purple/20 text-center">
          <h3 className="font-bangers text-2xl text-comic-navy mb-4">THE LEGEND</h3>
          <p className="font-comic text-lg">
            In the mystical land of Equatia, balance must be maintained! 
            When terms cross the Equal Portal, they must flip their form to keep harmony! ⚖️
          </p>
        </div>
        
        <div className="comic-panel bg-gradient-to-br from-comic-yellow/20 to-comic-red/20 text-center">
          <h3 className="font-bangers text-2xl text-comic-navy mb-4">YOUR QUEST</h3>
          <p className="font-comic text-lg">
            Master the ancient art of <span className="font-bold text-comic-red">ALGEBRA TRANSPOSING</span>! 
            Learn to flip + into -, × into ÷, and restore balance to equations! 🧙‍♂️
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-comic-green to-comic-teal p-4 rounded-lg border-4 border-black transform rotate-1">
        <p className="font-bangers text-2xl text-white drop-shadow-lg">
          Ready to become an EQUATION WARRIOR? 🗡️
        </p>
        <p className="font-comic text-lg text-white mt-2">
          Click NEXT to begin your mathematical adventure!
        </p>
      </div>
    </div>
  );
};

export default IntroComicSlide;
