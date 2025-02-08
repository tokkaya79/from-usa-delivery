import Head from "next/head";
import Header from "../components/header/Header";
import Calculator from "src/components/calculator/Calculator";

export default function Home() {
  return (
    <div className='home flex flex-col items-center'>
      <Head>
        <title>From USA Deliwery</title>
      </Head>
      <Header />
      <main className='flex flex-col'>
        <Calculator/>
      </main>
    </div>
  );
}
