const getBenefitsMPMock = () => {
	const benefitsMPMock = [
		{
			urlImgBackground: '/images/BenefitsMp/multicontent.jpg',
			alt: 'Disney+ y Star+',
			urlIcon: '/images/BenefitsMp/comboplus-square-multicontent.jpg',
			description:
				'<p style="font-weight:bold">Sin cargo con el nivel 6</p> <p>Disney+ y Star+</p>',
			bgColor:
				'linear-gradient(0deg, rgb(8, 19, 48) 0%, rgba(8, 19, 48, 0) 100%);',
		},
		{
			urlImgBackground: '/images/BenefitsMp/HBOMax.jpg',
			alt: 'hbo max',
			urlIcon: '/images/BenefitsMp/hbomax-icon.png',
			description: `<span>7 DÍAS GRATIS</span> <p style="font-weight:bold">Hasta 30% OFF</p> <p>HBO Max</p>`,
			bgColor:
				'linear-gradient(0deg, rgb(60, 3, 78) 0%, rgba(60, 3, 78, 0) 100%)',
		},
		{
			urlImgBackground: '/images/BenefitsMp/paramount.jpg',
			alt: 'paramount+',
			urlIcon: '/images/BenefitsMp/paramount-icon.png',
			description:
				'<span>7 DÍAS GRATIS</span> <p style="font-weight:bold">Hasta 30% OFF</p> <p>Paramount+</p>',
			bgColor:
				'linear-gradient(0deg, rgb(0, 100, 255) 0%, rgba(0, 100, 255, 0) 100%)',
		},
	]
	return benefitsMPMock
}

export default getBenefitsMPMock
