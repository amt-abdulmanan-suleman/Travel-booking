import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import CustomerSignup from "./routes/CustomerSignup";
import BusinessSignup from "./routes/BusinessSignup";
import Accomodation from "./routes/Accomodation";
import Hotels from "./routes/Hotels";
import CarRentals from "./routes/CarRentals";
import Flights from "./routes/Flights";
import Dashboard from "./routes/Dashboard";
import Cart from "./routes/Cart";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customersignup" element={<CustomerSignup />} />
        <Route path="/businesssignup" element={<BusinessSignup />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrentals" element={<CarRentals />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
