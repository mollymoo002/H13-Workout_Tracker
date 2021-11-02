const router = require("express").Router();
const db = require("../models/workout.js");

// Get function for the workout
router.get("/api/workout", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: "$exercises.duration"},
      },
    },
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get function for the range
router.get("/api/workout/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: "$exercises.duration"},
        totalWeight: {$sum: "$exercises.weight"},
      },
    },
  ])
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

// post route for workouts
router.post("/api/workout", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

// put function for exercises
router.put("/api/workout/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {$push: {
      exercises: req.body
    },
  },
  { new: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;