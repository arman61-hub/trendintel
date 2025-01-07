import React from 'react';
import { Link } from 'react-router-dom';
import model from './model.png';
import img1 from './img1.jpg';
import img2 from './img2.jpg';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex overflow-hidden bg-gray-100 p-6 sm:px-12 md:px-16">
      {/* Large Screen Hero */}
        <div className="hidden xl:flex w-full h-full">
          {/* Background Circle */}
          <div
            className="absolute bg-violet-300/50 rounded-full shadow-lg z-0"
            style={{
              width: '51vw',
              height: '51vw',
              top: '-10vw',
              right: '-15vw',
            }}
          ></div>

          {/* Left Content */}
          <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-purple-700 text-4xl lg:text-6xl font-extrabold leading-tight">
              Revolutionizing Fashion Forecasting
            </h1>
            <p className="text-lg lg:text-xl mt-4 text-gray-600 leading-relaxed">
              A Data-Driven Approach for Empowering Creativity and Decision-Making in the Fashion Industry.
            </p>
            <Link
              to="/product"
              className="mt-6 px-8 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Right Content */}
          <div className="w-full xl:w-1/2 h-full flex justify-center items-center relative z-10">
            <img
              src={model}
              alt="Model"
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
        {/* Small Screen Hero */}
        <div className="xl:hidden text-white text-center py-16 px-6 min-h-[640px] flex flex-col justify-center bg-violet-100">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-violet-500">
            Revolutionizing Fashion Forecasting
          </h1>
          <p className="text-lg md:text-xl text-black">
            A Data-Driven Approach for Empowering Creativity and Decision-Making
            in the Fashion Industry.
          </p>
          <Link
            to="/product"
            className="mt-8 px-6 py-3 bg-white text-violet-700 rounded-full text-lg mx-auto"
            style={{ width: '200px' }}
          >
            Learn More
          </Link>
        </div>
      </section>


      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          The Challenges of Fashion Forecasting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Challenge 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Predicting Consumer Demand
            </h3>
            <img
              src={img1}
              alt="Predicting Consumer Demand"
              className="w-[250px] h-[250px] object-cover rounded-lg mb-4 shadow-md"
            />
            <p className="text-gray-600 max-w-md">
              Fashion professionals often rely on intuition and limited data,
              making it difficult to accurately predict consumer demand.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Tracking Rapidly Changing Trends
            </h3>
            <img
              src={img2}
              alt="Tracking Rapidly Changing Trends"
              className="w-[250px] h-[250px] object-cover rounded-lg mb-4 shadow-md"
            />
            <p className="text-gray-600 max-w-md">
              The fashion landscape evolves quickly, with trends emerging and
              fading rapidly, making it hard to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Data-Driven Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Solution 1 */}
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4 shadow-lg">
              <span className="text-violet-700 text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Automated Trend Identification
            </h3>
            <p className="text-gray-600">
              Analyze millions of consumer voices across online platforms to
              identify emerging trends.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4 shadow-lg">
              <span className="text-violet-700 text-4xl">🔮</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Predictive Analytics
            </h3>
            <p className="text-gray-600">
              Leverage AI to predict consumer demand, enabling optimized product
              development and inventory management.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="text-center">
            <div className="bg-violet-100 p-6 rounded-full inline-block mb-4 shadow-lg">
              <span className="text-violet-700 text-4xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
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
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience intuitive tools that make data insights accessible and
          actionable.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-violet-700 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/demo"
            className="px-6 py-3 bg-white text-violet-700 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
