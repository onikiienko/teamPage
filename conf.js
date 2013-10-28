var command, members = [];

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
    <div class="info-block"> \
    <div class="member-name"><h3>'+name+'</h3></div> \
    <div class="member-info"> Раса: '+stock+'</div> \
    <div class="member-info"> Класс: '+category+'</div> \
    <div class="member-info"> Уровень: '+level+'</div> \
    <div class="member-info"> Особые навыки: '+specials+'</div> \
    </div>';

	command.appendChild(card);
	members.push(membername);
}

var header1 = '<h2>Процессы</h2>';

var body1 = '<div><ul> \
<li>Живем Scrum’ом (планирования, презентации, ретро, дейли-митинги)</li>\
<li>Пишем unit-тесты, делаем CodeReview и используем Continuous Intergation</li> \
<li>Занимаемся Continuous Delivery’нгом</li> \
<li>Дышим автоматизацией (Mocha, Selenium WebDriver)</il> \
</ul>';

var header2 = '<h2>Технологии</h2>'

var body2 = '<ul> \
<li>nodejs, javascript, html5, css3</li> \
<li>sinonjs, yui3 test</li> \
<li>grunt, phing, chef, mapnik</li> \
<li>python, php</li> \
</ul>';

var header3 = '<h2>Команда</h2> \
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

var body3 = command;

var header4 = '<h2>Задачи</h2>';

var body4 = '<ul> \
<li>Колбасим API карты 2ГИС</li> \
<li>Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами</li> \
<li>Работаем с Leaflet</li><li>Интегрируемся с внутренними сервисами компании</li> \
<li>Разрабатываем Widget’ы на основе карт</li><li>Ворочаем кучей данных на клиенте</li> \
<li>Готовим карты от А до Я. Тайлы, стили, сервера, статистика</li> \
<li>Ускоряем отрисовки в браузерах и скорость загрузки API карт 2ГИС</li> \
</ul>';

var header5 = '<h2>Плюшки</h2>';

var body5 = '<ul> \
<li>Двухэтажный офис на последних этажах высотного здания с \
замечательным видом на центр Киева</li> \
<li>Кормим вкусными завтраками, катаем на самокате(круглый год), усаживаем в мягкие груши</li> \
<li>Ездим на it-конференции</li> \
<li>Делаем YiiConf, LambaDay, StartupDay, подслушиваем DevDay</li> \
</ul>';