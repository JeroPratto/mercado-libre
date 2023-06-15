import styles from './styles/carouselItem.module.css'

export type CarouselItemProps = {
	urlImage: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ urlImage }) => {
	return (
		<div className={styles.carouselItem}>
			<img src={urlImage} alt='' className={styles.image} />
		</div>
	)
}
export default CarouselItem
