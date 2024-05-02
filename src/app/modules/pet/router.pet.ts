import express from "express";
import auth from "../../middlewares/auth";
import { PetController } from "./controller.pet";
import validateRequest from "../../middlewares/validateRequest";
import { petValidationSchemas } from "./validation.pet";

const router = express.Router();

router.get("/", PetController.getAllFromDB);

router.post(
  "/",
  //   auth("SUPER_ADMIN", "ADMIN"),
  validateRequest(petValidationSchemas.createPetValidationSchema),
  PetController.createPet
);
// router.get(
//   "/:id",
//   // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   PetController.getByIdFromDB
// );

router.patch(
  "/:id",
  // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(petValidationSchemas.updatePetValidationSchema),
  PetController.updateIntoDB
);

// // router.delete(
// //   "/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   PetController.deleteFromDB
// // );

// // router.delete(
// //   "/soft/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   PetController.softDeleteFromDB
// // );

export const petRoutes = router;
