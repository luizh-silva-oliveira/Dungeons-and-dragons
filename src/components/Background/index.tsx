import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HistoryProps {
  urlImage: string
  children: ReactNode
  direction: string
}

export function Background({ urlImage, children, direction }: HistoryProps) {
  return (
    <section
      className={styles.Container}
      style={{
        backgroundImage:
          `linear-gradient(45deg, rgb(0, 0, 0, 0.5) 200px, transparent),
            linear-gradient(to top, #0c0c0c, transparent),
            linear-gradient(rgb(0, 0, 0) 2px, transparent), 
            url(${urlImage})`,
        justifyContent: direction
      }}
    >
      {children}
    </section>
  )
} 
