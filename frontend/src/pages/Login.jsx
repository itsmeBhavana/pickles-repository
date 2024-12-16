import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleVendorLogin = () => {
    const mockVendor = { name: "Vendor User", role: "vendor" };
    login(mockVendor);
    navigate("/vendor");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleVendorLogin}>Login as Vendor</button>
    </div>
  );
};

export default Login;
