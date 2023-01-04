import { ParentsViewCard } from "./ParentsCard";
import { ParentsData } from "./parentsData";
import Carousel from "react-elastic-carousel";
export const ParentsTalkContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="parent-container">
      <h4 className="text-primary-color">
        Parent <span>talk</span>
      </h4>
      <Carousel breakPoints={breakPoints}>
        {ParentsData.map((data) => {
          return <ParentsViewCard data={data} />;
        })}
      </Carousel>
    </div>
  );
};
