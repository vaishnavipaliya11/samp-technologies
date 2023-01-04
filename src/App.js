import './App.css';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Intro } from './components/Intro/Intro';
import { ParentsTalkContainer } from './components/parents-talk/ParentsTalk';
import { QuestionsAsked } from './components/questions/Question';
import { SubjectContainer } from './components/subject/Subject';
import { SupportEducation } from './components/support-education/SupportEducation';

function App() {
  return (
    <div className="App">
      <div className='component-main-container'>
      <Intro/>
      <About/>
      <SubjectContainer/>
      <SupportEducation/>
      <ParentsTalkContainer/>
     
      <QuestionsAsked/>
      <Footer/>
      </div>
     
    </div>
  );
}

export default App;
