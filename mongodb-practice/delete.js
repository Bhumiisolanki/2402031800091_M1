const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practicedb');

const Student = mongoose.model('Student', {
  name: String,
  branch: String,
  cgpa: Number
});

Student.deleteOne({ name: "Bhumi" }).then(() => {
  console.log("Deleted!");
  mongoose.disconnect();
});