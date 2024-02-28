// import { Home, Resume, Projects, Contacts } from "../pages"
import React from 'react';


import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";




// HEADER І ССИЛКИ ДЛЯ REACT-DOUTER-DOM
const Home = React.lazy(() => import('../pages/Home'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
const About = React.lazy(() => import('../pages/About'));
export const navLinks = [
    { href: '/', label: 'Home', component: Home, id: 1 },
    {href: '/about', label: 'About', component: About, id: 2},
    { href: '/contacts', label: 'Contacts', component: Contacts, id: 3 },
    
];


export const sliderHome = [
    {
        id: 1,
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },    {
        id: 5,
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },    {
        id: 6,
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        id: 8,
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        id: 9,
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        id: 12,
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },    {
        id: 14,
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        id: 15,
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
]



export const skills = [
    {
        id: 1,
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        id: 2,
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        id: 3,
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        id: 4,
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        id: 5,
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        id: 6,
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        id: 7,
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        id: 8,
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        id: 9,
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        id: 10,
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        id: 11,
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        id: 12,
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        id: 13,
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        id: 14,
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        id: 15,
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        id: 16,
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];


