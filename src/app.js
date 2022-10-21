const express = require("express")
const path = require("path")
const morgan = require("morgan")  
const bodyParser = require("body-parser")
require("./database")

const app = express()
const indexRoutes = require('./routes/indexRoutes')

// settings
app.set("port" , process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use('/public', express.static(path.join(__dirname, "public")))

// middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended:false}))

// routes
app.use(indexRoutes)

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})

