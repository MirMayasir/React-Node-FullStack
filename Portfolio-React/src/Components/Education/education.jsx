import React from 'react';
import '/src/Components/Education/education.css';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import Footer from '/src/Components/Footer/footer.jsx';
function education() {
  return (
    <>
    <Navbar />
    <div id="qualification">
      <div>
        <h1>Education</h1>
      </div>

      <div className="qualification-details">
        <div>
          <p className="date">2015-2016</p>    
        </div>
        <div>
          <h2>10th</h2>
          <p>Govt Higher Secondary School Bijhama</p>
          <p>JKBOSE</p>
          <p>90%</p>
        </div>
      </div>

      <div className="qualification-details">
        <div>
          <p className="date">2017-2018</p>    
        </div>
        <div>
          <h2>12th</h2>
          <p>Govt Higher Secondary School Bijhama</p>
          <p>JKBOSE</p>
          <p>85%</p>
        </div>
      </div>
      
      <div className="qualification-details degree">
        <div>
          <p className="date">2019-2023</p>    
        </div>
        <div className="degree-details">
          <h2>Bachelor Of Engineering (CSE)</h2>
          <p>University College of Engineering Hyd</p>
          <p>Osmania University</p>
          <p>70%</p>
        </div>
      </div>
    </div>

    <hr id="hr" />

    <div id="skills">
      <div className="tec-skills">
        <h1>Technical Skills</h1>
      </div>

      <div className="skill-section Languages">
        <div>
          <h3>Languages</h3>
        </div>

        <div className="Languages-details">
          <h4>Java <span>(intermediate)</span></h4>
          <h4>C <span>(intermediate)</span></h4>
          <h4>Python <span>(intermediate)</span></h4>
        </div>
      </div>

      <div className="skill-section development">
        <div>
          <h3>Development</h3>
        </div>

        <div className="development-details">
          <h4>HTML <span>(Advanced)</span></h4>
          <h4>CSS <span>(Advanced)</span></h4>
          <h4>JavaScript <span>(Intermediate)</span></h4>
          <h4>MySQL <span>(Intermediate)</span></h4>
          <h4>Bootstrap <span>(Intermediate)</span></h4>
          <h4>React.js <span>(Intermediate)</span></h4>
          <h4>Node.js <span>(Intermediate)</span></h4>
          <h4>AWS Hosting <span>(Intermediate)</span></h4>
          <h4>API Testing <span>(Intermediate)</span></h4>
          <h4>Routes Setting <span>(Intermediate)</span></h4>
        </div>
      </div>

      <div className="skill-section Curriculum">
        <div>
          <h3>Curriculum</h3>
        </div>

        <div className="Curriculum-details">
          <h4>Data Structures & Algorithms</h4>
          <h4>OOPS Concepts</h4>
          <h4>Operating Systems</h4>
          <h4>Database Management Systems</h4>
          <h4>Web Development</h4>
        </div>
      </div>

      <div className="skill-section Libraries">
        <div>
          <h3>Libraries</h3>
        </div>

        <div className="Libraries-details">
          <h4>NumPy</h4>
          <h4>PyAudio</h4>
          <h4>gTTS</h4>
          <h4>OpenCV</h4>
          <h4>CVzone</h4>
        </div>
      </div>
    </div>

    <hr id="hr" />

    <div id="github">
      <div>
        <h1>GitHub</h1>
      </div>

      <div className="github-link">
        <a href="https://github.com/MirMayasir">GitHub Link</a>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default education;
