//módulo responsável por acessar o banco de dados
const naverModel = require("../models/naverModel");

module.exports = naver_service = {
    /**
     * @name get_naver - retorna todos os navers cadastrados
     *
     * @returns {Promise}
     */
    get_naver: () => { //acessa todos os navers cadastrados no banco 
        return naverModel.find().exec();
    },
    /**
     * @name get_naver_byId - retorna o naver com base no id informado
     * 
     * @param {String} id
     * 
     * @returns {Promise}
     */
    get_naver_byId: (id) => {

        return new Promise((resolve, reject) => {
            var getId = naverModel.findOne({ _id: id }).exec();
            getId
                .then((get_id) => {
                    resolve(get_id);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     * @name get_naver_byName - retorna o projeto com base no naver informado
     * 
     * @param {String} name
     * 
     * @returns {Promise}
     */
    get_naver_byName: (name) => {

        return new Promise((resolve, reject) => {
            var getName = naverModel.find({ name: name }).exec();
            getName
                .then((getName) => {
                    resolve(getName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    /**
     * @name create_navers - cria o projeto com base no preenchimento do formulário
     * 
     * @param {String} id_model_project - id do projeto
     * @param {String} name - name do naver
     * @param {String} birthdate - data de nascimento do naver
     * @param {String} job_role - cargo do naver na empresa
     * @param {String} admission_date - data de admissão na empresa
     * @param {String} index_project - index do projeto que o naver trabalha 
     * @param {String} index_naver - index do naver
     * 
     * @returns {Promise}
     */
    create_naver: (
        id_model_project,
        name,
        birthdate,
        job_role,
        admission_date,
        index_project,
        index_naver
    ) => {
        return new Promise((resolve, reject) => {
            var newnaverModel = new naverModel({
                id_model_project,
                name,
                birthdate,
                job_role,
                admission_date,
                index_project,
                index_naver
            }).save();
            newnaverModel
                .then((newnaver) => {
                    resolve(newnaver);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     * @name delete_naver - detela o naver com base no id
     * 
     * @param {String} id - deleta o naver com base no id
     *
     * @returns {Promise}
     */
    delete_naver: (id) => {
        return new Promise((resolve, reject) => {
            var deleteNaver = naverModel
                .deleteOne({
                    _id: id,
                })
                .exec();
            deleteNaver
                .then((del_naver) => {
                    resolve(del_naver);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     * @name update_naver - edita e atualiza o projeto com base no preenchimento do formulário
     * 
     * @param {String} id_model_project - id do projeto
     * @param {String} name - name do naver
     * @param {String} birthdate - data de nascimento do naver
     * @param {String} job_role - cargo do naver na empresa
     * @param {String} admission_date - data de admissão na empresa
     * @param {String} index_project - index do projeto que o naver trabalha 
     * @param {String} index_naver - index do naver
     *
     * @returns {Promise}
     */
    update_naver: (
        id_model_project,
        name,
        birthdate,
        job_role,
        admission_date,
        index_project,
        index_naver
    ) => {
        return new Promise((resolve, reject) => {
            var updateNaver = naverModel
                .findOneAndUpdate({
                    _id: id,
                }, {
                    id_model_project,
                    name,
                    birthdate,
                    job_role,
                    admission_date,
                    index_project,
                    index_naver
                }, { new: true })
                .exec();
            updateNaver
                .then((up_naver) => {
                    resolve(up_naver);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // nesta seção do código, é adcionado as agregaçoes necessárias com o operador @lookup
    getNavers_and_projets: (req, res) => {
        var promisse = naverModel.aggregate([
            /*{
                $match: {
                    index_project : new index_project(req.params.id)
                }
            },*/

            {
                $lookup: {
                    from: "projects",
                    localField: "index_project",
                    foreignField: "index_project",
                    as: "projects"
                }
            },
        ]).exec();

        promisse.then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json({ success: false, err: err, message: message.err.fail });
            });
    },
    get_naver_byId_projects: (req, res) => {
        var promisse = naverModel.aggregate([{
                $match: {
                    _id: new ObjectId(req.params.id)
                }
            },

            {
                $lookup: {
                    from: "projects",
                    localField: "index_project",
                    foreignField: "index_project",
                    as: "project"
                }
            }
        ]).exec();

        promisse.then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json({ success: false, err: err, message: message.err.fail });
            });
    }
};