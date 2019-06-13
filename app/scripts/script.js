onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
	
	navigator.geolocation.getCurrentPosition(showPosition);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //criar seu token no mapbox
    accessToken: 'pk.eyJ1IjoiYXJ0aXZldCIsImEiOiJjandra2IzZXUwOHloNDltcWt4YjF6YnpwIn0.MdSO6oVDJsjNtDKKhnPktA'
	}).addTo(mymap);
	var b = document.getElementById("btn_add");
	b.addEventListener("click", buttonListener);

	//Add Button Listener
	function buttonListener() {
		var lati = document.getElementById("lat").value;
		var longi = document.getElementById("long").value;
		var desc = document.getElementById("desc").value;
		var m = L.marker([lati,longi]).addTo(mymap);
		m.bindPopup(desc);

	}
	
}
//atualiza a posição
function showPosition(pos){
	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
	mymap.setView([lat,long], 13);
	console.log(lat,long);
}


//Função para adicionar marcador


//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa