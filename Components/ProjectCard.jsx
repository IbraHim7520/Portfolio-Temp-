import React from 'react';
import { Link } from 'react-router';

const ProjectCard = ({ image, title , toPage}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <div className="flex space-x-4">
            <Link to={toPage} className='btn btn-sm bg-amber-400 w-full'>Viiew Project Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
