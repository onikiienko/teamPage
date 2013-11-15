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
	var nextMarker = createMarker(20.30342, -16.17187, header3, body3, 490, 300);
    nextMarker.on('popupopen', setEvents);  
	//putEvents();
	
});



