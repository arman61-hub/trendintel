import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img1.avif';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';

export default function Product() {
  return (
    <div id="webcrumbs" className="bg-neutral-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-10 md:pl-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:basis-1/2 text-center md:text-left ">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
              The closest thing to a crystal ball.
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8">
              We are elevating Trend Forecasting to the next level. Experience
              “Trend Science” through Trendalytics and the combination of Search,
              Social, and E-commerce data.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-6 py-3 bg-violet-700 text-white rounded-full text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/demo"
                className="px-6 py-3 bg-violet-700 text-white rounded-full text-center"
              >
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="md:basis-1/2 flex justify-center">
            <img src={img1} alt="Crystal Ball" className="w-full max-w-md rounded-lg" />
          </div>
        </div>
      </div>


      {/* Content Sections */}
      <div className="max-w-8xl mx-auto bg-neutral-100 rounded-lg shadow-md p-10 space-y-12">
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="relative">
            <img
              src={img2}
              alt="Trend Discovery Data"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
              <span className="text-violet-700">Harness </span>
              the power of Google Search
            </h2>
            <p className="text-lg md:text-xl text-neutral-700">
              Understand trends without the guesswork. Our platform and team of
              industry experts are here to help you understand the magnitude and
              context of trends. Easily track links between internet topics to spend
              more time growing your business.
            </p>
          </div>
        </section>

        {/* Section 2 (Image on Right) */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
              <span className="text-violet-700">Hear </span>
              what customers are trying to tell you
            </h2>
            <p className="text-lg md:text-xl text-neutral-700">
              70% on average. That is how much content you are missing through
              Instagram crawlers now. We search and track zero brand-influenced or
              influencer local feeds across 67 different platforms to help you
              understand what trends are new, next, and core.
            </p>
          </div>
          <div className="relative">
            <img
              src={img3}
              alt="Customer Insights"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="relative">
            <img
              src={img4}
              alt="Market Analysis"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
              <span className="text-violet-700">Analyze </span>
              the market in seconds
            </h2>
            <p className="text-lg md:text-xl text-neutral-700">
              Access our pricing analytics and roll-up assessments by attributes,
              categories, and discount percentages. Track where a trend is in the
              adoption curve through the use of our proprietary market model. Never
              be too early or too late again.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
