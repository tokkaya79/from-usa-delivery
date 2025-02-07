import React from "react";
import type { AppProps } from "next/app";

import Footer from "src/components/footer/Footer";

import "../styles/globals.scss";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
      <Footer/>
		</>
	);
};

export default App;
