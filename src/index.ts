import Routes from "./routes";

const server = Bun.serve({
  port: process.env.PORT,
  routes: Routes,
});

console.log(`Server running at ${server.url}`);
