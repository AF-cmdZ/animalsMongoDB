import Router from "express";
const router = Router();

// localhost:3001/api
router.get("/", (_, res) => {
    res.send("Hello API");
});

export default router;