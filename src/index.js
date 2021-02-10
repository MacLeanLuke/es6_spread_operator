import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", "banana", "coconut", ...citrus];

const fullName = {
  fName: "Jamees",
  lname: "Bond"
};

const user = {
  ...fullName,
  id: 7,
  username: "jamesbond007"
};

console.log(user);
