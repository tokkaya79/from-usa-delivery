interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({className=""}) => {
	return (
		<div className={`logo flex flex-row items-center ${className}`}>
			<img
				src='/logo.svg'
				alt='logo'
			/>
			<div className='logo__text text-2xl font-black'>From USA Delivery</div>
		</div>
	);
};

export default Logo;
