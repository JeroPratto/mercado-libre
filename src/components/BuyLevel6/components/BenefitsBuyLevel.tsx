import styles from './styles/benefitsBuyLevel.module.css'

export interface BenefitsBuyLevelInterface {
	titleDescription: string
	benefits: { src: string; alt: string; description: string }[]
}
export type BenefitsBuyLevelProps = {
	benefits: BenefitsBuyLevelInterface
}

const BenefitsBuyLevel: React.FC<BenefitsBuyLevelProps> = ({ benefits }) => {
	return (
		<div className={styles.description}>
			<p className={styles.titleDescription}>{benefits.titleDescription}</p>
			<div className={styles.benefits}>
				{benefits.benefits.map((benefit) => (
					<div className={styles.containerBefenit}>
						<img
							src={benefit.src}
							alt={benefit.alt}
							className={styles.benefitImage}
						/>
						<p className={styles.benefitDescription}>{benefit.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default BenefitsBuyLevel
