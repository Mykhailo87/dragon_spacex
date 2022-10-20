import React, { useState } from 'react';
import classes from './Detail.module.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Slider(props) {
	const [ current, setCurrent ] = useState(0);

	const length = props && props.flickr_images.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div>
			<FaArrowAltCircleLeft className={classes.left_arrow} onClick={prevSlide} />
			<FaArrowAltCircleRight className={classes.right_arrow} onClick={nextSlide} />
			{props &&
				props.flickr_images.map((img, index) => {
					return (
						<div className={index === current ? 'slide_active' : 'slide'} key={index}>
							{index === current && (
								<img key={index} className={classes.image} src={img} alt={props.name} />
							)}
						</div>
					);
				})}
		</div>
	);
}

export default Slider;
