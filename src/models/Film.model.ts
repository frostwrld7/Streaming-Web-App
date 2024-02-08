import mongoose, { Schema, model } from 'mongoose'
const { models } = mongoose

const filmModelExists = models?.Film

if (!filmModelExists) {
  model('Film', new Schema({
    title: String,
    shortDescription: String,
    link: String,
    category: String,
    image: String,
    createdAt: Date,
    id: String
  }))
}

const FilmModel = model('Film')

export default FilmModel