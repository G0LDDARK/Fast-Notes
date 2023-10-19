window.onload = function() {
	var txt = document.getElementById("txt");
	txt.value = localStorage.getItem("txt");
	function saveData(){
		localStorage.setItem("txt", txt.value);
    	setTimeout(saveData, 500);
	}
	saveData();
}
