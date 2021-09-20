import react, {useState,useEffect} from 'react';
import './App.css';

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
      <h1>Nazmus's Todo List</h1>
    </header>
    <Form 
      inputText={inputText} 
      todos={todos} 
      setToDos={setToDos} 
      setInputText={setInputText} 
      setStatus={setStatus}
    />
    <TodoList 
      setToDos={setToDos} 
      todos={todos}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;
