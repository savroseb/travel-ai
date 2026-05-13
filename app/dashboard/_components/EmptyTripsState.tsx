export function EmptyTripsState() {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center shadow-sm">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-xl font-semibold text-teal-700">
        +
      </div>

      <h3 className="text-xl font-semibold text-slate-950">
        No saved trips yet
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
        Use the form above to generate your first trip. Once it is created, it will appear here and open in the detail panel.
      </p>
    </div>
  );
}
