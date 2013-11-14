var commandCards, commandMenu;


commandCards = document.createElement('ul');
commandCards.id = "commandCards";
commandCards.innerText = name;

commandMenu = document.createElement('div');
commandMenu.id = "member-menu";
commandMenu.innerHTML = '<h2>Команда</h2>';

newMember("a.geonya", "Андрей", "разработчики", "может не спать 2 суток");
newMember("d.lutsyk", "Дмитрий", "разработчики", "спокойствие");
newMember("b.onikienko", "Богдан", "тестировщики", "моет руки перед релизом");
newMember("p.gajdamak", "Павел", "тестировщики", "повелитель котиков");
newMember("a.borodatov", "Антон", "разработчики", "повелитель котиков");
newMember("ja.voloshyuk", "Ярослав", "разработчики", "повелитель котиков");
newMember("a.kim", "Алексей", "добрая и общительная поддержка", "железные нервы");
newMember("new", "Новенький", "разработчики", "<a href='http://job.2gis.ru/vacancy/kiev/id/474/'>тут</a>");

var header1 = '<h2>Процессы</h2>';

var body1 = '<ul> \
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

var header3 = commandMenu;

var body3 = commandCards;

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