import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import GrowthBlueprint from './components/GrowthBlueprint';
import PricingPlans from './components/PricingPlans';
import Certificate from './components/Certificate';
import Rewards from './components/Rewards';
import ReferralBanner from './components/ReferralBanner';
import Footer from './components/Footer';
import DetailedExplanations from './components/DetailedExpanations';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DetailedExplanations />
      <Leaderboard />
      <GrowthBlueprint />
      <PricingPlans />
      <Certificate />
      <Rewards />
      <ReferralBanner />
      <Footer />
    </div>
  );
}

export default App;