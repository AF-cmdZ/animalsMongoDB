import Router from "express";
import animalsController from "./controller.js"
const router = Router();

// localhost:3001/api
router.get("/", (_, res) => {
    res.send("Hello API");
});

router.get("/animals", async (req, res) => {
    const animals = await animalsController.index(req.query.sort);
    res.json(animals);
});

console.log(animalsController);

export default router;