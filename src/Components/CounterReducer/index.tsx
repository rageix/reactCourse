import MyButton from '../MyButton';
import { Card } from 'react-bootstrap';
import { useReducer } from 'react';

interface MegaState {
  counter: number;
  counter2: number;
}

function newMegaState(): MegaState {
  console.log('newMegaState()');
  return {
    counter: 1,
    counter2: 1,
  };
}

enum ActionType {
  incrementCounter,
  incrementCounter2,
}

interface Action {
  type: ActionType;
}

function reducer(state: MegaState, action: Action): MegaState {
  switch (action.type) {
    case ActionType.incrementCounter:
      return { ...state, counter: state.counter + 1 };
    case ActionType.incrementCounter2:
      return { ...state, counter2: state.counter2 + 1 };
  }
}

export default function CounterReducer() {
  // const [counter, setCounter] = useState<number>(1);
  // const [counter2, setCounter2] = useState<number>(1);
  // const [megaState, setMegaState] = useState<MegaState>(newMegaState());
  const [state, dispatch] = useReducer<
    (state: MegaState, action: Action) => MegaState,
    MegaState
  >(reducer, newMegaState(), newMegaState);

  function onClick() {
    // setCounter(counter + 1);
    // setMegaState({ ...megaState, counter: megaState.counter + 1 });
    dispatch({ type: ActionType.incrementCounter });
  }

  function onClickSecond() {
    // setCounter2(counter2 + 1);
    // setMegaState({ ...megaState, counter2: megaState.counter2 + 1 });
    dispatch({ type: ActionType.incrementCounter2 });
  }

  return (
    <Card>
      <Card.Body>
        <div>Reducer</div>
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
