import React from 'react';
import questionsImg from '../assets/Gird-lead.png';

function DetailedExplanations() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Learn, Improve, Excel with the Detailed Explanations</h2>
          <p className="text-gray-700 mb-6">
            Our platform doesn't just tell you if you're right or wrong—it provides detailed explanations for each question. When you realize where you went wrong, you learn more effectively. Each detailed explanation is carefully crafted to build your knowledge and ensure that next time, you're equipped to succeed.
          </p>
          <button className="bg-light-green text-dark-green rounded-full px-6 py-3 font-medium flex items-center">
            <span>Take Your First Free Test</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <img src={questionsImg} alt="Question Summary" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default DetailedExplanations;