import React, { useState, useEffect } from 'react';
import { SiLinktree } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
import './styles.css';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,pl,nl',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const text = {
    Home: { English: 'Home', Polish: 'Strona Główna', Dutch: 'Thuis' },
    Pricelist: { English: 'Pricelist', Polish: 'Cennik', Dutch: 'Prijslijst' },
    Portfolio: { English: 'Portfolio', Polish: 'Portfolio', Dutch: 'Portefeuille' },
    About: { English: 'About', Polish: 'O nas', Dutch: 'Over' },
    Social: { English: 'Social Media', Polish: 'Media Społecznościowe', Dutch: 'Sociale Media' },
    Contact: { English: 'Contact Us', Polish: 'Kontakt', Dutch: 'Contact' },
  };

  return (
    <nav className="navbar-transparent flex pt-12 items-center justify-between sm:h-10 md:justify-center py-6 px-4">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" aria-label="Home" className="bg-transparent pt-8 mb-2 ms-4">
            <img src="logo.png" className="bg-transparent" alt="logo" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className={`-mr-2 flex items-center md:hidden text-gray-400 hover:text-gray-500 ${isMobileMenuOpen ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            {isMobileMenuOpen ? (
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="hidden md:flex md:space-x-10">
        <Link 
          to="/" 
          className={`font-medium text-yellow-400 pb-1 ${location.pathname === '/' ? 'border-b-2 border-yellow-400' : 'hover:border-b-2 hover:border-yellow-400'}`}
        >
          {text.Home[language]}
        </Link>
        <Link 
          to="/price" 
          className={`font-medium text-yellow-400 pb-1 ${location.pathname === '/price' ? 'border-b-2 border-yellow-400' : 'hover:border-b-2 hover:border-yellow-400'}`}
        >
          {text.Pricelist[language]}
        </Link>
        <Link 
          to="/portfolio" 
          className={`font-medium text-yellow-400 pb-1 ${location.pathname === '/portfolio' ? 'border-b-2 border-yellow-400' : 'hover:border-b-2 hover:border-yellow-400'}`}
        >
          {text.Portfolio[language]}
        </Link>
        <Link 
          to="/section" 
          className={`font-medium text-yellow-400 pb-1 ${location.pathname === '/section' ? 'border-b-2 border-yellow-400' : 'hover:border-b-2 hover:border-yellow-400'}`}
        >
          {text.About[language]}
        </Link>
        <Link 
  to="https://linktr.ee/medilaserbylucy" 
  target="_blank" 
  rel="noopener noreferrer"
  className={`flex items-center font-medium text-yellow-400 pb-1 ${location.pathname === '/section' ? 'border-b-2 border-yellow-400' : 'hover:border-b-2 hover:border-yellow-400'}`}
>
<SiLinktree /> {/* Linktree icon */}
  {text.Social[language]}
</Link>

      </div>

      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex">
          <Link to="/appoinment">
            <button className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black font-semibold py-2 px-4 rounded-md w-full md:w-auto animate-button">
              {text.Contact[language]}
            </button>
          </Link>
        </span>
        <span className="inline-flex ml-2">
          <img src="globe.png" alt="Globe Icon" className="h-5 w-5 mr-2" />
          <div className='text-yellow-300' id="google_translate_element"></div>
        </span>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-black text-yellow-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 text-lg font-medium text-yellow-300">
              {text.Home[language]}
            </Link>
            <Link to="/price" onClick={closeMobileMenu} className="block px-3 py-2 text-lg font-medium text-yellow-300">
              {text.Pricelist[language]}
            </Link>
            <Link to="/portfolio" onClick={closeMobileMenu} className="block px-3 py-2 text-lg font-medium text-yellow-300">
              {text.Portfolio[language]}
            </Link>
            <Link to="/section" onClick={closeMobileMenu} className="block px-3 py-2 text-lg font-medium text-yellow-300">
              {text.About[language]}
            </Link>
            <Link to="/appoinment" onClick={closeMobileMenu} className="block w-full text-left px-3 py-2">
              <button className="bg-transparent text-yellow-300 py-2 px-4 rounded-md w-full">
                {text.Contact[language]}
              </button>
            </Link>
            <div className="mt-2">
              <button onClick={toggleDropdown} className="language-button w-full flex items-center px-4 py-2 border rounded-md bg-transparent text-yellow-300">
                <img src="globe.png" alt="Globe Icon" className="h-4 w-4 mr-2" />
                {language}
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-black border border-gray-200 rounded-md shadow-lg">
                  <button onClick={() => handleLanguageChange('English')} className="block px-4 py-2 text-sm text-yellow-300 hover:text-[#cdb61f]">English</button>
                  <button onClick={() => handleLanguageChange('Polish')} className="block px-4 py-2 text-sm text-yellow-300 hover:text-[#cdb61f]">Polish</button>
                  <button onClick={() => handleLanguageChange('Dutch')} className="block px-4 py-2 text-sm text-yellow-300 hover:text-[#cdb61f]">Dutch</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
