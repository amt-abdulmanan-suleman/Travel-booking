import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
// import Contact from "./routes/Contact";
// import Packages from "./routes/Packages";
// import Services from "./routes/Services";
// import WhyUs from "./routes/WhyUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/contactus" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
