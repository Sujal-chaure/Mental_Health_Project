export default function Footer() {
  return (
    <footer className="bg-[#0E4839] text-[#FDFCE7] py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} NeuroSpark. All rights reserved.
        </p>
        <p className="text-xs opacity-80 mt-1">
          Designed with ❤️ to support student mental health.
        </p>
      </div>
    </footer>
  );
}
