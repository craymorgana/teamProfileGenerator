


function generateEmployeeCard(employees){
	
for (let i = 0; i < employees.length; i++) {
	const employeeCard = `<h2>${employees[i].name}</h2>
					<h3 class="role">${employees[i].getRole}</h3>`;

	$(".card").append(employeeCard);
}
console.log('employees :>> ', employees);
}

generateEmployeeCard();