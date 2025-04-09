export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">Pal (ਪਲ) Chat</div>
      <div className="space-x-6 hidden sm:block">
        <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
        <a href="/chat" className="text-gray-600 hover:text-blue-600 transition">Chat</a>
      </div>
    </nav>
  );
}

