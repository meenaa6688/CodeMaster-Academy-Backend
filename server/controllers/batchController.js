const batches = require("../models/batchModel");

const getBatches = (req, res) => {
  res.json(batches);
};

const getBatchById = (req, res) => {
  const id = parseInt(req.params.id);

  const batch = batches.find((batch) => batch.id === id);

  if (!batch) {
    return res.status(404).json({
      message: "Batch not found",
    });
  }

  res.json(batch);
};

module.exports = {
  getBatches,
  getBatchById,
};