import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, buttonText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {buttonText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
//   Hi, my name is <span className="font-semibold">Phuc Nguyen Hoang</span>.
//   <br />A passionate Web Developer from Vietnam.
// </h1>
const renderContent = {
  1: (
    <div className="info-box">
      <h1 className="sm:text-xl sm:leading-snug text-center">
        Hi, my name is <span className="font-semibold">Phuc Nguyen Hoang</span>.
        <br />A passionate Web Developer from Vietnam.
      </h1>
      <a
        href="/resume.pdf"
        alt="resume"
        target="_blank"
        className="neo-brutalism-white neo-btn"
        rel="noopener noreferrer"
      >
        Check out my CV!
        <img src={arrow} className="w-4 h-4 object-contain" />
      </a>
    </div>
  ),
  2: (
    <InfoBox
      text="Studied at University of Information Technology, where I acquired a diverse set of skills and knowledge."
      link="/about"
      buttonText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Developed and successfully completed some personal projects. Curious to see the impact?"
      link="/projects"
      buttonText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
      link="/contact"
      buttonText="Let's talk"
    />
  )
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
