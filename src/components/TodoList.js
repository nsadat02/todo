import react from "react";
//import components
import Todo from "./Todo";

const TodoList = ({ todos, setToDos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        setToDos={setToDos} 
                        todo={todo}
                        todos={todos} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;