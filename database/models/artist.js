// Todo: Create Artist Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlbumShema = require('./album');

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumShema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
