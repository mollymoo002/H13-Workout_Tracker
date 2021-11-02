const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout"
  },
  duration: {
    type: Number,
    required: "Enter the length of the workout"
  },
  distance: {
    type: Number,
    required: "Enter the distance of the workout"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;