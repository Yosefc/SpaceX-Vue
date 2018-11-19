const express = require("express");
const grapqlHTTP = require("express-graphql");
const PORT = process.env.PORT || 4000;
const schema = require("./schema");
const app = express();

app.use(
  "/graphql",
  grapqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, _ => {
  console.log(`Server running on port: ${PORT}`);
});
