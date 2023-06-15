import { TitleSection } from '../TitleSection'
import getBenefitsMPMock from './api/getBenefitsMp'
import BenefitMP from './components/benefitMP'
import styles from './styles/benefitsMP.module.css'
import React from 'react'

export type BenefitsMPProps = {}

const BenefitsMP: React.FC<BenefitsMPProps> = () => {
	const benefitsMock = getBenefitsMPMock()
	return (
		<div className={styles.container}>
			<TitleSection
				title='Beneficios de Mercado Puntos'
				titleLink='Ver todos los beneficios'
				urlLink='#'
			/>
			<div className={styles.containerBenefits}>
				{benefitsMock.map((benefit) => (
					<BenefitMP
						bgColor={benefit.bgColor}
						alt={benefit.alt}
						urlIcon={benefit.urlIcon}
						urlImgBackground={benefit.urlImgBackground}
					>
						{benefit.description}
					</BenefitMP>
				))}
			</div>
		</div>
	)
}

export default BenefitsMP
