import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img6 from './img6.webp';

export default function Blog() {
  return (
    <div id="webcrumbs" className="bg-gray-50 p-4 pt-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Stay Ahead of the Curve: Trendalytics Insights & Reports
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover data-backed trend reports on fashion, beauty, and home.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            img: img1,
            title: "2025 Belongs to Data-Driven Retailers: Here’s How to Win",
            desc: `Retail’s future is uncertain, but the solution is clear: to win in 2025, you must connect the dots between market, performance, and customer data.`,
          },
          {
            img: img2,
            title: "Want to Enhance Your Retail Data Lake? Enter TRENDINTEL’s Market Data API",
            desc: `Maximize profitability with TRENDINTEL's market data API. Add comprehensive market data to your existing data lakes for smarter, contextualized decision-making.`,
          },
          {
            img: img3,
            title: "Outerwear Category Analysis + What's to Come in 2025",
            desc: `Outerwear styles are being heavily influenced by macro-trends such as utility sport, new minimalism, and wannabe vintage. Consumers are looking for practical options that equally satisfy an emotional buy, too.`,
          },
          {
            img: img4,
            title: "December 2024 Top Trends",
            desc: `From holiday-ready hair to must-have accessories, these are the December 2024 top trends expected to impact the womenswear, menswear, kids, and beauty markets for months to come.`,
          },
          {
            img: img5,
            title: "Marketing Strategy: Decoding Gen Z, Alpha, and Zalpha Slanguage",
            desc: `How can your brand gain credibility online and IRL? Flex your brand’s cultural relevance to stand out on social media and direct marketing by using slang to appeal to younger consumers.`,
          },
          {
            img: img6,
            title: "Fast Fashion Trends: The race for speed amid growing ethical and environmental challenges",
            desc: `Fast fashion dominates the market with rapid production cycles. However, growing awareness is pushing brands to adopt more ethical and eco-friendly practices.`,
          },
        ].map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={blog.img}
              alt={`Blog ${index + 1}`}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.desc}</p>
              <a
                href="#"
                className="text-violet-600 text-sm font-medium inline-flex items-center"
              >
                Read More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 bg-violet-700 text-white font-medium rounded-full text-lg flex items-center"
          style={{ maxWidth: '200px' }}
        >
          Read More <span className="ml-2">↓</span>
        </button>
      </div>
    </div>
  );
}
