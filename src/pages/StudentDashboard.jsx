// src/pages/StudentDashboard.jsx
import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name} 🎓</h1>
      <p className="mb-6">Here are your options:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">📝 Take Mental Health Test</div>
        <div className="p-4 bg-white rounded-xl shadow">📔 Journaling</div>
        <div className="p-4 bg-white rounded-xl shadow">🤝 Peer-to-Peer Forum</div>
        <div className="p-4 bg-white rounded-xl shadow">💬 Chat with AI Counsellor</div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
