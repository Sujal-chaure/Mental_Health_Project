import { Link } from "react-router-dom";

export default function Landing() {
  const features = [
    {
      icon: "🧠",
      title: "Psychological Screening",
      desc: "Clinically validated tests like PHQ-9 & GAD-7 with trend tracking.",
    },
    {
      icon: "💬",
      title: "AI Chatbot",
      desc: "24×7 chatbot for mental health first aid & crisis detection.",
    },
    {
      icon: "👥",
      title: "Peer Support Forum",
      desc: "Anonymous groups with cyberbullying detection & peer buddy support.",
    },
    {
      icon: "📖",
      title: "Journaling",
      desc: "Daily text & audio reflections with sentiment & emotion analysis.",
    },
    {
      icon: "📋",
      title: "Recommendation Engine",
      desc: "AI-driven risk scoring (Green / Yellow / Red) for timely interventions.",
    },
    {
      icon: "📊",
      title: "Counsellor Dashboard",
      desc: "Student profiles, appointments, and institution-wide analytics.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0E4839] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
          🌐 𝐃𝐈𝐆𝐈𝐓𝐀𝐋 𝐏𝐒𝐘𝐂𝐇𝐎𝐋𝐎𝐆𝐈𝐂𝐀𝐋 𝐈𝐍𝐓𝐄𝐑𝐕𝐄𝐍𝐓𝐈𝐎𝐍
        </h1>
        <p className="max-w-3xl text-lg md:text-xl mb-8 animate-fade-in-up delay-200 text-[#0E4839]/90">
          AI-powered mental health ecosystem for college students in India — safe,
          stigma-free, and personalized.
        </p>
        <Link
          to="/login"
          className="bg-[#0E4839] text-white px-10 py-6 rounded-2xl font-semibold shadow-lg hover:bg-[#0b392d] transition duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          Get Started →
        </Link>
      </section>

      {/* Problem & Solution Section */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">🚨 The Problem</h2>
          <p className="text-lg md:text-xl animate-fade-in-up delay-100 text-[#0E4839]/80">
            College students in India face increasing stress, anxiety, and depression
            — yet stigma, lack of awareness, and limited counsellor access stop them
            from seeking timely help.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up delay-200">💡 Our Solution</h2>
          <p className="text-lg md:text-xl animate-fade-in-up delay-300 text-[#0E4839]/80">
            A smart, AI-driven platform that provides confidential screening, peer
            support, journaling, and direct access to counsellors — all in regional
            languages, tailored to the unique needs of Indian institutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">🌟 Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#FDFCE7] p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#0E4839]/90">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes fade-in-up {
            0% {opacity: 0; transform: translateY(20px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s forwards;
          }
          .delay-100 {animation-delay: 0.1s;}
          .delay-200 {animation-delay: 0.2s;}
          .delay-300 {animation-delay: 0.3s;}
          .delay-400 {animation-delay: 0.4s;}
        `}
      </style>
    </div>
  );
}

