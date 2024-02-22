const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    position : Number,
    e_id : String,
    name : String,
    department : String,
    awardTitle : String,
    forTheMonth : Date
});

const LeaderboardModel = mongoose.model('leaderboards',leaderboardSchema);
module.exports = LeaderboardModel;