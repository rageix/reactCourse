import useWindowSizes from '../../Lib/UseWindowSizes.ts';
import { Container } from 'react-bootstrap';

export default function UseWindowExample() {
  const sizes = useWindowSizes();

  console.log('render');

  return (
    <Container className="p-3">
      <div>Window width: {sizes.windowWidth}</div>
    </Container>
  );
}
