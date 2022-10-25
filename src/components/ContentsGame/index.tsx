import { Background } from "../Background";
import styles from "./styles.module.scss";

import Witch from "../../assets/witcher.jpg";

interface ListItemProps {
  text: string;
  href: string;
}

function ListItem({ text, href }: ListItemProps) {
  return (
    <li>
      <a href={href} target="_blank">
        {text}
      </a>
    </li>
  );
}

export function ContentsGame() {
  return (
    <Background
      urlImage={Witch}
      direction="center"
      position="right"
      id="ContentsGame"
    >
      <div className={styles.Content}>
        <h1>Conteúdo D&D</h1>
        <ul>
          <ListItem
            text="Livro do jogador - 5ª edição"
            href="https://drive.google.com/file/d/1-1nq19rzFnmCsP9esNRh5IUKGrtQLWYz/view?usp=sharing"
          />
          <ListItem
            text="Manual dos Monstros"
            href="https://drive.google.com/file/d/1dgTOCNYybxMuD5x8IEC9z2Vsl7cy2S26/view?usp=sharing"
          />
          <ListItem
            text="Caldeirão de Tasha para Tudo"
            href="https://drive.google.com/file/d/1xYXm_pJc0RWTJ3mofG9LQuGfFSWmwjTL/view?usp=sharing"
          />
        </ul>
      </div>
    </Background>
  );
}
