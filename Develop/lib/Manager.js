const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
       return this.officeNumber
    }
    getRole(){
       return 'Manager'
    }
}
module.exports = Manager;

// manager = new Manager('Mike',0,'manager@manager.com',3124058776 )
// manager.getOfficeNumber()