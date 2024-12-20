import React, { useState } from 'react';

const AddTodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const addTodoAndCleanInput = () => {
    addTodo(inputValue.trim());
    setInputValue('');
  };
  return (
    <div className="AddTodoInput">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
      <button onClick={addTodoAndCleanInput}>Добавить</button>
    </div>
  );
};

export default AddTodoInput;
