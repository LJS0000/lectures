import styles from '../styles/Header.module.css'

const Header = ({ toggleModal }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Food Delivery</h1>
      <button className={styles.header__button} onClick={toggleModal}>
        장바구니
      </button>
    </header>
  )
}

export default Header
