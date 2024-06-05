import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface State {
  value: string;
}

function newState(): State {
  return {
    value: '',
  };
}

export default class TodoInputController {
  defaultState: State = newState();
  state: State = newState();
  updateState: Dispatch<SetStateAction<State>> | undefined;

  useController = () => {
    [this.state, this.updateState] = useState<State>(this.defaultState);
  };

  setState = (state: Partial<State>) => {
    const newState = { ...this.state, ...state };

    if (this.updateState) {
      this.updateState(newState);
      return;
    }

    this.defaultState = newState;
  };

  onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  onClearValue = () => {
    this.setState({ value: '' });
  };
}
