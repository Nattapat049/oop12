import { student } from './student';
import { BaseDAO } from './BaseDAO';

export class StudentDAO extends BaseDAO{
    protected iniTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS student (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                studentCode TEXT NOT NULL UNIQUE,
                fullname TEXT NOT NULL,
                gpa REAL NOT NULL
            )
        `);
    }
    public insert(studentCode:string,fullname:string,gpa:number):boolean{
        const stmt = this.db.prepare('INSERT INTO student(studentCode,fullname,gpa) VALUES (?,?,?)');
        const result = stmt.run(studentCode,fullname,gpa);
        return result.changes > 0;
    }
    public findAll(): student[]{
        const stmt = this.db.prepare('SELECT * from student');
        const rows = stmt.all() as {id:number, studentCode:string ,fullname:string, gpa:number}[];
        return rows.map(row => new student(row.id , row.studentCode, row.fullname, row.gpa));
    }
}