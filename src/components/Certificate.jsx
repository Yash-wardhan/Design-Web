import React from 'react';
import certificateImg from '../assets/Certificate.png';

function Certificate() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Earn Brag-Worthy Certificates to Showcase Your Credibility</h2>
        <div className="flex justify-center">
          <img src={certificateImg} alt="Sample Certificate" className="w-full max-w-2xl rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Certificate;