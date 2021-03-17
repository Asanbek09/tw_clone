const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: { type: String, trim: true },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  pinned: Boolean,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }], // данные хранятся в массиве
  retweetUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // данные хранятся в массиве
  retweetData: { type: Schema.Types.ObjectId, ref: 'Post' }, //
  replyTo: { type: Schema.Types.ObjectId, ref: 'Post' } // 
}, { timestamps: true });

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;