interface ButtonProps {
	text: string;
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	text,
	className = "",
	type = "button",
	onClick,
}) => {
	return (
		<>
			<button
				type={type}
				className={`bg-[#8B5CF6] hover:bg-[#8a5cf6d0] text-[#F9FAFB] ${className}`}
				onClick={onClick}>
				{text}
			</button>
		</>
	);
};

export default Button;
