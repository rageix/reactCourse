import { Card, ListGroup } from 'react-bootstrap';
import TodoInput from './TodoInput';
import { useState } from 'react';
import TodoController from './TodoController.ts';
import TodoItem from './TodoItem';

export default function Todo() {
  const [controller] = useState(new TodoController());
  controller.useController();

  const state = controller.state;

  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <Card data-bs-theme="dark">
        <Card.Header>Todos</Card.Header>
        <Card.Body>
          <TodoInput todoController={controller} />
          <ListGroup className="mt-3">
            {state.items.map((v, i) => (
              <TodoItem
                key={v.id}
                item={v}
                todoController={controller}
                index={i}
              />
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
