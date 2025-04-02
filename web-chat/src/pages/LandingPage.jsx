export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Pal Chat 👋</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Talk in the moment. No accounts, no backups, no history.
      </p>
      <img
        src="https://images.unsplash.com/photo-1525186402429-97b738e9e656?auto=format&fit=crop&w=1000&q=80"
        alt="Chat concept"
        className="rounded-xl shadow-lg w-full max-w-md"
      />
    </div>
  );
}
