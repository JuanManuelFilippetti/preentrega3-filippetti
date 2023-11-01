import { Router } from "express";
import { cartsController } from "../controllers/carts.controller.js";

const router = Router();

router.get("/:cid", cartsController.getCart);

router.post("/", cartsController.createcart);

router.post("/:cid/products/:pid", cartsController.addProduct);

router.put("/:cid/products/:pid", cartsController.updateProduct);

router.delete("/:cid/products/:pid", cartsController.productDelete);

router.delete("/:cid", cartsController.cartDelete);

export default router;