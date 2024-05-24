
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // Changed from email to username
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // To display error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username and password are non-empty
    if (!username || !password) {
      alert("Please fill in both username and password fields.");
      return;
    }

    try {
      const response = await fetch("https://ecommerce-g1tg.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, // Changed from email to username
          password: password,
        }),
      });

      const data = await response.json(); // Await for the response data

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin-pannel"); // Navigate only if login is successful
      } else {
        setMessage(data.message || "Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <h1 className="card-subtitle mb-4 text-center">Welcome Back!</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              {message && <p className="mt-3 text-center text-danger">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


