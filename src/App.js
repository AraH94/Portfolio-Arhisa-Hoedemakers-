import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='bg-port bg-logo bg-no-repeat bg-cover overflow-hidden'>
			<Header />
			<Banner />
			<About />
		</div>
	);
};

export default App;