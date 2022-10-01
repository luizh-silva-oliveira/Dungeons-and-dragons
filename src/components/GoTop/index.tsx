import { Background } from '../Background';
import styles from './styles.module.scss';

import Arrow from '../../assets/gotop.png';

export function GoTop() {
  return(
    <button className={styles.Container}>
      <a href="#">
        <img src={Arrow} alt="vai para o topo" />
      </a>
    </button>
  )
} 
