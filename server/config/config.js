const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoDB = 'mongodb://127.0.0.1/TuteeDev';

mongoose.connect(mongoDB)
.then(() =>  {
  console.log('You have successfully connected to the mongo server');
})
.catch(err => {
  console.error(err);
});


