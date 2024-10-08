const mongoose = require('mongoose'); //accuring mongoose
const Schema = mongoose.Schema; //intialiging schema
const reviewSchema = new Schema({ //defining the schema
    title: {
        type: String
    },
    comment: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const review = mongoose.model("review", reviewSchema); 
module.exports = review; //exporting the schema

// module.exports = mongoose.model("review", reviewSchema); 