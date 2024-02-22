const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title : String,
    content : String,
    announcedBy : String,
    announcedDate : Date,
    announcedTime : DocumentTimeline
});

const AnnouncementModel = mongoose.model('announcements',announcementSchema);
module.exports = AnnouncementModel;