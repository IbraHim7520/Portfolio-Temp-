import React from 'react';
import Hero from '../Sections/Hero';
import AboutMe from "../Sections/AboutMe"
import Skill from '../Sections/Skill';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;