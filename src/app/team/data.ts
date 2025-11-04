// app/team/data.ts
export type BlogLink = { title: string; href: string };
export type Member = {
  slug: string;
  name: string;
  role: string;
  email?: string;
  avatar?: string;
  bio: string;
  blogs: BlogLink[];
};

export const teamMembers: Member[] = [
  {
    slug: "koji-miura",
    name: "Koji Miura",
    role: "Team Lead",
    email: "kmiura@sfsu.edu",
    avatar: "/team/koji.jpg",
    bio: "Coordinates research, synthesizes insights, and manages milestones across prototype phases.",
    blogs: [
      { title: "Blog 1 – Project Pivot & Motivation", href: "#" },
      { title: "Blog 2 – User Research Plan", href: "#" },
    ],
  },
  {
    slug: "rustam-mukhtarov",
    name: "Rustam Mukhtarov",
    role: "Front‑End Developer",
    email: "rmukhtarov@sfsu.edu",
    avatar: "/team/rustam.png",
    bio: "Builds the website and interactive artifacts; designs driver/host flows and HCI documentation.",
    blogs: [
      { title: "Blog 1 – A Beginning", href: "https://russmukhtar751.blogspot.com/2025/09/a-beginning.html" },
      { title: "Blog 2 – Understanding People", href: "https://russmukhtar751.blogspot.com/2025/09/understanding-people.html" },
      { title: "Blog 3 – Bringing Ideas to Life", href: "https://russmukhtar751.blogspot.com/2025/10/bringing-ideas-to-life.html" },
      { title: "Blog 4 – From Sketch to Screen", href: "https://russmukhtar751.blogspot.com/2025/10/from-sketch-to-screen.html" },
      { title: "Blog 5 – Medium‑Fi & Testing", href: "#" },
      { title: "Blog 6 – Final Reflection", href: "#" },
    ],
  },
  {
    slug: "bart-beltran",
    name: "Bart Beltran",
    role: "Back‑End Developer",
    email: "bbeltran4@sfsu.edu",
    avatar: "/team/bart.jpg",
    bio: "Explores data model, payments, and availability scheduling; supports research evidence collection.",
    blogs: [
      { title: "Blog – Technical Feasibility", href: "#" },
    ],
  },
  {
    slug: "sparsh-nayak",
    name: "Sparsh Nayak",
    role: "Full‑Stack Developer",
    email: "snayak2@sfsu.edu",
    avatar: "/team/sparsh.jpg",
    bio: "Prototyping contributor; bridges front‑end and back‑end concerns; ensures research artifacts are linked.",
    blogs: [
      { title: "Blog – Interaction Design", href: "#" },
    ],
  },
];