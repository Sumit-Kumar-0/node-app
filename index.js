const express = require('express');
const app = express();

require('dotenv').config();
console.log(process.env);

app.get('/students/:std1', (req, res) => {
    console.log(req.params);
    const std1 = req.params.std1;

    // res.json({std1: std1});
    res.json({std1});
})


const PORT = process.env.PORTNO || 5000;
const portMessege = `The server is running on port ${PORT}`
app.listen(PORT, () => {
    console.log(portMessege);
});