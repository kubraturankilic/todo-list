import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div className='todoListBox'>
        <h1>Daily To Do List</h1>
        <AddTodo />

        <Footer />
        
        <VisibleTodoList />
    </div>
);

export default App;