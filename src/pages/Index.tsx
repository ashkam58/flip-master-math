import React from 'react';
import SlideContainer from '../components/SlideContainer';
import IntroComicSlide from '../components/slides/IntroComicSlide';
import FlipRuleSlide from '../components/slides/FlipRuleSlide';
import PracticeSlide from '../components/slides/PracticeSlide';
import BalanceGameSlide from '../components/slides/BalanceGameSlide';
import ChallengeSlide from '../components/slides/ChallengeSlide';
import MasterySlide from '../components/slides/MasterySlide';
import CelebrationSlide from '../components/slides/CelebrationSlide';
import HireMe from '../components/slides/HireMe'; // <-- Fixed import

const Index = () => {
  const slides = [
    IntroComicSlide,
    FlipRuleSlide,
    PracticeSlide,
    BalanceGameSlide,
    ChallengeSlide,
    MasterySlide,
    CelebrationSlide,
    HireMe, // <-- Add HireMe as the last slide
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      <SlideContainer slides={slides} />
    </div>
  );
};

export default Index;
