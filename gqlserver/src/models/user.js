import mongoose from 'mongoose'
import validator from 'validator'

const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    index: true,
    unique: true,
    lowercase: true,
    min: [3, 'Email must be longer than 3 characters.'],
    validate: {
      validator: email => validator.isEmail(email),
      message: '{VALUE} is not a valid email address',
    },
    required: [true, 'Email address is required'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: { type: String, required: true, trim: true },
  address: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip: { type: String, trim: true },
  userType: {
    type: String,
    trim: true,
    required: [true, 'User type is required'],
  },
})

export default mongoose.model('User', UserSchema)
