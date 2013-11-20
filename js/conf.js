var commandCards, commandMenu;


commandCards = document.createElement('ul');
commandCards.id = "commandCards";
commandCards.innerText = name;

commandMenu = document.createElement('div');
commandMenu.id = "member-menu";
commandMenu.innerHTML = '<h1 class="dg-popup-header-title">Команда</h1>';

newMember("a.geonya", "Андрей", "разработчики", "может не спать 2 суток");
newMember("d.lutsyk", "Дмитрий", "разработчики", "спокойствие богомола");
newMember("b.onikienko", "Богдан", "тестировщики", "взял мак в ипотеку");
newMember("p.gajdamak", "Павел", "тестировщики", "повеливает релизами");
newMember("a.borodatov", "Антон", "разработчики", "git pull --jack daniels --repeat");
newMember("ja.voloshyuk", "Ярослав", "разработчики", "знает дорогу в оперетту");
newMember("a.kim", "Алексей", "добрая и общительная поддержка", "железные нервы");
newMember("new", "Присоединяйся!", "разработчики", "<a target='_blank' href='http://job.2gis.ru/vacancy/kiev/id/474/'>тут</a>");

var header1 = '<h1 class="dg-popup-header-title">Процессы</h1>';

var body1 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Живем Scrum’ом (планирования, презентации, ретроспективы, дейли-митинги) </li> \
<li class="building-callout__list-item">Пишем unit-тесты, делаем code review, используем continuous intergation </li> \
<li class="building-callout__list-item">Занимаемся continuous delivery’нгом </li> \
<li class="building-callout__list-item">Дышим автоматизацией (Mocha, Selenium WebDriver) </li> \
</ul>';

var header2 = '<h1 class="dg-popup-header-title">Технологии</h1>'

var body2 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">nodejs, javascript, html5, css3, svg </li> \
<li class="building-callout__list-item">mocha, sinonjs</li> \
<li class="building-callout__list-item">grunt, phing, chef </li> \
<li class="building-callout__list-item">python, php, mapnik </li> \
</ul>';

var header3 = commandMenu;

var body3 = commandCards;

var header4 = '<h1 class="dg-popup-header-title">Задачи</h1>';

var body4 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Колбасим API карт 2GIS </li> \
<li class="building-callout__list-item">Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами </li> \
<li class="building-callout__list-item">Работаем с Leaflet</li> \
<li  class="building-callout__list-item">Интегрируемся с внутренними сервисами компании </li> \
<li class="building-callout__list-item">Ворочаем кучей данных на клиенте </li> \
<li class="building-callout__list-item">Ускоряем отрисовку в браузерах и скорость загрузки API карт </li> \
</ul>';

var header5 = '<h1 class="dg-popup-header-title">Плюшки</h1>';

var body5 = '<ul class="building-callout__list"> \
<li class="building-callout__list-item">Двухэтажный офис на последних этажах высотного здания с замечательным видом на центр Киева </li> \
<li class="building-callout__list-item">Кормим вкусными завтраками, катаем на самокате (круглый год), усаживаем в мягкие груши </li> \
<li class="building-callout__list-item">Ездим на IT-конференции</li> \
<li  class="building-callout__list-item>Делаем &lambda; day, StartupDay, подслушиваем DevDay </li> \
</ul>';