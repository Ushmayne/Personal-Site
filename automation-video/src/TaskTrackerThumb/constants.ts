export const WIDTH = 1600;
export const HEIGHT = 640;

export const SIDEBAR_WIDTH = 280;

export const TEAMS = [
  { name: "Engineering", members: 6, active: true },
  { name: "Design", members: 4, active: false },
  { name: "Marketing", members: 3, active: false },
] as const;

export const ROSTER = [
  { initials: "UN", role: "owner" as const },
  { initials: "AK", role: "member" as const },
  { initials: "JL", role: "member" as const },
  { initials: "MP", role: "member" as const },
  { initials: "RS", role: "member" as const },
  { initials: "TC", role: "member" as const },
] as const;

export const COLUMNS = [
  {
    label: "To do",
    cards: [
      { title: "Design onboarding flow", initials: "AK", role: "owner" as const, tag: "High" },
      { title: "Set up Supabase RLS policies", initials: "UN", role: "member" as const, tag: "Med" },
    ],
  },
  {
    label: "In progress",
    cards: [
      { title: "Build task board drag-and-drop", initials: "UN", role: "owner" as const, tag: "High" },
      { title: "Write API integration tests", initials: "JL", role: "member" as const, tag: "Med" },
    ],
  },
  {
    label: "Done",
    cards: [
      { title: "Auth + role-based permissions", initials: "UN", role: "owner" as const, tag: "Done" },
      { title: "Team invite flow", initials: "AK", role: "member" as const, tag: "Done" },
    ],
  },
] as const;
