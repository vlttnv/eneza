function studentsJS(){
	
	newStudent("John Doe", "Male", "Foo", "Bar")
	newStudent("Jane Doe", "Female", "Foo", "Bar")

}

function newStudent(name, gender, school, region)	{

	var newStudentDiv = document.createElement('div')
	newStudentDiv.className="row"
	innerhtml = '<div class="col-xs-3"><p>' + name + '</p>' +
      '</div><div class="col-xs-3"><p>' + gender + '</p>' + 
      '</div><div class="col-xs-3"><p>' + school + '</p>' +
      '</div><div class="col-xs-3"><p>' + region + '</p></div>'

	newStudentDiv.innerHTML = innerhtml
	document.getElementById("studentrows").appendChild(newStudentDiv)
}