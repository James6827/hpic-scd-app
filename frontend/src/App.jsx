import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Glossary from "./pages/Glossary.jsx";
import Quiz from "./pages/Quiz.jsx"; // Import the Quiz component so it can be used in routing
import Facts from "./pages/Facts.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <nav style={{ display:"flex", gap:12, padding:12, borderBottom:"1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/glossary">Glossary</Link>
        <Link to="/quiz">Quiz</Link> {/*Takes user to the quiz page */}
        <Link to="/facts">Did you know?</Link>
      </nav>

      <div style={{ padding:16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/quiz" element={<Quiz />} />  {/* Defines the route so the Quiz component shows when user visits /quiz */}
          <Route path="/facts" element={<Facts />} />
        </Routes>
      </div>
    </>
  );
}
