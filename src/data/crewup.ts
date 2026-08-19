/**
 * Mock data for the CrewUp UI.
 * In the real MERN app these shapes come from the Express/Mongo API,
 * so keeping them in one file makes the swap easy for beginners.
 */

export type EventCategory =
  | "Environment"
  | "Education"
  | "Health"
  | "Animals"
  | "Food Relief"
  | "Tech";

export interface VolunteerEvent {
  id: string;
  title: string;
  organization: string;
  verified: boolean;
  category: EventCategory;
  city: string;
  date: string;
  time: string;
  hours: number;
  spotsTotal: number;
  spotsFilled: number;
  description: string;
}

export const events: VolunteerEvent[] = [
  {
    id: "ev-1",
    title: "Riverbank Cleanup Drive",
    organization: "Green Dhaka Initiative",
    verified: true,
    category: "Environment",
    city: "Dhaka",
    date: "Sat, 12 Sep",
    time: "07:00 – 11:00",
    hours: 4,
    spotsTotal: 60,
    spotsFilled: 47,
    description:
      "Join 60 volunteers clearing plastic waste along the Buriganga riverbank. Gloves and bags provided.",
  },
  {
    id: "ev-2",
    title: "Weekend Coding Club for Kids",
    organization: "CodeForAll Students Club",
    verified: true,
    category: "Tech",
    city: "Chattogram",
    date: "Sun, 13 Sep",
    time: "10:00 – 13:00",
    hours: 3,
    spotsTotal: 20,
    spotsFilled: 12,
    description:
      "Mentor school students through their first Scratch and HTML projects. No teaching experience needed.",
  },
  {
    id: "ev-3",
    title: "Community Blood Donation Camp",
    organization: "LifeLine Foundation",
    verified: true,
    category: "Health",
    city: "Dhaka",
    date: "Wed, 16 Sep",
    time: "09:00 – 17:00",
    hours: 8,
    spotsTotal: 30,
    spotsFilled: 28,
    description:
      "Help with registration desks, donor guidance and refreshment distribution at the annual camp.",
  },
  {
    id: "ev-4",
    title: "Iftar Meal Packing Night",
    organization: "Shared Table Trust",
    verified: false,
    category: "Food Relief",
    city: "Sylhet",
    date: "Fri, 18 Sep",
    time: "16:00 – 19:00",
    hours: 3,
    spotsTotal: 45,
    spotsFilled: 9,
    description:
      "Assemble and label 1,200 meal boxes for distribution across four neighbourhood shelters.",
  },
  {
    id: "ev-5",
    title: "Street Animal Vaccination Support",
    organization: "Paws & Care Network",
    verified: true,
    category: "Animals",
    city: "Khulna",
    date: "Sat, 19 Sep",
    time: "08:00 – 12:00",
    hours: 4,
    spotsTotal: 25,
    spotsFilled: 25,
    description:
      "Assist veterinarians with handling, record keeping and post-vaccination monitoring.",
  },
  {
    id: "ev-6",
    title: "Library Reading Buddies",
    organization: "Open Pages Society",
    verified: true,
    category: "Education",
    city: "Rajshahi",
    date: "Sun, 20 Sep",
    time: "15:00 – 17:00",
    hours: 2,
    spotsTotal: 18,
    spotsFilled: 6,
    description:
      "Read aloud with primary students and log their weekly reading progress in the club journal.",
  },
];

export const categories: EventCategory[] = [
  "Environment",
  "Education",
  "Health",
  "Animals",
  "Food Relief",
  "Tech",
];

export const cities = ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi"];

export interface Registration {
  id: string;
  volunteer: string;
  event: string;
  hours: number;
  status: "Pending" | "Approved" | "Attended";
}

export const registrations: Registration[] = [
  { id: "r-1", volunteer: "Tawhid Islam", event: "Riverbank Cleanup Drive", hours: 4, status: "Approved" },
  { id: "r-2", volunteer: "Nusrat Jahan", event: "Riverbank Cleanup Drive", hours: 4, status: "Pending" },
  { id: "r-3", volunteer: "Rafiul Haque", event: "Weekend Coding Club for Kids", hours: 3, status: "Attended" },
  { id: "r-4", volunteer: "Mim Chowdhury", event: "Community Blood Donation Camp", hours: 8, status: "Pending" },
  { id: "r-5", volunteer: "Sabbir Ahmed", event: "Library Reading Buddies", hours: 2, status: "Approved" },
];

export interface OrgRequest {
  id: string;
  name: string;
  type: "NGO" | "Student Club" | "Community Group";
  submitted: string;
  status: "Awaiting review" | "Verified" | "Rejected";
}

export const orgRequests: OrgRequest[] = [
  { id: "o-1", name: "Shared Table Trust", type: "NGO", submitted: "2 days ago", status: "Awaiting review" },
  { id: "o-2", name: "Green Dhaka Initiative", type: "NGO", submitted: "1 week ago", status: "Verified" },
  { id: "o-3", name: "CodeForAll Students Club", type: "Student Club", submitted: "1 week ago", status: "Verified" },
  { id: "o-4", name: "Helping Hands BD", type: "Community Group", submitted: "5 hours ago", status: "Awaiting review" },
];

export const certificates = [
  { id: "c-1", title: "Riverbank Cleanup Drive", issuer: "Green Dhaka Initiative", hours: 4, issued: "Aug 2026" },
  { id: "c-2", title: "Winter Blanket Distribution", issuer: "Shared Table Trust", hours: 6, issued: "Jan 2026" },
  { id: "c-3", title: "School Science Fair Support", issuer: "Open Pages Society", hours: 5, issued: "Nov 2025" },
];