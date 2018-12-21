'use strict';

const express = require('express');
const router = express.Router();

const dogs = [
  {  
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://i.imgur.com/yQQSiHB.jpg',
    imageDescription: 'A sweet black and white husky ready for some love!',
    name: 'Koda',
    sex: 'Female',
    age: 2,
    breed: 'Husky',
    story: 'Found as a stray'
  },
  {
    imageURL: 'https://i.imgur.com/SSADow0g.jpg',
    imageDescription: 'A chihuahua that has amazing investment and finance skills',
    name: 'Dinero',
    sex: 'Male',
    age: 6,
    breed: 'Chihuahua',
    story: 'Company gave him to the shelter to avoid a monopoly and local economic collapse'
  },
  {
    imageURL: 'https://i.imgur.com/Q5vV8d4.jpg',
    imageDescription: 'This pitbull is full of so much love and wants to share it with everyone!',
    name: 'Roxy',
    sex: 'Female',
    age: 3,
    breed: 'Pitbull',
    story: 'Family has to move and couldn\'t bring him with them :('
  },
  {
    imageURL: 'https://i.imgur.com/03lmejf.jpg',
    imageDescription: 'Only thing bigger than this Great Pyrenees is his heart',
    name: 'Snow',
    sex: 'Female',
    age: 1,
    breed: 'Great Pyrenees',
    story: 'Owner couldn\'t handle his size  and wanted to make sure he went to a good home'
  }
];

router.get('/', (req, res, next) => {
  return res.json(dogs[0]);
});

router.delete('/', (req,res,next)=> {
  dogs.shift();
  return res.sendStatus(204);
});

module.exports = router;