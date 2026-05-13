import Link from "next/link";
import { TripSelectionPanel } from "./_components/TripSelectionPanel";
import { trips } from "../lib/trips";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialDestination = Array.isArray(params.destination)
    ? params.destination[0] ?? ""
    : params.destination ?? "";

  return (
    <main className="min-h-screen bg-[#f6fbf8] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center justify-between rounded-lg border border-emerald-100/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-slate-950"
          >
            AI Travel Agent
          </Link>

          <Link
            href="/"
            className="rounded-md border border-emerald-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
          >
            Back Home
          </Link>
        </nav>

        <header className="mb-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Your travel workspace
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Plan, compare, and continue your AI-built trips.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Keep destination ideas, draft itineraries, and recommendation sets in one place so the next travel decision is easy to spot.
            </p>
          </div>
        </header>

        <section aria-labelledby="saved-trips-heading">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="saved-trips-heading"
                className="text-2xl font-semibold"
              >
                Saved trips
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Pick a trip to view the itinerary and recommendations.
              </p>
            </div>

            <p className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
              Local prototype
            </p>
          </div>

          <TripSelectionPanel
            initialTrips={trips}
            initialDestination={initialDestination}
          />
        </section>
      </div>
    </main>
  );
}
