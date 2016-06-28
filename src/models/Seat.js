import mongoose from 'mongoose';
// import request from 'request';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  type: { type: String, required: true },
  price: { type: Number, default: 0 },
  isBought: { type: Boolean, default: false },
  boughtImage: { type: String, required: true },
  unboughtImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seat', seatSchema);
