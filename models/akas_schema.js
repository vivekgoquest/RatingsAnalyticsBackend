
var mongoose = require("mongoose");

var akas = new mongoose.Schema({
    titleId: String,
    ordering: Number,
    title: String,
    region: String,
    language: String,
    types: Array,
    attributes: Array,
    isOriginalTitle: Boolean,
});

akas.index({ titleId: 1 });

var AKAS = mongoose.model("AKAS", akas);

module.exports = AKAS;
