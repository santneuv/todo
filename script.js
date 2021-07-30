var inputEl = document.getElementById("input-el");
var addBtn = document.getElementById("add-btn");
var checkboxEl = document.getElementById("checkbox-el");
var DeleteBtn = document.getElementById("Delete-btn");
var innerDiv = document.getElementById('ul-el');
var list = document.getElementsByTagName("li");




addBtn.addEventListener('click', function () {


	if (inputEl.value.length == 0) {
		return false;
	} else {

		var hasan = list.length + 1;
		innerDiv.innerHTML = innerDiv.innerHTML + '<li><input id="checkbox' + hasan + '" type="checkbox"><label for="checkbox' + hasan + '">' + inputEl.value + '</label><button onclick="$(this).parent().hide();"><i class="fas fa-trash"></i></button></li>';

		localStorage.setItem("item" + hasan, inputEl)
		inputEl.value = "";
	}
});