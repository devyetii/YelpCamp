const mongoose = require("mongoose");

//DB CONFIG :: Solving deprecation warnings for mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/camps', {useNewUrlParser: true});

module.exports = mongoose;