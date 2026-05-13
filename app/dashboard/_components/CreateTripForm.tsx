"use client";

import { useState } from "react";
import type { Trip } from "../../lib/trips";

type CreateTripFormProps = {
  onCreateTrip: (trip: Trip) => void;
};

type Budget = Trip["budget"];

type FormErrors = {
  destination?: string;
  travelStyle?: string;
};

const initialForm = {
  destination: "",
  duration: "5 days",
  budget: "Moderate" as Budget,
  travelStyle: "",
};

function createTripId(destination: string) {
  return `${destination.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;
}

export function CreateTripForm({ onCreateTrip }: CreateTripFormProps) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm() {
    const nextErrors: FormErrors = {};
    const destination = formData.destination.trim();
    const travelStyle = formData.travelStyle.trim();

    if (!destination) {
      nextErrors.destination = "Tell us where you want to go. Example: Lisbon, Portugal.";
    } else if (destination.length < 3) {
      nextErrors.destination = "Use a full place name so the trip plan is useful. Example: Rome instead of Ro.";
    }

    if (!travelStyle) {
      nextErrors.travelStyle = "Add what you want the trip to feel like. Example: food, beaches, museums.";
    } else if (travelStyle.length < 4) {
      nextErrors.travelStyle = "Give the AI a little more direction. Example: hiking or relaxing.";
    }

    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const destination = formData.destination.trim();
    const travelStyle = formData.travelStyle.trim();

    const newTrip: Trip = {
      id: createTripId(destination),
      destination,
      dateRange: "Dates flexible",
      duration: formData.duration,
      status: "Planning",
      budget: formData.budget,
      travelStyle,
      summary: `A fresh AI-generated draft for ${destination}, shaped around ${travelStyle.toLowerCase()} with flexible dates and room to refine.`,
      tags: travelStyle
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .slice(0, 4),
      itinerary: [
        {
          day: 1,
          title: "Arrival and orientation",
          summary: "Settle in, explore the nearest neighborhood, and save energy for the rest of the trip.",
          activities: ["Check in", "Neighborhood walk", "Easy dinner"],
        },
        {
          day: 2,
          title: "Signature experience",
          summary: "Anchor the trip with one memorable activity based on the selected travel style.",
          activities: ["Local highlight", "Lunch stop", "Evening recommendation"],
        },
      ],
      recommendations: [
        {
          category: "Tip",
          title: "Refine this draft next",
          reason: "Add dates, preferred pace, and must-see interests to make the itinerary feel more personal.",
        },
      ],
    };

    onCreateTrip(newTrip);
    setFormData(initialForm);
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mb-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Create
        </p>

        <h3 className="mt-1 text-xl font-semibold text-slate-950">
          Generate a new trip
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Destination
          </span>

          <input
            id="destination"
            type="text"
            value={formData.destination}
            onChange={(event) => {
              if (errors.destination) {
                setErrors((current) => ({
                  ...current,
                  destination: undefined,
                }));
              }

              setFormData((current) => ({
                ...current,
                destination: event.target.value,
              }));
            }}
            placeholder="Lisbon, Portugal"
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={errors.destination ? "destination-error" : undefined}
            className={`mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
              errors.destination
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-teal-600 focus:ring-teal-100"
            }`}
            required
          />

          {errors.destination ? (
            <p
              id="destination-error"
              className="mt-2 text-sm text-red-600"
            >
              {errors.destination}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Duration
          </span>

          <select
            value={formData.duration}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                duration: event.target.value,
              }))
            }
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          >
            <option>3 days</option>
            <option>5 days</option>
            <option>7 days</option>
            <option>10 days</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Budget
          </span>

          <select
            value={formData.budget}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                budget: event.target.value as Budget,
              }))
            }
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          >
            <option>Budget</option>
            <option>Moderate</option>
            <option>Premium</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Travel style
          </span>

          <input
            id="travelStyle"
            type="text"
            value={formData.travelStyle}
            onChange={(event) => {
              if (errors.travelStyle) {
                setErrors((current) => ({
                  ...current,
                  travelStyle: undefined,
                }));
              }

              setFormData((current) => ({
                ...current,
                travelStyle: event.target.value,
              }));
            }}
            placeholder="Food, beaches, museums"
            aria-invalid={Boolean(errors.travelStyle)}
            aria-describedby={errors.travelStyle ? "travel-style-error" : undefined}
            className={`mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
              errors.travelStyle
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-teal-600 focus:ring-teal-100"
            }`}
            required
          />

          {errors.travelStyle ? (
            <p
              id="travel-style-error"
              className="mt-2 text-sm text-red-600"
            >
              {errors.travelStyle}
            </p>
          ) : null}
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
      >
        Generate trip
      </button>
    </form>
  );
}
