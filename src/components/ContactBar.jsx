import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      {/* Left: Contact Number */}
      <div className="contact-left">
        <span><FaPhone /> +1 (123) 456-7890</span>
      </div>

      {/* Center: Email */}
      <div className="contact-center">
        <span><FaEnvelope /> contact@example.com</span>
      </div>

      {/* Right: Social Media Links */}
      <div className="contact-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default ContactBar;