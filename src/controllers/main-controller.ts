import type { BunRequest } from "bun";
import type { TestRepository } from "../interfaces/test.repository.interface";
import { Json } from "../utils/responses";
import type { Logger } from "../logger";

export class MainController {
  private repository: TestRepository;
  logger: Logger;

  constructor(logger: Logger, repository: TestRepository) {
    this.logger = logger;
    this.repository = repository;
  }

  index(request: BunRequest) {
    this.logger.error("tu puta madre mamahuevo.")
    var data = {
      url: request.url,
      data: this.repository.get(),
    };
    return Json(data);
  }
}
