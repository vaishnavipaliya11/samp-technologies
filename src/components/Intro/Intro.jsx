import { Navbar } from "../navbar/Navbar";
import "../../styles.css";
import "../Intro/intro.css";
import { introTopics } from "../../images/IntroImg";
import { introGif } from "../../images/IntroImg";
import { introNoOfStud } from "../../images/IntroImg";
import { citiesReached } from "../../images/IntroImg";
import { appRating } from "../../images/IntroImg";
export const Intro = () => {
  return (
    <div className="intro-container">
      <Navbar />

      <div className="intro-sub-container common-flex-row margin-bg">
        <div className="intro-info-container">
          <div>
            <h4 className="text-color">1 to 5 Standard based activity</h4>
          </div>
          <div className="text-color intro-btn-set common-flex-column">
            <p>
              Cherrilearn is the best companion for your child’s learning -
              Boost your Child’s learning ability with our Highly Affordable app
              available in English as well as your Regional Language! with
              fun-filled activities designed by certified academic experts to
              engage your child and improve their learning skills daily.
            </p>
            <h5>Choose your activity</h5>
            <div>
            <button className="primary-btn margin-sm">English</button>
            <button className="secondary-btn margin-sm">Kannada</button>
            </div>
          
          </div>
        </div>
        <div>
          <img src={introGif} className="intro-gif" />
        </div>
      </div>

      <div className="common-flex-row justify-space-evenly">
        <div className="common-flex-column align-center text-color ">
          <div className="intro-topics">
            <img src={introNoOfStud} />
          </div>

          <p>2500+</p>
          <p>No of students</p>
        </div>
        <div className="common-flex-column align-center  text-color">
          <div className="intro-topics">
            <img src={introTopics} />
          </div>

          <p>2500+</p>
          <p>No of Topics</p>
        </div>
        <div className="common-flex-column align-center  text-color">
          <div className="intro-topics">
            <img src={citiesReached} />
          </div>

          <p>2500+</p>
          <p>citiesReached</p>
        </div>
        <div className="common-flex-column align-center  text-color">
          <div className="intro-topics">
            <img src={appRating} />
          </div>

          <p>2500+</p>
          <p>App rating</p>
        </div>
      </div>
    </div>
  );
};
