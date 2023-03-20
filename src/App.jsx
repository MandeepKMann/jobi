import { useState } from 'react'
import './App.scss'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

    const [userSearch, setUserSearch] = useState({
        query: "",
        category: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setUserSearch((prev) => {
            return {...prev, [name]: value}
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Routes>
            <Route 
                path="/" element={<Home />} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                userSearch={userSearch}
                setUserSearch={setUserSearch}
            />
        </Routes>

    )
}

export default App
