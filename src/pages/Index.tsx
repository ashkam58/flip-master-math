
import React from 'react';
import SlideContainer from '../components/SlideContainer';
import IntroComicSlide from '../components/slides/IntroComicSlide';
import FlipRuleSlide from '../components/slides/FlipRuleSlide';

const Index = () => {
  const slides = [
    IntroComicSlide,
    FlipRuleSlide,
    // More slides will be added here
  ];

  return <SlideContainer slides={slides} />;
};

export default Index;
