import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticate = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Here</h1>
      <form onSubmit={authenticate}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          name="pass"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
