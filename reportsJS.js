function aggregateDisplay(type)	{
	var visualiser = document.getElementById("visualiser")
	visualiser.innerHTML = ""
	var block = document.createElement('div')
	block.innerHTML = '<p>Displaying aggregate by ' + type + '</p>'
	visualiser.appendChild(block)
}

function getParameters()	{

	var input = document.getElementById('startDate')
	var inStart = input.value
	input = document.getElementById('endDate')
	var inEnd = input.value
	input = document.getElementById('userID')
	var inUser = input.value
	input = document.getElementById('schoolID')
	var inSchool = input.value
	var inGrouping = ""
	var param = {'startDate':inStart, 'endDate':inEnd, 'userId':inUser, 'schoolId':inSchool, 'grouping':inGrouping}
	console.log(param)
	visualiseReport()
	//getReport(param)
}

function haveParameters(id)	{
	//This method is for if being called from a student, so we know we are grabbing a user_ids report

	var userField = document.getElementById('userID')
	var param = {'startDate':"", 'endDate':"", 'userId':id, 'schoolId':"", 'grouping':""}
	console.log(param)
	visualiseReport()
}

function getReport(jsonparam)	{
	$.ajax(
		{
			type: 'POST',
			url: 'http://162.243.64.148/reports' ,
			data: jsonparam
		}
	)
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
