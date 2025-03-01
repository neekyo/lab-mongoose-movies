const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  mugshot: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;