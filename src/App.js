import './App.css';
import Achievment from './components/Achievement/Achievment';
import Additional from './components/Additional/Additional';
import Education from './components/Eductaion/Education';
import Header from './components/Header/Header';
import Project from './components/Projects/Project';
import Social from './components/Social/Social';
import Tagline from './components/About/About';
import Technical from './components/Technical/Technical';
import 'react-toastify/dist/ReactToastify.css';
import Github from './components/Github/Github';
import Leetcode from './components/Leetcode/Leetcode';
import Graph from './components/Graph/Graph';
function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className='md:w-8/12 w-full'>
          <Header />
          <Project />
          <Achievment />
           <Graph/>
        </div>
        <div className="md:w-4/12 w-full">
          <Social />
          <Tagline />
          <Technical />
          <Additional />
          <Education />
        </div>
      </div>

    </>
  );
}

export default App;
