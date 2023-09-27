//here we shall be writing controller functions

const getWorkout = async (req, res) => {
    let workout = await {rep: 20, weight: 40, name: 'curls'};
    if(!workout) {
        return res.status(404).json({error: 'No workouts found'});
    }
    res.status(200).json(workout);
}

module.exports = getWorkout;