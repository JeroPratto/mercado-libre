import React from 'react'
import styles from './styles/shop.module.css'
import { ShopInterface } from '@/models/Shop'

export type ShopProps = {
	shop: ShopInterface
}

const Shop: React.FC<ShopProps> = ({ shop }) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerBannerAndIcon}>
				<img
					src={shop.urlBannerImg}
					alt={shop.title}
					className={styles.banner}
				/>
				<img src={shop.urlIconImg} alt={shop.title} className={styles.icon} />
			</div>
			<div className={styles.containerTitleAndProducts}>
				<p className={styles.title}>{shop.title}</p>
				<div className={styles.containerProducts}>
					{shop.products.map((urlImg) => (
						<div className={styles.product}>
							<img src={urlImg} alt=' ' />
						</div>
					))}
				</div>
			</div>
			<a href={shop.urlLink} className={styles.link}>
				Ver tienda
			</a>
		</div>
	)
}

export default Shop
