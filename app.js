import express from 'express'


const app = express()
const port = 3000;

app.use(express.json())

app.listen(port, () =>{
    console.log("server is started on port 3000")
})



app.get("/",(req,res)=>{
    res.render("log")
})
