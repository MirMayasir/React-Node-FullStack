import React from 'react';
import '/src/Components/Projects/projects.css';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import About from '/src/Components/About/about.jsx';
import Footer from '/src/Components/Footer/footer.jsx';
const projects = () => {
  return (
    <>
    <Navbar />
    <div id="projects">
      <div className="project-name">
        <div className="project-details">
          <h3>IOT in agriculture, precision farming (using ESP 32 chip)</h3>
          <p>Implemented IoT in agriculture using ESP32 chip for precision farming. The project involved collecting and analyzing real-time environmental data to optimize crop growth and yield. My skills include proficiency in IoT and sensor technologies, experience with ESP32 chip and Arduino programming, and knowledge of precision farming and environmental monitoring. Additionally</p>
        </div>
        <div className="project-img">
          <img src="/src/assets/iot_smart_agriculture.jpg" alt="" />
        </div>
      </div>

      <div className="project-name">
        <div className="project-details">
          <h3>Worked on a conversational chat bot</h3>
          <p>Worked on a conversational chatbot with audio conversion capabilities, utilizing Python libraries like gTTS and PyAudio. The chatbot converted text into audio and vice versa, with the ability to switch between male and female voices. Additionally, I have familiarity with audio processing and conversion tools such as gTTS and PyAudio. I possess strong problem-solving and analytical skills, with a keen attention to detail and accuracy</p>
        </div>
        <div className="project-img">
          <img src="/src/assets/chatbot.png" alt="" />
        </div>
      </div>

      <div className="project-name">
        <div className="project-details">
          <h3>Software Engineer(front-end focus).</h3>
          <p>Proficient in HTML, CSS, and JavaScript with experience creating and deploying multiple web projects using Git. Skilled in designing responsive layouts with CSS grid and bootstrap, developing interactive user interfaces with JavaScript and jQuery, and utilizing the Bootstrap framework. Experienced in version control with Git and GitHub, familiar with front-end development tools such as VS Code and Sublime Text. Designed and developed landing pages, portfolios, and e-commerce websites, implementing form validation and handling using JavaScript</p>
        </div>
        <div className="project-img">
          <img src="/src/assets/frontend.jpg" alt="" />
        </div>
      </div>

      <div className="project-name">
        <div className="project-details">
          <h3>Real time face recognition system for college.</h3>
          <p>I created a face recognition system for a college using Python libraries and Firebase database. The system accurately identified individuals in real-time, improving security and access control. My skills include proficiency in Python programming and libraries, experience with facial recognition technology, and knowledge of Firebase database. The system efficiently marks the attendance of the students according to the timing of the classes and stores in the database.</p>
        </div>
        <div className="project-img face-rec">
          <img src="/src/assets/face recognition.jpeg" alt="" />
        </div>
      </div>

      <div className="project-name">
        <div className="project-details">
          <h3>User friendly movie watchlist webapp.</h3>
          <p>I developed a dynamic Movie Watch List web application using ReactJS for the frontend, Node.js for the backend, MySQL for the database, and Redux for state management. This app enables users to manage their movie lists by adding movies with details such as name, description, rating, and review. Users can edit movie details, mark movies as watched or unwatched, and delete movies from their list. The application is designed to be intuitive and user-friendly, ensuring a seamless experience for movie enthusiasts to track and organize their watch lists efficiently.</p>
        </div>
        <div className="project-img ">
          <img src="/src/assets/Movie-watchlist.png" alt="" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default projects;
