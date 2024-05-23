import MyButton from '../MyButton';
import { Card } from 'react-bootstrap';
import CounterController from './controller.ts';

const controller = new CounterController();

export default function CounterWithController() {
  controller.useController();

  const state = controller.state;

  return (
    <Card>
      <Card.Body>
        <div>
          <span className="me-3">Counter:</span>
          {state.counter}
        </div>
        <div>
          <span className="me-3">Counter2:</span>
          {state.counter2}
        </div>
        <div>
          <MyButton
            text="Add 1"
            variant="success"
            show={true}
            onClick={controller.onClick}
          />
          <MyButton
            text="Add 1 to Second"
            variant="info"
            show={true}
            onClick={controller.onClickSecond}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
