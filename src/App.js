import './App.css';
import { About } from './components/about/About';
import { Intro } from './components/Intro/Intro';
import { SubjectContainer } from './components/subject/Subject';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <SubjectContainer/>
    </div>
  );
}

export default App;
