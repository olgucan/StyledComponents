import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Notes  from './pages/Notes'
import Create  from './pages/Create'
function App() {
  return (
    <div className="App">
     
     <Routes>
         <Route path="/" element={<Notes/>}  />
        <Route path="about"  element={<Create/>}/> 
      </Routes>
    </div>
  );
}

export default App;
