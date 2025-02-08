import { useState } from "react";

const Calculator: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		city: "",
		adress: "",
		weight: "",
		goodsArea: "",
		country: "",
		deliveryArea: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]:
				type === "number"
					? value === ""
						? ""
						: parseFloat(value) || ""
					: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("date of form", formData);
		alert("request sent!");
	};

	return (
		<div className='calculator w-[50%] h-auto bg-[#F9FAFB] rounded-2xl text-center py-6 flex flex-col items-center'>
			<h2 className='calculator__title font-bold text-3xl text-[#111827] mb-4'>
				Shipping calculator
			</h2>
			<p className='calculator__description text-base text-[#111827] font-normal mb-7 w-[358px]'>
				Calculate how much it will cost to transport your purchase from abroad
			</p>

			<form
				onSubmit={handleSubmit}
				className='calculator__form max-w-[496px] w-full h-full flex flex-wrap gap-6 justify-between'>
				<input
					type='text'
					name='name'
					placeholder='Your name'
					value={formData.name}
					onChange={handleChange}
					className='calculator__input w-full border-2 border-[#111827] bg-white'
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					value={formData.email}
					onChange={handleChange}
					className='calculator__input w-[47%]'
					required
				/>
				<input
					type='tel'
					name='phone'
					placeholder='Your phone'
					value={formData.phone}
					onChange={handleChange}
					className='calculator__input calculator__input__small'
					required
				/>
				<input
					type='number'
					name='weight'
					placeholder='Weight, kg'
					value={formData.weight || 0}
					onChange={handleChange}
					className='calculator__input calculator__input__small'
					min='0'
					required
				/>
				<input
					type='number'
					name='goodsArea'
					placeholder='Total area, m²'
					value={formData.goodsArea || 0}
					onChange={handleChange}
					className='calculator__input calculator__input__small'
					min='0'
					required
				/>
				<input
					type='text'
					name='country'
					placeholder='Country of purchase'
					value={formData.country}
					className='calculator__input calculator__input__small'
					required
				/>
				<input
					type='text'
					name='cityPur'
					placeholder='City of purchase'
					value={formData.city}
					className='calculator__input calculator__input__small'
					required
				/>
				<input
					type='text'
					name='areaDel'
					placeholder='Delivery area'
					value={formData.deliveryArea}
					className='calculator__input calculator__input__small'
					required
				/>
				<input
					type='text'
					name='cityDel'
					placeholder='Delivery city'
					value={formData.city}
					className='calculator__input calculator__input__small'
					required
				/>
				<button
					type='submit'
					className='calculator__button w-full bg-[#8B5CF6] hover:bg-[#8a5cf6d0] text-[#F9FAFB]'>
					Order an estimate
				</button>
			</form>
		</div>
	);
};

export default Calculator;
