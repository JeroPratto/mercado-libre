import { ProductInterface } from '@/models'
import React from 'react'
import { CarouselProducts, TitleSection } from '..'
import { TitleSectionProps } from '../TitleSection/TitleSection'

export type CarouselAndTitleProps = {
	titlePros: TitleSectionProps
	products: ProductInterface[]
}

const CarouselAndTitle: React.FC<CarouselAndTitleProps> = ({
	titlePros,
	products,
}) => {
	return (
		<div>
			<TitleSection {...titlePros} />
			<CarouselProducts productList={products} />
		</div>
	)
}

export default CarouselAndTitle
