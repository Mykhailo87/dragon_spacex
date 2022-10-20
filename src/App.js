import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Information from './components/Information';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/detail/:id" element={<Information />} />
			</Routes>
		</div>
	);
}

export default App;
