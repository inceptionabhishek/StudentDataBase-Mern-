import mongoose from 'mongoose';


const studentschema = mongoose.Schema({
  registrationNumber: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});


const student =mongoose.model('student',studentschema);


export default student;