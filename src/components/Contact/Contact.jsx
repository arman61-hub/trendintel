import React from 'react';

export default function Contact() {
  return (
    <div
      id="webcrumbs"
      className="w-full min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("https://tools-api.webcrumbs.org/image-placeholder/1000/500/fashion/5")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-7xl min-h-[800px] bg-white bg-opacity-90 shadow-xl rounded-xl p-10 mx-auto backdrop-blur-lg">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you! Reach out with any questions or ideas.
          </p>
        </header>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="md:basis-1/2 text-gray-800">
            <h1 className="text-6xl font-bold">We can help!</h1>
            <p className="text-xl mt-8">
              If you have a question or request, please contact us directly
              using one of the following or complete the form, and we will get
              back to you.
            </p>

            <section className="mt-10 text-center">
              <h2 className="text-5xl text-gray-800 mb-6">Contact Information</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center justify-center">
                  <span className="mr-4 text-blue-500">📍</span> 123 , New Delhi, India
                </li>
                <li className="flex items-center justify-center">
                  <span className="mr-4 text-blue-500">📞</span> +91 123-4567-890
                </li>
                <li className="flex items-center justify-center">
                  <span className="mr-4 text-blue-500">✉️</span> contact@trendintel.com
                </li>
              </ul>
            </section>
            <br />
            <br />
            <p className="text-xl text-center mt-8">
              Stay ahead of fashion trends with our detailed analysis and growth insights.
            </p>
          </div>

          <div className="md:basis-1/2">
            <h2 className="text-3xl text-gray-800">Get in Touch</h2>
            <form className="space-y-6 mt-8">
              <div>
                <label className="block text-sm text-gray-600 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-neutral-300 rounded-full p-3 text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-neutral-300 rounded-full p-3 text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2" htmlFor="companyName">
                  Company's Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full border border-neutral-300 rounded-full p-3 text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full border border-neutral-300 rounded-xl p-3 text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <br />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full py-4 text-lg transition transform hover:scale-105 hover:bg-gradient-to-l hover:from-teal-500 hover:to-blue-500"
                // style={{ width: '200px', margin: '0 auto' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}