import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './List.module.css';

function List() {
	const [ list, setList ] = useState();

	useEffect(() => {
		axios.get('https://api.spacexdata.com/v4/dragons').then((res) => {
			setList(res.data);
		});
	}, []);

	return (
		<div className={classes.dragon_list}>
			<h2 className={classes.list_header}>All Dragons</h2>
			<ul>
				{list &&
					list.map((drag, index) => {
						return (
							<section key={index}>
								<Link className={classes.dragons_link} key={drag.id} to={`/detail/${drag.id}`}>
									<li className={classes.dragon_unit}>{drag && drag.name}</li>
								</Link>
							</section>
						);
					})}
			</ul>
		</div>
	);
}

export default List;
