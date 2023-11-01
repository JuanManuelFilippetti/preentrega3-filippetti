import { Router } from "express";
import { usersController } from "../controllers/users.controller.js";
import passport from "passport";

const router = Router();

router.post("/signUp", usersController.signUpUser);

router.get(
  "/githubSignup",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github",
  passport.authenticate("github", { failureRedirect: "/api/views/signUp" }),
  (req, res) => {
    req.session["username"] = req.user.username;
    res.redirect("/api/home");
  }
);

//router.get("/", usersController.findAllUsers);
//router.get("/:idUser", usersController.findUserById);
//router.post("/", usersController.createOneUser);
//router.delete("/:idUser", usersController.deleteUser);

export default router;