import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Adder from './Adder.tsx';

export default function UseMemoExample() {
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(5);

  function onClick() {
    setFirst(first + 1);
    setSecond(second + 2);
  }

  return (
    <Container className="p-3">
      <h1>useMemo</h1>
      <div>
        First: {first} Second: {second}
      </div>
      <Adder
        first={first}
        second={second}
      />
      <div>
        <Button onClick={onClick}>Change Values</Button>
      </div>
    </Container>
  );
}
