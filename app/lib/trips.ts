export type TripStatus = "Planning" | "Ready" | "Needs choices";

export type TripDay = {
  day: number;
  title: string;
  summary: string;
  activities: string[];
};

export type TripRecommendation = {
  category: "Stay" | "Food" | "Activity" | "Tip";
  title: string;
  reason: string;
};

export type Trip = {
  id: string;
  destination: string;
  dateRange: string;
  duration: string;
  status: TripStatus;
  budget: "Budget" | "Moderate" | "Premium";
  travelStyle: string;
  summary: string;
  tags: string[];
  itinerary: TripDay[];
  recommendations: TripRecommendation[];
};

export const trips: Trip[] = [
  {
    id: "paris-spring",
    destination: "Paris, France",
    dateRange: "Apr 12-18, 2026",
    duration: "7 days",
    status: "Ready",
    budget: "Moderate",
    travelStyle: "Culture, food, and slow mornings",
    summary:
      "A relaxed Paris itinerary with neighborhood walks, classic museums, bakeries, and one flexible day for wandering.",
    tags: ["Museums", "Food", "Walkable", "Romantic"],
    itinerary: [
      {
        day: 1,
        title: "Arrive and settle into Le Marais",
        summary: "Keep the first day gentle with a cafe stop, a neighborhood walk, and an early dinner.",
        activities: ["Check in near Le Marais", "Coffee at a corner cafe", "Dinner in the 3rd arrondissement"],
      },
      {
        day: 2,
        title: "Louvre, gardens, and the Seine",
        summary: "Balance one major museum visit with outdoor time through central Paris.",
        activities: ["Morning Louvre visit", "Tuileries Garden", "Sunset walk along the Seine"],
      },
      {
        day: 3,
        title: "Montmartre and pastry crawl",
        summary: "Explore hilly streets, small shops, and a few standout bakeries.",
        activities: ["Sacré-Coeur viewpoint", "Rue des Abbesses", "Pastry tasting route"],
      },
    ],
    recommendations: [
      {
        category: "Food",
        title: "Book one classic bistro dinner",
        reason: "It gives the trip one anchor meal without over-scheduling every night.",
      },
      {
        category: "Activity",
        title: "Reserve major museum tickets ahead",
        reason: "Timed entry keeps the itinerary smooth and protects your mornings.",
      },
      {
        category: "Tip",
        title: "Stay near Metro lines 1 or 8",
        reason: "Those lines make the planned neighborhoods easier to connect.",
      },
    ],
  },
  {
    id: "kyoto-autumn",
    destination: "Kyoto, Japan",
    dateRange: "Nov 3-9, 2026",
    duration: "7 days",
    status: "Needs choices",
    budget: "Premium",
    travelStyle: "Temples, design hotels, and seasonal food",
    summary:
      "A scenic Kyoto plan built around autumn color, temple mornings, calm dinners, and optional day trips.",
    tags: ["Temples", "Seasonal", "Design", "Day trips"],
    itinerary: [
      {
        day: 1,
        title: "Gion arrival evening",
        summary: "Ease in with a quiet first night near the historic district.",
        activities: ["Check in near Gion", "Walk Hanamikoji Street", "Simple kaiseki-style dinner"],
      },
      {
        day: 2,
        title: "Eastern Kyoto temples",
        summary: "Start early for the most photogenic temple route before the crowds peak.",
        activities: ["Kiyomizu-dera", "Sannenzaka and Ninenzaka", "Philosopher's Path"],
      },
      {
        day: 3,
        title: "Arashiyama or Nara decision day",
        summary: "Choose between bamboo groves and river views, or a full day with Nara's temples.",
        activities: ["Arashiyama bamboo grove", "Tenryu-ji", "Optional Nara swap"],
      },
    ],
    recommendations: [
      {
        category: "Stay",
        title: "Pick Gion or Higashiyama as a base",
        reason: "Both reduce transit friction for early temple visits.",
      },
      {
        category: "Activity",
        title: "Choose one day trip, not two",
        reason: "Kyoto rewards slower pacing, especially in peak autumn season.",
      },
      {
        category: "Food",
        title: "Reserve a special dinner early",
        reason: "Smaller seasonal restaurants can book up well ahead of November.",
      },
    ],
  },
  {
    id: "costa-rica-reset",
    destination: "Costa Rica",
    dateRange: "Jul 7-13, 2026",
    duration: "7 days",
    status: "Planning",
    budget: "Moderate",
    travelStyle: "Nature, beaches, and light adventure",
    summary:
      "A warm-weather reset with rainforest hikes, wildlife watching, beach downtime, and a little adventure.",
    tags: ["Beach", "Wildlife", "Adventure", "Relaxing"],
    itinerary: [
      {
        day: 1,
        title: "Arrive near La Fortuna",
        summary: "Start inland with volcano views and a low-effort arrival day.",
        activities: ["Transfer to La Fortuna", "Hot springs", "Casual local dinner"],
      },
      {
        day: 2,
        title: "Rainforest and hanging bridges",
        summary: "Use the first full day for wildlife, canopy views, and an easy hike.",
        activities: ["Mistico Hanging Bridges", "Sloth watching stop", "Arenal viewpoint"],
      },
      {
        day: 3,
        title: "Beach transfer",
        summary: "Move toward the coast and keep the afternoon open for rest.",
        activities: ["Transfer to Manuel Antonio", "Sunset beach walk", "Seafood dinner"],
      },
    ],
    recommendations: [
      {
        category: "Activity",
        title: "Split time between rainforest and coast",
        reason: "It keeps the trip varied without adding too many hotel changes.",
      },
      {
        category: "Tip",
        title: "Use private transfer for one long travel day",
        reason: "It costs more than a bus but saves energy on a short trip.",
      },
      {
        category: "Food",
        title: "Leave lunches flexible",
        reason: "Activity timing and weather can shift quickly in July.",
      },
    ],
  },
];

export function getTripById(id: string) {
  return trips.find((trip) => trip.id === id);
}
