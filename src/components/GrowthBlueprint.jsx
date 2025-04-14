import React from 'react';
import strengthsImg from '../assets/Strength.png';

function GrowthBlueprint() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Unlock Your Personalized Growth Blueprint</h2>
          <p className="text-gray-700 mb-6">
            Get feedback on your performance, including detailed analysis of your strengths and weaknesses across different subjects.
          </p>
          <button className="bg-light-green text-dark-green rounded-full px-6 py-3 font-medium flex items-center">
            <span>Get Started</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <img src={strengthsImg} alt="Strengths and Weaknesses" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default GrowthBlueprint;