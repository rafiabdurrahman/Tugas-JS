const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path')
const mongoose = require('mongoose');

const route = require('./router/router');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// connect to db
main().catch(err => console.log(err));


// connect to db
async function main() {
  await
    mongoose.connect(
      'mongodb+srv://rafimerod:rafimerod28@cluster0.9pytygq.mongodb.net/sekolah?retryWrites=true&w=majority', (err) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log("db_connected")
        }
      });
}

// use
app.use('/', route)

// port
const port = 4000
app.listen(port, () => { console.log(`server is up ${port}`) })