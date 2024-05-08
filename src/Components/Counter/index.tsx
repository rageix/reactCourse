import MyButton from '../MyButton';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

interface MegaState {
  counter: number;
  counter2: number;
}

function newMegaState(): MegaState {
  return {
    counter: 1,
    counter2: 1,
  };
}

export default function Counter() {
  // const [counter, setCounter] = useState<number>(1);
  // const [counter2, setCounter2] = useState<number>(1);
  const [megaState, setMegaState] = useState<MegaState>(newMegaState());

  function onClick() {
    // setCounter(counter + 1);
    setMegaState({ ...megaState, counter: megaState.counter + 1 });
  }

  function onClickSecond() {
    // setCounter2(counter2 + 1);
    setMegaState({ ...megaState, counter2: megaState.counter2 + 1 });
  }

  return (
    <Card>
      <Card.Body>
        <div>
          <span className="me-3">Counter:</span>
          {megaState.counter}
        </div>
        <div>
          <span className="me-3">Counter2:</span>
          {megaState.counter2}
        </div>
        <div>
          <MyButton
            text="Add 1"
            variant="success"
            show={true}
            onClick={onClick}
          />
          <MyButton
            text="Add 1 to Second"
            variant="info"
            show={true}
            onClick={onClickSecond}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
