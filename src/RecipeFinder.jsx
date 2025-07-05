import React from 'react';
import recipe from "../img/recipe.png"
const RecipeFinder = () => {
const technologies = ['Html', "Css", "TailwindCss", "Daisyui", "ReactJs","NodeJs", "MongoDB" , "ExpressJs", "Firebase"]
    const liveLink= "https://regal-biscuit-817a23.netlify.app/"
   const GithubLink= "https://github.com/IbraHim7520/Recipe-Finder"
    return (
            <div className="p-5  bg-gray-800 text-white mx-auto  py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Project Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={recipe}
            alt={"Recipe Finder"}
            className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-white">Chefood - A Recipe Finding Website</h1>
          <p className="text-gray-300">
            Chefood is a responsive web application that allows users to discover, search, and share recipes with ease. Users can browse through a wide variety of dishes, filter by ingredients or meal type, and even upload their own creations. The platform is designed to make cooking more accessible and enjoyable for everyone — from beginners to seasoned chefs.
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
            <li>Designing a flexible recipe upload feature that supports image uploads and rich descriptions.</li>
          <li>Managing user-submitted data securely without authentication.</li>
          <li>Optimizing search results to handle vague or partial ingredient queries.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Potential Improvements</h2>
          <ul className='list-decimal'>
            <li>Add user authentication to allow for personalized recipe saving, editing, and favoriting.</li>
            <li>Enable reviews, ratings, and comments to increase engagement and trust among users.</li>
            <li>Implement filtering based on dietary preferences (e.g., gluten-free, vegan).</li>
            <li>Include advanced search options like time to cook, difficulty level, or calories.</li>
            </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Future Plans</h2>
          <ul className='list-decimal'>
            <li>Integrate an API (like Spoonacular or Edamam) for wider recipe options and nutrition data.</li>
            <li>Build a shopping list generator based on selected recipes and ingredients.</li>
            <li>Introduce step-by-step video tutorials for popular recipes.</li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default RecipeFinder;