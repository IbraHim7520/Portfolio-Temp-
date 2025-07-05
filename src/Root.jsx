import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Root = () => {
    AOS.init({duration:500});
    return (
        <div >
            <Navbar></Navbar>
            <div className=' bg-gray-800 text-white'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;