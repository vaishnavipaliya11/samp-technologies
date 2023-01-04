import "../../styles.css";
import "../footer/footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="common-flex-row center social-media">
        <img
          className="media-img margin-sm"
          src="https://www.cherrilearn.com/static/media/cherriss.e567afb0.png"
        />
        <div className="margin-sm">
          <h4>Get the cherry learn app now</h4>
          <p>Start your kid's online learning journey today</p>
          <button className="primary-btn">Google Play Store</button>
          <button className="secondary-btn">App Store</button>
        </div>
      </div>

      <div className="common-flex-row bottom-footer align-center">
        <img
          className="media-img margin-sm"
          src="https://www.cherrilearn.com/static/media/footer1New.ff93729d.png"
        />
        <div>
          <h2>Cheery Learn</h2>
          <button className="primary-btn">Download</button>
        </div>
        <img
          className="media-img margin-sm"
          src="https://www.cherrilearn.com/static/media/footer2New.917b698f.png"
        />
      </div>
    </div>
  );
};
