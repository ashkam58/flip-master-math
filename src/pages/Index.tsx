
import React from 'react';
import SlideContainer from '../components/SlideContainer';
import IntroComicSlide from '../components/slides/IntroComicSlide';
import FlipRuleSlide from '../components/slides/FlipRuleSlide';
import PracticeSlide from '../components/slides/PracticeSlide';
import BalanceGameSlide from '../components/slides/BalanceGameSlide';
import ChallengeSlide from '../components/slides/ChallengeSlide';
import MasterySlide from '../components/slides/MasterySlide';
import CelebrationSlide from '../components/slides/CelebrationSlide';

const Index = () => {
  const slides = [
    IntroComicSlide,
    FlipRuleSlide,
    PracticeSlide,
    BalanceGameSlide,
    ChallengeSlide,
    MasterySlide,
    CelebrationSlide,
  ];

  return <SlideContainer slides={slides} />;
};

export default Index;
