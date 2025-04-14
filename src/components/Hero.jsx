import React from 'react';
import dashboardImg from '../assets/Left-Banner.png';

function Hero() {
    const features = [
        { title: "Win Rewards", icon: "📚" },
        { title: "Test Analysis", icon: "📊" },
        { title: "Solution Key", icon: "🔑" },
        { title: "Certificates", icon: "🏆" }
      ];
    return (
        <section className="bg-dark-green h-[90%] text-white py-12 px-4 ">
            <div className='flex flex-col w-[100%]  mx-auto md:flex-row items-center justify-between gap-2.5'>
                <div className="md:w-2/3 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold  mb-4">Ignite Your Mind, Win Big</h1>
                    <p className="text-gray-200 mb-6">
                        Are you ready to put your skills to the ultimate test? Our platform offers an exciting way to challenge yourself with interactive quizzes. Sharpen your problem-solving skills, and win exciting rewards.
                    </p>
                    <button className="bg-light-green text-dark-green rounded-lg px-6 py-3 font-medium flex w-[350px] items-center justify-center">
                        <div className='flex items-center justify-center font-bold text-sm'>
                            <span>Take A Sample Test</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </button>
                    <section className="bg-dark-green py-8 px-7">
                        <div className="max-w-5xl mx-auto ">
                            <h3 className="text-lg font-medium mb-4">What You'll Get</h3>
                            <div className="flex flex-wrap gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center bg-light-green blur-1 rounded-lg px-4 py-2 mb-2">
                                        <span className="mr-1">{feature.icon}</span>
                                        <span>{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="md:w-1/2">
                    <img src={dashboardImg} alt="Propace Dashboard" className="w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}

export default Hero;