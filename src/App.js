import NavBar from "./Project/Navbar";
// import Home from "./Project/Home";
// import Ae from "./Project/Departments/AE/Home"
// import Ce from "./Project/Departments/CE/Home"
// import Cse from "./Project/Departments/CSE/Home"
// import Ece from "./Project/Departments/ECE/Home"
// import Eee from "./Project/Departments/EEE/Home"
// import Ise from "./Project/Departments/ISE/Home"
// import Me from "./Project/Departments/ME/Home"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ae" element={<Ae/>} />
          <Route path="/ce" element={<Ce />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/ece" element={<Ece />} />
          <Route path="/eee" element={<Eee />} />
          <Route path="/ise" element={<Ise />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
