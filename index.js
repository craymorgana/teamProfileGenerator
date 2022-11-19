const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//test

let employees = [];

const addManager = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the team manager's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the manager's ID: ",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the manager's email: ",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Enter the manager's office number: ",
			},
		])
		.then((answers) => {
			const manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber
			);

			employees.push(manager);
		})
		.catch((err) => {});
};

const addNewEmployee = () => {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Do you wish to add an engineer, intern, or finish?",
				name: "option",
				choices: ["engineer", "intern", "finish"],
			},
		])
		.then((answers) => {
			if (answers === "engineer") {
				inquirer
					.prompt([
						{
							type: "input",
							name: "name",
							message: "Enter the team engineer's name:",
						},
						{
							type: "input",
							name: "id",
							message: "Enter the engineer's ID: ",
						},
						{
							type: "input",
							name: "email",
							message: "Enter the engineer's email: ",
						},
						{
							type: "input",
							name: "github",
							message: "Enter the engineer's Github username: ",
						}.then((answers) => {
							const engineer = new Engineer(
								answers.name,
								answers.id,
								answers.email,
								answers.github
							);

							employees.push(engineer);

							addNewEmployee();
						}),
					])
					.catch((err) => {});
			}
			if (answers === "intern") {
				inquirer
					.prompt([
						{
							type: "input",
							name: "name",
							message: "Enter the team intern's name:",
						},
						{
							type: "input",
							name: "id",
							message: "Enter the intern's ID: ",
						},
						{
							type: "input",
							name: "email",
							message: "Enter the intern's email: ",
						},
						{
							type: "input",
							name: "school",
							message: "Enter the intern's school: ",
						}.then((answers) => {
							const intern = new Intern(
								answers.name,
								answers.id,
								answers.email,
								answers.school
							);

							employees.push(intern);

							addNewEmployee();
						}),
					])
					.catch((err) => {});
			}
		})
		.catch((err) => {});
};

addManager();
addNewEmployee();

const generateHTML = (employees) => {
	`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./src/style.css">
      <title>My Team</title>
    </head>
    <body>
      
    <header>
        <h1 class="">My Team</h1>
    </header>
       
    <main>
    <div class="card">
        
    
    </div>
    
    </main>
    </body>
    </html>`;
};

fs.writeFile("./dist/index.html", generateHTML, (err) =>
	err ? console.log(err) : console.log("Successfully created HTML")
);
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
