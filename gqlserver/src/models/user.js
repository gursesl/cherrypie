import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  userName: { type: String, required: true, trim: true },
  hashedPassword: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  address: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip: { type: String, trim: true },
  userType: { type: String, required: true, trim: true },
})

export default mongoose.model('User', UserSchema)
