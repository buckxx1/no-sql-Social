//importing dependancy

const { Schema, Types , model } = require('mongoose')

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
},{
    toJSON: {

        virtuals: true,
        getters: true
    },
    id: false
});

//get friend count 

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

//actually create the user model 
const User = model('User', UserSchema)

//export the user model 

module.exports = User;