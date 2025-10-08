import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter both email and password");
      return;
    }

    alert("Logged in Successfully ✅");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card animate-fadeIn">
        <h3 className="login-title"> Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-animated">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;