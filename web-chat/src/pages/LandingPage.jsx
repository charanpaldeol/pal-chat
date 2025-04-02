export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Pal Chat</h1>
      <p className="text-lg text-gray-600 mb-6">Anonymous, encrypted messaging in the moment.</p>
      
      <img 
        src="https://images.unsplash.com/photo-1525186402429-97b738e9e656?auto=format&fit=crop&w=1000&q=80" 
        alt="Chat illustration" 
        className="max-w-md w-full rounded-lg shadow-lg"
      />
    </div>
  );
}
