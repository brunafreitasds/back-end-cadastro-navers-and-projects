//módulo responsavel por manipular os dados e separar a lógica de dados da aplicação

const project_service = require("../services/projects");

module.exports = project_controller = {

    get_projects: (req, res) => {
        project_service.get_project().then((info) => {
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
    get_project_byId: (req, res) => {
        var id = req.params.id;
        project_service
            .get_project_byId(id)
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
    get_project_byName: (req, res) => {
        var name = req.query.name;
        project_service
            .get_project_byName(name)
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
    create_project: (req, res) => {
        let {
            name,
            index_project,
            index_naver,
            id_naver,

        } = req.body;
        project_service
            .create_project(
                name,
                index_project,
                index_naver,
                id_naver,

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
    delete_project: (req, res) => {
        var id = req.params.id;
        project_service
            .delete_project(id)
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
    update_project: (req, res) => {
        let {
            name,
            index_project,
            index_naver,
            id_naver,

        } = req.body;
        var id = req.params.id;
        project_service
            .update_project(
                name,
                index_project,
                index_naver,
                id_naver,

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