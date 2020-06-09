var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questions = new Schema({
  magnet: { type: String, required: true },
  pageRank: { type: Number, required: true },
  peers: { type: Number, required: true },
  seeders: { type: Number, required: true },
  size: { type: String, required: true },
  source: { type: String, required: true },
  torrent: { type: String, default: "NO_TORRENT" },
  title: { type: String, required: true },
  uploaded: { type: String, required: true },
  uploader: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  xt: { type: String, required: true, unique: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('torrents.magnet', questions);
