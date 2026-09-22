const trainers = require("../models/trainerModel");

const getTrainers = (req, res) => {
  res.json(trainers);
};

const getTrainerById = (req, res) => {
  const id = parseInt(req.params.id);

  const trainer = trainers.find((trainer) => trainer.id === id);

  if (!trainer) {
    return res.status(404).json({
      message: "Trainer not found",
    });
  }

  res.json(trainer);
};

module.exports = {
  getTrainers,
  getTrainerById,
};