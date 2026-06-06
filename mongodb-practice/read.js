const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practicedb');

const Student = mongoose.model('Student', {
  name: String,
  branch: String,
  cgpa: Number
});

Student.find().then(data => {
  console.log("All Students:", data);
  mongoose.disconnect();
});