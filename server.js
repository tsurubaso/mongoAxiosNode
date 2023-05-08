const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;
const Thread = require("./models/Thread");

app.use(express.static("public"));

mongoose.connect(
   // "mongodb+srv://sb:123@cluster0.djxomty.mongodb.net/threads?retryWrites=true&w=majority"
    "mongodb://sb:123@ac-cbvzroe-shard-00-00.djxomty.mongodb.net:27017,ac-cbvzroe-shard-00-01.djxomty.mongodb.net:27017,ac-cbvzroe-shard-00-02.djxomty.mongodb.net:27017/?ssl=true&replicaSet=atlas-yghdrx-shard-0&authSource=admin&retryWrites=true&w=majority"
    ).then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
//get
app.get("/api/v1/threads", async (req, res) => {
try {
    const allThreads= await Thread.find({});
    res.status(200).json(allThreads);
    
} catch (error) {
    console.log(error);
}

});

//post

app.post("/api/v1/thread", async (req, res) => {
try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
    
    
} catch (error) {
    console.log(error);
}

});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
