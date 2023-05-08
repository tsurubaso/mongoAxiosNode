const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

app.use(express.static("public"));

mongoose.connect(
    "mongodb://sb:123@ac-cbvzroe-shard-00-00.djxomty.mongodb.net:27017,ac-cbvzroe-shard-00-01.djxomty.mongodb.net:27017,ac-cbvzroe-shard-00-02.djxomty.mongodb.net:27017/?ssl=true&replicaSet=atlas-yghdrx-shard-0&authSource=admin&retryWrites=true&w=majority"
    
    
    ).then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
