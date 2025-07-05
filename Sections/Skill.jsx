import React from 'react';
import Reactt from "../img/icons8-react-js-128.png"
import Html from "../img/icons8-html-128.png"
import Css from "../img/icons8-css-128.png"
import Tailwind from "../img/icons8-tailwind-css-126.png"
import javascript from "../img/icons8-javascript-128 (1).png"
import nodejs from "../img/icons8-node-js-128.png"
import express from "../img/icons8-express-js-128.png"
import mongodb from "../img/icons8-mongodb-96.png"
import firebase from "../img/icons8-firebase-128.png"
import jwt from "../img/icons8-jwt-128.png"
import Vscode from "../img/icons8-vs-code-128.png"
import { Element } from 'react-scroll';
const Skill = () => {
    return (
        <Element name='skill'>
        <div className=' px-3  py-18 h-fit md:px-5 lg:px-8 xl:px-14 2xl:px-20 bg-gray-800'>
            <div className='flex flex-col lg:flex-row  items-center justify-center '>
                <div className='lg:rotate-270 text-center  h-full'>
                    <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold'>Skills & Tools</h1>
                    <div className='w-full h-1 bg-amber-400'></div>
                </div>

                <div className='w-full justify-items-center mt-12 lg:mt-0 space-y-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8'>
                    <div data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={Html} className='w-14'>
                        </img>
                        <p>HTML</p>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={Css} className='w-14'>
                        </img>
                        <p>CSS</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={Tailwind} className='w-14'>
                        </img>
                        <p>TailwindCSS</p>
                    </div>
                    <div  data-aos="flip-right" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={javascript} className='w-14'>
                        </img>
                        <p>Javascript</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={Reactt} className='w-14'>
                        </img>
                        <p>ReactJs</p>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1000"  className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={nodejs} className='w-14'>
                        </img>
                        <p>NodeJs</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={express} className='w-14'>
                        </img>
                        <p>ExpressJs</p>
                    </div>
                    <div  data-aos="flip-right" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={mongodb} className='w-14'>
                        </img>
                        <p>MongoDB</p>
                    </div>
                    <div  data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={firebase} className='w-14'>
                        </img>
                        <p>Firebase</p>
                    </div>
                    <div  data-aos="flip-right" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={jwt} className='w-14'></img>
                        <p>JWT</p>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1000" className='p-2 rounded-md bg-gray-950 flex flex-col justify-center items-center w-32 h-26'>
                        <img src={Vscode} className='w-14'></img>
                        <p>VSCode</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    );
};

export default Skill;