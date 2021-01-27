import { navigate } from "@reach/router"
import axios from "axios"
import { useState } from "react"
import Register from "../components/Register"
import Login from "../components/Login"

const Login1 = () => {
    const [user, setUser] = useState(null)

    return (
        <div>
            <Register path="/register" setUser={setUser} />
            <Login path="/login" setUser={setUser} />
        </div>
    )
}
export default Login1