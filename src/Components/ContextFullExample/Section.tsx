import { PropsWithChildren } from 'react';
import { LevelContext } from './LevelContext';

interface Props extends PropsWithChildren {
  level: number;
}

export default function Section({ level, children }: Props) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
