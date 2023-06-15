import React from 'react'
import { TitleSection } from '..'
import DiscoverOffer from './components/discoverOffer'
import styles from './styles/discover.module.css'
import { DiscoverOfferInterface } from '@/models/DiscoverOffer'

export type DiscoverProps = {
	offers: DiscoverOfferInterface[]
	title?: string
}

const Discover: React.FC<DiscoverProps> = ({ offers, title = 'Descubrí' }) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerOffersAndTitle}>
				<TitleSection title={title} />
				<div className={styles.containerOffers}>
					{offers.map((offer) => (
						<DiscoverOffer
							titleOffer={offer.titleOffer}
							typeOffer={offer.typeOffer}
							urlImage={offer.urlImage}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Discover
