import React from "react";
import { navLinks, sliderHome } from "../constants";
import Slider from "react-infinite-logo-slider";
const Home = () => {
  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const filteredLinks = navLinks.filter((item) => item.id !== 1);
  

  return (
    <section className="max-container max-sm:px-[10px] m-auto py-[100px] flex justify-center items-start">
      <div>
        <h3 className="text-8xl ">Hello</h3>
        <h4 className="mt-5 text-2xl">A Bit About Me</h4>
        <h1 className="max-w-[500px] max-sm:max-w-[100%] mt-5 dark:text-white">
          I'm an enthusiastic and detail-oriented Front-End developer seeking an
          entry-level position with company to use my skills in coding. Ready to
          join a new team of professionals, always ready to learn something new
          and share my experience.
        </h1>
        <div className="flex gap-10 flex-wrap justify-center max-xs:flex-col mt-10">
          {filteredLinks.map((link) => (
            <div
              key={link.id}
              className="random-color w-[150px] h-[150px] flex justify-center items-center rounded-full border border-black "
              style={{ background: getRandomColor() }}
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className="max-w-[400px] max-sm:max-w-[300px] m-auto mt-[50px]">
          <Slider width="100px" height="100px" pauseOnHover={true} duration={10} >
            {sliderHome.map((slide) => (
              <Slider.Slide className="hover:scale-125 h-[150px]">
                <img
                  src={slide.imageUrl}
                  alt={slide.name}
                  className="cursor-pointer"
                  width={50}
                  height={50}
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Home;
