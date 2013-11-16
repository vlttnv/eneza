function studentsJS(){
	
	newStudent("1", "John Doe", "Male", "Foo", "Bar")
	newStudent("2", "Jane Doe", "Female", "Foo", "Bar")

}

function newStudent(id, name, gender, school, region)	{

	var newStudentDiv = document.createElement('tr')
	// newStudentDiv.className="row"
	innerhtml = 
	  '<a href="student.html?userid=' + id + '>"<td>' + id + '</td>' +
      '<td>' + name + '</td>' +
      '<td>' + gender + '</td>' + 
      '<td>' + school + '</td>' +
      '<td>' + region + '</td></a>'

	newStudentDiv.innerHTML = innerhtml


	document.getElementById("studentrows").appendChild(newStudentDiv)
}

function postRegistration()	{

	//jsonArgs = name password mobile_number user_type
	var jsonArgs = {'name':"John Doe", 'password': "blank", 'mobile_number': "03838", 'user_type': "student"}
	xmlhttp.open("POST", "http://api.enexaeducation.com/registration?" + jsonArgs)
	xmlhttp.send();
}