function loadFunction()	{
	var parameters = location.search.substring(1).split("=");
    var id = unescape(parameters[1]);

}

function aggregateDisplay(type)	{
	var visualiser = document.getElementById("visualiser")
	visualiser.innerHTML = ""
	var block = document.createElement('div')
	block.innerHTML = '<p>Displaying aggregate by ' + type + '</p>'
	visualiser.appendChild(block)
}

function getParameters()	{

	input = document.getElementById('userID')
	var inUser = input.value
	
	var param = {'userId':inUser}
	
	readFile(inUser)
}



function readFile(id)	{


	var jsonReturned
	var message = getJSON()
	report = jQuery.parseJSON(message)
	report = report["reports"]
	console.log(report)

	
	
	var innerhtml = ''
	for (var i=0; i< report.length; i++)	{
		if (report[i].userID == String(id))	{
			grades = report[i].grades
			for (var j=0; j<grades.length; j++)	{
				
				var newSubjectDiv = document.createElement('tr')

				innerhtml = '<td>' + grades[j].subject_name + '</td>' +
      			'<td>' + grades[j].average + '</td>'

      			newSubjectDiv.innerHTML = innerhtml
				document.getElementById("subjectrows").appendChild(newSubjectDiv)
			}
			//console.log(report[i].grades)

			/*
			
			*/

		}
		
	}

	/*var visualiser = document.getElementById('visualiser')
	var subject = visualiser.childNodes


	for (var j = 0; j<jsonReturned.length; j++)	{
		var grade = document.createElement('div')
		grade.innerHTML = '<p> Grade for subject <p>'
		var subjectDiv = document.getElementById(jsonReturned[j].subject_name)
		subjectDiv.appendChild(grade)
		}
*/
}




function visualiseReport()	{

	var jsonReturned = [ 
			 { 
			 "average": "65.3", 
			 "subject_name": "Kiswahili" 
			 }, 
			 { 
			 "average": "62.0", 
			 "subject_name": "English" 
			 }, 
			 { 
			 "average": "60.4", 
			 "subject_name": "Science" 
			 }, 
			 { 
			 "average": "59.1", 
			 "subject_name": "KCPE" 
			 }, 
			 { 
			 "average": "59.1", 
			 "subject_name": "Mathematics" 
			 }, 
			 { 
			 "average": "56.7", 
			 "subject_name": "General Knowledge" 
			 }, 
			 { 
			 "average": "55.6", 
			 "subject_name": "Social Studies" 
			 } 
		] 

		var visualiser = document.getElementById('visualiser')
		var subject = visualiser.childNodes


		for (var j = 0; j<jsonReturned.length; j++)	{
			var grade = document.createElement('div')
			grade.innerHTML = '<p> Grade for subject ' + jsonReturned[j].subject_name + ' is ' + jsonReturned[j].average + '<p>'
			var subjectDiv = document.getElementById(jsonReturned[j].subject_name)
			subjectDiv.appendChild(grade)
			}
	
}

/*
*/
