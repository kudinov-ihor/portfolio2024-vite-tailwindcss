// import { Home, Resume, Projects, Contacts } from "../pages"
import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Resume = React.lazy(() => import('../pages/Resume'));
const Projects = React.lazy(() => import('../pages/Projects'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
export const navLinks = [
    { href: '/', label: 'Home', component: Home, id: 1 },
    { href: '/resume', label: 'Resume', component: Resume, id: 2},
    { href: '/projects', label: 'Projects', component: Projects, id: 3 },
    { href: '/contacts', label: 'Contacts', component: Contacts, id: 4 }
];