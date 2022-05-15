const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require('mongoose');
const mlabURI = 'mongodb+srv://ngosontung:1312@cluster0.9tgoq.mongodb.net/databaseUser?retryWrites=true&w=majority'
const app = express();
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/user")

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.send(`Listening on ${PORT}`);
});

mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

app.use("/v1/user" ,userRouter);

