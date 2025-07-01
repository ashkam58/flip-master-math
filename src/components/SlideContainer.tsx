
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideContainerProps {
  slides: React.ComponentType[];
  initialSlide?: number;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ slides, initialSlide = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const CurrentSlideComponent = slides[currentSlide];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-comic-yellow/20 via-comic-teal/20 to-comic-purple/20 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Slide Counter */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border-2 border-black transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-comic-yellow' 
                    : 'bg-white'
                }`}
              />
            ))}
          </div>
          <p className="font-bangers text-lg mt-2">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>

        {/* Main Slide Content */}
        <div className="comic-panel min-h-[600px] mb-6">
          <CurrentSlideComponent />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="comic-button"
            variant="outline"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          
          <div className="font-comic text-lg">
            Welcome to <span className="font-bangers text-comic-red text-xl">ALGEBRA ADVENTURE!</span>
          </div>
          
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="comic-button"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlideContainer;
