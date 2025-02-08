const AboutUs = () => {
	return (
		<div className='about-us w-[50%]'>
			<h2 className='about-us__title font-black text-4xl mb-3'>
				Hassle-free delivery of purchased items from the USA, Europe and Asia to
				Poland
			</h2>
			<p className='about-us__text text-xl font-normal mb-4'>
				Save on your purchases and enjoy global brands - our service allows you
				to easily and conveniently order goods from all over the world and
				receive them in Poland
			</p>
			<div
				className='about-us__img-box h-[352px] w-full
       rounded-2xl'>
				<img
					className='about-us__img h-full object-cover rounded-2xl'
					src='/aboutUsPhoto.png'
					alt='aboutUsPhoto'
				/>
			</div>
		</div>
	);
};

export default AboutUs;
