import React from 'react';
import amazonIcon from '../assets/amazon.png';
import universityIcon from '../assets/university.png';
import propaceIcon from '../assets/Pr-logo.png';

function Rewards() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-around w-full">
          <img src={propaceIcon} alt="Propace Gift Card" className="h-20" />
          <img src={amazonIcon} alt="Amazon Gift Card" className="h-20" />
          <img src={universityIcon} alt="University Credit" className="h-20" />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Rewards, Your Choice</h2>
          <p className="text-gray-700 mb-6">
            Redeem for Amazon gift cards, unlock your subscription, or donate to charitable causes. The choice is yours to make!
          </p>
          <button className="bg-light-green text-dark-green rounded-full px-6 py-3 font-medium flex items-center">
            <span>Start Earning</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rewards;