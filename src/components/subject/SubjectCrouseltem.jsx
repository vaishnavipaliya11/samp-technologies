import "../../styles.css"
import "../../components/subject/subject.css"
export const SubjectCrouselItem = ({ data }) => {
  console.log(data, "daya");

  return (
    
      <div className="crousel-item-card">
        <img src={data.image} />
        <h4>{data.title}</h4>
      </div>
    
  );
};
