import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from './UserList'
import TodoList from './TodoList'

const AppCopy = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/userlist" element={<UserList/>} />
                    <Route path="/todoList" element={<TodoList/>} />
                </Routes>
            </Router>
        </>
    )
}
export default AppCopy;