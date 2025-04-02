import { useEffect } from 'react';
import Navbar from '../components/Landing/Navbar';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Talk in the moment. <br /> No trails, no history.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Pal Chat is a privacy-first chat app with no data storage. Just instant, anonymous, encrypted conversations.
        </p>
        <a
          href="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
        >
          Get Started</a>
      </section>

      {/* Illustration */}
      <section className="px-6 mb-20 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1525186402429-97b738e9e656?auto=format&fit=crop&w=1000&q=80"
          alt="Chat Illustration"
          className="rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Pal Chat?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Zero Data Storage',
                desc: 'No logs, no backups. Chats vanish forever when you close the window.',
              },
              {
                title: 'Fully Anonymous',
                desc: 'No phone numbers, emails or usernames. Just moments shared in time.',
              },
              {
                title: 'End-to-End Encryption',
                desc: 'Messages are encrypted using modern cryptography for total privacy.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-md transition text-left"
              >
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-gray-50">
        <p>© {new Date().getFullYear()} Pal Chat. Built with ❤️ for privacy.</p>
      </footer>
    </div>
  );
}
