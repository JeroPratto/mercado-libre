import { BenefitsBuyLevelInterface } from '../components/BenefitsBuyLevel'

const getBenefitsLevel6Mock = (): BenefitsBuyLevelInterface => {
	const benefits = {
		titleDescription: 'Conseguí los mejores beneficios en Mercado Libre',
		benefits: [
			{
				src: '/images/BuyLevel6/dplus-icon.svg',
				alt: '#',
				description: 'Disney+ sin cargo',
			},
			{
				src: '/images/BuyLevel6/starplus-icon.svg',
				alt: '#',
				description: 'Star+ sin cargo',
			},
			{
				src: '/images/BuyLevel6/truck-icon.png',
				alt: '#',
				description:
					'Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de menos de $ 8.000',
			},
		],
	}
	return benefits
}

export default getBenefitsLevel6Mock
