import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to landing after logout
  };

  return (
    <nav className="bg-[#0E4839] text-[#FDFCE7] px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold tracking-wide hover:opacity-80"
      >
        🧠 NeuroSpark
      </Link>

      {/* Center Links (Only when logged in) */}
      {isLoggedIn && (
        <div className="hidden md:flex space-x-6">
          <Link
            to="/dashboard"
            className={`hover:underline ${
              location.pathname === "/dashboard" ? "font-bold" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/appointments"
            className={`hover:underline ${
              location.pathname === "/appointments" ? "font-bold" : ""
            }`}
          >
            Appointments
          </Link>
          <Link
            to="/reports"
            className={`hover:underline ${
              location.pathname === "/reports" ? "font-bold" : ""
            }`}
          >
            Reports
          </Link>
        </div>
      )}

      {/* Right Side (Login/Logout) */}
      <div>
        {!isLoggedIn ? (
          location.pathname === "/" && (
            <Link
              to="/login"
              className="bg-[#FDFCE7] text-[#0E4839] px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#eae9d8] transition"
            >
              Login
            </Link>
          )
        ) : (
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">
              Welcome, <strong>{user?.name}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-[#FDFCE7] px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
