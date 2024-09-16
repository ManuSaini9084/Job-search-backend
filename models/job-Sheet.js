const mongoose = require('mongoose');

const JobSheetSchema = new mongoose.Schema({
  clientName: String,
  contactInfo: String,
  receivedDate: String,
  inventoryReceived: String,
  reportedIssues: String,
  clientNotes: String,
  assignedTechnician: String,
  estimatedAmount: String,
  deadline: String,
  status: String,
});

module.exports = mongoose.model('JobSheet', JobSheetSchema);
