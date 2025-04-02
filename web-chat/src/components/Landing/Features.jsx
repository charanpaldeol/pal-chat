export default function Features() {
  const features = [
    { title: "End-to-End Encryption", desc: "Secure chats using Signal Protocol." },
    { title: "No Data Storage", desc: "Your data is never stored or backed up." },
    { title: "Anonymous Chatting", desc: "Chat anonymously with anyone." }
  ];

  return (
    <div id="features" className="py-20 px-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Why Pal Chat?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

