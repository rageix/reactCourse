import { Button, Form, ListGroup } from 'react-bootstrap';
import classNames from '../../../Lib/ClassNames.ts';
import { ITodo } from '../types.ts';
import TodoController from '../TodoController.ts';

interface Props {
  item: ITodo;
  todoController: TodoController;
  index: number;
}

export default function TodoItem({ item, todoController, index }: Props) {
  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center">
        <div>
          <Form.Check
            id={`todoCheck-${item.id}`}
            onChange={() => todoController.onChangeDone(index)}
          />
        </div>
        <div
          className={classNames(
            'flex-grow-1 ms-3',
            item.done ? 'text-decoration-line-through' : null,
          )}
        >
          {item.text}
        </div>
        <div className="ms-3">
          <Button
            variant="danger"
            onClick={() => todoController.onClickRemove(index)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}
