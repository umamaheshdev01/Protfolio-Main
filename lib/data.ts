import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name : "Blogs",
    hash : "#blogs"
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Class 12",
    location: "Hyderabad",
    description:
      "Completed my 12th at my home state Telanagna at Narayana group of schools.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "B-Tech",
    location: "Kurukshetra",
    description:
      "Currently pursuing my B-Tech 2nd year at NIT Kurukshetra.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
 
] as const;

export const projectsData = [
  {
    title: "Movie Ticket Website",
    description:
      "My First Project , Pure HTML CSS - Movie Tickect Booking website",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: corpcommentImg,
    link : "google.com"
  }
] as const;



export const blogsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
 
  
] as const;




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Django"
] as const;
