/* eslint-disable new-cap */

import express from 'express';
import Seat from '../models/Seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});

router.get('/seats', (req, res) => {
  const Seat1 = new Seat();
  const Seat2 = new Seat();
  const seats = [Seat1, Seat2];
  res.send(seats);
});

router.post('/seats/add', (req, res) => {
  // console.log('req.body: ', req.body, 'res.body: ', res.body);
  for (let i = 0; i < req.body.quantity; i++){
    const seat = new Seat(req.body.type, req.body.amount, false, 'https://qph.ec.quoracdn.net/main-qimg-355138c0a6e3249c02482b250da0d115', 'https://honestdiet.files.wordpress.com/2010/07/red-dot.jpg');
  }
    console.log('seat to add ', seat);
      seat.save(() => {
        // res.redirect('/');
      });
  }
