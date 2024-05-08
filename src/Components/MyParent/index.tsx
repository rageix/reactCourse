import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function MyParent({ children }: Props) {
  return <div className="text-danger">{children}</div>;
}
