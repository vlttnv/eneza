function studentsJS(){
	
	/*no database with just students, this pulls all types of users
	*this calls the phone server which makes the request to get data, the return text is written to a file
	*this file is read below to display the content
	*/
	//window.Android.users()

	readFile()

}

function newStudent(id, name, gender, school, region)	{

	var newStudentDiv = document.createElement('tr')
	/*Dynamically adds users to the table so table large enough*/
	innerhtml = 
	  '<td>' + id + '</td>' +
      '<td><a href="student.html?userid=' + id + '">' + name + '</a></td>' +
      '<td>' + gender + '</td>' + 
      '<td>' + school + '</td>' +
      '<td>' + region + '</td>'

	newStudentDiv.innerHTML = innerhtml
	document.getElementById("studentrows").appendChild(newStudentDiv)
}

function postRegistration()	{

	//jsonArgs = name password mobile_number user_type
	var jsonArgs = {'name':"John Doe", 'password': "blank", 'mobile_number': "03838", 'user_type': "student"}
	xmlhttp.open("POST", "http://api.enexaeducation.com/registration?" + jsonArgs)
	xmlhttp.send();
}

function readFile()	{

	/*The JSON file is read because it can be used offline
	The students are read one at a time
	Iterated through
	And displayed */
	var jsonDiv = document.createElement("div")
	document.getElementById("json").appendChild(jsonDiv)

	var message = getJSON()
	students = jQuery.parseJSON(message)
	students = students["students"]
	console.log(students)
	for (var i=0; i< students.length; i++)	{
		/*newStudent is essesntially a factory method for a row in the table to add a student*/
		newStudent(students[i].userID, students[i].name, students[i].Gender, students[i].School, students[i].Region)
		
	}

}