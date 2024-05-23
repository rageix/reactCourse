import { useMemo } from 'react';

interface Props {
  first: number;
  second: number;
}
export default function Adder({ first, second }: Props) {
  const value = useMemo(() => {
    return first + second;
  }, [first, second]);

  return <div>Value: {value}</div>;
}
