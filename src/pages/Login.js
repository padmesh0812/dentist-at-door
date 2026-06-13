import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const API_URL = "http://localhost:8080/api";

function Login() {
  const [activeTab, setActiveTab] = useState("patient");
  const [patientId, setPatientId] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePatientLogin = async (e) => {
    e.preventDefault();
    if (!patientId) {
      alert("Please enter your Patient ID.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/patients/${patientId}`);
      if (response.ok) {
        alert("Login Successful! Welcome back!");
        navigate("/");
      } else {
        alert("Invalid Patient ID. Please check and try again.");
      }
    } catch (error) {
      alert("Error connecting to server. Please try again.");
    }
    setLoading(false);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      adminEmail === "admin@dentistatdoor.com" &&
      adminPassword === "admin123"
    ) {
      alert("Admin Login Successful!");
      navigate("/");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="tab-buttons">
          <button
            className={
              activeTab === "patient" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("patient")}
          >
            Patient Login
          </button>
          <button
            className={
              activeTab === "admin" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("admin")}
          >
            Admin Login
          </button>
        </div>

        {activeTab === "patient" && (
          <form onSubmit={handlePatientLogin}>
            <h2>Login as Patient</h2>
            <label>Patient ID</label>
            <input
              type="text"
              placeholder="Enter Your Patient ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              required
            />
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Checking..." : "Login"}
            </button>
          </form>
        )}

        {activeTab === "admin" && (
          <form onSubmit={handleAdminLogin}>
            <h2>Admin Login</h2>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter Admin Email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            <p
              className="forgot-password"
              onClick={() =>
                alert("Password reset instructions sent to admin email.")
              }
            >
              Forgot Password?
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
