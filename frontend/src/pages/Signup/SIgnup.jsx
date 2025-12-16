import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <- import useNavigate
import "./Signup.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // <- initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Optional: input validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });

      if (response.data.message) {
        setMessage("Signup successful");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        {/* Navigate to Login */}
        <p className="login-link">
          Already a user?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#1f4fd8", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;