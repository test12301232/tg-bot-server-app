import { Router } from "express";
import { body } from "express-validator";
import Validate from "../libs/Validate";
import AssistanceController from "../controllers/AssistanceController";

const router: Router = Router();

router.post('/assistance', body('form').custom(Validate.isFormCorrect), AssistanceController.catchAssistaceForm);
router.post('/assistance/info', AssistanceController.sendAssistanceForm);
router.get('/assistance/list', AssistanceController.sendHumansList);
router.delete('/assistance/delete/human', AssistanceController.deleteHuman);
router.patch('/assistance/modify/form', body('form').custom(Validate.isFormCorrect), AssistanceController.modifyAssistanceForm);

export default router;
