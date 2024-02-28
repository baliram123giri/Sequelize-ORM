const express = require("express")
const app = express()
require("./model/index")

app.use(express.json())


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

