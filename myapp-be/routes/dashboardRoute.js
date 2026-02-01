const express = require("express")
const { getDashboard, addDashboard } = require("../controllers/dashboardController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/", authMiddleware, getDashboard)
router.post("/", authMiddleware, addDashboard)

module.exports = router
