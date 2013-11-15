var commandCards, commandMenu;


commandCards = document.createElement('ul');
commandCards.id = "commandCards";
commandCards.innerText = name;

commandMenu = document.createElement('div');
commandMenu.id = "member-menu";
commandMenu.innerHTML = '<h1 class="dg-popup-header-title">Команда</h1>';

newMember("a.geonya", "Андрей", "разработчики", "может не спать 2 суток");
newMember("d.lutsyk", "Дмитрий", "разработчики", "спокойствие");
newMember("b.onikienko", "Богдан", "тестировщики", "моет руки перед релизом");
newMember("p.gajdamak", "Павел", "тестировщики", "повелитель котиков");
newMember("a.borodatov", "Антон", "разработчики", "повелитель котиков");
newMember("ja.voloshyuk", "Ярослав", "разработчики", "повелитель котиков");
newMember("a.kim", "Алексей", "добрая и общительная поддержка", "железные нервы");
newMember("new", "Новенький", "разработчики", "<a href='http://job.2gis.ru/vacancy/kiev/id/474/'>тут</a>");

var header1 = '<h1 class="dg-popup-header-title">Процессы</h1>';

var body1 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Живем Scrum’ом (планирования, презентации, ретро, дейли-митинги) </li> \
<li class="building-callout__list-item">Пишем unit-тесты, делаем CodeReview и используем Continuous Intergation </li> \
<li class="building-callout__list-item">Занимаемся Continuous Delivery’нгом </li> \
<li class="building-callout__list-item">Дышим автоматизацией (Mocha, Selenium WebDriver) </li> \
</ul>';

var header2 = '<h1 class="dg-popup-header-title">Технологии</h1>'

var body2 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">nodejs, javascript, html5, css3 </li> \
<li class="building-callout__list-item">sinonjs, yui3 test </li> \
<li class="building-callout__list-item">grunt, phing, chef, mapnik </li> \
<li class="building-callout__list-item">python, php </li> \
</ul>';

var header3 = commandMenu;

var body3 = commandCards;

var header4 = '<h1 class="dg-popup-header-title">Задачи</h1>';

var body4 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Колбасим API карты 2ГИС </li> \
<li class="building-callout__list-item">Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами </li> \
<li class="building-callout__list-item">Работаем с Leaflet</li> \
<li  class="building-callout__list-item>Интегрируемся с внутренними сервисами компании </li> \
<li class="building-callout__list-item">Ворочаем кучей данных на клиенте </li> \
<li class="building-callout__list-item">Ускоряем отрисовки в браузерах и скорость загрузки API карт 2ГИС </li> \
</ul>';

var header5 = '<h1 class="dg-popup-header-title">Плюшки</h1>';

var body5 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Двухэтажный офис на последних этажах высотного здания с замечательным видом на центр Киева </li> \
<li class="building-callout__list-item">Кормим вкусными завтраками, катаем на самокате(круглый год), усаживаем в мягкие груши </li> \
<li class="building-callout__list-item">Ездим на it-конференции</li> \
<li  class="building-callout__list-item>Делаем YiiConf, LambaDay, StartupDay, подслушиваем DevDay </li> \
</ul>';