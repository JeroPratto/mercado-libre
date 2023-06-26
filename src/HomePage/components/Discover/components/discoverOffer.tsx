import styles from './styles/discoverOffer.module.css'

export type DiscoverOfferProps = {
	urlImage: string
	typeOffer: string
	titleOffer: string
}

const DiscoverOffer: React.FC<DiscoverOfferProps> = ({
	urlImage,
	typeOffer,
	titleOffer,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerDescription}>
				<span>{typeOffer}</span>
				<p>{titleOffer}</p>
				<button>Ver más</button>
			</div>
			<div className={styles.containerImage}>
				<img src={urlImage} alt={typeOffer} />
			</div>
		</div>
	)
}

export default DiscoverOffer
