"use client";

import { useState } from "react";
import type { Trip } from "../../lib/trips";
import { CreateTripForm } from "./CreateTripForm";
import { EmptyTripsState } from "./EmptyTripsState";
import { TripCard } from "./TripCard";

type TripSelectionPanelProps = {
  initialTrips: Trip[];
};

export function TripSelectionPanel({ initialTrips }: TripSelectionPanelProps) {
  const [dashboardTrips, setDashboardTrips] = useState(initialTrips);
  const [selectedTripId, setSelectedTripId] = useState(initialTrips[0]?.id ?? "");
  const selectedTrip = dashboardTrips.find((trip) => trip.id === selectedTripId);
  const hasTrips = dashboardTrips.length > 0;
  const readyTrips = dashboardTrips.filter((trip) => trip.status === "Ready").length;
  const planningTrips = dashboardTrips.filter((trip) => trip.status !== "Ready").length;

  function handleSelectTrip(id: string) {
    setSelectedTripId(id);
  }

  function handleCreateTrip(trip: Trip) {
    setDashboardTrips((currentTrips) => [trip, ...currentTrips]);
    setSelectedTripId(trip.id);
  }

  return (
    <div>
      <div className="mb-5 grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-3">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-3xl font-semibold">
            {dashboardTrips.length}
          </p>

          <p className="mt-1 text-xs font-medium uppercase text-slate-500">
            Saved
          </p>
        </div>

        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-3xl font-semibold">
            {readyTrips}
          </p>

          <p className="mt-1 text-xs font-medium uppercase text-slate-500">
            Ready
          </p>
        </div>

        <div className="p-4">
          <p className="text-3xl font-semibold">
            {planningTrips}
          </p>

          <p className="mt-1 text-xs font-medium uppercase text-slate-500">
            Active
          </p>
        </div>
      </div>

      <CreateTripForm onCreateTrip={handleCreateTrip} />

      {hasTrips ? (
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-start">
          <div className="grid gap-5 md:grid-cols-2">
            {dashboardTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                isSelected={trip.id === selectedTripId}
                onSelect={handleSelectTrip}
              />
            ))}
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-6">
            {selectedTrip ? (
              <div>
                <div className="mb-5 border-b border-slate-100 pb-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
                    Selected trip
                  </p>

                  <h3 className="text-2xl font-semibold leading-8 text-slate-950">
                    {selectedTrip.destination}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {selectedTrip.dateRange} · {selectedTrip.duration} · {selectedTrip.budget}
                  </p>
                </div>

                <div className="space-y-5">
                  <section>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Why this trip
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedTrip.summary}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Itinerary preview
                    </h4>

                    <div className="mt-3 space-y-3">
                      {selectedTrip.itinerary.slice(0, 3).map((day) => (
                        <div
                          key={day.day}
                          className="rounded-md border border-slate-100 bg-slate-50 p-3"
                        >
                          <p className="text-xs font-semibold uppercase text-slate-500">
                            Day {day.day}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-950">
                            {day.title}
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-600">
                            {day.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Top recommendation
                    </h4>

                    <div className="mt-3 rounded-md bg-teal-50 p-3 text-sm text-teal-950">
                      <p className="font-semibold">
                        {selectedTrip.recommendations[0]?.title}
                      </p>

                      <p className="mt-1 leading-5 text-teal-800">
                        {selectedTrip.recommendations[0]?.reason}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-600">
                Select a trip to see itinerary details.
              </p>
            )}
          </aside>
        </div>
      ) : (
        <EmptyTripsState />
      )}
    </div>
  );
}
