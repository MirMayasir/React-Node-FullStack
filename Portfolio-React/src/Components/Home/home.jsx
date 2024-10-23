import React, { useState } from 'react';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import About from '/src/Components/About/about.jsx';
import Footer from '/src/Components/Footer/footer.jsx';

const home = () => {
    return (
        <div>
        <Navbar/> 
         <About/>
        <Footer/>     
        </div>
    );
}

export default home;


