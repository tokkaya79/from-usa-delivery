import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import LeaveRequest from "../leaveRequest/LeaveRequest";

const Header: React.FC = () => {
	return (
		<header className='mt-6 mb-6 w-11/12'>
			<div className='header__info flex flex-row justify-between'>
				<Logo />
				<div className='header__right flex flex-row text-right'>
					<div
						className='header__right-price pr-3 border-r'
						style={{ borderColor: "rgba(167, 139, 250, 0.4)" }}>
						<ul>
							<li>We deliver goods from abroad to Poland</li>
							<li>Cost from PLN 55 per order</li>
							<li>1$ = 4.1 zł | 1€ = 4.3 zł</li>
						</ul>
					</div>
					<div className='header__rightcontacts pl-3'>
						<ul className='flex flex-col h-full justify-between'>
							<li className='text-4xl font-black'>+48 785 569 699</li>
							<li className='text-2xl text-center'>
								Calls within Poland are free
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="header__bottom flex justify-between  mt-6">
				<Navbar/>
				<LeaveRequest/>
			</div>
		</header>
	);
};

export default Header;
