// import { Home, Resume, Projects, Contacts } from "../pages"
import React from 'react';
import { meta, shopify, starbucks, tesla, portfolio_sud } from "../assets/img";

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
        id: 8,
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
         {
    
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        id: 4,
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];


export const experiences = [
    {
        title: "React.js Developer",
        company_name: "LEGAL LEAGUE «Legal Association»",
        icon: portfolio_sud,
        iconBg: "#accbe1",
        date: "September 2019 -  March 2024",
        points: [
            "Developed the client-side of a web application using React.js, employing modern programming practices and interface development approaches.",
            "Implemented a component-based approach to creating interactive and dynamic web interfaces, ensuring scalability and support for easy extensibility.",
            "Optimized performance and compliance with web development principles, including the use of various tools and techniques to reduce page load times and enhance user experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];
