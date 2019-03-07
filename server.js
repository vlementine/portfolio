const express = require("express");
const app = express();
const port = 8080;

app.use(express.static('./'))

app.get("*", (req, res) => {
    res.sendFile('./index.html')
});

app.listen(port, () => console.log(`Server started on port ${port}`));