import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Assets/Login/Login';
import SignUp from './Component/Assets/SignUp/SignUp';
import Home from './Component/Assets/HomePage/Home';
import Job from './Component/Assets/FindJob/Job';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/job" element={<Job/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
