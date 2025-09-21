import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar on top */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/counsellor" element={<CounsellorDashboard />} />
        </Routes>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
