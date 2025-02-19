import { useState } from 'react'
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos =
      [...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
      ];
    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");

  const removeTodo = (id) => {
    const newTodos = [...todos] // coleta todos os meus Todos
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null); // verifica os todos
    setTodos(filteredTodos); // atualiza a lista de todos
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1> Lista de Tarefas </h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos.
          filter(
            (todo) => todo.text.toLowerCase().includes(search.toLocaleLowerCase()) // Se eu tiver caracteres igual os do título 
          ).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
