import './App.css';
import { About } from './components/about/About';
import { Intro } from './components/Intro/Intro';
import { ParentsTalkContainer } from './components/parents-talk/ParentsTalk';
import { SubjectContainer } from './components/subject/Subject';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <SubjectContainer/>
      <ParentsTalkContainer/>
    </div>
  );
}

export default App;
