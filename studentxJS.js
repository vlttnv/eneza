function assignTest()	{

	

	var container = document.getElementById("container")
	var textBoxContainer = document.getElementById("textBoxContainer")

	var textBox = document.createElement('div')
	textBox.innerHTML='<form>Test: <input type="text" name="testName"><br></form>'

	textBoxContainer.appendChild(textBox)

	var cancelBtn = document.createElement('button')
	textBoxContainer.appendChild(cancelBtn)
	

	var text = document.createTextNode("Cancel")

	cancelBtn.onclick = function()	{
		textBoxContainer.removeChild(textBox)
		textBoxContainer.removeChild(cancelBtn)
	};
	cancelBtn.appendChild(text);
}