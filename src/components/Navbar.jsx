import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { michigan } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={michigan} alt='michigan' className='w-9 h-9 object-contain'/>
          <p className="text-white text-[14px] font-bold cursor-pointer flex"> 
            Ryan&nbsp; <span className="sm:block hidden"> | Baxter</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title 
                  ? "text-white" 
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu when the screen size is smaller */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Hamburger
            toggled={toggle}
            toggle={setToggle}
            size={28}
            distance="sm"
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justofy-end items-start flex-col gap-4'>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title 
                    ? "text-white" 
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title);
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
