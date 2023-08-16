
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://princephotographybackup:RfxjcuowLlP0rngg@cluster0.ky5t1km.mongodb.net/').then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type:String,
    },
    number:{
        type:Number,
    },
    address:{
        type:String,
    },
    cart:{
        type:Array,
    }
})

const collection = mongoose.model('collection', newSchema)

module.exports=collection;


// username : princephotographybackup
// password : 

