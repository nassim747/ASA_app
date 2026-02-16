export interface UpcomingEvent {
  date: { day: string; month: string }
  title: string
  subtitle: string
  description: string
  location: string
  time: string
  featured: boolean
  ticketUrl?: string
}

export interface PastEvent {
  title: string
  date: string
  image: string
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: { day: "23", month: "Feb" },
    title: "ASA Iftar",
    subtitle: "Breaking Fast Together",
    description:
      "Join us to break fast together during the blessed month of Ramadan. A warm evening of food, community, and connection.",
    location: "SSMU Cafeteria",
    time: "6:30 PM",
    featured: true,
    ticketUrl: "https://www.zeffy.com/en-CA/ticketing/fundraiser-iftar-2",
  },
]

export const pastEvents: PastEvent[] = [
  {
    title: "Amazigh Night 2026",
    date: "January 2026",
    image: "/events/Amazigh_Night2026.JPG",
  },
  {
    title: "2025 General Assembly",
    date: "September 2025",
    image: "/events/GeneralAssembly2025.JPG",
  },
  {
    title: "2025 Conference",
    date: "May 2025",
    image: "/events/conference2025.jpg",
  },
]
