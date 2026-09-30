import Database from "better-sqlite3";

export abstract class BaseDAO {
    protected db: Database.Database;
    constructor(dbName: string = 'inventory'){
        this.db = new Database(dbName);
    }
    protected abstract initTable(): void;
}