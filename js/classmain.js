function classesJS(){
	newClass("1", "MATHEMATICS", "90")
	newClass("2", "SCIENCE", "80")
	newClass("3", "GENERAL KNOWLEDGE", "70")
	newClass("4", "English", "85")
	newClass("5", "SOCIAL STUDIES", "82")
	newClass("6", "KISWAHILI", "65")
}

function newClass(id, name, average)	{

	var newClassDiv = document.createElement('div')
	newClassDiv.className="row"
	innerhtml = '<a href="./class.html?classid=' + id + '">' +
	  '<div class="col-xs-1"><p>' + id + '</p></div>' +
      '<div class="col-xs-3"><p>' + name + '</p></div>' +
      '<div class="col-xs-2"><p>' + average + '</p></div>' +
      '<div class="col-xs-3"><input type="checkbox" name="delete" value="' + id + '"<br></div>' +
      '</form>'

	newClassDiv.innerHTML = innerhtml

	document.getElementById("classrows").appendChild(newClassDiv)
}

function getClassesData()	{
	//jsonArgs = name password mobile_number user_type
	var jsonArgs = {'school':"name"}
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.onload = hanldeClassData()
	xmlHttp.open("POST", "http://api.enexaeducation.com/getClasses?" + jsonArgs)
	xmlHttp.send()
}

function addClass() {
	sendAddRequest("000", "NEWCLASS")
}

function deleteClass() {
	var deleteBoxes = document.getElementsByName("delete")
	for (var i=0; i<deleteBoxes.length; i++) {
		if (deleteBoxes[i].checked)
			sendDeleteRequest(deleteBoxes.value)
	}
}

function sendAddRequest(id, name) {
	var jsonArgs = {'id':id, 'name': name}
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.onload = handleAddReponse()
	xmlHttp.open("GET", "http://api.enezaeducation.com/add?" + jsonArgs)
	xmlHttp.send()
}

function sendDeleteRequest(id) {
	var jsonArgs = {'id':"id"}
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.onload = handleDeleteReponse()
	xmlHttp.open("GET", "http://api.enezaeducation.com/delete?" + jsonArgs)
	xmlHttp.send()
}

function hanldeClassData() {
	
}

function handleAddReponse() {

}

function handleDeleteReponse() {

}
