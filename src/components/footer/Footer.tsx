import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

const Footer: React.FC = () => {
	return (
		<footer className='footer flex justify-center align-middle bg-[#111827] py-10'>
			<div className='footer__container w-11/12 flex justify-between items-center'>
				<div className='footer__logo'>
					<Logo className='text-[#F9FAFB]' />
					<p className='footer__copywriter text-[#F9FAFB] text-xs mt-2'>
						2023 © No rights are reserved, copy as much as you like
					</p>
				</div>
				<div className='footer__nav'>
					<Navbar className='text-[#F9FAFB]' />
				</div>
				<div className='footer__contsct'>
					<ul className='flex flex-col h-full justify-between text-[#F9FAFB]'>
						<li className='text-4xl font-black'>+48 785 569 699</li>
						<li className='text-2xl text-center'>
							Calls within Poland are free
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
