export class student {
    constructor(private id : number,private studentCode : string , private Fullname: string,private gpa:number) {}

    public getId(): number {return this.id};
    public getStudentCode(): string {return this.studentCode};
    public getFullname(): string {return this.Fullname};
    public getGpa(): number{return this.gpa};

    public getInfo(): string{
        return `Student: ${this.id}${this.Fullname}${this.gpa}`
    }
    public isHonor(): boolean{
        if(this.gpa >=3.5){
            return true;
        }
        return false;
    }
}