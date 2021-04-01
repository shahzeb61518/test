const express = require("express");

// Npm Library for justifying paragraph
const justify = require("justified");

const app = express();

app.get("/", (req, res) => {
  res.send("Testing Project!");
});

// here is the paragraph
let justifyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log('Bydefault width is 55> ', justify(justifyText));

// console.log('But can be set here like this> ',justify(justifyText,{ width: 100}));

const port = 3000;
app.listen(port, () => {
  console.log("App running at:" + port);
});
