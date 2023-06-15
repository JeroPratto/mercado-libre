import { BenefitsBuyLevelInterface } from '../components/BenefitsBuyLevel'

const getBenefitsLevel6Mock = (): BenefitsBuyLevelInterface => {
	const benefits = {
		titleDescription: 'Conseguí los mejores beneficios en Mercado Libre',
		benefits: [
			{
				src: 'src/components/BuyLevel6/images/dplus-icon.svg',
				alt: '#',
				description: 'Disney+ sin cargo',
			},
			{
				src: 'src/components/BuyLevel6/images/starplus-icon.svg',
				alt: '#',
				description: 'Star+ sin cargo',
			},
			{
				src: 'src/components/BuyLevel6/images/truck-icon.png',
				alt: '#',
				description:
					'Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de menos de $ 8.000',
			},
		],
	}
	return benefits
}

export default getBenefitsLevel6Mock
