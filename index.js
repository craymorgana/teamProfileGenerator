const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//test

let employees = [];

const generateHTML = ({}) =>
	`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="../index.js"></script>
	<script src="../src/card.js"></script>
    </body>
    </html>`;

const addMoreEmployees = () => {
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
			if (answers.option === "engineer") {
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
						},
					])
					.then((answers) => {
						const engineer = new Engineer(
							answers.name,
							answers.id,
							answers.email,
							answers.github
						);

						employees.push(engineer);
						addMoreEmployees();
					})
					.catch((err) => {
						console.log(err);
					});
			}

			if (answers.option === "intern") {
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
						},
					])
					.then((answers) => {
						const intern = new Intern(
							answers.name,
							answers.id,
							answers.email,
							answers.school
						);
						employees.push(intern);
						addMoreEmployees();
					})
					.catch((err) => {
						console.log(err);
					});
			}

			const createHTML = () => {
				const htmlContent = generateHTML(employees);

				fs.writeFile("./dist/index.html", htmlContent, (err) =>
					err
						? console.log(err)
						: console.log("Successfully created index.html!")
				);
			};
			createHTML();
		})
		.catch((err) => {});
};

const addFirstEmployee = () => {
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

			addMoreEmployees();
		})
		.catch((err) => {
			console.log(err);
		});
};

addFirstEmployee();

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
