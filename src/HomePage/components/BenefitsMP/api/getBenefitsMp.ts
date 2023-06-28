const getBenefitsMPMock = () => {
	const benefitsMPMock = [
		{
			urlImgBackground: '/BenefitsMP/multicontent.jpg',
			alt: 'Disney+ y Star+',
			urlIcon: '/BenefitsMP/comboplus-square-multicontent.jpg',
			description:
				'<p style="font-weight:bold">Sin cargo con el nivel 6</p> <p>Disney+ y Star+</p>',
			bgColor:
				'linear-gradient(0deg, rgb(8, 19, 48) 0%, rgba(8, 19, 48, 0) 100%);',
		},
		{
			urlImgBackground: '/BenefitsMP/HBOMAX.jpg',
			alt: 'hbo max',
			urlIcon: '/BenefitsMP/hbomax-icon.png',
			description: `<span>7 DÍAS GRATIS</span> <p style="font-weight:bold">Hasta 30% OFF</p> <p>HBO Max</p>`,
			bgColor:
				'linear-gradient(0deg, rgb(60, 3, 78) 0%, rgba(60, 3, 78, 0) 100%)',
		},
		{
			urlImgBackground: '/BenefitsMP/paramount.jpg',
			alt: 'paramount+',
			urlIcon: '/BenefitsMP/paramount-icon.png',
			description:
				'<span>7 DÍAS GRATIS</span> <p style="font-weight:bold">Hasta 30% OFF</p> <p>Paramount+</p>',
			bgColor:
				'linear-gradient(0deg, rgb(0, 100, 255) 0%, rgba(0, 100, 255, 0) 100%)',
		},
	]
	return benefitsMPMock
}

export default getBenefitsMPMock
