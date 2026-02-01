const fs = require("fs")
const db = JSON.parse(fs.readFileSync("../db.json", "UTF-8"))
data = {id:1,title:'test',content:'testtt'}
db.dashboard.push(data);
fs.writeFileSync("../db.json", JSON.stringify(data, null, 2), "utf-8");
