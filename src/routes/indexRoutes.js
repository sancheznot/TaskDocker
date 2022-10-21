const express = require("express");
const router = express.Router();
const tasks = require("../models/task");

router.get("/", (req, res) => {
  tasks.find({}, (err, task) => {
    if (err) throw err;
    res.render("index", {
      title: "CRUD",
      task: task,
    });
  });
});

router.post("/add", (req, res) => {
  const task = req.body;
  task.status = false;
    tasks.create(task, (err, task) => {
      if (err) throw err;
      res.redirect("/");
    });
});

router.get("/done/:id", (req, res) => {
  const id = req.params.id;
  tasks.findById(id, (err, task) => {
    if (err) throw err;
    task.status = !task.status;
    task.save().then(() => res.redirect("/"));
  });
});

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  tasks.findByIdAndDelete(id, (err, id) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
