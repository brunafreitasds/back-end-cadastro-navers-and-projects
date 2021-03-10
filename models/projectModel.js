const structProject = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    index_project: {
        type: String,
        required: true
    },
    index_naver: {
        type: String,
        required: true
    },
    id_naver: {
        type: ObjectIDForModel,
        ref: "navers"
    }

})

module.exports = db.model('projects', structProject);