import { Database } from "bun:sqlite";

export class SqliteClient {
  private db: Database;

  constructor() {
    this.db = new Database(":memory:");
  }

  database() {
    return this.db;
  }
}
