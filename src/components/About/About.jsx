import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div id="webcrumbs" className="bg-gray-50">
      <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center py-16 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-950">
            Your personal data scientist
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                value: '4M',
                description: '# of SKUs scraped and analyzed on a weekly basis',
              },
              {
                value: '20K',
                description:
                  'social profiles monitored daily, with new ones being added all the time',
              },
              {
                value: '2.4M',
                description:
                  'search term metrics crunched to create our industry-leading prediction engine',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-7xl font-bold text-violet-700">{item.value}</p>
                <p className="text-xl mt-4 text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-neutral-100 py-12 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">What we do</h2>
          <p className="text-lg md:text-xl text-neutral-600 mt-4">
            We make sure you know what to buy and when to buy it with our predictive analytics.
          </p>
          <br />
          <Link to="/product" className="px-6 py-2 mt-6 bg-violet-700 text-white text-lg font-medium rounded-full">
            Learn more
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: '🛍️',
                title: 'What do I buy?',
                description:
                  'Track your competitors. Listen to influencers. Unlock consumer demand. Discover trends.',
              },
              {
                icon: '🛒',
                title: 'How much do I buy?',
                description:
                  'Know if a trend is a top door or dollar buy. Analyze your competitors with one click.',
              },
              {
                icon: '⏰',
                title: 'When do I buy it?',
                description: 'Capitalize on trends when the time is right.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-violet-700">{item.icon}</div>
                <p className="text-2xl md:text-5xl font-bold text-neutral-950 mt-4">{item.title}</p>
                <p className="text-lg md:text-xl text-neutral-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-violet-700 text-center py-10 px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Interested in working with us?
          </h3>
          <br />
          <Link to="/contact" className="px-6 py-2 mt-6 bg-white text-violet-700 text-lg font-medium rounded-full">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}