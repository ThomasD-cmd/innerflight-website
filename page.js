import React from "react";

export default function InnerflightWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-black text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Innerflight Logo" className="h-12 w-12 object-contain bg-white rounded-full p-1"/>
            <h1 className="text-2xl font-bold">Innerflight Production Freight</h1>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 text-center">
        <img src="/logo.jpg" alt="Innerflight Logo" className="mx-auto mb-6 h-24"/>
        <h2 className="text-4xl font-bold mb-4">Global Cargo Solutions</h2>
        <p>Reliable freight services for production & events.</p>
      </section>
    </div>
  );
}
