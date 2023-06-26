import { ProductInterface } from '@/models'
import React from 'react'
import styles from './styles/product.module.css'

export type ProductProps = {
	product: ProductInterface
}

const Product: React.FC<ProductProps> = ({ product }) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerImage}>
				<img src={product.urlImage} alt={product.description} />
			</div>
			<div className={styles.containerInfo}>
				{product.previusPrice ? (
					<p className={styles.previusPrice}>$ {product.previusPrice}</p>
				) : (
					''
				)}
				<div className={styles.containerPrice}>
					<p className={styles.price}>$ {product.price}</p>
					{product.discount ? (
						<p className={styles.discountAndShipment}>{product.discount}</p>
					) : (
						''
					)}
				</div>
				{product.shipment ? (
					<div className={styles.containerShipmenteAndInstallments}>
						<p className={styles.discountAndShipment}>{product.shipment}</p>
					</div>
				) : (
					''
				)}
				<div className={styles.containerDescription}>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	)
}

export default Product
