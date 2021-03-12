//módulo responsável por acessar o banco de dados
const projectModel = require("../models/projectModel");

module.exports = project_service = {
    /**
     * @name get_project - retorna todos os projetos cadastrados
     *
     * @returns {Promise}
     */
    get_project: () => { //acessa todos os projetos cadastrados no banco 
        return projectModel.find().exec();
    },
    /**
     * @name get_project_byId - retorna o project com base no id informado
     * 
     * @param {String} id
     * 
     * @returns {Promise}
     */
    get_project_byId: (id) => {

        return new Promise((resolve, reject) => {
            var getId = projectModel.findOne({ _id: id }).exec();
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
     * @name get_project_byName - retorna o projeto com base no name informado
     * 
     * @param {String} name
     * 
     * @returns {Promise}
     */
    get_project_byName: (name) => {

        return new Promise((resolve, reject) => {
            var getName = projectModel.find({ name: name }).exec();
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
     * @name get_project_byCategory - retorna o produto com base na category informada
     * 
     * @param {String} category
     * 
     * @returns {Promise}
     */
    /*get_product_byCategory: (category) => {

      return new Promise((resolve, reject) => {
        var getCategory = productModel.find({ category: category }).exec();
        getCategory
          .then((getCategory) => {
            resolve(getCategory);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },*/

    /**
     * @name create_project - cria o projeto com base no preenchimento do formulário
     * 
     * @param {String} name - nome do projeto
     * @param {String} navers - id dos navers que fazem parte do projeto
     * 
     * @returns {Promise}
     */
    create_project: (
        name,
        index_project,
        index_naver,
        id_naver,
    ) => {
        return new Promise((resolve, reject) => {
            var newprojectModel = new projectModel({
                name,
                index_project,
                index_naver,
                id_naver,
            }).save();
            newprojectModel
                .then((newproject) => {
                    resolve(newproject);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     * @name delete_project - detela o projeto com base no id
     * 
     * @param {String} id - deleta o projeto com base no id
     *
     * @returns {Promise}
     */
    delete_project: (id) => {
        return new Promise((resolve, reject) => {
            var deleteProject = projectModel
                .deleteOne({
                    _id: id,
                })
                .exec();
            deleteProject
                .then((del_project) => {
                    resolve(del_project);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     * @name update_project - edita e atualiza o projeto com base no preenchimento do formulário
     * 
     * @param {String} title - nome do projeto
     * @param {String} id_navers - navers do projeto
     *
     * @returns {Promise}
     */
    update_project: (
        name,
        index_project,
        index_naver,
        id_naver,
    ) => {
        return new Promise((resolve, reject) => {
            var updateProject = projectModel
                .findOneAndUpdate({
                    _id: id,
                }, {
                    name,
                    index_project,
                    index_naver,
                    id_naver,
                }, { new: true })
                .exec();
            updateProject
                .then((up_project) => {
                    resolve(up_project);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    get_project_byId_and_navers: (req, res) => {
        var promisse = projectModel.aggregate([{
                $match: {
                    _id: new ObjectId(req.params.id)
                }
            },

            {
                $lookup: {
                    from: "navers",
                    localField: "index_project",
                    foreignField: "index_project",
                    as: "Navers:"
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