function studentsJS(){
	
	newStudent("1", "John Doe", "Male", "Foo", "Bar")
	newStudent("2", "Jane Doe", "Female", "Foo", "Bar")

	readFile()

}

function newStudent(id, name, gender, school, region)	{

	var newStudentDiv = document.createElement('tr')
	// newStudentDiv.className="row"
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

	var reader = new FileReader();
	reader.onload = function(event) {
	    var contents = event.target.result;
	    console.log("File contents: " + contents);
	};

	reader.onerror = function(event) {
	    console.error("File could not be read! Code " + event.target.error.code);
	};
	
	reader.readAsText('messagejson.txt');
}