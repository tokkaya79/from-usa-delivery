import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
	className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={`navbar flex flex-row ${className}`}>
			<div className='navbar__block-navbar flex atems-centr'>
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
		</nav>
	);
};

export default Navbar;
