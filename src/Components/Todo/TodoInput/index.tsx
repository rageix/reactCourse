import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import TodoInputController from './TodoInputController.ts';
import _ from 'lodash';
import TodoController from '../TodoController.ts';

interface Props {
  todoController: TodoController;
}

export default function TodoInput({ todoController }: Props) {
  const [controller] = useState(new TodoInputController());
  controller.useController();

  function onClickAdd() {
    todoController.onAddTodo(controller.state.value);
    controller.onClearValue();
  }

  const state = controller.state;

  return (
    <Form>
      <Form.Group>
        <Form.Control
          placeholder="What do you need done?"
          value={state.value}
          onChange={controller.onChangeValue}
        />
        <Button
          variant="success"
          className="mt-2 w-100"
          disabled={_.isEmpty(state.value)}
          onClick={onClickAdd}
        >
          Add
        </Button>
      </Form.Group>
    </Form>
  );
}
