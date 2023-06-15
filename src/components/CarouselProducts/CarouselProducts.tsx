import { ProductInterface } from '@/models'
import { Carousel } from '../Carousel'
import Product from './components/product'

export type CarouselProductsProps = {
	productList: ProductInterface[]
}

const CarouselProducts: React.FC<CarouselProductsProps> = ({ productList }) => {
	return (
		<Carousel slides={5}>
			{productList.map((product) => (
				<Product product={product} />
			))}
		</Carousel>
	)
}

export default CarouselProducts
