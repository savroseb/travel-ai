"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [destination, setDestination] = useState("");
  const router = useRouter();

  function openDashboardWithDestination() {
    const trimmedDestination = destination.trim();

    if (!trimmedDestination) return;

    router.push(`/dashboard?destination=${encodeURIComponent(trimmedDestination)}#generate-trip`);
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openDashboardWithDestination();
  }

  return (
    <main className="min-h-screen bg-[#f6fbf8] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col">
        <nav className="mb-8 flex items-center justify-between rounded-lg border border-emerald-100/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-slate-950"
          >
            AI Travel Agent
          </Link>

          <Link
            href="/dashboard"
            className="rounded-md border border-emerald-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
          >
            Dashboard
          </Link>
        </nav>

        <section className="grid flex-1 gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              AI trip planning workspace
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              Turn a destination idea into a trip you can compare and refine.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Start with where you want to go. The dashboard will open the trip generator with your destination already filled in.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Start planning
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                Where are you headed?
              </h2>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Destination
              </span>

              <input
                type="text"
                placeholder="Lisbon, Portugal"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openDashboardWithDestination();
                  }
                }}
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-emerald-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              Search Trip
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
