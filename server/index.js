const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require('axios');
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON bodies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const Grid = require('gridfs-stream');
const UserModel = require('./modules/Events_Info')

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Use body-parser for parsing JSON bodies

const url = 'mongodb+srv://disha:dishadisha@cluster0.0fuuedz.mongodb.net/Event';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
const conn = mongoose.connection;

//connecting to Events_Info
app.get('/getEvents', (req, res) => {
  Data.find()
  .then(organizer => res.json(organizer))
  .catch(err => res.json(err))
})

//fetching data from Student_Registartion
app.get('/getRegistration', (req, res) => {
  Regs.find()
  .then(students => res.json(students))
  .catch(err => res.json(err))
})

// Generating tokens and creating sessions
const secretKey = crypto.randomBytes(64).toString('hex');

app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
// app.use((req,res,next)=>{
//   const {organizer}=req.body;
//   req.sessionOptions.secret=crypto.createHash('sha256').update(organizer).digest('hex')

// })

// Register Schema
const regSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  club: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Reg = mongoose.model('users', regSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, club, password, confirm_password } = req.body;
  
  if (!name || !email || !club || !password || !confirm_password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirm_password) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await Reg.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newReg = new Reg({
      name,
      email,
      club,
      password: hashedPassword
    });

    await newReg.save();
    return res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Registration failed' });
  }
});

// Register_student Schema
const regsSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true,unique: false},
  branch: { type: String, required: true,unique: false },
  year: { type: String, required: true, unique: false },
  division: { type: String, required: true,unique: false },
  moodle: { type: String, required: true, unique: true }
});

const Regs = mongoose.model('students', regsSchema);

// Register_students Route
app.post('/register_student', async (req, res) => {
  const { name, email, branch, year, division, moodle } = req.body;
  
  if (!name || !email || !branch || !year || !division|| !moodle) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingStudent = await Regs.findOne({ moodle });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student is already registered' });
    }
    const newStudent= new Regs({name,email,branch,year,division,moodle})
    await newStudent.save();
    return res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Registration failed' });
  }
});

//Login
app.post('/login',async(req,res)=>{
  const{email,password}=req.body;
  try{
    const reg=await Reg.findOne({email});
    if (!reg){
      return res.status(400).json({ message: 'invalid email or password' });
      alert('invalid email')
    }
const isPasswordValid = await bcrypt.compare(password, reg.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    req.session.reg={email:reg.email};
    return res.json({message:'login successfull'})
  }
  catch(error){
    return res.status(500).json({ message: 'Server error' });
  }
});

// Organizer Schema
const dataSchema = new mongoose.Schema({
  organizer: String,
  eventName: String,
  eventDescription: String,
  eventVenue: String,
  eventDate: String,
  eventTime: String,
  seatsAvailable: Number,
  bookingLink: String,
  name: String,
  attendance: Buffer
});

const Data = mongoose.model('organizer', dataSchema);
const upload = multer({ dest: 'uploads/' });


// Add Route
app.post('/add', (req, res) => {
  const newData = new Data(req.body);
  newData.save()
    .then(() => res.json('Data added successfully'))
    .catch((err) => res.status(400).json({ message: 'Error adding data', error: err }));
});

app.get('/organizers/:organizer', async (req, res) => {
  try {
    const organizer = req.params.organizer;
    const organizers = await Data.find({ organizer: organizer }).exec();
    res.json(organizers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching data' });
  }
});


const collection = Regs;
// API endpoint to get emails
app.get("/email", async (req, res) => {
  try {
    const email = await collection.distinct("email");
    res.json(email);
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});


const pdfSchema = new mongoose.Schema({
  name: String,
  attendance: Buffer
});
const Pdf = mongoose.model('Pdf', pdfSchema);

//  let gfs;
//  conn.once('open', () => {
//  gfs = Grid(conn.db, mongoose.mongo);
//  gfs.collection('pdfs'); // Name of the collection
//  });

// Route to handle file upload
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const newPdf = new Pdf({
      name: req.file.originalname,
      attendance: fs.readFileSync(req.file.path)
    });
    await newPdf.save();
    res.status(200).send('File uploaded successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get('/pdf_get', async (req, res) => {
  try {
    // Fetch all records from the 'pdfs' collection
    const records = await Pdf.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





app.get('/pdf_get/:id', async (req, res) => {
  const pdfId = req.params.id;

  try {
    // Fetch the PDF document from the database by ID
    const pdf = await Pdf.findById(pdfId);

    if (!pdf) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}.pdf`);

    // Send the PDF data as a response
    res.send(pdf.attendance);
  } catch (error) {
    console.error('Error fetching PDF:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




// Route to download a specific PDF file by ID
// app.get('/pdf_get/:id', (req, res) => {
//   const fileId = req.params.id;

//   gfs.files.findOne({ _id: fileId }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({ message: 'File not found' });
//     }

//     const readstream = gfs.createReadStream(file.filename);
//     readstream.pipe(res);
//   });
// });


// let gfs;
// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('pdfs'); // Name of the collection
// });

// // Route to fetch all records from the pdfs collection
// app.get('/pdf_get', async (req, res) => {
//   try {
//     const records = await gfs.files.find().toArray();
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Route to download a specific PDF file by ID
// app.get('/pdf_get/:id', (req, res) => {
//   const fileId = req.params.id;

//   gfs.files.findOne({ _id: fileId }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({ message: 'File not found' });
//     }

//     const readstream = gfs.createReadStream(file.filename);
//     readstream.pipe(res);
//   });
// });