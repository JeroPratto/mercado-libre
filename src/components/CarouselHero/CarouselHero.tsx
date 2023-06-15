import React, { useEffect, useState } from 'react'
import CarouselItem from './components/carouselItem'
import styles from './styles/carouselHero.module.css'
import getImagesMock from './api/getImages.mock'
import arrowIcon from './images/arrow.svg'

export type CarouselHeroProps = {}

const CarouselHero: React.FC<CarouselHeroProps> = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const images = getImagesMock()

	const updateIndexLeft = () => {
		if (activeIndex != 4) setActiveIndex((pre) => pre + 1)
	}
	const updateIndexRigth = () => {
		if (activeIndex != 0) setActiveIndex((pre) => pre - 1)
	}
	useEffect(() => {
		const interval = setInterval(() => {
			if (activeIndex != 4) setActiveIndex((pre) => pre + 1)
			if (activeIndex === 4) setActiveIndex(0)
		}, 5000)

		return () => clearInterval(interval)
	}, [activeIndex])

	return (
		<div className={styles.carousel}>
			<div
				className={styles.inner}
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{images.map((url) => (
					<CarouselItem urlImage={url} key={url} />
				))}
			</div>
			<button className={styles.buttonRigth} onClick={() => updateIndexLeft()}>
				<img src={arrowIcon} alt='arrow' />
			</button>
			<button className={styles.buttonLeft} onClick={() => updateIndexRigth()}>
				<img src={arrowIcon} alt='arrow' />
			</button>
		</div>
	)
}

export default CarouselHero
