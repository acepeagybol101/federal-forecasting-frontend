export type Category = {
  icon: string;
  title: string;
};

export const categories: Category[] = [
  { icon: "/images/rocket.png", title: "Get Started" },
  { icon: "/images/building.png", title: "Learn about the Federal Government" },
  { icon: "/images/people.png", title: "Build Community" },
  { icon: "/images/chart-bar.png", title: "Grow Your Business" },
  { icon: "/images/protactor.png", title: "Score New Prospects" },
  { icon: "/images/users.png", title: "Connect with Members" },
];

export type Step = {
  key: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    key: "01",
    title: "Register In App",
    description: "Get Yourself Registered And Choose Business Interest",
  },
  {
    key: "02",
    title: "Discover And Access To Articles",
    description:
      "Easily Access To Government Scheme’s Articles And Subscription Based Attachments",
  },
  {
    key: "03",
    title: "Connecting And Communicating",
    description:
      "Make Connections And Start Conversations With Individuals And Groups Who Have Same Business Interest",
  },
  {
    key: "04",
    title: "Stay Engaged With Post Sharing",
    description:
      "Share Your Thoughts Via Any Media Type And Stay Engaged On The App",
  },
];

export type Navbar = {
  name: string;
  link: string;
};

export const navbars: Navbar[] = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Learn",
    link: "/learn",
  },
  {
    name: "Build",
    link: "/build",
  },
  {
    name: "Grow",
    link: "/grow",
  },
  {
    name: "Find",
    link: "/find",
  },
  {
    name: "Connect",
    link: "/connect",
  },
];
