import Button from "../button/Button";

const documentsData = [
	{
		name: "Certificate_Poland",
		image: "/documents/Documents_img_1.png",
		descr: "Certificate of registration in Poland",
	},
	{
		name: "Certificate_USA",
		image: "/documents/Documents_img_2.png",
		descr: "Certificate of registration in USA",
	},
	{
		name: "Certificate_China",
		image: "/documents/Documents_img_3.png",
		descr: "Certificate of registration in China",
	},
	{
		name: "Certificate_UK",
		image: "/documents/Documents_img_4.png",
		descr: "Certificate of registration in UK",
	},
];
const Documents: React.FC = () => {
	return (
		<section className='documents my-[72px]  text-center'>
			<h2 className='documents__title text-3xl font-bold mb-3'>
				Quality guarantees
			</h2>
			<p className='documents__subtitle w-1/3 m-auto text-base'>
				Our quality guarantees include a full range of documents required for
				the import and export of goods, as well as for successful business in
				the global market. We provide you with reliability and confidence
			</p>
			<div className='documents__cards flex gap-6 mt-6 mb-9'>
				{documentsData.map((docs, index) => (
					<div
						key={index}
						className='documents__card'>
						<img
							className='documents__img'
							src={docs.image}
							alt={docs.name}
						/>
						<h3 className='documents__descr font-bold text-lg pt-1'>
							{docs.descr}
						</h3>
					</div>
				))}
			</div>
			<Button
				text='Show more documents'
				className='w-[315px]'
			/>
		</section>
	);
};

export default Documents;
