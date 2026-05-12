import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        Travel Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Manage your saved trips and travel plans.
      </p>

      <div className="border p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Upcoming Trip
        </h2>

        <p className="mb-4">
          Paris Spring Adventure
        </p>

        <Link
          href="/trip/paris"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          View Trip
        </Link>
      </div>

      <Link
        href="/"
        className="text-blue-600 underline"
      >
        Back Home
      </Link>
    </main>
  );
}