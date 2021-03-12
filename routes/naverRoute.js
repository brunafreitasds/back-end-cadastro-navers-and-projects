//roteamento da aplicação
const router = express.Router();
var naver_controller = require("../controllers/naverController");
var naver_service = require("../services/navers")
    //get geral dos navers
router.get("/list-navers", naver_controller.get_navers);
//get geral de todos os navers e seus projetos
router.get("/list-navers-and-projects", naver_service.getNavers_and_projets);
//get específico dos navers por id
router.get("/getbyId/:id", naver_service.get_naver_byId_projects);

router.get("/getbyName", naver_controller.get_naver_byName);

router.put("/update-naver/:id", naver_controller.update_naver);

router.post("/new-naver", naver_controller.create_naver);

router.delete("/delete/:id", naver_controller.delete_naver);

module.exports = router;