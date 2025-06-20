require("dotenv").config();
const express = require("express");
const app = express();

const todos = [
  { id: 11, title: "HTML" },
  { id: 22, title: "CSS" },
  { id: 33, title: "JS" },
];

// const ids = todos.reduce((acc, obj) => {
//   acc.push(obj.id);
//   return acc;
// }, []);

// console.log(ids);

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  //   console.log(req.params);
  //   res.send(todos[+req.params.id]);
  const { id } = req.params;
  console.log(id);

  const output = todos.filter((item) => item.id === +id);
  // console.log(output);
  if (output.length <= 0) return res.status(404).json({ msg: "no data" });
  res.json(output);

  // if (ids.includes(+id)) {
  //   const index = todos.findIndex((item) => item.id === +id);
  //   res.send(todos[index]);
  // } else {
  //   res.status(404).send({ msg: "not found" });
  // }

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
  res.status(404).json({ msg: "resource not found" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server running on port :", port));
