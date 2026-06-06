const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practicedb');

const Student = mongoose.model('Student', {
  name: String,
  branch: String,
  cgpa: Number
});

const s = new Student({ name: "Bhumi", branch: "CSE", cgpa: 9.1 });
s.save().then(() => {
  console.log("Student inserted!");
  mongoose.disconnect();
});