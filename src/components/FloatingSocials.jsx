import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FloatingSocials = () => (
  <div className="floating-socials">
    <div className="icon-wrapper">
      <a href="https://github.com/MitGohel" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
        <span className="tooltip">GitHub</span>
      </a>
    </div>
    <div className="icon-wrapper">
      <a href="https://linkedin.com/in/mitgohel" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
        <span className="tooltip">LinkedIn</span>
      </a>
    </div>
    <div className="icon-wrapper">
      <a href="mailto:mitgohel2005@gmail.com">
        <FaEnvelope size={24} />
        <span className="tooltip">Email</span>
      </a>
    </div>
  </div>
);

export default FloatingSocials;
