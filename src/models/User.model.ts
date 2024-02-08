import mongoose, { Schema, model } from 'mongoose'
const { models } = mongoose

const userModelExists = models.User

if (!userModelExists) {
  model('User', new Schema({
    email: String,
    username: String,
    password: String,
    createdAt: Date,
  }))
}

const UserModel = model('User')

export default UserModel