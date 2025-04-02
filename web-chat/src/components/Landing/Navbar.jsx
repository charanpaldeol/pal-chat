export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-white shadow-md">
      <div className="text-xl font-semibold">Pal (ਪਲ)</div>
      <ul className="flex gap-8">
        <li><a href="#features" className="hover:text-blue-500">Features</a></li>
        <li><a href="/chat" className="hover:text-blue-500">Chat</a></li>
      </ul>
    </nav>
  );
}

