import React, { useState, useEffect } from 'react';
import List from './List';
import Detail from './Detail';
import axios from 'axios';

function About() {
	const [ dragon, setDragon ] = useState();

	useEffect(() => {
		axios.get('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f').then((res) => {
			setDragon(res.data);
		});
	}, []);

	return (
		<div>
			{dragon && <Detail {...dragon} />}
			<List />
		</div>
	);
}

export default About;
