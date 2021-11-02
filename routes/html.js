const router = require("express").Router();
const path = require("path");

// Get function for the home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public"));
});

// Get function for exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
});

// Get function for stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"))
})

module.exports = router;