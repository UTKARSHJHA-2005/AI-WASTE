import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AIAnalysis from "./pages/AIAnalysis";
import Processor from "./pages/Processor";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recycler" element={<Processor />} />
        <Route path="/AI" element={<AIAnalysis />} />
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
