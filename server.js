require("dotenv").config();
const express = require("express");
const app = express();

const todos = [
  { id: 11, title: "HTML" },
  { id: 22, title: "CSS" },
  { id: 33, title: "JS" },
];

const ids = todos.reduce((acc, obj) => {
  acc.push(obj.id);
  return acc;
}, []);

// console.log(ids);

app.get("/", (req, res) => {
  res.send({ msg: "welcome" });
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
  //   console.log(req.params);
  //   res.send(todos[+req.params.id]);
  const { id } = req.params;
  console.log(id);

  if (ids.includes(+id)) {
    const index = todos.findIndex((item) => item.id === +id);
    res.send(todos[index]);
  } else {
    res.status(404).send({ msg: "not found" });
  }

  //   todos.forEach((obj, index) => {
  //     if (obj.id === +id) {
  //       res.send(todos[index]);
  //     } else {
  //       res.status(404).send({ msg: "not found" });
  //     }
  //   });

  //   console.log("AAA");
});

app.use((req, res) => {
  res.status(404).send({ msg: "resource not found" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server running on port :", port));
