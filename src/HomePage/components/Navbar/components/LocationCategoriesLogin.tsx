import styles from './styles/locationCategoriesLogin.module.css'
import locationIcon from './images/location.svg'
import cartIcon from './images/cart.svg'

const LocationCategoriesLogin = () => {
	return (
		<div className={styles.containerLocationCategoriesLogin}>
			<Location />
			<Categories />
			<LoginAndCart />
		</div>
	)
}

export default LocationCategoriesLogin

const Location = () => {
	return (
		<div className={styles.containerLocation}>
			<img src={locationIcon} alt='' className={styles.locationImage} />
			<p className={styles.location}>
				Enviar a <span>Capital Federal</span>
			</p>
		</div>
	)
}

const Categories = () => {
	return (
		<ul className={styles.containerCategories}>
			<li className={styles.category}>Categorías</li>
			<li className={styles.category}>Ofertas</li>
			<li className={styles.category}>Historial</li>
			<li className={styles.category}>Supermercado</li>
			<li className={styles.category}>Moda</li>
			<li className={styles.category}>Vender</li>
			<li className={styles.category}>Ayuda</li>
		</ul>
	)
}

const LoginAndCart = () => {
	return (
		<div className={styles.containerLoginAndCart}>
			<div className={styles.containerLogin}>
				<button className={styles.btnLoginAndCart}>Creá tu cuenta</button>
				<button className={styles.btnLoginAndCart}>Ingresá</button>
				<button className={styles.btnLoginAndCart}>Mis compras</button>
				<button className={styles.btnLoginAndCart}>
					<img src={cartIcon} alt='carrito de compra' />
				</button>
			</div>
		</div>
	)
}
