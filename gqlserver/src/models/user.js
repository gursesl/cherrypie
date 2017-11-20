/* eslint-disable func-names */
/* eslint-disable  no-use-before-define */
/* eslint-disable  consistent-return */

import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

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
    validate: {
      validator: password => validator.isLength(password, 3),
      message: 'Password must be longer than 3 characters.',
    },
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: name => validator.isLength(name, 3),
      message: 'Full name must be longer than 3 characters.',
    },
  },
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
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.statics = {
  makeSalt() {
    return bcrypt.genSaltSync(10)
  },
  encryptPassword(password) {
    return bcrypt.hashSync(password, User.makeSalt())
  },
  register(email, password, cb) {
    const user = new User({
      email,
      password,
    })
    user.save((err) => {
      cb(err, user)
    })
  },
}

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  // If user changed their password, rehash
  this.password = User.encryptPassword(this.password)
  next()
})

UserSchema.methods = {
  validPassport: password => bcrypt.compareSync(password, this.password),
}

const User = mongoose.model('User', UserSchema)

export default User
