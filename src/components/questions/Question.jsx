import "../../styles.css";
import "../../components/questions/question.css";
export const QuestionsAsked = () => {
  return (
    <div>
      <div className="common-flex-row question-block">
        <img
          src="https://www.cherrilearn.com/static/media/Groupqa.46d923e5.png"
          id="question-img"
        />
        <div className="frequently-asked-ques-block">
          <h3>
            Frequently Asked <span>Questions</span>{" "}
          </h3>
          <div>
            <div className="common-flex-row question-One space-bet margin-sm">
              <p>What is CherriLearn?</p>
              <button>+</button>
            </div>
            <p className="quest-desc">
              Realizing the difficulties faced by children while learning,
              Cherrilearn App is a mobile software that helps children to learn
              from the primary level through activities, attractive visuals, and
              mock tests in Kannada and English medium.
            </p>

            <div className="common-flex-row space-bet margin-sm common-quest">
              <p>How much does it cost annually to use CherriLearn?</p>
              <button>+</button>
            </div>
            <div className="common-flex-row space-bet margin-sm common-quest">
              <p>Which device helps to use Cherrilearn?</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
