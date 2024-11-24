import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UsersPage from './pages/UsersPage'
import RolesPage from './pages/RolesPage'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="/roles" element={<RolesPage />} />
            </Routes>
        </Router>
    )
}

export default App
