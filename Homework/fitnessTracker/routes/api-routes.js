const router = require("express").Router();
const Workout = require("../models/workout.js");

//  GET route that uses api.js and finds the last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// POST route that creates a new workout in the db
router.post("/api/workouts", async (req, res) => {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// PUT method that updates a workout 
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        {
            $push:
            {
                exercises: body
            }
        },
        {
            new: true, runValidators: true
        }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// GET route 
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// DELETE route
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;