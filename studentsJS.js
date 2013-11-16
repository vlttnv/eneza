function studentsJS(){
	
	newStudent("1", "John Doe", "Male", "Foo", "Bar")
	newStudent("2", "Jane Doe", "Female", "Foo", "Bar")

}

function newStudent(id, name, gender, school, region)	{

	var newStudentDiv = document.createElement('div')
	newStudentDiv.className="row"
	innerhtml = '<a href="./student.html?userid=' + id + '">' +
	  '<div class="col-xs-1"><p>' + id + '</p>' +
      '</div><div class="col-xs-3"><p>' + name + '</p>' +
      '</div><div class="col-xs-2"><p>' + gender + '</p>' + 
      '</div><div class="col-xs-3"><p>' + school + '</p>' +
      '</div><div class="col-xs-3"><p>' + region + '</p></div>' +
      '</form>'

	newStudentDiv.innerHTML = innerhtml


	document.getElementById("studentrows").appendChild(newStudentDiv)
}

function postRegistration()	{

	//jsonArgs = name password mobile_number user_type
	var jsonArgs = {'name':"John Doe", 'password': "blank", 'mobile_number': "03838", 'user_type': "student"}
	xmlhttp.open("POST", "http://api.enexaeducation.com/registration?" + jsonArgs)
	xmlhttp.send();
}