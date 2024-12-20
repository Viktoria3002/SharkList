import React from 'react';
import { useState } from 'react';

const Todo = ({ todo, editCheckBoxValue, editModeValue, editTodo, deleteTodo }) => {
  const [todoValue, setTodoValue] = useState(todo.value);

  const editModeAndSave = () => {
    editModeValue(todo.id);
    editTodo(todoValue, todo.id);
  };

  return (
    <div>
      <li id={todo.id}>
        {todo.isEdit ? (
          <input onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
        ) : (
          todo.value
        )}
        <button onClick={() => editCheckBoxValue(todo.id)}>{todo.isComplete ? '✓' : '❌'}</button>

        <button onClick={editModeAndSave}>{todo.isEdit ? 'Сохранить' : 'Редактировать'}</button>
        <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
      </li>
    </div>
  );
};

export default Todo;
