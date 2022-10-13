import { Button } from "react-bootstrap";





function TodoListItem({listItem, todoList, setTodoList}) {




    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id))
    }

    return(
        <div className="itemStyle">
            <h5 className="itemNameStyle">{listItem.name}</h5>
            <Button onClick={deleteTodoItem} variant="danger">DONE</Button>
        </div>
    )

}

export default TodoListItem;