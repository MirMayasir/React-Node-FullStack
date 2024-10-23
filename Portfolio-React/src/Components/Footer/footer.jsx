import '/src/Components/Footer/footer.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const footer = () => {
    return (
        <div>
            <hr id="hr" />
            <div id="footer">
                <div className="phone">
                    <h2>Phone</h2>
                    <p>+91 8493037519</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>mayasirmir02@gmail.com</p>
                </div>
                <div className="follow-me">
                    <h2>Follow me</h2>
                    <a href="https://www.linkedin.com/in/mir-mayasir-505005210/"  >
                    <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/mir.mayasir/">
                    <FaSquareInstagram />
                    </a>
                </div>
                <div className="copy-right">
                    <p>All rights reserved</p>
                    <p className="para">By Mayasir</p>
                </div>
            </div>
        </div>
    );
}

export default footer;
