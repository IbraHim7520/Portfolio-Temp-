import React from 'react';
import Container from "../Components/Container"
import Owner from "../img/owner.jpg"
import { Element, Link } from 'react-scroll';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <Element name='home'>
        <Container>
            <div className='p-8  flex flex-col lg:flex-row w-full justify-center items-center'>
                <div data-aos="fade-up" data-aos-duration="1500"  className='box-1 w-full space-y-3'>
                    <p className='font-thin text-2xl  2xl:text-3xl'>I'am</p>
                    <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl'>IBRAHIM</h1>
                      <div className='w-2/4 h-1 bg-amber-400'></div>
                    <p className='text-sm lg:text-md xl:text-xl 2xl:text-2xl'>I’m a full-stack web developer passionate about building modern, responsive websites and Android apps that solve real problems.</p>
                    <button className='btn bg-amber-400 px-6 btn-sm xl:btn-md'>Download CV</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1500"  className='box-2 mt-10 lg:mt-0 order-1 md:w-2/4 lg:w-full bg-gray-900 rounded-full lg:order-0'>
                   <img src={Owner} className='rounded-full w-fit grayscale shadow-md shadow-gray-700 p-5'>
                   </img>
                </div>

                 <div  className='box-3 w-full mt-5 lg:mt-0 '>
                   <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className=' lg:relative lg:left-10 lg:bottom-14'>
                     <p  className='text-sm font-thin xl:text-lg 2xl:text-xl'>Services</p>
                    <p className='text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Offering complete solutions in Web Design, MERN Stack Development, and Android App Development tailored to your business needs.</p>
                   <div className='flex items-center gap-2 justi group cursor-pointer'>
                        <Link to='project' smooth={true} duration={500} spy={true} className='text-amber-400 xl:text-xl 2xl:text-2xl'>Show Projects</Link>
                        <FaArrowRight className='text-amber-400 mt-1 group-hover:translate-x-3 transition-transform'  ></FaArrowRight>
                   </div>
                   <div className='flex mt-4 items-center justify-start gap-3 text-amber-400'>
                    <a href='https://www.facebook.com/ibra.him.789374' target='_blank'><FaFacebook size={23}>  </FaFacebook></a>
                    <a href='https://www.linkedin.com/in/ibrahim752006' target='_blank'><FaLinkedin size={23}> </FaLinkedin></a>
                    <a href='https://github.com/IbraHim7520' target='_blank'><FaGithub size={23}> </FaGithub></a>
                   </div>
                   </div>
                </div>
            </div>
        </Container>
        </Element>
    );
};

export default Hero;