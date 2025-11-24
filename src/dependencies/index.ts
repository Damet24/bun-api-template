import { ContainerBuilder, Reference } from "node-dependency-injection";
import { DumyRepository } from "../repositories/dumy-repository";
import { SqliteClient } from "../clients/sqlite";
import { MainController } from "../controllers/main-controller";


function clients(container: ContainerBuilder) {
  container.register("sqlite.client", SqliteClient);
}

function repositories(container: ContainerBuilder) {
    
  container
    .register("dumy.repositoy", DumyRepository)
    .addArgument(new Reference("sqlite.client"));
}

function controllers(container: ContainerBuilder) {
  container
    .register("main.controller", MainController)
    .addArgument(new Reference("dumy.repositoy"));
}

export function dependencies() {
  let container = new ContainerBuilder();

  clients(container);
  repositories(container);
  controllers(container);

  return container;
}
