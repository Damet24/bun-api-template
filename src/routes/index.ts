
import mainRoutes from "./main"

export default {
  ...mainRoutes,
  "/health": new Response("OK"),
};
