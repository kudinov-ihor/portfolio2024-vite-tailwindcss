import{n as r,j as e}from"./index-vX_AvDS6.js";const i=()=>{function n(){const t=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256);return`rgb(${t}, ${s}, ${o})`}const a=r.filter(t=>t.id!==1);return e.jsx("section",{className:"container m-auto py-[100px] flex justify-center items-start",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-8xl ",children:"Hello"}),e.jsx("h4",{className:"mt-5 text-2xl",children:"A Bit About Me"}),e.jsx("h1",{className:"max-w-[500px] mt-5",children:"I'm an enthusiastic and detail-oriented Front-End developer seeking an entry-level position with company to use my skills in coding. Ready to join a new team of professionals, always ready to learn something new and share my experience."}),e.jsx("div",{className:"flex gap-10 mt-10",children:a.map(t=>e.jsx("div",{className:"random-color w-[150px] h-[150px] flex justify-center items-center rounded-full border border-black ",style:{background:n()},children:t.label},t.id))})]})})};export{i as default};
