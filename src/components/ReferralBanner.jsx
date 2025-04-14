import React from 'react';
import giftImg from '../assets/Asset11.png';

function ReferralBanner() {
  return (
    <section className="py-8 px-8 bg-dark-green text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg bg-opacity-20 bg-black px-4 py-8">
        <div className="md:w-3/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Invite your friends and watch the rewards roll in!</h3>
          <p className="text-gray-200">
            Share your unique referral code with your friends and family. For each successful referral, the bigger the reward!
          </p>
        </div>
        <div className="md:w-1/4 flex justify-end">
          <img src={giftImg} alt="Gift Box" className="h-24" />
        </div>
      </div>
    </section>
  );
}

export default ReferralBanner;