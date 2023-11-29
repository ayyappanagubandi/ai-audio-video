import { Router } from "express";
import ElevenLabsController from "./eleven_labs_controller.js";

const router = Router();

router.route("/text-to-speak").post(ElevenLabsController.textToSpeak);
router.route("/").post(ElevenLabsController.addVoice).get(ElevenLabsController.activeAllVoice);

router.route("/default/voices").get(ElevenLabsController.activeAllVoice);

router
  .route("/active-voice-update/:id")
  .put(ElevenLabsController.activateVoiceStatus);

router
  .route("/voice/:id")
  .delete(ElevenLabsController.deleteVoiceStatus);

export default router;
