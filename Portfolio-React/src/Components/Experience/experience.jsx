import "/src/Components/Experience/experience.css";
import React from 'react';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import Footer from "/src/Components/Footer/footer.jsx"
const experience = () => {
  return (
    <>
    <Navbar />
    <section id="experience">
      <h2 className="exp-title">Experience</h2>
      <div className="experience-container">
        <h3>Homaid Services</h3>
        <p>Web Developer Intern</p>
        <p>Duration: 3 months</p>
        <div className="about-internship">
          <p>I worked as a Web Developer Intern at Homaid Services for 3 months, where I gained hands-on experience in web development using HTML, CSS, JavaScript and Reactjs. During my internship, I collaborated with the development team to design, develop, and maintain web applications.</p>
        </div>
        <div className="key-responsibilities">
          <h4>Key Responsibilities</h4>
          <ul>
            <li>Developed responsive and user-friendly web pages using HTML, CSS, JavaScript, Reactjs and Nodejs</li>
            <li>Utilized version control systems like Git and GitHub to manage code</li>
            <li>Deploy the Reactjs based project on AWS and Hostinger VPS</li>
            <li>Conducted thorough testing and debugging to ensure high-quality and error-free web pages</li>
            <li>Communicated effectively with team members and supervisors to ensure project goals were met</li>
          </ul>
        </div>
        <div className="skills-used">
          <h4>Skills Used</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>MySQL</li>
            <li>API Testing</li>
            <li>Routes Setting</li>
            <li>Database Connections</li>
            <li>Git and GitHub</li>
            <li>AWS Hosting</li>
            <li>Hostinger VPS(To deploy the Reactjs based projecct)</li>
          </ul>
        </div>
        <div className="what-i-learned">
          <h4>What I Learned</h4>
          <p>During my internship, I learned the importance of collaboration, version control, and testing in web development. I also gained experience in using JavaScript and Reactjs to create interactive web pages and managing code using Git and GitHub, and then deploying the Reactjs based project on Hostinger VPS</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default experience;
