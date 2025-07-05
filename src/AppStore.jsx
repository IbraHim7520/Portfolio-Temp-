import React from 'react';
import ReactApp from "../img/reactapp.png"
const AppStore = () => {
const technologies = ['Html', "Css", "TailwindCss", "Daisyui", "ReactJs", "Firebase"]
    const liveLink= "https://resplendent-conkies-6525b1.netlify.app/"
   const GithubLink= "https://github.com/IbraHim7520/React-App-Store"
    return (
            <div className="p-5  bg-gray-800 text-white mx-auto  py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Project Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={ReactApp}
            alt={"AppNest"}
            className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-white">AppNest - A App Store Website</h1>
          <p className="text-gray-300">
           AppNest is a clean, responsive web platform designed to showcase mobile and web applications, much like a personalized app store. It allows developers or businesses to present their apps with screenshots, descriptions, technology stack, and download or external links. Built to offer an engaging user experience, AppNest helps users discover apps with ease and helps developers present their work professionally.
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
            <li>Creating a flexible structure to handle different types of app data (web, Android, external links).</li>
          <li>Designing a UI that feels like a simplified app store while keeping it lightweight and fast.</li>
          <li>Managing large app images and ensuring optimized loading without affecting performance.</li>
          <li>Building reusable components for app cards and detail pages with clean animations.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Potential Improvements</h2>
          <ul className='list-decimal'>
            <li>Enable user reviews, ratings, and download counters for each app.</li>
            <li>Add search and filtering functionality by platform, category, or developer.</li>
            <li>Improve animations and transitions between app listings and detail views.</li>
            </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Future Plans</h2>
          <ul className='list-decimal'>
            <li>Implement user login and developer dashboards for submitting apps.</li>
<li>Add backend support with MongoDB or Firebase to store app data dynamically.</li>
<li>Turn AppNest into a full-stack platform where indie developers can host, promote, and track their apps.</li>
<li>Launch a mobile version or Progressive Web App (PWA) for better access and user engagement.</li>

          </ul>
        </div>
      </div>
    </div>
    );
};

export default AppStore;