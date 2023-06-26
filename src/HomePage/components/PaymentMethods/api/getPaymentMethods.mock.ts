export interface paymentMethod {
	iconUrl: string
	title: string
	linkUrl: string
	titleLink: string
}
const getPaymentMethodsMock = () => {
	const paymentMethods: paymentMethod[] = [
		{
			iconUrl:
				'src/HomePage/components/PaymentMethods/images/credit-card-icon.svg',
			title: 'Tarjeta de crédito',
			linkUrl: '#',
			titleLink: 'Ver promociones bancarias',
		},
		{
			iconUrl:
				'src/HomePage/components/PaymentMethods/images/debit-card-icon.svg',
			title: 'Tarjeta de débito',
			linkUrl: '#',
			titleLink: 'Ver más',
		},
		{
			iconUrl:
				'src/HomePage/components/PaymentMethods/images/mercado-credits-icon.svg',
			title: 'Cuotas sin tarjeta',
			linkUrl: '#',
			titleLink: 'Conocé Mercado Crédito',
		},
		{
			iconUrl:
				'src/HomePage/components/PaymentMethods/images/efectivo-icon.svg',
			title: 'Efectivo',
			linkUrl: '#',
			titleLink: 'Ver más',
		},
	]
	return paymentMethods
}

export default getPaymentMethodsMock
