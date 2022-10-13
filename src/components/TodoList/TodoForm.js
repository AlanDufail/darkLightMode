import { nanoid } from "nanoid";
import { Form, Button } from "react-bootstrap";

function TodoForm({ todo, setTodo, todoList, setTodoList }) {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {name:todo, id:nanoid()}]);
    setTodo("");
  };

  return (
    <div className="container">
      <h1>Add Todo :</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={todo} onChange={handleChange} />
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default TodoForm;