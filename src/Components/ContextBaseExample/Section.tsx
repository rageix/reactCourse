import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
}

export default function Section({ children }: Props) {
  return <section className="section">{children}</section>;
}
