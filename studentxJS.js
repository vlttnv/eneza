function processUser()  {
      var parameters = location.search.substring(1).split("=");
      var id = unescape(parameters[1]);
      document.getElementById("user").innerHTML = id;

  }

function assignTest()	{

	var assignBigBtn = document.getElementById("assignBig")
	assignBigBtn.style.display = "none"

	var container = document.getElementById("container")
	var textBoxContainer = document.getElementById("textBoxContainer")

	var textBox = document.createElement('div')
	textBox.innerHTML='<form>Test: <input id="textbox" class="form-control" type="text" placeholder="Test ID"><br></form>'
	/*
	$.ajax(
		{
			type: 'POST',
			url: 'http://162.243.64.148/register' ,
			data: {}
		}
	)
*/
	textBoxContainer.appendChild(textBox)

	var submitBtn = document.createElement('button')
	// submitBtn.innerHTML = "Submit"


	textBoxContainer.appendChild(submitBtn)
	var cancelBtn = document.createElement('button')
	textBoxContainer.appendChild(cancelBtn)
	

	var text = document.createTextNode("Cancel")
	var text2 = document.createTextNode("Assign")
	submitBtn.appendChild(text2);
	cancelBtn.appendChild(text);

	cancelBtn.onclick = function()	{
		textBoxContainer.removeChild(textBox)
		textBoxContainer.removeChild(cancelBtn)
		textBoxContainer.removeChild(submitBtn)
		assignBigBtn.style.display = "block"

	};
	submitBtn.onclick = function()	{
		var inputText = document.getElementById('textbox')
		var testname = inputText.value
		//gets the text out the input text box field. Will need this to send request
		console.log(testname)
	};
}

function viewReport()	{

	var parameters = location.search.substring(1).split("=");
    var id = unescape(parameters[1]);
    document.getElementById("user").innerHTML = id;

 	var viewReportBtn = document.getElementById("reportBtn")
 
    console.log(id)
    window.location.href = './reports.html?userID=' + id
      

}
