
// zmienne, z których będziemy korzystać przy komunikacji z serwerem:
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3526',
    'X-Auth-Token': '6df3383a5b825242bbae60bf0001d132'
};

function generateTemplate(name, data, basicElement) {

  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
        Mustache.parse(template);
      
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}

//funkcję odpytującą serwer o zasób tablicy. 
fetch(baseUrl + '/board', { headers: myHeaders })

    .then(function(resp) {

        return resp.json();

    })

    .then(function(resp) {

        setupColumns(resp.columns);

});
  
  //implementacji funkcji setupColumns()
function setupColumns(columns) {

    columns.forEach(function(column) {

        var col = new Column(column.id, column.name);
        
    board.addColumn(col);

    setupCards(col, column.cards); //tworzenie kart

    });

}
//implementacja funkcji setupCards()
function setupCards(col, cards) {

	cards.forEach(function (card) {

        var cardObj = new Card(card.id, card.name);
        
  	col.addCard(cardObj);
  	
    });
    
}
  
