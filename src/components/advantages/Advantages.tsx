const advantagesData = [
	{
		icon: "/icons/Board.jpg",
		title: "Cargo clearance",
		descr:
			"We take care of all the formalities and paperwork associated with customs clearance of cargo.",
	},
	{
		icon: "/icons/Package.jpg",
		title: "Reliable packaging",
		descr:
			"All items are packed by our experts with special attention to detail, ensuring that they arrive safely and in excellent condition.",
	},
	{
		icon: "/icons/Delivery.jpg",
		title: "Fast and profitable",
		descr:
			"We offer fast and affordable shipping so you can enjoy your shopping as soon as possible.",
	},
	{
		icon: "/icons/best support.jpg",
		title: "Convenient service",
		descr:
			"We strive to make the delivery process as convenient as possible for you, so that the experience remains pleasant and carefree.",
	},
	{
		icon: "/icons/Group.jpg",
		title: "Transparency of work",
		descr:
			"We provide complete control over every stage of delivery, from the moment of ordering to the moment of order arrival.",
	},
	{
		icon: "/icons/garantee.jpg",
		title: "Cargo insurance",
		descr:
			"Our insurance provides full protection and coverage for almost all unpleasant and unexpected situations.",
	},
];

const Advantages: React.FC = () => {
	return (
		<section className='advantages w-11/12'>
			<h2 className='advantages__title text-center font-black text-3xl mb-6'>
				Our advantages
			</h2>
			<div className='advantages__list grid grid-cols-3 gap-6 mx-auto'>
				{advantagesData.map((adv, index) => (
					<div
						key={index}
						className='advantages__item flex justify-center gap-3 items-center p-6 bg-white'>
						<div className='advantages__icon-box  w-34 h-34 py-[17px] px-[11px] flex justify-center items-center'>
							<img
								src={adv.icon}
								alt={adv.title}
								className='advantages__icon'
							/>
						</div>
						<div className='advantages__item-info'>
							<h3 className='advantages__item-title font-bold text-2xl mb-3'>
								{adv.title}
							</h3>
							<p className='advantages__item-text text-sm font-normal'>
								{adv.descr}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Advantages;
