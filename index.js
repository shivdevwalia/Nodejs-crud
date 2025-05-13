const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Failed");
    }
    const parsedData = JSON.parse(data);
    res.json(parsedData);
  });
});

app.post("/", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Failed");
    }
    const parsedData = JSON.parse(data);
    parsedData.users.push(req.body);

    fs.writeFileSync("db.json", JSON.stringify(parsedData));
    res.send("works");
  });
});

app.put("/:id", (req, res) => {
  const userID = parseInt(req.params.id);
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Failed");
    }
    const parsedData = JSON.parse(data);

    const index = parsedData.users.findIndex((user) => user.id === userID);

    parsedData.users[index] = { ...parsedData.users[index], ...req.body };
    fs.writeFileSync("db.json", JSON.stringify(parsedData));
    res.send("works");
  });
});

app.delete("/:id", (req, res) => {
  const userID = parseInt(req.params.id);
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Failed");
    }
    const parsedData = JSON.parse(data);
    const updatedUsers = parsedData.users.filter((user) => user.id !== userID);
    parsedData.users = updatedUsers;
    fs.writeFileSync("db.json", JSON.stringify(parsedData));
    res.send("works");
  });
});

app.listen(8000, () => {
  console.log("server started");
});
