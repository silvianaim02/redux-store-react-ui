import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator } from '../states/todos/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    const id = `todo-${+new Date()}`; // generate id using timestamp
    dispatch(addTodoActionCreator({ id, text }));
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(toggleTodoActionCreator(id));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    dispatch(deleteTodoActionCreator(id));
  }

  // console.log(todos);

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
