import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HambergerMenu } from "iconsax-react";

const Navbar = ({handleClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navList = [
    { name: "Home", link: "#cek-premi", id: 'cek-premi' },
    // { name: "Cek Premi", link: "#cek-premi", id: 'cek-premi' },
    { name: "About Us", link: "#about-us", id: 'about-us' },
    { name: "Contact Us", link: "#contact-us", id: 'contact-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const offset = section.id == 'contact-us' ? 450 : 150;
        if (window.scrollY >= sectionTop - offset) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 bg-white z-[9999]">
      <nav className="border-b-2">
        <div className="container mx-auto px-5 xl:px-32">
          <div className="flex items-center justify-between py-5">
            <div>
              <img src="/images/logo-sm.png" width={32} height={32} alt="logo" />
            </div>
            <div
              className="block md:hidden cursor-pointer select-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HambergerMenu size="24" color="#555555"/>
            </div>
            <div className="hidden md:flex gap-10 justify-center">
              {navList.map((item, index) => (
                <div key={index} onClick={(e) => handleClick(e, item.id)}>
                  <div className={`cursor-pointer select-none ${activeSection === item.id ? 'text-blue-500' : ''}`}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
            <button className="hidden md:flex px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 capitalize text-white font-semibold" onClick={(e) => window.open("https://wa.me/6281918880181")}>
              Chat with us
            </button>
          </div>
          <ul
            className={`${
              isOpen
                ? "max-h-32 opacity-100 pb-5 pointer-events-auto"
                : "max-h-0 opacity-0 pb-0 pointer-events-none"
            } transition-all flex flex-col gap-2 md:hidden`}
          >
            {navList.map((item, index) => (
              <div key={index} onClick={(e) => handleClick(e, item.id)}>
                <div className={`cursor-pointer select-none ${activeSection === item.id ? 'text-blue-500' : ''}`}>
                  {item.name}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
