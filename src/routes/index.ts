import { Router } from "express";
import AuthRoute from "./auth_route";

const router = Router();
const v1 = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to PESAN CMS API",
  });
});

// Assign route
v1.use(AuthRoute);
router.use("/api/v1", v1);

export default router;
