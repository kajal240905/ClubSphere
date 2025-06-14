const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  executive: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Executive',
    required: true
  },
  faculty_admin: {
    type: String,
    required: true
  },
  members:[
    {
      type:mongoose.Schema.Types.ObjectId,ref:'User'
    }
  ],
  description: {
    type: String,
    required: true
  },
  events:[{
    type:mongoose.Schema.Types.ObjectId,ref:'Event'
  }],
  items:[{
    type:mongoose.Schema.Types.ObjectId,ref:'Item'
  }

  ]
});

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;

