import React from 'react';

const HireMe: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-10">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-purple-900 mb-4">
          Hire Me: Ashkam
        </h1>
        <p className="text-xl md:text-2xl font-lora text-purple-700">
          Instructional Designer for K-12 Learning Adventures
        </p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-xl mx-auto animate-fade-in-up">
        <p className="text-lg md:text-xl font-lora text-gray-900 mb-4">
          Are you looking for creative, engaging, and effective math or science content for your K-12 students? I specialize in designing interactive lessons, digital activities, and multimedia resources that make learning fun and meaningful.
        </p>
        <ul className="text-left text-purple-700 font-lora text-base md:text-lg list-disc list-inside mb-4">
          <li>Custom curriculum design for all grade levels</li>
          <li>Gamified learning experiences</li>
          <li>Story-driven math & science modules</li>
          <li>Accessible, inclusive, and standards-aligned content</li>
        </ul>
        <p className="text-purple-900 font-poppins font-bold mt-4">
          Let’s collaborate to inspire the next generation of learners!
        </p>
        <a
          href="mailto:ashkam58@gmail.com"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-300"
        >
          Contact Ashkam
        </a>
      </div>
    </div>
  );
};

export default HireMe;
