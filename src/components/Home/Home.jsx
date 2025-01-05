import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img1.jpg';
import img2 from './img2.jpg';

export default function Home() {
  return (
    <div className="bg-gray-50 pt-5">
      {/* Hero Section */}
      <header
        className="text-white text-center py-16 px-6 min-h-[640px] flex flex-col justify-center bg-violet-100"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
          Revolutionizing Fashion Forecasting
        </h1>
        <p className="text-lg md:text-xl text-black">
          A Data-Driven Approach for Empowering Creativity and Decision-Making
          in the Fashion Industry.
        </p>
        <br />
        <Link
          to="/product"
          className="mt-8 px-6 py-3 bg-white text-violet-700 rounded-full text-lg"
          style={{ width: '200px', margin: '0 auto' }}
        >
          Learn More
        </Link>
      </header>
      
      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          The Challenges of Fashion Forecasting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Predicting Consumer Demand
            </h3>
            <img
              src={img1}
              alt="Predicting Consumer Demand"
              className="w-[250px] h-[250px] object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 max-w-sm">
              Fashion professionals often rely on intuition and limited data,
              making it difficult to accurately predict consumer demand.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Tracking Rapidly Changing Trends
            </h3>
            <img
              src={img2}
              alt="Tracking Rapidly Changing Trends"
              className="w-[250px] h-[250px] object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 max-w-sm">
              The fashion landscape evolves quickly, with trends emerging and
              fading rapidly, making it hard to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-neutral-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Data-Driven Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4">
              <span className="text-violet-700 text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Automated Trend Identification
            </h3>
            <p className="text-gray-600">
              Analyze millions of consumer voices across online platforms to
              identify emerging trends.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4">
              <span className="text-violet-700 text-4xl">🔮</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Predictive Analytics
            </h3>
            <p className="text-gray-600">
              Leverage AI to predict consumer demand, enabling optimized product
              development and inventory management.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4">
              <span className="text-violet-700 text-4xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Demand Sensing™
            </h3>
            <p className="text-gray-600">
              Proprietary tech analyzes real-time consumer behavior for accurate
              trend insights.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-violet-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transform Your Trend Forecasting
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Experience intuitive tools that make data insights accessible and
          actionable.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="px-4 py-3 bg-white text-violet-700 rounded-full text-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/demo"
            className="px-4 py-3 bg-white text-violet-700 rounded-full text-lg"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}