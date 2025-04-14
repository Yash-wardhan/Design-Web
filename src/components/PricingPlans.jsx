import React from 'react';
import { Check, X } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      name: "One Time Test",
      price: "₹ 49",
      unit: "/test",
      features: [
        { text: "Gift Cards", enabled: true },
        { text: "In-app redeemable vouchers", enabled: true },
        { text: "Cashbacks", enabled: true },
        { text: "Ranking mention on leaderboard board", enabled: true },
        { text: "Substitutes for school tuition fees", enabled: false },
        { text: "Certificates", enabled: false },
        { text: "Recognition on your social media platforms", enabled: false }
      ],
      popular: false,
      buttonText: "Pay ₹ 49"
    },
    {
      name: "Monthly",
      price: "₹ 149",
      unit: "/mo",
      features: [
        { text: "Gift Cards", enabled: true },
        { text: "In-app redeemable vouchers", enabled: true },
        { text: "Cashbacks", enabled: true },
        { text: "Ranking mention on leaderboard board", enabled: true },
        { text: "Substitutes for school tuition fees", enabled: false },
        { text: "Certificates", enabled: true },
        { text: "Recognition on your social media platforms", enabled: true }
      ],
      popular: false,
      discount: "Save ₹ 67/-",
      buttonText: "Pay ₹ 149"
    },
    {
      name: "Annually",
      price: "₹ 1999",
      unit: "/yr",
      features: [
        { text: "Gift Cards", enabled: true },
        { text: "In-app redeemable vouchers", enabled: true },
        { text: "Cashbacks", enabled: true },
        { text: "Ranking mention on leaderboard board", enabled: true },
        { text: "Substitutes for school tuition fees", enabled: true },
        { text: "Certificates", enabled: true },
        { text: "Recognition on your social media platforms", enabled: true }
      ],
      popular: true,
      discount: "Save ₹ 590/-",
      buttonText: "Pay ₹ 1999"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Choose A Plan That Suits You</h2>
          <p className="text-gray-600 mt-3">Select the perfect pricing option for your learning journey</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden px-4 py-8 shadow-lg border h-94 transition-all duration-300 hover:shadow-xl flex flex-col w-full max-w-sm relative ${
                plan.popular ? 'border-blue-500 scale-105 md:scale-110' : 'border-gray-200'
              }`}
            >
              {plan.discount && (
                <div className="absolute top-4 left-0 bg-red-500 text-white text-sm px-4 py-1 rounded-r-md font-medium">
                  {plan.discount}
                </div>
              )}
              {plan.popular && (
                <div className="absolute top-0 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-b-md font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'bg-blue-600' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.unit}</span>
                </div>
              </div>
              
              <div className={`flex-grow p-6 ${plan.popular ? 'bg-blue-50' : 'bg-white'}`}>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.enabled ? (
                        <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.enabled ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-white">
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}