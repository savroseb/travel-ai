"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [destination, setDestination] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!destination) return;

    router.push(`/trip/${destination}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        AI Travel Agent
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Plan personalized trips with AI-powered recommendations.
      </p>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Search Trip
        </button>
      </div>

      <Link
        href="/dashboard"
        className="underline text-blue-600"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}