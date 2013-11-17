function loadFunction()	{
	/*
	This function runs when the page loads
	Used to grab the id wich is sent to it*/
	var parameters = location.search.substring(1).split("=");
    var id = unescape(parameters[1]);

}


function getParameters()	{
	/*
	When the report is being generated, need to find which user for
	grab that value out the text box
	send it to the read file method*/
	input = document.getElementById('userID')
	var inUser = input.value
	
	readFile(inUser)
}



function readFile(id)	{

	/*no data for reports
	*this calls the phone server which makes the request to get data, the return text is written to a file
	*this file is read below to display the content
	*/
	//window.Android.reports()


	var jsonReturned
	var message = getJSON()
	report = jQuery.parseJSON(message)
	report = report["reports"]
	console.log(report)

	document.getElementById("subjectrows").innerHTML=""
	
	var innerhtml = ''
	for (var i=0; i< report.length; i++)	{
		/*find the correct user*/
		if (report[i].userID == String(id))	{
			grades = report[i].grades
			for (var j=0; j<grades.length; j++)	{
				
				var newSubjectDiv = document.createElement('tr')
				/* add a new row to the table with each subject and the grade in the next column*/
				innerhtml = '<td>' + grades[j].subject_name + '</td>' +
      			'<td>' + grades[j].average + '</td>'
      			/*add this row to the table for display*/
      			newSubjectDiv.innerHTML = innerhtml
				document.getElementById("subjectrows").appendChild(newSubjectDiv)
			}

		}
		
	}

}


