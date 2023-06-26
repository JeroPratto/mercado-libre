import styles from '../styles/carousel.module.css'
import arrow from './images/arrow.svg'

export function SampleNextArrow(props: any) {
	const { className, style, onClick, top = '158px' } = props
	return (
		<div
			className={`${className} ${styles.sampleNextArrow} ${styles.buttonArrow}`}
			style={{ ...style, top: top }}
			onClick={onClick}
		>
			<img src={arrow} alt='next' />
		</div>
	)
}
export function SamplePrevArrow(props: any) {
	const { className, style, onClick, top = '158px' } = props
	return (
		<div
			className={`${className} ${styles.samplePrevArrow} ${styles.buttonArrow}`}
			style={{ ...style, top: top }}
			onClick={onClick}
		>
			<img src={arrow} alt='next' />
		</div>
	)
}
