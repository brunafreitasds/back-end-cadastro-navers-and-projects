//roteamento da aplicação
const router = express.Router();
var project_controller = require("../controllers/projectController");

router.get("/list-projects", project_controller.get_projects);

router.get("/getbyId/:id", project_controller.get_project_byId);

router.get("/getbyname", project_controller.get_project_byName);

//router.get("/getbynaver", project_controller.get_project_byNaver);

router.put("/update-project/:id", project_controller.update_project);

router.post("/new-project", project_controller.create_project);

router.delete("/delete/:id", project_controller.delete_project);

module.exports = router;