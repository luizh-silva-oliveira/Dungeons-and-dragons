import styles from './styles.module.scss';
import logo from '../../assets/logo.png';

export function Menu() {
  return (
    <header className={styles.Container}>
      <img src={logo} alt="logo" />

      <nav className={styles.NavContainer}>
        <ul>
          <a>Universo</a>
          <a>Livros</a>
        </ul>
      </nav>
    </header>
  )
}
