import { Background } from '../Background';
import styles from './styles.module.scss';

import Witch from '../../assets/witcher.jpg';

export function ContentsGame() {
  return (
    <Background urlImage={Witch} direction='center'>
      <div className={styles.Content}>
        <h1>Conteúdo D&D</h1>
        <ul>
          <li> <a href="https://drive.google.com/file/d/1-1nq19rzFnmCsP9esNRh5IUKGrtQLWYz/view?usp=sharing" target="_blank">Livro do jogador - 5ª edição</a> </li>
          <li> <a href="https://drive.google.com/file/d/1dgTOCNYybxMuD5x8IEC9z2Vsl7cy2S26/view?usp=sharing" target="_blank">Manual dos Monstros</a> </li>
          <li> <a href="https://drive.google.com/file/d/1xYXm_pJc0RWTJ3mofG9LQuGfFSWmwjTL/view?usp=sharing" target="_blank">Caldeirão de Tasha para Tudo</a> </li>
        </ul>
      </div>

    </Background>
  )
} 
