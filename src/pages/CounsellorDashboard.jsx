import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function CounsellorDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, Counsellor {user?.name} 👩‍⚕️</h1>
      <p className="mb-6">Manage students and appointments here:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">📊 Student Risk Profiles</div>
        <div className="p-4 bg-white rounded-xl shadow">📅 Appointment Management</div>
        <div className="p-4 bg-white rounded-xl shadow">📈 Analytics Dashboard</div>
        <div className="p-4 bg-white rounded-xl shadow">📑 Institutional Reports</div>
      </div>

      <button onClick={handleLogout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </div>
  );
}
