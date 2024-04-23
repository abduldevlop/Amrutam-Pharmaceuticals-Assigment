import { Group, Hair, Immunity, Skincare, doctor_profile } from "../assets";
import { Doctor } from "../types";

export const specializes = [
  { id: 1, title: "Women’s Health", img: Group },
  { id: 2, title: "Skin Care", img: Skincare },
  { id: 3, title: "Immunity", img: Immunity },
  { id: 4, title: "Hair care", img: Hair },
];

export const modes = [
  { id: 1, mode: "In-Clinic", time: "45 Mins" },
  { id: 2, mode: "Video", time: "45 Mins" },
  { id: 3, mode: "Chat", time: "45 Mins" },
];

export const slotes = [
  { id: 1, time: "Mon, 10 Oct", slote: 10 },
  { id: 2, time: "Tue, 11 Oct", slote: 2 },
  { id: 3, time: "Wed, 12 Oct", slote: 5 },
];

export const times = [
  {
    id: 1,
    title: "Morning",
    all_times: [
      { id: 1, time: "09:00 AM" },
      { id: 2, time: "09:30 AM" },
      { id: 3, time: "10:00 AM" },
      { id: 4, time: "10:15 AM" },
      { id: 5, time: "10:45 AM" },
      { id: 6, time: "09:00 AM" },
    ],
  },
  {
    id: 2,
    title: "Evening",
    all_times: [
      { id: 7, time: "04:00 PM" },
      { id: 8, time: "04:15 PM" },
      { id: 9, time: "04:30 PM" },
      { id: 10, time: "04:45 PM" },
      { id: 11, time: "05:15 PM" },
    ],
  },
];

// doctors sample data

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Prerna Narang",
    specializes: "Male-Female Infertility",
    exp: "7 years of Experience",
    languages: "English, Hindi, Marathi",
    video_consultation: "800",
    chat_consultation: "Free",
    profile: doctor_profile, // Add the path or URL to the profile image
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specializes: "Pediatrics",
    exp: "10 years of Experience",
    languages: "English, Spanish",
    video_consultation: "1000",
    chat_consultation: "Free",
    profile: doctor_profile, // Add the path or URL to the profile image
  },
  {
    id: 3,
    name: "Dr. Jane Smith",
    specializes: "Cardiology",
    exp: "15 years of Experience",
    languages: "English, French",
    video_consultation: "1200",
    chat_consultation: "Free",
    profile: doctor_profile,
  },
  // Add more doctor objects with their profile images if needed
];
