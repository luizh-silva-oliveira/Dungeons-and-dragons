import { Background } from '../Background';
import styles from './styles.module.scss';

import Giant from '../../assets/giant.jpg';
import { MotionBox } from '../MotionBox';

export function History() {
  return (
    <Background urlImage={Giant} direction='left'>
      <MotionBox>
        <div className={styles.Content}>
          <h1>Era uma vez...</h1>
          <p>
            O RPG dungeons & dragons é sobre contar histórias
            em mundos de espadas e magia. Ele compartilha
            elementos de jogos infantis e faz de conta. Como aqueles
            jogos, D&D é guiado pela imaginação. Trata-se de
            visualizar um grande castelo sob o céu de uma noite
            tempestuosa e imaginar como um aventureiro de fantasia
            poderia reagir aos desafios que aquela cena apresenta.
          </p>
        </div>
      </MotionBox>

    </Background>
  )
} 
