const express = require('express');
const app = express();
const port = 8080 || 80;

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => { 
    console.log(`server started at http://localhost:${port}`);
});