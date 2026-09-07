import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import ideasRouter from "./ideas";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(ideasRouter);

export default router;
