const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        slackUsername: "Johndanlami", 
        backend: true, 
        age:24, 
        bio: "Hi, I am a backend devoper" 
    })
})

app.listen(3000, () => console.log(3000));