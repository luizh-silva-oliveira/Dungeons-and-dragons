import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HistoryProps {
  id?: string;
  urlImage: string;
  children: ReactNode;
  direction: string;
  position: "left" | "right" | "bottom" | "top";
}

export function Background({
  id,
  urlImage,
  children,
  direction,
  position,
}: HistoryProps) {
  return (
    <section
      id={id}
      className={styles.Container}
      style={{
        backgroundImage: `linear-gradient(45deg, rgb(0, 0, 0, 0.5) 200px, transparent),
            linear-gradient(to top, #0c0c0c, transparent),
            linear-gradient(rgb(0, 0, 0) 2px, transparent), 
            url(${urlImage})`,
        justifyContent: direction,
        backgroundPosition: position,
      }}
    >
      {children}
    </section>
  );
}
