const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/topRankings", async (req, res) => {
    const { limit, offset } = req.query;
    const lim = limit === undefined ? 20 : isNaN(limit) ? 20 : Number(limit);
    const off = offset === undefined ? 0 : isNaN(offset) ? 0 : Number(offset);
    const topper = await data.slice(off, off + lim);
   console.log(req.query);
  
    res.send(topper);
  });


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app; 
