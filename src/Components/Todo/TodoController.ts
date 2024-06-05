import { Dispatch, SetStateAction, useState } from 'react';
import { ITodo } from './types.ts';
import { nanoid } from 'nanoid';

interface State {
  items: ITodo[];
}

function newState(): State {
  return {
    items: [],
  };
}

export default class TodoController {
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

  onAddTodo = (value: string) => {
    const newItems = [...this.state.items];

    newItems.push({
      id: nanoid(),
      text: value,
      done: false,
    });

    this.setState({ items: newItems });
  };

  onChangeDone = (index: number) => {
    const newItems = [...this.state.items];

    const item = newItems.splice(index, 1)[0];

    item.done = !item.done;

    if (item.done) {
      newItems.push(item);
    } else {
      const index = newItems.findIndex((v) => v.done);

      if (index === -1) {
        newItems.push(item);
      } else {
        newItems.splice(index, 0, item);
      }
    }

    this.setState({ items: newItems });
  };

  onClickRemove = (index: number) => {
    const newItems = [...this.state.items];

    newItems.splice(index, 1);

    this.setState({ items: newItems });
  };
}
