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
      <h1 className="text-3xl font-bold mb-4">
        Welcome, Counsellor {user?.name} 👩‍⚕️
      </h1>
      <p className="mb-6">Manage students and appointments here:</p>

      {/* Dashboard Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Student Risk Profiles */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📊</span>
          <h2 className="font-semibold text-lg">Student Risk Profiles</h2>
          <p className="text-sm text-gray-500 mt-2">
            Track emotional and academic wellbeing of students.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            AI-driven alerts help identify early signs of stress, depression, or academic pressure.
          </p>
        </div>

        {/* Appointment Management */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📅</span>
          <h2 className="font-semibold text-lg">Appointment Management</h2>
          <p className="text-sm text-gray-500 mt-2">
            Schedule, reschedule, and track counselling sessions.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Automatic reminders via email/SMS ensure no-shows are minimized.
          </p>
        </div>

        {/* Analytics Dashboard */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📈</span>
          <h2 className="font-semibold text-lg">Analytics Dashboard</h2>
          <p className="text-sm text-gray-500 mt-2">
            Monitor overall mental health trends across students.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Visual charts provide insights on stress patterns, session outcomes, and engagement rates.
          </p>
        </div>

        {/* Institutional Reports */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📑</span>
          <h2 className="font-semibold text-lg">Institutional Reports</h2>
          <p className="text-sm text-gray-500 mt-2">
            Generate detailed reports for stakeholders and admins.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Export insights as PDF/Excel for academic boards and compliance audits.
          </p>
        </div>
      </div>


    </div>
  );
}
