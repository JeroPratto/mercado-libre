import styles from './styles/logoSearchPromo.module.css'
import logoMeli from './images/logoMeli.png'
import promo from './images/promoDisney.webp'
import iconMenu from './images/menu.svg'
import searchIcon from './images/search.svg'
import logoMeliMobile from './images/logoMeliMobile.png'

const LogoSearchPromo = () => {
	return (
		<div className={styles.cotainerLogoSearchPromo}>
			<div className={styles.containerLogo}>
				<picture>
					<source srcSet={logoMeliMobile} media='(max-width: 630px)' />
					<source srcSet={logoMeli} media='(min-width: 631px)' />
					<img
						src={logoMeliMobile}
						alt='Logo mercado libre'
						className={styles.logo}
					/>
				</picture>
			</div>
			<div className={styles.containerSearch}>
				<div className={styles.containerSearchBtn}>
					<input
						className={styles.searchInput}
						placeholder='Buscar productos, marcas y más...'
					/>
					<button className={styles.searchButton}>
						<img src={searchIcon} alt='search icon' />
					</button>
				</div>
			</div>
			{/* only desktop */}
			<div className={styles.containerPromo}>
				<img src={promo} alt='Disney plus + star' className={styles.promo} />
			</div>
			{/* only mobile */}
			<div className={styles.containerMenu}>
				<img src={iconMenu} alt='Abrir menu' className={styles.buttonMenu} />
			</div>
		</div>
	)
}

export default LogoSearchPromo
