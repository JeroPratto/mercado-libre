export interface paymentMethod {
	iconUrl: string
	title: string
	linkUrl: string
	titleLink: string
}
const getPaymentMethodsMock = () => {
	const paymentMethods: paymentMethod[] = [
		{
			iconUrl: '/images/PaymentMethods/credit-card-icon.svg',
			title: 'Tarjeta de crédito',
			linkUrl: '#',
			titleLink: 'Ver promociones bancarias',
		},
		{
			iconUrl: '/images/PaymentMethods/debit-card-icon.svg',
			title: 'Tarjeta de débito',
			linkUrl: '#',
			titleLink: 'Ver más',
		},
		{
			iconUrl: '/images/PaymentMethods/mercado-credits-icon.svg',
			title: 'Cuotas sin tarjeta',
			linkUrl: '#',
			titleLink: 'Conocé Mercado Crédito',
		},
		{
			iconUrl: '/images/PaymentMethods/efectivo-icon.svg',
			title: 'Efectivo',
			linkUrl: '#',
			titleLink: 'Ver más',
		},
	]
	return paymentMethods
}

export default getPaymentMethodsMock
