const mongoose = require('mongoose');
const {Schema} = mongoose;


const NoteSchema = new Schema({
    title: {type: String, required: true, maxLength: 50},
    content: {type: String, required: true, maxLength: 1000}
},
{ timestamps: true }
)

NoteSchema.virtual('id').get(function(){
    return this._id;
})
NoteSchema.set('toJSON', {
    virtuals: true,
    versionKey: true,
    transform: function(doc, ret) { delete ret._id }
})

exports.Note = mongoose.model("Note", NoteSchema);