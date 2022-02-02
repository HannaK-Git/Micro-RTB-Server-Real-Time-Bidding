let express = require("express");
const getRequestRouter = require("./getRequestRouter");

let app = express();
let PORT = 8000;

app.use("/api/urlparams", getRequestRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
