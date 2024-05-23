import { Button, Container } from 'react-bootstrap';
import { useRef } from 'react';

export default function RefExample() {
  const ref = useRef<HTMLDivElement>(null);
  function onClick() {
    if (ref.current) {
      ref.current.innerHTML = 'Wow we change the text';
    }
  }

  return (
    <Container className="p-3">
      <div ref={ref}>This is some text</div>
      <div>
        <Button onClick={onClick}>Change Text</Button>
      </div>
    </Container>
  );
}
