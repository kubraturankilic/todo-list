import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <div>
        {todos.map(todo =>
            <div className='todoListItem' key={todo.id}>
                <Todo
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            >
            </Todo>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
            
        )}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
