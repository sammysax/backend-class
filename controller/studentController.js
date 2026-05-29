// export function getStudents(request, response) {
//   const students = [
//     { id: 1, name: "John Doe", age: 20 },
//     { id: 2, name: "Jane Smith", age: 22 },
//     { id: 3, name: "Alice Johnson", age: 19 },
//     { id: 4, name: "Bob Brown", age: 21 },
//     { id: 5, name: "Charlie Davis", age: 23 },
//     { id: 6, name: "Emily Wilson", age: 20 },
//     { id: 7, name: "David Lee", age: 22 },
//     { id: 8, name: "Sophia Taylor", age: 19 },
//     { id: 9, name: "Michael Anderson", age: 21 },
//     { id: 10, name: "Olivia Martinez", age: 23 }
    
//   ];

// const {id, name, age} = request.query;

// let result = students;

// if (id) {
//   result = result.filter(item => item.id === Number(id));
// }

// if (name) {
//   result = result.filter(item => item.name.toLowerCase() === name.toLowerCase()
// );
// }

// if (age) {
//   result = result.filter(item => item.age === Number(age));
// }

//   response.json(result);
// }

import {Student} from "../model/student.js";

export const createStudent = async (req, res) => {
  try {
    const { name, email, grade, age } = req.body;

    const student = await Student.create({ name, email, grade, age });
    console.log("Student created:", student);
    res.status(201)
    .json({
      message: "Student created successfully",
      student
    });
  } 
    catch (error) {
      res.status(500).json({message: error.message});
    }
  };


  export const getStudent = async (req, res) => {
    try {
      const students = await Student.find();

      res.status(200).json({
        message: "Students fetched successfully",
        students
      });
    }
      catch (error) {
        res.status(500).json({message: error.message});
      }
  };