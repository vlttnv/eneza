function studentsJS(){
	
	newStudent("1", "John Doe", "Male", "Foo", "Bar")
	newStudent("2", "Jane Doe", "Female", "Foo", "Bar")

}

function newStudent(id, name, gender, school, region)	{

	var newStudentDiv = document.createElement('div')
	newStudentDiv.className="row"
	innerhtml = '<div class="col-xs-1"><p>' + id + '</p>' +
      '</div><div class="col-xs-3"><p>' + name + '</p>' +
      '</div><div class="col-xs-2"><p>' + gender + '</p>' + 
      '</div><div class="col-xs-3"><p>' + school + '</p>' +
      '</div><div class="col-xs-3"><p>' + region + '</p></div>'

	newStudentDiv.innerHTML = innerhtml


	document.getElementById("studentrows").appendChild(newStudentDiv)
}