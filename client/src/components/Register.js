import { navigate } from '@reach/router'
import axios from 'axios'
import { useState } from 'react'

const Register = ({ setUser }) => {
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    console.log(inputFields)

    const [inputErrors, setInputErrors] = useState([])
    console.log(inputErrors)
    const handleSubmit = (event) => {
        console.log("submitting")
        event.preventDefault()

        axios
            .post("http://localhost:8000/api/register", inputFields)
            .then((res) => {
                console.log(res.data)

                setUser(res.data.user)

                navigate("/dashboard")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (var key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
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
            <p> firstName: <input type="text" name="firstName" onChange={handleChange} /></p>
            <p>lastName :<input type="text" name="lastName" onChange={handleChange} /> </p>
            <p> email:<input type="text" name="email" onChange={handleChange} />  </p>
            <p> password :<input type="password" name="password" onChange={handleChange} /> </p>
            <p> confirmPassword: <input type="password" name="confirmPassword" onChange={handleChange} /></p>
            <button type="submit">Register</button>
            {inputErrors.map((err, idx) => <p key={idx}>{err}</p>)}
        </form>
    )
}
export default Register