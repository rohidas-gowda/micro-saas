import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
    return <div>
        <BrowserRouter>
        <Routes>
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <Route path="/dashboard" exact Component={Dashboard} />
        </Routes>
        </BrowserRouter>
    </div>
}

export default App