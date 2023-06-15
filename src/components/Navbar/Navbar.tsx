import React from 'react'
import styles from './styles/navbar.module.css'
import { LocationCategoriesLogin, LogoSearchPromo } from './components'

export type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className={styles.containerNavbar}>
			<LogoSearchPromo />
			<LocationCategoriesLogin />
		</nav>
	)
}

export default Navbar
