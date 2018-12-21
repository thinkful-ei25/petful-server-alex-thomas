'use strict';

const express = require('express');

const catQueue = require('../data-structures/cats-queue');
const {peek} = require('../data-structures/queue');

const router = express.Router();

router.get('/', (req,res,next)=> {
  return res.json(peek(catQueue));
});

router.delete('/', (req,res,next)=> {
  catQueue.dequeue();
  return res.sendStatus(204);
});

module.exports = router;
