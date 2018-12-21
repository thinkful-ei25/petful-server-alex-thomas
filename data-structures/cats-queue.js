'use strict';
const {Queue} = require('./queue');

const cats=[
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://i.imgur.com/vB3g4hI.jpg', 
    imageDescription: 'Tan Siamese cat with a sweet black face and gorgeous blue eyes.',
    name: 'Carlos',
    sex: 'Male',
    age: 5,
    breed: 'Siamese',
    story: 'Abandoned at evicted home'
  },
  {
    imageURL:'https://i.imgur.com/fYseAXw.jpg', 
    imageDescription: 'Black Bombay cat posing elegantly',
    name: 'Morticia',
    sex: 'Female',
    age: 1,
    breed: 'Bombay',
    story: 'Owner could not take care of her and wanted her to find another loving home.'
  },
  {
    imageURL:'https://i.imgur.com/3ZfkTfG.jpg', 
    imageDescription: 'Black and white Maine coon cat',
    name: 'Roger',
    sex: 'Male',
    age: 2,
    breed: 'Maine Coon',
    story: 'Found as a stray'
  }

];

const catQueue = new Queue();

for(let i=0; i<cats.length; i++){
  catQueue.enqueue(cats[i]);
}

module.exports= catQueue;