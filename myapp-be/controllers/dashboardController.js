const fs = require("fs")

function getDashboard(req, res) {
  const db = JSON.parse(fs.readFileSync("./db.json", "UTF-8"))
  res.json(db.dashboard)
}

function addDashboard(req, res) {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "UTF-8"))
    console.log(db);
    console.log(req.body); // <-- important
    const newDashboard = {
      id: Math.random(),
      title: req.body.title,
      content: req.body.content
    };

    db.dashboard.push(newDashboard);
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2), "utf-8");

    res.status(201).json(newDashboard);
  } catch (err) {
    res.status(500).json({ message: "Failed to add Dashboard" });
  }
}

module.exports = { getDashboard, addDashboard }
