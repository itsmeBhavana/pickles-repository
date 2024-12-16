import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VendorDashboard from "./pages/VendorDashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import "./App.css";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* Secured Vendor Route */}
            <Route
              path="/vendor"
              element={
                <PrivateRoute allowedRoles={["vendor"]}>
                  <VendorDashboard />
                </PrivateRoute>
              }
            />

            {/* Secured Admin Route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
