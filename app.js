window.onload = function() {
	var txt = document.getElementById("txt");
	txt.value = localStorage.getItem("txt");

	var button = document.getElementById("save");
	button.addEventListener("click", saveData);

	function saveData () {
		localStorage.setItem("txt", txt.value);
	}
}