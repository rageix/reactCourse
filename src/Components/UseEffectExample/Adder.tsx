import { useEffect, useState } from 'react';

interface Props {
  first: number;
  second: number;
}
export default function Adder({ first, second }: Props) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    console.log('useEffect');
    setValue(first + second);

    return () => {
      console.log('something');
    };
  }, [first, second]);

  return <div>Value: {value}</div>;
}
