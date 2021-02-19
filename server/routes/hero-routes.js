import express from "express";

import {
  getHeroes,
  getHero,
  updateHero,
  deleteHero,
  storeHero,
} from "../controllers/hero-controller.js";

const router = express.Router();

router.get("/", getHeroes);

router.get("/:id", getHero);

router.put("/:id", updateHero);

router.delete("/:id", deleteHero);

router.post("/", storeHero);

export default router;
