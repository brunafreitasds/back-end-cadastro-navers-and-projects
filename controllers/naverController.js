//módulo responsavel por manipular os dados e separar a lógica de dados da aplicação
const naver_service = require("../services/navers");

module.exports = naver_controller = {

    get_navers: (req, res) => {
        naver_service.get_naver().then((info) => {
            res
                .json({
                    success: true,
                    data: info,
                })
                .catch((error) => {
                    res.json({
                        success: false,
                        message: error,
                    });
                });
        });
    },
    get_naver_byId: (req, res) => {
        var id = req.params.id;
        naver_service
            .get_naver_byId(id)
            .then((info) => {
                res.json({
                    success: true,
                    data: info,
                });
            })
            .catch((error) => {
                res.json({
                    success: false,
                    message: error,
                });
            });
    },
    get_naver_byName: (req, res) => {
        var name = req.query.name;
        naver_service
            .get_naver_byName(name)
            .then((info) => {
                res.json({
                    success: true,
                    data: info,
                });
            })
            .catch((error) => {
                res.json({
                    success: false,
                    message: error,
                });
            });
    },
    /*get_product_byCategory: (req, res) => {
        var category = req.query.category;
        product_service
            .get_product_byCategory(category)
            .then((info) => {
                res.json({
                    success: true,
                    data: info,
                });
            })
            .catch((error) => {
                res.json({
                    success: false,
                    message: error,
                });
            });
    },*/
    create_naver: (req, res) => {
        let {
            id_model_project,
            name,
            birthdate,
            job_role,
            admission_date,
            index_project,
            index_naver,
        } = req.body;
        naver_service
            .create_naver(
                id_model_project,
                name,
                birthdate,
                job_role,
                admission_date,
                index_project,
                index_naver,

            )
            .then((info) => {
                res.json({
                    success: true,
                    data: info,
                });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: err,
                });
            });
    },
    delete_naver: (req, res) => {
        var id = req.params.id;
        naver_service
            .delete_naver(id)
            .then(() => {
                res.json({
                    success: true,
                });
            })
            .catch((error) => {
                res.json({
                    success: false,
                    message: error,
                });
            });
    },
    update_naver: (req, res) => {
        let {
            id_model_project,
            name,
            birthdate,
            job_role,
            admission_date,
            index_project,
            index_naver
        } = req.body;
        var id = req.params.id;
        naver_service
            .update_naver(
                id_model_project,
                name,
                birthdate,
                job_role,
                admission_date,
                index_project,
                index_naver
            )
            .then((info) => {
                res.json({
                    success: true,
                    data: info,
                });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: err,
                });
            });
    },


};