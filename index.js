// import packages into the app. Express, body-parser, 
//const sql=require("./app/Database/db")
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const cors = require("cors");
//const uuid = require('uuid')
app.use(cors()); 
const path = require('path')
// const fileUpload=require('express-fileupload')
// app.use(fileUpload())
// set static folder
app.use(express.static(path.join(__dirname, 'public')));
const axios = require('axios')



const db = require("./app/sequelize");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
db.sequelize.sync()

  require("./app/tutorial/tutorial.routes.js")(app)
//  require("./app/Help/help.routes.js")(app)
 require("./app/members/members.routes.js")(app)
//  require("./app/Notifications/notifications.routes.js")(app)

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
//   });


// Connect to port
const port = process.env.PORT || 4000     

app.listen(port, ()=> console.log(`listening on port ${port}...`)); 