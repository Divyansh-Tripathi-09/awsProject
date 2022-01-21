// import NavBar from "./Project/Navbar";
import Home from "./Project/Home";
import Ae from "./Project/Departments/AE/Home"
import Ce from "./Project/Departments/CE/Home"
import Cse from "./Project/Departments/CSE/Home"
import Ece from "./Project/Departments/ECE/Home"
import Eee from "./Project/Departments/EEE/Home"
import Ise from "./Project/Departments/ISE/Home"
import Me from "./Project/Departments/ME/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sem4 from "./Project/Departments/CSE/Papers/sem4/Home";
import Dbms from "./Project/Departments/CSE/Papers/sem4/DBMS/Dbms";
import M4 from "./Project/Departments/CSE/Papers/sem4/M4/M4";
import Java from "./Project/Departments/CSE/Papers/sem4/Java/Java";
import Os from "./Project/Departments/CSE/Papers/sem4/Os/Os";
import Daa from "./Project/Departments/CSE/Papers/sem4/Daa/Daa";
import Sem5 from "./Project/Departments/CSE/Papers/sem5/Home";
import Ainn from "./Project/Departments/CSE/Papers/sem5/Ainn/Ainn"
import Cn from "./Project/Departments/CSE/Papers/sem5/Cn/Cn"
import Dm from "./Project/Departments/CSE/Papers/sem5/Dm/Dm"
import Flat from "./Project/Departments/CSE/Papers/sem5/Flat/Flat"
import Se from "./Project/Departments/CSE/Papers/sem5/Se/Se"

function NewRouters() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ae" element={<Ae />} />
          <Route path="/ce" element={<Ce />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/ece" element={<Ece />} />
          <Route path="/eee" element={<Eee />} />
          <Route path="/ise" element={<Ise />} />
          <Route path="/me" element={<Me />} />
          {/* Cse */}
          {/* 4th Sem */}
          <Route path="/cse/4" element={<Sem4 />} />
          <Route path="/cse/4/dbms" element={<Dbms />} />
          <Route path="/cse/4/m4" element={<M4 />} />
          <Route path="/cse/4/java" element={<Java />} />
          <Route path="/cse/4/os" element={<Os />} />
          <Route path="/cse/4/daa" element={<Daa />} />
          {/* 5th Sem */}
          <Route path="/cse/5" element={<Sem5 />} />
          <Route path="/cse/5/ainn" element={<Ainn />} />
          <Route path="/cse/5/dm" element={<Dm />} />
          <Route path="/cse/5/cn" element={<Cn />} />
          <Route path="/cse/5/se" element={<Se />} />
          <Route path="/cse/5/flat" element={<Flat />} />
        </Routes>
      </Router>
    </div>
  )
};

export default NewRouters;
