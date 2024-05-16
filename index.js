const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const routes = require("./routes")
app.use(routes)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log("listening to port:" + port)
})

mongoose
    .connect("mongodb+srv://glamnailsbysurbhi:gh9zI2mA4qJNlNWs@cluster0.kpxnbmb.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log("MongoDB Connected!")
    )
    .catch((err) => console.log(err));