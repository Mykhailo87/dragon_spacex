import React from 'react';
import classes from './Detail.module.css';
import Slider from './Slider';

function Detail(props) {
	return (
		<div>
			<h1 className={classes.name}>{props && props.name}</h1>
			<div className={classes.image_container}>{props && <Slider {...props} />}</div>
			<div className={classes.description}>{props && props.description}</div>
			<div className={classes.wikipedia}>
				<a className={classes.wiki} href={props && props.wikipedia}>
					Wikipedia
				</a>
			</div>
			<div className={classes.add_parameters}>
				<h4>Aditional parameters:</h4>
				<ul className={classes.parameters_list}>
					<li>First flight: {props && props.first_flight}</li>
					<li>Mass: {props && props.dry_mass_kg} kg</li>
					<li>
						Height: {props && Object.values(props.height_w_trunk)[0]}{' '}
						{props && Object.keys(props.height_w_trunk)[0]}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Detail;
