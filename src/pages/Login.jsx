import { useState } from "react";
import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const login = useAuth((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role, name || role);
    navigate(role === "student" ? "/student" : "/counsellor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="counsellor">Counsellor</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
