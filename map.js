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

	
	L.marker([0,0]).addTo(map).bindPopup({header: header1, body: body1}, { minWidth :430, maxHeight: 300 });
	L.marker([-18.14585, -13.35937]).addTo(map).bindPopup({header: header2, body: body2}, { minWidth :430, maxHeight: 300 });
	L.marker([20.30342, -16.17187]).addTo(map).bindPopup({header: header3, body: body3}, { minWidth :487, maxHeight: 300 }).openPopup();
	L.marker([6.83917, 22.85156]).addTo(map).bindPopup({header: header4, body: body4}, { minWidth :430, maxHeight: 300 });
	L.marker([-14.94478, 20.74219]).addTo(map).bindPopup({header: header5, body: body5}, { minWidth :430, maxHeight: 300 });

	for (var i = 0; i < members.length; i++) {
		L.DomEvent.on(document.getElementById(members[i] + '-ava'), 'click', function(e){
			var nodes = document.querySelectorAll('.card');
			for (var j = 0; j < nodes.length; j++) {
	    		nodes[j].style.display = 'None';
			}
			var member = e.target.id.slice(0,-4);
			document.querySelector('.' + member).style.display = 'list-item';
		})
	}
});


