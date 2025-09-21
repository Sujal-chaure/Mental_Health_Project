import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Default role = student
    console.log("New Student:", { username, email, password, role: "student" });

    // Redirect to login after signup
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCE7]">
      <div className="bg-[#0E4839] p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FDFCE7]">
          Sign Up
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter your Username"
          className="w-full p-3 border rounded mb-4 bg-[#FDFCE7] text-[#0E4839] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FDFCE7]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full p-3 border rounded mb-4 bg-[#FDFCE7] text-[#0E4839] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FDFCE7]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full p-3 border rounded mb-4 bg-[#FDFCE7] text-[#0E4839] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FDFCE7]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-[#FDFCE7] text-[#0E4839] py-3 rounded-lg font-semibold hover:bg-[#e5e4d3] transition"
        >
          Sign Up
        </button>

        {/* Already have an account? */}
        <p className="text-center text-sm mt-4 text-[#FDFCE7]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
