import React from 'react'
import getBenefitsLevel6Mock from './api/getBenefitsLevel6'
import { BenefitsBuyLevel } from './components'
import HeaderBuyLevel from './components/HeaderBuyLevel'
import styles from './styles/buyLevel6.module.css'

export type BuyLevel6Props = {}

const BuyLevel6: React.FC<BuyLevel6Props> = () => {
	const BenefitsMock = getBenefitsLevel6Mock()
	return (
		<div className={styles.containerBuyLevel}>
			<div className={styles.container}>
				<HeaderBuyLevel previusPrice='2.500' price='999'>
					Suscribite al nivel 6
				</HeaderBuyLevel>
				<BenefitsBuyLevel benefits={BenefitsMock} />
				<div className={styles.containerButton}>
					<button>Suscribite</button>
				</div>
			</div>
		</div>
	)
}

export default BuyLevel6
