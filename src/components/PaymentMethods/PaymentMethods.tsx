import getPaymentMethodsMock from './api/getPaymentMethods.mock'
import Method from './components/Method'
import styles from './styles/paymentMethods.module.css'
import viewMoreIcon from './images/view-more-icon.svg'
import React from 'react'

export type PaymentMethodsProps = {}

const PaymentMethods: React.FC<PaymentMethodsProps> = () => {
	const paymentMethodsMock = getPaymentMethodsMock()
	return (
		<div className={styles.container}>
			<div className={styles.containerPaymentMethods}>
				{paymentMethodsMock.map((method) => (
					<Method {...method} />
				))}
				<a className={styles.containerViewMore}>
					<img src={viewMoreIcon} alt='view more' />
				</a>
			</div>
		</div>
	)
}

export default PaymentMethods
