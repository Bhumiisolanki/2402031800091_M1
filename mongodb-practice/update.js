const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practicedb');

const Student = mongoose.model('Student', {
  name: String,
  branch: String,
  cgpa: Number
});

Student.updateOne(
  { name: "Bhumi" },
  { $set: { cgpa: 9.5 } }
).then(() => {
  console.log("Updated!");
  mongoose.disconnect();
});