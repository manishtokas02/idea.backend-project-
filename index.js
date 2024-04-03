
const express = require('express')

const app = express()

app.use(express.json())


require("./routes/idea.routes")(app)


app.listen(3000, ()=>{
    console.log("App started on the port num ", 3000)
})



//git remote add origin <remote_repository_url