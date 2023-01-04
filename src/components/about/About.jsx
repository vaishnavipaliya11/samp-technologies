import { mocktest } from "../../images/AboutImg";
import { engaging } from "../../images/AboutImg";
import { textImg } from "../../images/AboutImg";
import { aboutExponentialImg } from "../../images/AboutImg";
import "../../styles.css";
import "../about/about.css";
export const About = () => {
  return (
    <div>
      <div>
        <h4>What's inside cherry learn</h4>
        <div className="common-flex-row justify-space-evenly align-center">
          <div className="about-special-container">
            <img src={textImg} />
            <h5>Text based activities</h5>
            <p>Interactive and engaging activities based strictly based on</p>
          </div>

          <div className="about-special-container">
            <img src={engaging} />
            <h5>Engaging Animated Videos</h5>
            <p>Super-exciting visuals and carefully-crafted animations which</p>
          </div>

          <div className="about-special-container">
            <img src={mocktest} />
            <h5>Mock Tests</h5>
            <p>Hundreds of practice tests designed in English and multiple</p>
          </div>
        </div>
      </div>

      <div className="about-part-two commmon-flex-row">
        <div>
          <h4 className="text-color">Encouraging children's potential</h4>
          <p>
            CherryLearn has thousands of interactive and interesting activities
            in English and Kannada based on textbooks, technology systems to
            complement modern education, mock tests and useful quizzes and
            grammar to boost confidence.
          </p>
          <button className="secondary-btn">Download</button>
        </div>
        <div>
            <img src={aboutExponentialImg}/>
        </div>
      </div>
    </div>
  );
};
