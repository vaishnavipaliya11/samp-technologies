import "../parents-talk/parents.css";
import "../../styles.css";
export const ParentsViewCard = ({ data }) => {
  console.log(data, "daya");

  return (
    <div className="parent-item-card margin-bg">
      <div className="common-flex-row align-center">
        <img src={data.img} />
        <h5>{data.name} </h5>
      </div>
      <p className="parent-description">{data.description}</p>
      <p className="parent-description">⭐⭐⭐⭐</p>
    </div>
  );
};
