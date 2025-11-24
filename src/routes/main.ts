import { MainController } from "../controllers/main-controller";
import { dependencies } from "../dependencies";

const container = dependencies();

const controller = container.get<MainController>("main.controller");

export default {
  "/": controller.index.bind(controller),
};
