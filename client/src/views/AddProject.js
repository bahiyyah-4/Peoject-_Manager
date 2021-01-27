import React, { useState } from "react";
import axios from "axios"

import { Link } from "@reach/router";



const AddProject = (props) => {
    const [name, setname] = useState("")
    const [date, setdate] = useState("")
    const [errors, setErrors] = useState([])
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/Projects", {
                name,
                date,
            })
            .then((res) => console.log(res))
            .catch((err) => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr)
            })
    }
    return (
        <>
            <h1>Peoject Manager</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Project Name</label>
                    <br />
                    <input type="text" onChange={(e) => setname(e.target.value)} />
                </p>
                <p>
                    <label>Date </label>
                    <br />
                    <input type="date" onChange={(e) => setdate(e.target.value)} />
                </p>
                <input class="btn btn-secondary" type="submit" />
            </form>
            <br />
            <Link class="btn btn-outline-secondary" to="/dashboard">Home</Link>
        </>
    )
}

export default AddProject;