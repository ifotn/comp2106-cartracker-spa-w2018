// references
const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// allow CORS header to accept requests from localhost:4200
router.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
   next();
});

// GET: /cars
router.get('/', (req, res, next) => {
    // get car documents from db
    Car.find((err, cars) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(cars);
        }
    });
});

// POST: /cars
router.post('/', (req, res, next) => {
   // use the Car model to save the new car
    Car.create({
       make: req.body.make,
       model: req.body.model,
       year: req.body.year,
       colour: req.body.colour
   }, (err, car) => {
       if (err) {
           console.log(err);
           return res.json(err).status(501);
       }
       else {
           console.log(car);
           res.json(car).status(201);
       }
   }) ;
});

// DELETE: /cars/abc123
router.delete('/:_id', (req, res, next) => {
    // get the _id parameter from the url and store in a local variable
    let _id = req.params._id;

    // use the Car model to delete the document with this id
    Car.remove({ _id: _id }, (err, car) => {
       if (err) {
           console.log(err);
           res.json(err).status(501);
       }
       else {
           res.json(car).status(200);
       }
    });
});

// PUT: /cars/abc123
router.put('/:_id', (req, res, next) => {
   // get the _id from the url
   let _id = req.params._id;

   // use the Mongoose update method to set all the new values
   Car.update({ _id: _id },
       { $set: {
           make: req.body.make,
               model: req.body.model,
               year: req.body.year,
               colour: req.body.colour
           }}, null, (err, car) => {
        if (err) {
            res.json(err).status(501);
        }
        else {
            res.json(car).status(204);
        }
       });
});

// make public
module.exports = router;