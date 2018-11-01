const express = require("express");
const math = require("mathjs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const history = [];

app.use(bodyParser.json());

app.get("/calc", (req, res) => res.send(history));

app.post("/calc", function(req, res) {
  const results = {
    result: math.eval(req.body.expression)
  };
  history.push([req.body, results]);
  res.send(results);
});

app.listen(port, () =>
  console.log(`Calculator app listening on port ${port}!`)
);
