import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Assets/Login/Login';
import SignUp from './Component/Assets/SignUp/SignUp';
import Home from './Component/Assets/HomePage/Home';
import Job from './Component/Assets/FindJob/Job';
import FAQ from './Component/Assets/HomePage/FAQ';
import About from './Component/Assets/About/About';
import Terms from './Component/Assets/Terms/Terms';
import Policy from './Component/Assets/Terms/Policy';
import Contact from './Component/Assets/Contact/Contact';
import Resume from './Component/Assets/Resume/Resume';
import Apply from './Component/Assets/FindJob/Apply';
import Done from './Component/Assets/FindJob/Done';
import Preview from './Component/Assets/Resume/Preview';
import Profile from './Component/Assets/HomePage/Profile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/job" element={<Job/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/faq" element={<About/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/apply" element={<Apply/>}/>
    <Route path="/done" element={<Done/>}/>
    <Route path="/preview" element={<Preview/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
