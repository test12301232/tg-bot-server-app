import { Router } from "express";
import { body } from "express-validator";
import Validate from "../libs/Validate";
import UserDataController from "../controllers/UserDataController";

const router: Router = Router();

router.post('/assistance', body('form').custom(Validate.isFormCorrect), UserDataController.catchAssistaceForm);
router.post('/assistance/info', UserDataController.sendAssistanceForm);
router.get('/assistance/list', UserDataController.sendHumansList);

export default router;
