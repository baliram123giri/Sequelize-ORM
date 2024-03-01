const express = require("express")
require("./model/tables")

const app = express()

app.use(express.json())

//User router
app.use("/api/user", require("./routes/userRoutes"))
//Contact router
app.use("/api/contact", require("./routes/contactRoutes"))

app.use("", (req, res) => res.status(404).json({ message: "Url not found!" }))
//create article
app.post("/article", async (req, res) => {
    try {
        // const data = await prismaClient.article.createMany({
        //     data: req.body
        // })
        return res.json({ data, message: "Created Succesfully" })
    } catch (error) {
        res.status(500).json(error?.message)
    }
})


app.listen(5000, console.log("Running"))

