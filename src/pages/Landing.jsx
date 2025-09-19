import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl font-bold mb-3 transition duration-700 ease-in-out hover:scale-105">
          🌐 Digital Psychological Intervention Platform
        </h1>
        <p className="max-w-2xl text-center mb-5 text-white/90 transition-opacity duration-700 hover:opacity-90">
          AI-powered mental health ecosystem for college students in India — safe,
          stigma-free, and personalized.
        </p>
        <Link
          to="/login"
          className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold shadow hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          Get Started →
        </Link>
      </div>

      {/* Problem & Solution Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">🚨 The Problem</h2>
        <p className="mb-8 text-lg text-white/90">
          College students in India face increasing stress, anxiety, and depression
          — yet stigma, lack of awareness, and limited counsellor access stop them
          from seeking timely help.
        </p>

        <h2 className="text-3xl font-bold mb-6">💡 Our Solution</h2>
        <p className="text-lg text-white/90">
          A smart, AI-driven platform that provides confidential screening, peer
          support, journaling, and direct access to counsellors — all in regional
          languages, tailored to the unique needs of Indian institutions.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">🌟 Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🧠", title: "Psychological Screening", desc: "Clinically validated tests like PHQ-9 & GAD-7 with trend tracking." },
            { icon: "💬", title: "AI Chatbot", desc: "24×7 chatbot for mental health first aid & crisis detection." },
            { icon: "👥", title: "Peer Support Forum", desc: "Anonymous groups with cyberbullying detection & peer buddy support." },
            { icon: "📖", title: "Journaling", desc: "Daily text & audio reflections with sentiment & emotion analysis." },
            { icon: "📋", title: "Recommendation Engine", desc: "AI-driven risk scoring (Green / Yellow / Red) for timely interventions." },
            { icon: "📊", title: "Counsellor Dashboard", desc: "Student profiles, appointments, and institution-wide analytics." },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-5 bg-white/10 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
