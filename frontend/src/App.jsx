import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./App.css";

export default function App() {
  const navStyle = {
    display: "flex",
    gap: 12,
    padding: 12,
    borderBottom: "1px solid #ccc",
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
