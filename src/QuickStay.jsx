import React from 'react';
import QucikStay from "../img/quickstay.png"
 
const QuickStay = () => {
    const technologies = ['Html', "Css", "TailwindCss", "Daisyui", "ReactJs","NodeJs", "MongoDB" , "ExpressJs", "Firebase", "JWT"]
    const liveLink= "https://fabulous-scone-f034f1.netlify.app/"
   const GithubLink= "https://github.com/IbraHim7520/QuickStay"
    return (
            <div className="p-5  bg-gray-800 text-white mx-auto  py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Project Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={QucikStay}
            alt={"QuickStay"}
            className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-white">QuickStay - A Hotel Room Booking Website</h1>
          <p className="text-gray-300">
            QuickStay is a modern, responsive hotel room booking platform that allows users to effortlessly search, view, and reserve rooms in real-time. Designed with user experience in mind, it offers intuitive navigation, dynamic filtering by location, price, and availability, and a seamless booking process. Admins can manage room listings, pricing, and availability with ease.
          </p>

          {/* Technologies */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Technologies Used:</h2>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-700 px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 btn px-8"
            >
              Live Preview
            </a>
            <a
              href={GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Challenges, Improvements, Future Plan */}
      <div className="mt-10 p-5 space-y-6 text-gray-300">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Challenges Faced</h2>
          <ul className='list-decimal'>
            <li>Ensuring mobile responsiveness across all devices while keeping the layout user-friendly and clean.</li>
          <li>Designing a booking flow that felt smooth and trustworthy for users with minimal steps.</li>
          <li>Managing dynamic data (like availability, room status) without using third-party booking APIs.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Potential Improvements</h2>
          <ul className='list-decimal'>
            <li>Integrate secure user authentication and profile management to allow users to view booking history and save preferences.</li>
            <li>Add online payment gateway integration (e.g., Stripe, SSLCommerz) for a complete booking experience.</li>
            <li>Improve admin dashboard UX with better analytics, calendar view for room bookings, and real-time notifications.</li>
            </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Future Plans</h2>
          <ul className='list-decimal'>
            <li>Introduce hotel partnerships and multi-vendor support where different hotels can register and manage their own listings.</li>
            <li>Add advanced search with location-based filtering using Google Maps or Mapbox.</li>
            <li>Scale the backend with Node.js + MongoDB clusters to handle high traffic in real-time.</li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default QuickStay;