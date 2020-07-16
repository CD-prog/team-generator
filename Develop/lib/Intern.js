const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email,school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}
module.exports = Intern;

// const intern = new Intern('Michel',2,'michael@michael.com','northwestern')
// intern.getSchool()