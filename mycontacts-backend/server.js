const express = require("express")
const app = express()
const errorHandler = require("./middleware/errorHandler")
const port = process.env.PORT || 5000
const dotenv = require("dotenv").config()

connectDB = require("./config/db_connection")
connectDB()
// app.get("api/contacts", (req, res) => {
// 	res.status(200).json({ message: "get all contacts" })
// })
//middlewre
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})

