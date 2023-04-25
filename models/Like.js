const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    // _carId:{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Car'
    // }
});

const Like = mongoose.model('Like',likeSchema);

module.exports = Like;