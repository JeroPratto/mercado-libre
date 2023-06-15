import { paymentMethod } from '../api/getPaymentMethods.mock'
import styles from './styles/method.module.css'

const Method = (method: paymentMethod) => {
	return (
		<div className={styles.containerMethod}>
			<a href={method.titleLink} className={styles.containerImage}>
				<img src={method.iconUrl} alt={method.title} />
			</a>
			<div className={styles.containerInfo}>
				<p className={styles.title}>{method.title}</p>
				<a href={method.linkUrl} className={styles.titleLink}>
					{method.titleLink}
				</a>
			</div>
		</div>
	)
}

export default Method
