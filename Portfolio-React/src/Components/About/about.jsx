import "/src/Components/About/about.css";

const about = () => {
    return (
        <div id="about">
            <div className="resume-image">
                <img src="/src/assets/photo.png" alt="error" />
            </div>
            <div className="information">
                <h1>Hello</h1>
                <h2>A Bit About Me</h2>
                <p className="abt-info">I am a passionate and dedicated Computer Science graduate with a strong educational foundation in BE. My academic journey has equipped me with a solid understanding of programming, algorithms, and software engineering principles. I am enthusiastic about leveraging my skills to tackle real-world challenges and contribute to innovative projects.</p>
            </div>
        </div>
    );
}

export default about;
