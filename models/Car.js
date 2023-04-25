const mongoose = require ("mongoose");

const carSchema = new mongoose.Schema({
    
    model:{
        type: String,
        require: true,
    },
    type:{
        type:String,
        require:true,
    },
    kilometers:{
        type:Number,
        require:true,
    },
    imageUrl:{
        type:String,
        require:true,
        validate: {
            validator: function (value) {
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'URL is invalid!'
        }
    },
    price:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Car = mongoose.model("Car",carSchema);

module.exports = Car;