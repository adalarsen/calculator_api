Prerequisites:

Node with dependencies (also given in package.json):
Express
Math.js
Body-Parser

In project directory, run:
node index.js

Example usage:

POST http://localhost:3000/calc

{"expression": "-1 _ (2 _ 6 / 3) " }

Returns

{ "result" : "-4" }

GET http://localhost:3000/calc

Returns

[{"expression": "-1 * (2 * 6 / 3) " }, { "result" : "-4" }]
