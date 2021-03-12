//roteamento da aplicação
const router = express.Router();
var project_controller = require("../controllers/projectController");
var project_service = require("../services/projects");
//get geral de rodos os projetos 
router.get("/list-projects", project_controller.get_projects);
//get específico dos projects que traz os naers pertencentes 
router.get("/getbyId/:id", project_service.get_project_byId_and_navers);
//get com base no nome do projeto
router.get("/getbyName", project_controller.get_project_byName);

router.put("/update-project/:id", project_controller.update_project);

router.post("/new-project", project_controller.create_project);

router.delete("/delete/:id", project_controller.delete_project);

module.exports = router;