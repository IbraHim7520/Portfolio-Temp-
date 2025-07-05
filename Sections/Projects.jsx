import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import QucikStay from "../img/quickstay.png"
import recipe from "../img/recipe.png"
import ReactApp from "../img/reactapp.png"
import { Element } from 'react-scroll';
const Projects = () => {
    return (
        <Element name='project'>
        <div className=' px-3  py-18 h-fit md:px-5 lg:px-8 xl:px-14 2xl:px-20 bg-gray-950'>
            <h1 className='text-center text-3xl lg:text-4xl 2xl:text-5xl font-semibold'>Projects</h1>
            <p className='xl:text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit possimus obcaecati amet incidunt? Inventore, esse?</p>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
            justify-items-center space-y-3 gap-3'>
                    <ProjectCard title={"Hotel Booking Website"} image={QucikStay} toPage={'/quickstay-details'} ></ProjectCard>
                    <ProjectCard title={"Recipe Finder"} image={recipe} toPage={"/recipe-finder-details"} ></ProjectCard>
                    <ProjectCard title={"AppNest"} image={ReactApp} toPage={"/app-nest-details"}></ProjectCard>
            </div>
        </div>
            </Element>
    );
};

export default Projects;
