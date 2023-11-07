const express = require('express');
const Student= require('./models/studentModel.js');
const Faculty = require('./models/facultyModel.js');
const app = express();
const PORT = 5000;

app.use(express.json());
require('./db.js')

app.get("/", (req, res) => { res.send("Hello science!..."); });
// app.get("/students", (req, res) => { res.send("Hello students!...") });
//app.get("/faculty", (req, res) => { res.send("Hello Faculty!...") });

//app.post('/student', async (req, res) => {
//     try {
//         const data = req.body;
//         const createdStudent = new Student(data);
//       await  createdStudent.save();
//         res.send("Student created");
//     } catch (error) {
//         console.log(error);
//     }

// app.get('/student',async (req,res) =>{
//     try{
//         const studentList = await Student.find();
//         res.send(studentList);
//     } catch (error){
//         console.log(error);
//     }
// })
// app.post('/student', async (req, res) => {
//     try {
//         const data = req.body;
//         const createdStudent = new Student(data);
//       await  createdStudent.save();
//         res.send("Student created");
//     } catch (error) {
//         console.log(error);
//     }
// })
app.get('/faculty',async (req,res) =>{
       try{
             const facultyList = await Faculty.find();
             res.send(facultyList);
         } catch (error){
            console.log(error);
         }
    })
    app.post('/faculty', async (req, res) => {
        try {
            const data = req.body;
            const createdFaculty = new Faculty(data);
          await  createdFaculty.save();
            res.send("Faculty created");
        } catch (error) {
            console.log(error);
        }
    });
    //update a student
    // app.put("/student/:id", async (req,res) =>{
    //     try{
    //         const studentId = req.params.id;
    //         await Student.updateOne({ id:studentId} ,{ $set:req.body });
    //         res.send("Student updated")
    //     }catch(error){
    //         console.log(error);
    //     }
    // });
    // app.delete("/student/:id",async (req,res) =>{
    //     try{
            
    //         await Student.deleteOne({ id: req.params.id });
    //         res.send("Student deleted")
    //     }catch(error){
    //         console.log(error);
    //     }
        
    // });
    app.put("/faculty/:id", async (req,res) =>{
        try{
            const facultyId = req.params.id;
            await Faculty.updateOne({ id:facultyId} ,{ $set:req.body });
            res.send("Faculty updated")
        }catch(error){
            console.log(error);
        }
    });
    app.delete("/faculty/:id",async (req,res) =>{
        try{
            
            await Faculty.deleteOne({ id: req.params.id });
            res.send("Faculty deleted")
        }catch(error){
            console.log(error);
        }
        
    });


// create a resource
//app.post()

app.listen(PORT, function () { console.log(`server is running on localhost:${PORT}`); });

