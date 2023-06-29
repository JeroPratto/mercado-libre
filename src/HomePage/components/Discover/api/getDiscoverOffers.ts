import { DiscoverOfferInterface } from '@/models/DiscoverOffer'

const getDiscoverOffers = (): DiscoverOfferInterface[] => {
	const discoverOffersMock = [
		{
			typeOffer: 'INFALTABLES DE INVIERNO',
			titleOffer: 'HASTA 30% OFF Y 3 CUOTAS SIN INTERÉS',
			urlImage: '/images/DiscoverOffers/infaltables-invierno.webp',
		},
		{
			typeOffer: 'ESPECIAL TVS',
			titleOffer: 'HASTA 25% OFF Y 6 CUOTAS SIN INTERÉS',
			urlImage: '/images/DiscoverOffers/especial-tv.webp',
		},
		{
			typeOffer: 'ESPECIAL GAMING',
			titleOffer: 'HASTA 30% OFF Y 6 CUOTAS SIN INTERÉS',
			urlImage: '/images/DiscoverOffers/especial-gaming.webp',
		},
		{
			typeOffer: 'PEQUEÑOS ELECTRO',
			titleOffer: 'HASTA 25% OFF Y 6 CUOTAS SIN INTERÉS',
			urlImage: '/images/DiscoverOffers/pequeños-electro.webp',
		},
	]
	return discoverOffersMock
}

export default getDiscoverOffers
