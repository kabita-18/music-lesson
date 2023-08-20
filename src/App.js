import "./App.css";
import Home from "./components/Home";
import Leftmenu from "./components/Leftmenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import MusicCarousel from "./components/MusicCarousel";

function App() {
  return (
    // <div className="flex demo">
      <Router>
        <Leftmenu />
        <div className="p-7 pb-0 ml-20">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/courses" element={<Course />} />
          </Routes>
        </div>
      </Router>
    // </div>
  );
}

export default App;
