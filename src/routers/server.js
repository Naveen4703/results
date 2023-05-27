const fs = require('fs');
const express=require("express")
const router = new express.Router()


router.get("/test",(req,res)=>{
  res.send({
      name:"server is working"
  })
})

router.post("/searchRollNumber",(req,res) => {

const rollNumber = req.body.number
// Read the text file
fs.readFile('src/jsonFiles/structured-4-1-r19.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Process the file data
 // console.log('File contents:');
 
  data = JSON.parse(data);

  function searchStudentByRollNumber(rollNumber) {
    if (data.hasOwnProperty(rollNumber)) {
      
      return data[rollNumber];
    } else {
      return null; // Roll number not found
    }
  }
  
  // Example usage:
 
  const student = searchStudentByRollNumber(rollNumber);
 // console.log(student)

  if (student) {
    console.log("Student found!");
    console.log("Roll Number:", rollNumber);
    for(let z =0 ; z < student.length; z++){
      if(student[z].Credits < 2 ){
      student[z].Subname += " LAB"
     // console.log(student[z].Subname)
    }
    }
    res.status(200).send({student,roll: `${rollNumber}`})
  } else {
    res.status(200).send({error: "Student not found!"})
    console.log("Student not found!");
  }
  
});

})

module.exports = router

 
  