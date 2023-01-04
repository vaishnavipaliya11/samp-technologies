import Carousel from "react-elastic-carousel";
import { SubjectCrouselItem } from "./SubjectCrouseltem";
import { subjectCrouselData } from "./subjectData";
import "../subject/subject.css";
import "../../styles.css";
import Item from "./Item";
export const SubjectContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="subject-container">
      <h4>An intresting </h4>
      <h4 className="text-primary-color">Design for learning</h4>
      <div className="crousel-container">
        <div className="margin-sm text-color">
          <h4>Subject</h4>
          <p>Select the class for your subject</p>
        </div>
        <Carousel breakPoints={breakPoints}>
          {subjectCrouselData.map(data =>{
            return(
                <SubjectCrouselItem data={data}/>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
};
