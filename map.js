var map,
	balloonHTML,command;


command = document.createElement('ul');
command.className = "command";
command.innerText = name;
newMember("geonya", "./img/photos/a.geonya.jpg", "Андрей", "люди", "разработчики", "85", "может не спать 2 суток");
newMember("lutsyk", "./img/photos/d.lutsyk.jpg", "Дмитрий", "люди", "разработчики", "85", "чемпион мира по настольному тенису");
newMember("onikienko", "./img/photos/b.onikienko.jpg", "Богдан", "люди", "тестировщики", "85", "моет руки перед релизом");
newMember("gajdamak", "./img/photos/p.gajdamak.jpg", "Павел", "люди", "тестировщики", "85", "повелитель котиков");
newMember("borodatov", "./img/photos/a.borodatov.jpg", "Антон", "люди", "разработчики", "85", "повелитель котиков");
newMember("voloshyuk", "./img/photos/ja.voloshyuk.jpg", "Ярослав", "люди", "разработчики", "85", "повелитель котиков");
newMember("kim", "./img/photos/a.kim.jpg", "Алексей", "люди", "добрая и общительная поддержка", "85", "железные нервы, проникновенный взгляд");
newMember("new", "./img/photos/new.jpg", "Алексей", "люди", "добрая и общительная поддержка", "85", "http://job.2gis.ru/vacancy/kiev/id/474/");

function newMember(membername, photo ,name, stock, category, level, specials){
	var card = document.createElement('li');

	card.className = membername + " card";
	card.innerHTML = '<div class="member-photo" style="background-image: url(' + photo + ')"></div> \
    <div class="member-name">'+name+'</div> \
    <div class="member-info"> Раса: '+stock+'</div> \
    <div class="member-info"> Класс: '+category+'</div> \
    <div class="member-info"> Уровень: '+level+'</div> \
    <div class="member-info"> Особые навыки: '+specials+'</div>';

	command.appendChild(card);
}

balloonHTML1 = '<div><ul> \
<li>Живем Scrum’ом (планирования, презентации, ретро, дейли-митинги)</li>\
<li>Пишем unit-тесты, делаем CodeReview и используем Continuous Intergation</li> \
<li>Занимаемся Continuous Delivery’нгом</li> \
<li>Дышим автоматизацией (Mocha, Selenium WebDriver)</il> \
</ul>';

balloonHTML2 = '<ul> \
<li>nodejs, javascript, html5, css3</li> \
<li>sinonjs, yui3 test</li> \
<li>grunt, phing, chef, mapnik</li> \
<li>python, php</li> \
</ul>';

balloonHTML3 = command;

balloonHTML4 = '<ul> \
<li>Колбасим API карты 2ГИС</li> \
<li>Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами</li> \
<li>Работаем с Leaflet</li><li>Интегрируемся с внутренними сервисами компании</li> \
<li>Разрабатываем Widget’ы на основе карт</li><li>Ворочаем кучей данных на клиенте</li> \
<li>Готовим карты от А до Я. Тайлы, стили, сервера, статистика</li> \
<li>Ускоряем отрисовки в браузерах и скорость загрузки API карт 2ГИС</li> \
</ul>';

balloonHTML5 = '<ul> \
<li>Двухэтажный офис на последних этажах высотного здания с \
замечательным видом на центр Киева</li> \
<li>Кормим вкусными завтраками, катаем на самокате(круглый год), усаживаем в мягкие груши</li> \
<li>Ездим на it-конференции</li> \
<li>Делаем YiiConf, LambaDay, StartupDay, подслушиваем DevDay</li> \
</ul>';

header2 = '<h2>Команда</h2> \
<div> \
<a class="ava" id="geonya-ava"></a> \
<a class="ava" id="lutsyk-ava"></a> \
<a class="ava" id="onikienko-ava"></a> \
<a class="ava" id="gajdamak-ava"></a> \
<a class="ava" id="borodatov-ava"></a> \
<a class="ava" id="voloshyuk-ava"></a> \
<a class="ava" id="kim-ava"></a> \
<a class="ava" id="new-ava"></a> \
</div>';


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

	
	L.marker([0,0]).addTo(map).bindPopup({header: '<h2>Процессы</h2>', body: balloonHTML1}, { minWidth :430, maxHeight: 300 });
	L.marker([-18.14585, -13.35937]).addTo(map).bindPopup({header: '<h2>Технологии</h2>', body: balloonHTML2}, { minWidth :430, maxHeight: 300 });
	L.marker([20.30342, -16.17187]).addTo(map).bindPopup({header: header2, body: balloonHTML3}, { minWidth :487, maxHeight: 300 }).openPopup();
	L.marker([6.83917, 22.85156]).addTo(map).bindPopup({header: '<h2>Задачи</h2>', body: balloonHTML4}, { minWidth :430, maxHeight: 300 });
	L.marker([-14.94478, 20.74219]).addTo(map).bindPopup({header: '<h2>Плюшки</h2>', body: balloonHTML5}, { minWidth :430, maxHeight: 300 });

	
	L.DomEvent.on(document.getElementById('geonya-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.geonya').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('lutsyk-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.lutsyk').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('onikienko-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.onikienko').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('gajdamak-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.gajdamak').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('borodatov-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.borodatov').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('voloshyuk-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.voloshyuk').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('kim-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.kim').style.display = 'list-item';
	})
	L.DomEvent.on(document.getElementById('new-ava'), 'click', function(){
		var nodes = document.querySelectorAll('.card');
		for (var i = 0; i < nodes.length; i++) {
    		nodes[i].style.display = 'None';
		}
		document.querySelector('.new').style.display = 'list-item';
	})
});


