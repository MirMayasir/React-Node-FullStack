import React from 'react';
import '/src/Components/Footer/footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p><i className="fa fa-phone"></i> +1 234 567 890</p>
                    <p><i className="fa fa-envelope"></i> info@example.com</p>
                </div>
                <div className="footer-section address">
                    <h2>Address</h2>
                    <p>123 Main Street,</p>
                    <p>New York, NY 10001</p>
                </div>
                <div className="footer-section categories">
                    <h2>Categories</h2>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Home & Garden</a></li>
                    </ul>
                </div>
                <div className="footer-section policy">
                    <h2>Policy</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 YourWebsite. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
