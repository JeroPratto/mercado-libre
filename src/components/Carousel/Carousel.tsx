import React, { ReactNode } from 'react'
import Slider from 'react-slick'
import { SampleNextArrow, SamplePrevArrow } from './components/arrowsCarousel'
import styles from './styles/carousel.module.css'

export type CarouselProps = {
	children: ReactNode
	slides: number
	top?: string
}

const Carousel: React.FC<CarouselProps> = ({ slides, children, top }) => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: slides,
		nextArrow: <SampleNextArrow top={top} />,
		prevArrow: <SamplePrevArrow top={top} />,
	}
	return (
		<div className={styles.container}>
			<Slider {...settings}>{children}</Slider>
		</div>
	)
}

export default Carousel
