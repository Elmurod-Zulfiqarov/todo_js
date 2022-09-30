const students = [
	{
		firstName: "Elmurod",
		lastName: "Zulfiqarov",
		age: 20,
		group: "kif 218-19",
		status: 'shartnoma',
	}, 
	{
		firstName: "Elyor",
		lastName: "Zulfiqarov",
		age:18,
		group: "kif 217-19",
		status: 'shartnoma',
	},
	{
		firstName: "ElCoder",
		lastName: "Zulfiqarov",
		age:16,
		group: "Aniq fanlar 101-17",
		status: 'grand',
	}
];

let saveIndex = null;

function drawFunction() {
	document.querySelector('tbody').innerHTML = "";
	for (let i = 0; i < students.length; i++) {
		console.log("Errror")
		document.querySelector('tbody').innerHTML += `
		<tr>
			<td>${i+1}</td>
			<td>${students[i].firstName}</td>
			<td>${students[i].lastName}</td>
			<td>${students[i].age}</td>
			<td>${students[i].group}</td>
			<td>${students[i].status}</td>
			<td>
				<button class="btn btn-danger btn-sm" onclick="deleteStudent(${i})">delete</button>
				<button class="btn btn-warning btn-sm ms-2" onclick="updateStudent(${i})">update</button>
			</td>
		</tr>
		`
	}
}
drawFunction()

addBtn.addEventListener("click", addStudent);

function addStudent() {
	let firstName = document.forms["studentForm"]["firstName"].value;
	let lastName = document.forms["studentForm"]["lastName"].value;
	let age = document.forms["studentForm"]["age"].value;
	let group = document.forms["studentForm"]["group"].value;
	let status = document.forms["studentForm"]["status"].value;
	
	if (firstName.trim().length >= 2 && lastName.trim().length >= 2, 7<=age<=200, 1<=group.trim().length<=10, status !== "select status") {
		let newObj = {
			firstName,
			lastName,
			age,
			group,
			status
		};
		if (saveIndex !== null) {
			students[saveIndex] = newObj;
		} else {
			students.push(newObj);
		}
		drawFunction();
		document.forms["studentForm"].reset();
		saveIndex = null;

	} else {
		alert("Error: Enter full and correct Forms!");
	}
}

function deleteStudent(index) {
	students.splice(index, 1);
	drawFunction();
}

function updateStudent(index) {
	document.forms["studentForm"]["firstName"].value = students[index].firstName;
	document.forms["studentForm"]["lastName"].value = students[index].lastName;
	document.forms["studentForm"]["age"].value = students[index].age;
	document.forms["studentForm"]["group"].value = students[index].group;
	document.forms["studentForm"]["status"].value = students[index].status;
	saveIndex = index;
}

 