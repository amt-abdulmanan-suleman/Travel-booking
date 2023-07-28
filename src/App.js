import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import CustomerSignup from "./routes/CustomerSignup";
import BusinessSignup from "./routes/BusinessSignup";
import Accomodation from "./routes/Accomodation";
import Hotels from "./routes/Hotels";
import CarRental from "./routes/CarRental";
import Flights from "./routes/Flights";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customersignup" element={<CustomerSignup />} />
        <Route path="/businesssignup" element={<BusinessSignup />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </div>
  );
}

export default App;
