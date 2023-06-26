import styles from './styles//benefitMP.module.css'
import React from 'react'

export type BenefitMPProps = {
	children: React.ReactNode
	urlImgBackground: string
	alt: string
	bgColor: string
	urlIcon: string
}

const BenefitMP: React.FC<BenefitMPProps> = ({
	children,
	bgColor,
	urlImgBackground,
	alt,
	urlIcon,
}) => {
	return (
		<div className={styles.container}>
			<img src={urlImgBackground} alt={alt} className={styles.img} />
			<div
				className={styles.containerDescription}
				style={{ background: bgColor }}
			>
				<img src={urlIcon} alt={alt} className={styles.descriptionImage} />
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: children! }}
				></div>
			</div>
		</div>
	)
}

export default BenefitMP
