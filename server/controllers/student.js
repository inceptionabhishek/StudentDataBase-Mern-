import studentData from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const allstudents = await studentData.find();
    res.status(200).json(allstudents);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newstudent = new studentData(student);
  try {
    await newstudent.save();
    res.status(201).json(newstudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
