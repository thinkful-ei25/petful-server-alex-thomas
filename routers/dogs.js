'use strict';

const express = require('express');

const dogQueue = require('../data-structures/dogs-queue');
const {peek} = require('../data-structures/queue');

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.json(peek(dogQueue));
});

router.delete('/', (req,res,next)=> {
  dogQueue.dequeue();
  return res.sendStatus(204);
});

module.exports = router;