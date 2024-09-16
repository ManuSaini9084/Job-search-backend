const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const JobSheet = require('./models/job-Sheet');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://manusaini22092003:manu@cluster0.sprqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  

// Get all job sheets
app.get('/api/jobs', async (req, res) => {
  const jobs = await JobSheet.find();
  res.json(jobs);
});

// Get job by ID
app.get('/api/jobs/:id', async (req, res) => {
  const job = await JobSheet.findById(req.params.id);
  res.json(job);
});

// Add a new job sheet
app.post('/api/jobs', async (req, res) => {
  const newJob = new JobSheet(req.body);
  await newJob.save();
  res.json(newJob);
});

// Edit a job sheet
app.put('/api/jobs/:id', async (req, res) => {
  const updatedJob = await JobSheet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
});

// Delete a job sheet
app.delete('/api/jobs/:id', async (req, res) => {
  await JobSheet.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted' });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
