import { ReactNode } from 'react'
import styles from './styles/headerBuyLevel.module.css'

export type HeaderBuyLevelProps = {
	children: ReactNode
	previusPrice: string
	price: string
}

const HeaderBuyLevel: React.FC<HeaderBuyLevelProps> = ({
	children,
	previusPrice,
	price,
}) => {
	return (
		<div className={styles.containerHeader}>
			<h3 className={styles.title}>{children}</h3>
			<div className={styles.containerPrice}>
				<p className={styles.previusPrice}>$ {previusPrice}</p>
				<p className={styles.price}>
					$ {price} <small>/mes</small>
				</p>
			</div>
		</div>
	)
}

export default HeaderBuyLevel
