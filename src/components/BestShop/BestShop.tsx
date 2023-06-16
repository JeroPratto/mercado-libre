import { ShopInterface } from '@/models/Shop'
import React from 'react'
import { Carousel } from '../Carousel'
import Shop from './components/shop'

export type BestShopProps = {
	shopList: ShopInterface[]
}

const BestShop: React.FC<BestShopProps> = ({ shopList }) => {
	return (
		<Carousel slides={4} top='138px'>
			{shopList.map((shop, index) => (
				<Shop key={`${index}-${shop.urlBannerImg}`} shop={shop} />
			))}
		</Carousel>
	)
}

export default BestShop
