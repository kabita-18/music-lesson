
import './App.css';
import Home from './components/Home';
import Leftmenu from './components/Leftmenu';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Course from './components/Course';


function App() {
  return (
      <div className='flex'>
    <Router>
        <Leftmenu/>
        <div className='p-7 flex flex-col'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/courses" element={<Course/>} />
          </Routes>


        </div>
      

      
    </Router>
    </div>
  );
}

export default App;
