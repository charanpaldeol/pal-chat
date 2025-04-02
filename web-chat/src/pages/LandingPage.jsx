export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 text-center">
      {/* Hero Section */}
      <div className="pt-24">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Pal Chat 👋</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Talk in the moment. No accounts, no backups, no history. 100% private.
        </p>
        <a
          href="/chat"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>

      {/* Image */}
      <div className="my-12">
        <img
          src="https://images.unsplash.com/photo-1525186402429-97b738e9e656?auto=format&fit=crop&w=1000&q=80"
          alt="Chat concept"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-4xl w-full py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Pal Chat?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Truly Private",
              desc: "No accounts. No personal data. Your identity stays yours."
            },
            {
              title: "No Storage",
              desc: "Chats are never stored—what you say disappears when you close the window."
            },
            {
              title: "Encrypted",
              desc: "End-to-end encryption using the Signal Protocol."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-6 text-left hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
