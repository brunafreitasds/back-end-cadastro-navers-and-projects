//roteamento da aplicação
const router = express.Router();
var naver_controller = require("../controllers/naverController");
var naver_service = require("../services/navers")

router.get("/list-navers", naver_controller.get_navers);
router.get("/list-dif", naver_service.getNavers_and_projets);

router.get("/getbyId/:id", naver_service.get_naver_byId);

router.get("/getbyName", naver_controller.get_naver_byName);

//router.get("/getbycategory", naver_controller.get_naver_byCategory);

router.put("/update-naver/:id", naver_controller.update_naver);

router.post("/new-naver", naver_controller.create_naver);

router.delete("/delete/:id", naver_controller.delete_naver);

module.exports = router;