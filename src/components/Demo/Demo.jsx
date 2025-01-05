import React from "react";

export default function Demo() {
  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center p-6 sm:p-0">
      <div className="w-full max-w-[1600px] mx-auto" style={{padding:"2vw"}}>
        <div className="relative bg-white bg-opacity-90 shadow-xl rounded-xl p-8 sm:p-12">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-500 via-transparent to-violet-500 opacity-10 rounded-xl"></div>

          {/* Content Section */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900 space-y-6 sm:space-y-8">
              <h2 className="uppercase text-violet-700 text-sm font-bold tracking-wide">
                Book a Demo
              </h2>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Unlock the power of data and analytics in your retail
                decision-making.
              </h1>
              <p className="text-md leading-relaxed text-gray-700">
                TRENDINTEL is the leading AI-driven retail intelligence
                platform. Optimize margins with data-driven insights in
                assortment, pricing, and promotion planning. See how top brands
                future-proof their business with us.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <form className="space-y-6">
                {/* Input Fields */}
                {[
                  {
                    label: "First Name*",
                    type: "text",
                    placeholder: "First Name",
                  },
                  {
                    label: "Last Name*",
                    type: "text",
                    placeholder: "Last Name",
                  },
                  {
                    label: "Company*",
                    type: "text",
                    placeholder: "Company Name",
                  },
                  {
                    label: "Email*",
                    type: "email",
                    placeholder: "Business Email",
                  },
                  {
                    label: "Phone",
                    type: "tel",
                    placeholder: "Phone Number",
                  },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full p-4 rounded-lg bg-gray-50 focus:bg-white border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition"
                    />
                  </div>
                ))}

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What is your role?*
                  </label>
                  <select className="w-full p-4 rounded-lg bg-gray-50 focus:bg-white border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition">
                    <option disabled value="">
                      Select Your Role
                    </option>
                    <option value="retailer">I work at a retailer.</option>
                    <option value="consultant">
                      I am a consultant/partner to retailers.
                    </option>
                    <option value="student">
                      I am a student or work in education.
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    className="mt-1 focus:ring-violet-500 border-gray-300"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-violet-700 underline hover:text-violet-600"
                    >
                      privacy policy
                    </a>{" "}
                    and TRENDINTEL using my contact details for further
                    marketing purposes.*
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-violet-500 text-white font-semibold rounded-full py-4 text-lg transition transform hover:scale-105 hover:bg-violet-600"
                  >
                    Request a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}