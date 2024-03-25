
import './App.css';
import { NavBar } from './Component/NavBar';
import { News } from './Component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
// in new version of react router dom  switch gives error so used routes and element 


function App() {

  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" country="in" category="general" />} />
          <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
