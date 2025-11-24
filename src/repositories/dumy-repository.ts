import type { SqliteClient } from "../clients/sqlite";
import type { TestRepository } from "../interfaces/test.repository.interface";

export class DumyRepository implements TestRepository {
  private sqlClient: SqliteClient;

  constructor(sqlClient: SqliteClient) {
    this.sqlClient = sqlClient;
  }

  get() {
    return "Repository response";
  }
}
