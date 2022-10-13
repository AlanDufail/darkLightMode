import { Button } from "react-bootstrap";


const itemStyle = {
    backgroundColor: 'AntiqueWhite'
}

const itemNameStyle = {
    textAlign: "center",
    fontSize: '22px',
    color: 'black'
}

function TodoListItem({listItem, todoList, setTodoList}) {




    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id))
    }

    return(
        <div style={itemStyle}>
            <h5 style={itemNameStyle}>{listItem.name}</h5>
            <Button onClick={deleteTodoItem} variant="danger">DONE</Button>
        </div>
    )

}

export default TodoListItem;