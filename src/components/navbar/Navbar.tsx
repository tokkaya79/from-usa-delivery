import Link from "next/link";
import { useState } from "react";

import LeaveRequest from "../leaveRequest/LeaveRequest";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar flex flex-row w-full justify-between mt-6'>
      <div className='navbar__block-navbar'>
        <button
          className='navbar__toggle hidden'
          onClick={() => setIsOpen(!isOpen)}>
          <img
            src='/burger.svg'
            alt='burger'
          />
        </button>
        <ul className='navbar__menu flex flex-row gap-6'>
          <li className='navbar__item'>
            <Link
              className='navbar__link'
              href='/'>
              Culculator
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              className='navbar__link'
              href='/'>
              About Us
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              className='navbar__link'
              href='/'>
              Guarantees
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              className='navbar__link'
              href='/'>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar__block-feedback'>
        <LeaveRequest />
      </div>
    </nav>
  );
};

export default Navbar;
