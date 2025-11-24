import type { BunRequest } from "bun";
import type { TestRepository } from "../interfaces/test.repository.interface";
import { Json } from "../utils/responses";

export class MainController {
  private repository: TestRepository;

  constructor(repository: TestRepository) {
    this.repository = repository;
  }

  index(request: BunRequest) {
    var data = {
      url: request.url,
      data: this.repository.get(),
    };
    return Json(data);
  }
}
