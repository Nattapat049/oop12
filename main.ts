import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert('684245049', 'ณัฐภัทร',3.5);
studentDAO.insert('684245050', 'สรวิศ', 3.8);

const users = studentDAO.findAll();
users.forEach(student => {
    console.log(student.getInfo());
});