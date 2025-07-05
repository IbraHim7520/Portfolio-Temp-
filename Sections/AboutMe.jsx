import React from 'react';
import Container from '../Components/Container';
import { Element } from 'react-scroll';

const AboutMe = () => {
    return (
        <Element name='about'>
        <div className='px-3 mt-24 pb-12 bg-gray-950 md:px-5 lg:px-8 xl:px-14 2xl:px-20'>
            <div className='flex flex-col lg:flex-row w-full p-3 justify-center items-center'>
                <div data-aos='fade-right' data-aos-duration="1500" className='w-full p-5 space-y-4'>
                    <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl'>About me</h1>
                    <p className='text-sm xl:text-md 2xl:text-lg'>
                        I’m a dedicated and detail-oriented full-stack web developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js.
                        From dynamic front-end interfaces using React to robust back-end services with Node.js and Express, I enjoy building solutions that solve real problems and scale effectively. My development process is driven by a deep understanding of modern web architecture, RESTful APIs, and database design, with a strong focus on usability, performance, and clean code practices.
                        In addition to my expertise in web development, I also have hands-on experience in Android app development using Java. I’ve worked on building fully offline, user-centric apps that leverage local storage and native Android components to deliver seamless mobile experiences.
                        Always eager to learn and grow, I’m constantly exploring new tools and best practices to stay ahead in the ever-evolving world of Development.
                        </p>
                </div>
                <div className="w-1 h-52 place-items-center bg-amber-400 hidden lg:block "></div>
                <div data-aos="fade-left"  data-aos-duration="1500" className='w-full p-5 space-y-4'>
                    <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl'>Education</h1>
                    <p className='text-lg xl:text-md 2xl:text-lg'>
                        Bachelor of Science in Computer Science and Engineering (BSc in CSE)
                        <br></br>Southeast University — Dhaka, Bangladesh
                        <br></br>Currently Enrolled
                        <br></br>
                        <span className='mt-5 text-sm'>
                            Pursuing my undergraduate studies with a strong focus on software development, data structures, algorithms, and modern web technologies. Actively building real-world projects to strengthen my foundation in full-stack development and mobile application design.
                        </span>
                    </p>
                </div>
            </div>

            <div className='space-y-5 '>
                <h1 className='text-2xl text-center mt-5 font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl'>What I Can Do</h1>
                <p className='text-center'>Turning ideas into scalable, user-friendly web and mobile solutions.</p>
                <div className='grid space-y-3 mt-12 lg:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center'>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='max-w-78 space-y-5 h-80 rounded-sm bg-gray-800 p-3'>
                        <h1 className='text-3xl font-semibold'>Web Design</h1>
                        <p>
                            I specialize in converting Figma, Adobe XD, or custom design concepts into fully responsive and pixel-perfect websites. With a strong focus on clean layouts, accessibility, and mobile-first design principles, I ensure your UI/UX stands out across all screen sizes and devices.
                        </p>
                    </div>
                    <div data-aos='fade-down' data-aos-duration="1500" className='max-w-78 space-y-5 h-80 rounded-sm bg-gray-800 p-3'>
                        <h1 className='text-3xl font-semibold'>Web Development</h1>
                        <p>
                            As a MERN stack developer, I build robust, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. From front-end interfaces to back-end APIs, I deliver complete full-stack solutions that are scalable, maintainable, and optimized for real-world use.
                        </p>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1500" className='max-w-78 space-y-5 h-80  bg-gray-800 rounded-sm p-3'>
                        <h1 className='text-3xl font-semibold'>App Development</h1>
                        <p>
                            I have hands-on experience in developing native Android applications using Java and Android Studio. I’m also familiar with PHP and MySQL, allowing me to create apps that connect to custom back-end systems. Whether it's an offline utility app or a database-driven application, I focus on delivering smooth performance and a user-friendly experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    );
};

export default AboutMe;