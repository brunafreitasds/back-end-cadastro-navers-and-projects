const structNaver = new mongoose.Schema({
    id_model_project: {
        type: ObjectIDForModel,
        ref: "projects"
    },
    name: {
        type: String,
        //required: true
    },
    birthdate: {
        type: String,
        //required: true

    },
    job_role: {
        type: String,
        //required: true
    },
    admission_date: {
        type: String,
        //required: true
    },
    index_project: {
        type: Number,
        //required: true
    },
    index_naver: {
        type: Number,
        //required: true
    },
})

module.exports = db.model('navers', structNaver);