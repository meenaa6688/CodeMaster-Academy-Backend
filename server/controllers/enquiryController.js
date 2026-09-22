const enquiries = require("../models/enquiryModel");

const createEnquiry = (req, res) => {
  const {
    name,
    email,
    phone,
    course,
    message,
  } = req.body;

  // Validation
  if (!name || !email || !phone || !course) {
    return res.status(400).json({
      message: "Name, email, phone and course are required",
    });
  }

  const newEnquiry = {
    id: enquiries.length + 1,
    name,
    email,
    phone,
    course,
    message: message || "",
    createdAt: new Date(),
  };

  enquiries.push(newEnquiry);

  res.status(201).json({
    message: "Enquiry submitted successfully",
    enquiry: newEnquiry,
  });
};

const getEnquiries = (req, res) => {
  res.json(enquiries);
};

module.exports = {
  createEnquiry,
  getEnquiries,
};