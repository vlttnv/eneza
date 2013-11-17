function aggregateDisplay(type)	{
	var visualiser = document.getElementById("visualiser")
	visualiser.innerHTML = ""
	var block = document.createElement('div')
	block.innerHTML = '<p>Displaying aggregate by ' + type + '</p>'
	visualiser.appendChild(block)
}

function getReport()	{
	$.ajax(
		{
			type: 'POST',
			url: 'http://162.243.64.148/reports' ,
			data: {}
		}
	)
}