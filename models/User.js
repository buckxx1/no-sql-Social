//importing dependancy

const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        uniquie: true,
        required: 'This field is mandatory',
        trim: true
    
    },email: {
        type: String,
        required: 'Please enter a valid email address!',
        unique: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})