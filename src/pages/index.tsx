import Head from "next/head";
import Header from "../components/header/Header";
import Calculator from "src/components/calculator/Calculator";
import AboutUs from "src/components/aboutUs/AboutUs";
import Advantages from "src/components/advantages/Advantages";

export default function Home() {
	return (
		<div className='home flex flex-col items-center'>
			<Head>
				<title>From USA Deliwery</title>
			</Head>
			<Header />
			<main className='flex flex-col items-center w-11/12 pb-20'>
				<div className='container flex justify-center gap-6 mb-20 w-full'>
					<AboutUs />
					<Calculator />
				</div>
        <Advantages/>
			</main>
		</div>
	);
}
