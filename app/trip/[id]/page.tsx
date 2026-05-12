import Link from "next/link";

export default function TripDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        Trip Details
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Viewing trip: {params.id}
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="border border-black px-4 py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}