import React from 'react';
import leaderboardImg from '../assets/Welcome.png';

function Leaderboard() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mb-8 md:mb-0">
          <img src={leaderboardImg} alt="Test Leaderboard" className="w-full" />
        </div>
        <div className="md:w-3/5 md:pl-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Score More, Earn More, Rule the Leaderboard!</h2>
          <p className="text-gray-700 mb-6">
            Compete with learners around the world and showcase your intellectual prowess. Climb the ranks, earn rewards, and establish yourself as an elite member of our knowledge community. Ready to rise to the top?
          </p>
          <button className="bg-light-green text-dark-green rounded-full px-6 py-3 font-medium flex items-center">
            <span>Get Started</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Leaderboard;
