import { useEffect, useState } from 'react'
import './App.scss'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom';
import { getTalent, getReview } from './sanity';

function App() {

    const [userSearch, setUserSearch] = useState({
        query: "",
        category: ""
    })


    const [talent, setTalent] = useState([])
    const [review, setReview] = useState([])

    useEffect(() => {
        const fetchTalent = async () => {
            const talentList = await getTalent()
            setTalent(talentList)
        }
        fetchTalent();

        const fetchReview = async () => {
            const reviewList = await getReview()
            setReview(reviewList)
        }

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
