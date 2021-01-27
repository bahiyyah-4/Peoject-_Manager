import { navigate } from "@reach/router"
import axios from "axios"
import { useState } from 'react'

const Login = ({ setUser }) => {
    const [inputErrors, setInputErrors] = useState([])
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/login", inputFields)
            .then((res) => {
                console.log(res.data.user)
                setUser(res.data.user)
                navigate('/dashboard')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(err.response)
                const errorArr = [];
                for (var key of Object.keys(errorResponse)) {
                    console.log(key)
                    errorArr.push(errorResponse[key])
                }
                setInputErrors(errorArr)
            })
    }

    const handleChange = (e) => {
        console.log("changing state")
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> email<input type="text" name="email" onChange={handleChange} /></p>
            <p>password<input type="password" name="password" onChange={handleChange} /></p>
            <button type="submit">Login</button>
            {inputErrors.map((err, idx) => <p key={idx}>{err}</p>)}
        </form>
    )
}
export default Login
