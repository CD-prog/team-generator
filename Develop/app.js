const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const  addEmployee  = () => { 
    inquirer
    .prompt([
        {
            type: "list",
            message: "Role:",
            name: "role",
            choices: ["Intern", "Engineer", "Manager"]
        },
        {
            type: "input",
            message: "Name:",
            name: "name"
        },
        {
            type: "input",
            message: "ID:",
            name: "id"
        },
        {
            type: "input",
            message: "email:",
            name: "email"
        },

    ])
    .then(response => {
        var names = {
            Intern:"School:",
            Engineer: "GitHub:",
            Manager: "Office Number:"
        }
        inquirer
                .prompt({
                    type: "input",
                    message: names[response.role],
                    name: "misc"
                }).then(res=>{
                    var constructors = {
                        Intern:Intern,
                        Engineer: Engineer,
                        Manager: Manager
                    }
                    const Factory = constructors[response.role];
                    var newEmployee = new Factory(response.name, response.id, response.email, res.misc)
                    employees.push(newEmployee);
                    return;
                })
                .then(() => {
                    inquirer
                .prompt({
                    type: "confirm",
                    message: "Continue? ",
                    name: "continue"
                }).then(response=>{
                    if(response.continue){
                        addEmployee();
                    }else{
                       var html = render(employees);
                       fs.writeFile(outputPath, html, (err) => {
                        if (err) throw err;
                        console.log("The file was successfully saved!");
                    });
                    }
                })
                })
    })
}
addEmployee();


