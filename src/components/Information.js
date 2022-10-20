import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './Detail';

function Information() {
	const { id } = useParams();
	const [ information, setInformation ] = useState(null);

	useEffect(
		() => {
			axios.get(`https://api.spacexdata.com/v4/dragons/${id}`).then((res) => {
				setInformation(res.data);
			});
		},
		[ id ]
	);

	return <div>{information && <Detail {...information} />}</div>;
}

export default Information;
