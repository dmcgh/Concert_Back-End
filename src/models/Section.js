import mongoose from 'mongoose';
// import request from 'request';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  seats: { type: Schema.Types.Objectid, required: true },
  price: { type: Number, default: 0 },
  isBought: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seat', seatSchema);
