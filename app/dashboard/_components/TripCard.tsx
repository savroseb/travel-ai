import type { Trip } from "../../lib/trips";

type TripCardProps = {
  trip: Trip;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const statusStyles = {
  Planning: "bg-amber-50 text-amber-800 ring-amber-200",
  Ready: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Needs choices": "bg-sky-50 text-sky-700 ring-sky-200",
};

export function TripCard({ trip, isSelected, onSelect }: TripCardProps) {
  return (
    <article
      className={`group relative flex min-h-80 flex-col overflow-hidden rounded-lg border p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md ${
        isSelected
          ? "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-200"
          : "border-slate-200 bg-white"
      }`}
    >
      {isSelected ? (
        <div className="absolute inset-y-0 left-0 w-1.5 bg-emerald-600" />
      ) : null}

      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          {isSelected ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Currently selected
            </p>
          ) : null}

          <h3 className="text-xl font-semibold leading-7 text-slate-950">
            {trip.destination}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {trip.dateRange} · {trip.duration}
          </p>
        </div>

        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[trip.status]}`}>
          {trip.status}
        </span>
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-600">
        {trip.summary}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {trip.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase text-slate-400">
            Style
          </p>

          <p className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-slate-700">
            {trip.travelStyle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSelect(trip.id)}
          aria-pressed={isSelected}
          className={`shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 ${
            isSelected
              ? "bg-emerald-800 text-white hover:bg-emerald-900"
              : "bg-slate-950 text-white hover:bg-emerald-800"
          }`}
        >
          {isSelected ? "Selected" : "View"}
        </button>
      </div>
    </article>
  );
}
