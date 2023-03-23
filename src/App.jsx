import { useEffect, useState } from 'react'
import './App.scss'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom';


function App() {

    const [userSearch, setUserSearch] = useState({
        query: "",
        category: ""
    })

    let PROJECT_ID = "tiou2dq0";
      let DATASET = "production";
      let QUERY = encodeURIComponent('*[_type == "talent"]');

      // Compose the URL for your project's endpoint and add the query
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    const [talent, setTalent] = useState([])

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setTalent(data.result));

    }, [])
        // skv8x7GY9wUzAulMq6i2BxbXAFv1Nfmf2WDKc8PjX7kxF8dZMeQ0Dt25ytqep3ciNghKeWlyNCgkbGefVKtlDQDLlWGdxnYteg1WxknQ51fVg282afltMxzKJ5CSuhz6LQ9rCWjLfEOY0dlwSXpiUM9Co8m0ezow2VxRhtE9jouOy2wH3Zvj

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
            <Route path="/" 
                element={<Home
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    userSearch={userSearch}
                    setUserSearch={setUserSearch}
                    talent={talent}
                />} 
            />
        </Routes>

    )
}

export default App
