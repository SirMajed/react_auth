import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
              <footer className="p-2 bg-first fixed bottom-0 w-full">
                  <div className="text-md text-white flex justify-center space-x-4">
                   <Link to="/">Privacy</Link>
                   <Link to="/">Policy</Link>
                   <Link to="/">Contact</Link>
                  </div>
              </footer>
        </>
    );
}

export default Footer;
