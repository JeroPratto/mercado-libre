import React from 'react'
import styles from './styles/bestShop.module.css'
import { ShopInterface } from '@/models/Shop'
import { Carousel } from '../Carousel'
import Shop from './components/shop'

export type BestShopProps = {
	shopList: ShopInterface[]
}

const BestShop: React.FC<BestShopProps> = ({ shopList }) => {
	return (
		<Carousel slides={4} top='138px'>
			{shopList.map((shop) => (
				<Shop shop={shop} />
			))}
		</Carousel>
	)
}

export default BestShop
