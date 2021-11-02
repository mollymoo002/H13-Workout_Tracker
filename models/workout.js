const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
        type: {
            type: String,
            trim: true
        },
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
    },
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;