const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShopSchema = new Schema({
    email: String,
    password: String    
});

module.export = mongoose.model('users', userShopSchema);
