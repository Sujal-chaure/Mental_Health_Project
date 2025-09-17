import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/counsellor" element={<CounsellorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
