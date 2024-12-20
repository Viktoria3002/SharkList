import { useState } from 'react';
import AddTodoInput from './components/AddTodoInput';
import TodosList from './components/TodosList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      value: 'Сделать прогу',
      id: '123',
      isComplete: false,
      isEdit: false,
    },
    {
      value: 'Сделать матан',
      id: '234',
      isComplete: true,
      isEdit: true,
    },
  ]);

  const addTodo = (text) => {
    if (text) {
      setTodos([...todos, { value: text, id: new Date(), isComplete: false, isEdit: false }]);
    }
  };

  const editCheckBoxValue = (completeValue) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === completeValue) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    );
  };

  const editModeValue = (idTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === idTodo) {
          todo.isEdit = !todo.isEdit;
        }
        return todo;
      }),
    );
  };

  const editTodo = (todoValue, idTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === idTodo) {
          todo.value = todoValue;
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (idTodo) => {
    setTodos(todos.filter((todo) => todo.id !== idTodo));
  };

  return (
    <div className="App">
      <h1>SharkList</h1>
      <AddTodoInput addTodo={addTodo} />
      <TodosList
        todos={todos}
        editCheckBoxValue={editCheckBoxValue}
        editModeValue={editModeValue}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
