import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.jsx';
import Experience from './Components/Experience/experience.jsx';
import Education from './Components/Education/education.jsx';
import Projects from './Components/Projects/projects.jsx';
import ContactUs from './Components/ContactUs/contactus.jsx';

const App = () =>  {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/Experience" element={<Experience />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          </Routes>
      </BrowserRouter>
      
    );
   }

export default App;
