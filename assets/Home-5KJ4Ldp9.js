import{n as l,j as e,S as s,s as i}from"./index-pcKT1uIS.js";const x=()=>{function t(){const a=Math.floor(Math.random()*256),n=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256);return`rgb(${a}, ${n}, ${o})`}const r=l.filter(a=>a.id!==1);return e.jsx("section",{className:"container max-sm:px-[10px] m-auto py-[100px] flex justify-center items-start",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-8xl ",children:"Hello"}),e.jsx("h4",{className:"mt-5 text-2xl",children:"A Bit About Me"}),e.jsx("h1",{className:"max-w-[500px] max-sm:max-w-[100%] mt-5 dark:text-white",children:"I'm an enthusiastic and detail-oriented Front-End developer seeking an entry-level position with company to use my skills in coding. Ready to join a new team of professionals, always ready to learn something new and share my experience."}),e.jsx("div",{className:"flex gap-10 flex-wrap justify-center max-xs:flex-col mt-10",children:r.map(a=>e.jsx("div",{className:"random-color w-[150px] h-[150px] flex justify-center items-center rounded-full border border-black ",style:{background:t()},children:a.label},a.id))}),e.jsx("div",{className:"max-w-[400px] max-sm:max-w-[300px] m-auto mt-[50px]",children:e.jsx(s,{width:"100px",height:"100px",pauseOnHover:!0,duration:10,children:i.map(a=>e.jsx(s.Slide,{className:"hover:scale-125 h-[150px]",children:e.jsx("img",{src:a.imageUrl,alt:a.name,className:"cursor-pointer",width:50,height:50})}))})})]})})};export{x as default};