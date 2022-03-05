import styles from './styles.module.scss';

import Dados from '../../assets/dados.png'

export function Footer() {
  return (
    <footer className={styles.Container}>
      <a href="https://www.linkedin.com/in/thales-luiz-0a6057230/" target="_blank">
        <p>&copy;2022 Thales Luiz - Potência Communications</p>
      </a>

      <img src={Dados} alt="dado" />
    </footer>
  )
}