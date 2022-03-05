import { Background } from '../Background';
import styles from './styles.module.scss';

import Tiamat from '../../assets/tiamat.png';

export function Multiverse() {
  return (
    <Background urlImage={Tiamat} direction='right'>
      <div className={styles.Content}>
        <h1>Um multiverso de heróis</h1>
        <p>
          Aventureiros são pessoas extraordinárias, motivados
          pela ânsia e pela excitação de uma vida que os outros
          nunca ousariam levar. Eles são heróis, compelidos a
          explorar os lugares sombrios do mundo e a aceitar os
          desafios que homens e mulheres mais fracos não
          conseguiriam enfrentar.
        </p>
      </div>

    </Background>
  )
} 
