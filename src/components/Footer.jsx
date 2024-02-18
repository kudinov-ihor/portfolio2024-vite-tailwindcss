import React from 'react';
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className='py-[30px] border-t-black border '>
      <div className='flex  gap-10 justify-center items-center container m-auto max-md:flex-col'>
        <div className='flex flex-col'>
            <h4>Phone</h4>
            <span>+380982327807</span>
        </div>
        <div className='flex flex-col'>
            <h4>E-mail</h4>
            <span>kudinov.igor98@gmail.com</span>
        </div>
        <div className='flex flex-row gap-5'>
            <PiLinkedinLogoFill style={{width: 45, height: 45}}  />
            <FaGithub style={{width: 45, height: 45}}  />
            <SiGmail style={{width: 45, height: 45}}  />
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <p>© {currentYear} By Ihor Kudinov. Copyright all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
