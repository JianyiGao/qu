'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Banking Schema
 */
var BankingSchema = new Schema({
  accountid: {
    type: String,
    default: '',
    required: 'Please fill Banking name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Banking', BankingSchema);
