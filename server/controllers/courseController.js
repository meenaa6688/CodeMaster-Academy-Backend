const courses = require("../models/courseModel");

const getCourses = (req, res) => {
  res.json(courses);
};

const getCourseById = (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  res.json(course);
};

module.exports = {
  getCourses,
  getCourseById,
};