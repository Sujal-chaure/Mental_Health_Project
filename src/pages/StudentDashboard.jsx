// src/pages/StudentDashboard.jsx
import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user?.name} 🎓
      </h1>
      <p className="mb-6">Here are your options:</p>

      {/* Dashboard Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mental Health Test */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📝</span>
          <h2 className="font-semibold text-lg">Mental Health Test</h2>
          <p className="text-sm text-gray-500 mt-2">
            Take quick assessments to reflect on your current mental state.
          </p>
        </div>

        {/* Journaling */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📔</span>
          <h2 className="font-semibold text-lg">Journaling</h2>
          <p className="text-sm text-gray-500 mt-2">
            Write down your thoughts and track your emotional journey.
          </p>
        </div>

        {/* Peer-to-Peer Forum */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">🤝</span>
          <h2 className="font-semibold text-lg">Peer-to-Peer Forum</h2>
          <p className="text-sm text-gray-500 mt-2">
            Connect with fellow students, share experiences, and support each other.
          </p>
        </div>

        {/* AI Counsellor Chat */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">💬</span>
          <h2 className="font-semibold text-lg">AI Counsellor</h2>
          <p className="text-sm text-gray-500 mt-2">
            Chat with an AI counsellor for instant guidance and stress relief.
          </p>
        </div>

        {/* Resources */}
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition">
          <span className="text-4xl mb-3 block">📚</span>
          <h2 className="font-semibold text-lg">Resources</h2>
          <p className="text-sm text-gray-500 mt-2">
            Access articles, videos, and self-help materials curated for students.
          </p>
        </div>

        {/* Book a Counsellor */}
        <div
          className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center transition"
          onClick={() => navigate("/appointments")} // Navigate to appointment page
        >
          <span className="text-4xl mb-3 block">📅</span>
          <h2 className="font-semibold text-lg">Book a Counsellor</h2>
          <p className="text-sm text-gray-500 mt-2">
            Schedule an appointment with your institution's counsellor.
          </p>
        </div>
      </div>
    </div>
  );
}
