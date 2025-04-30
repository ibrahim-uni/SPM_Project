import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import xlsx from "xlsx";
import multer from "multer";
import mongoose from "mongoose";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());


app.use(express.static(__dirname));


// mongoose.connect('mongodb://127.0.0.1:27017/your-db-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const makeupRequests = [];


app.post('/api/makeup', (req, res) => {
  const { userId, courseCode } = req.body;

  if (!userId || !courseCode) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const request = {
    userId,
    courseCode,
    date: new Date().toLocaleString(),
  };

  makeupRequests.push(request);
  console.log('Current Requests:', makeupRequests);

  res.json({ message: 'Request submitted successfully!' });
});



app.get('/api/makeup-requests', (req, res) => {
  res.json(makeupRequests);
});

console.log('Current Requests:', makeupRequests);



app.post('/login', async (req, res) => {
    try {
         const {Id, password } = req.body;
         const finduser = users.find((data) => Id == data.Id) ;
         if(!finduser){
          res.status(400).send("Wrong Id or password")
         }
         const passwordMatch = await bcrypt.compare(password, finduser.password);
         if(passwordMatch){
          res.status(200).send("Logged in successfully!")
         }else {
          res.status(400).send("Wrong Id or password")
         }
    }
    catch (err) {
           res.status(500).send({message: err.message})
    }
});


const studentSchema = new mongoose.Schema({
  student_id: { type: String, unique: true },
  name: String,
  grade: String,
});

const Student = mongoose.model('Student', studentSchema);

function convertGradeToLetter(grade) {
  const numericGrade = Number(grade);
  if (numericGrade < 0 || numericGrade > 100) {
    throw new Error(`Grade must be between 0 and 100`);
  }
  if (numericGrade >= 90) return 'AA';
  if (numericGrade >= 85) return 'BA';
  if (numericGrade >= 80) return 'BB';
  if (numericGrade >= 75) return 'CB';
  if (numericGrade >= 65) return 'CC';
  if (numericGrade >= 55) return 'DC';
  if (numericGrade >= 45) return 'DD';
  if (numericGrade >= 35) return 'FD';
  if (numericGrade <= 35) return 'FF';
}

const studentsMap = {};

app.post('/upload-excel/:courseCode', upload.single('file'), async (req, res) => {
  const courseCode = req.params.courseCode;
  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheet_name_list = workbook.SheetNames;
    const studentsData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
     
      for (const row of studentsData) {
      const { student_id, grade } = row;

        if (!student_id || grade === undefined || grade === null || grade === '') {
            console.error(`Missing data for student`);
            continue;
             }

      const id = String(student_id);

      if (!studentsMap[id]) {
        studentsMap[id] = {
          student_id: id,
          courses: {}
        };
      }

      let letterGrade = '';

      if (grade === '??') {
        letterGrade = 'DZ';
      } else {
        const numericGrade = Number(grade);

        if (isNaN(numericGrade)) {
          console.error(`Invalid grade format for student ${id}: ${grade}`);
          continue;
        }

        letterGrade = convertGradeToLetter(numericGrade);
      }

      
      studentsMap[id].courses[courseCode] = letterGrade;
    }

    const finalStudents = Object.values(studentsMap);

    res.json({ success: true, students: finalStudents });

  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ success: false, message: 'Error processing file' });
  }
});

function formatExcelTime(value) {
  if (typeof value === 'number') {
    const totalMinutes = Math.round(value * 24 * 60);
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
    const minutes = String(totalMinutes % 60).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  return value?.toString() || '';
}


app.post('/upload-exam-timetable', upload.single('file'), (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const rawData = xlsx.utils.sheet_to_json(sheet);

   
    const timetable = rawData.map((row) => ({
      courseCode: row['Course Code'] || '',
      courseName: row['Course Name'] || '',
      day: row['Day'] || '',
      time: formatExcelTime(row['Time']),
      classroom: row['Classrooms'] || '',
    }));

    res.json({
      success: true,
      message: 'Exam timetable extracted successfully',
      data: timetable
    });

    fs.unlinkSync(req.file.path);

  } catch (error) {
    console.error('Error processing exam file:', error);
    res.status(500).json({ success: false, message: 'Error reading exam file' });
  }
});

app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
  });
  app.listen(3001,'0.0.0.0');