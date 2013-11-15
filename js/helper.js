var members = [];

function newMember(memberName,name, category, specials){
    
    //creating menu in header of popUp
    var memberMenu = document.createElement('a');
    memberMenu.id = memberName + '-menu';
    memberMenu.className = 'ava';
    memberMenu.style.backgroundImage="url('./img/photos/"+ memberName +"_ava.jpg')";
    commandMenu.appendChild(memberMenu);

    //creating a members cards in body of poUp
	var memberCard = document.createElement('li');
	memberCard.id = memberName + '-card';
    memberCard.className = 'card';
    memberCard.style.display = 'None';
    
    var memberPhoto = document.createElement('div');
    memberPhoto.className = "member-photo";
    memberPhoto.style.backgroundImage="url('./img/photos/"+ memberName +".jpg')";
    memberCard.appendChild(memberPhoto);

    var infoBlock = document.createElement('div');
    infoBlock.className = "info-block";
    memberCard.appendChild(infoBlock);

    var memberFields = document.createElement('div');
    memberFields.className = "member-name";
    memberFields.innerHTML = ' \
    <h3>' + name + '</h3> \
    <div class="member-info"> Раса: люди</div> \
    <div class="member-info"> Класс: '+category+'</div> \
    <div class="member-info"> Уровень: 85</div> \
    <div class="member-info"> Особые навыки: '+specials+'</div>';
    infoBlock.appendChild(memberFields);

	
    if (memberName == 'a.geonya'){
        memberCard.style.display = 'list-item';
    }

	commandCards.appendChild(memberCard);
	members.push(memberName);
}

function createMarker(lon,lat, headerContent, bodyContent, popupWidth, popupHeight){
    var nextMarker = L.marker([lon,lat]).addTo(map).bindPopup(
        {
            header : headerContent, 
            body : bodyContent
        }, 
        { 
            minWidth : popupWidth, 
            maxHeight : popupHeight 
        }
    );
    return nextMarker;
}

function setEvents(){
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