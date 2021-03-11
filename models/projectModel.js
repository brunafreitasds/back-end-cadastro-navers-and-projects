const structProject = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    index_project: {
        type: Number,
        required: true
    },
    index_naver: {
        type: Number,
        required: true
    }

})

module.exports = db.model('projects', structProject);