import { CarouselHero, Discover, Navbar, PaymentMethods } from './components'
import { BenefitsMP } from './components/BenefitsMP'
import { BestShop } from './components/BestShop'
import { BuyLevel6 } from './components/BuyLevel6'
import { CarouselAndTitle } from './components/CarouselAndTitle'
import getDiscoverOffers from './components/Discover/api/getDiscoverOffers'
import getBestShopsMock from './mocks/getBestShops'
import getProductsMock from './mocks/getProducts'

function App() {
	const products = getProductsMock()
	const bestShops = getBestShopsMock()
	const dicoverOffers = getDiscoverOffers()
	return (
		<div>
			<Navbar />
			<CarouselHero />
			<PaymentMethods />
			<CarouselAndTitle
				products={products.slice(0, 10)}
				titlePros={{
					title: 'Basado en tu última visita',
					titleLink: 'Ver historial',
					urlLink: '#',
				}}
			/>
			<CarouselAndTitle
				products={products.slice(10, 20)}
				titlePros={{
					title: 'Relacionado con tus visitas en Electrónica, Audio y Video',
					titleLink: 'Ver historial',
					urlLink: '#',
				}}
			/>
			<CarouselAndTitle
				products={products.slice(20)}
				titlePros={{
					title: 'Ofertas',
					titleLink: 'Ver todas',
					urlLink: '#',
				}}
			/>
			<BuyLevel6 />
			<BenefitsMP />
			<Discover offers={dicoverOffers.slice(0, 2)} />
			<BestShop shopList={bestShops} />
			<Discover offers={dicoverOffers.slice(2)} title='Te puede interesar' />
			<CarouselAndTitle
				products={products.slice(0, 10)}
				titlePros={{
					title: 'Más vendidos en Televisores',
					titleLink: 'Ver más vendidos',
					urlLink: '#',
				}}
			/>
		</div>
	)
}

export default App
