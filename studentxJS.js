function assignTest()	{

	var assignBigBtn = document.getElementById("assignBig")
	assignBigBtn.style.display = "none"

	var container = document.getElementById("container")
	var textBoxContainer = document.getElementById("textBoxContainer")

	var textBox = document.createElement('div')
	textBox.innerHTML='<form>Test: <input type="text" name="testName"><br></form>'

	textBoxContainer.appendChild(textBox)

	var submitBtn = document.createElement('button')
	textBoxContainer.appendChild(submitBtn)
	var cancelBtn = document.createElement('button')
	textBoxContainer.appendChild(cancelBtn)
	

	var text = document.createTextNode("Cancel")
	var text2 = document.createTextNode("Assign")

	cancelBtn.onclick = function()	{
		textBoxContainer.removeChild(textBox)
		textBoxContainer.removeChild(cancelBtn)
		textBoxContainer.removeChild(submitBtn)
		assignBigBtn.style.display = "block"

	};

	
	submitBtn.appendChild(text2);
	cancelBtn.appendChild(text);
}