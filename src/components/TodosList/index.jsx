import React from 'react';

import Todo from '../Todo';
const TodosList = ({ todos, editCheckBoxValue, editModeValue, editTodo, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              editCheckBoxValue={editCheckBoxValue}
              editModeValue={editModeValue}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodosList;
