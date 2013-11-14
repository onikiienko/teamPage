var map,
	balloonHTML;

L.onLoad(function () {
	map = new L.Map('map', {
    	"center": new L.LatLng(0, 0),
    	"zoom": 3,
    	"dgGeoclicker": false
	});

	L.tileLayer('http://api.2gis.ru/assets/frontend/api/api_vacancy/tiles/{z}/{x}/{y}.jpg', {
		maxZoom: 5,
		minZoom: 3
	}).addTo(map);

	createMarker(0, 0, header1, body1, 430, 300);
	createMarker(-18.14585, -13.35937, header2, body2, 430, 300);
	createMarker(6.83917, 22.85156, header4, body4, 430, 300);
	createMarker(-14.94478, 20.74219, header5, body5, 430, 300);
	createMarker(20.30342, -16.17187, header3, body3, 490, 300);

	putEvents();
	
});


function createMarker(lon,lat, headerContent, bodyContent, popupWidth, popupHeight){
	L.marker([lon,lat]).addTo(map).bindPopup(
		{
			header : headerContent, 
			body : bodyContent
		}, 
		{ 
			minWidth : popupWidth, 
			maxHeight : popupHeight 
		}
	).openPopup();	
}

function putEvents(){
	for (var i = 0; i < members.length; i++) {
		L.DomEvent.on(document.getElementById(members[i] + '-menu'), 'click', function(e){
			for (var j = 0; j < members.length; j++) {
	    		document.getElementById(members[j] + '-card').style.display = 'None';
			}

			//taking name from output, for example "d.lutsyk"
			var member = e.target.id.slice(0,-5);
			document.getElementById(member + '-card').style.display = 'list-item';
		})
	}	
}
