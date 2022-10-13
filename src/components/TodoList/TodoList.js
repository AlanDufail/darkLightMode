import TodoListItem from "./TodoListItem";

function TodoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((listItem) => (
        <TodoListItem key={listItem.id} name={listItem.name} listItem={listItem} setTodoList={setTodoList} todoList={todoList}/>
      ))}
    </div>
  );
}

export default TodoList;
