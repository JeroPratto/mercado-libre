import React from 'react'
import styles from './styles/titleSection.module.css'

export type TitleSectionProps = {
	title: string
	titleLink?: string
	urlLink?: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
	title,
	titleLink,
	urlLink,
}) => {
	return (
		<div className={styles.containerTitleAndLink}>
			<h2 className={styles.title}>{title}</h2>
			<a className={styles.link} href={urlLink}>
				{titleLink}
			</a>
		</div>
	)
}

export default TitleSection
