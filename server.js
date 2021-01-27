const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")
const cookies = require("cookie-parser")
require("dotenv").config()

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookies())

require("./server/config/project.config");
require("./server/routes/project.routes")(app)

app.listen(port, () => console.log("server is on!"))



