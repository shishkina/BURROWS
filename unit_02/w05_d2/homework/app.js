console.log("loaded, bro");

$(document).ready(function(){
  $('#get-sentence').click(getSentence);
  $('#get-poem').click(getPoem);
  $('#5').click(function(){
    getLines($('#5').attr('id'));
  });
  $('#7').click(function(){
    getLines($('#7').attr('id'));
  });
  $('#10').click(function(){
    getLines($('#10').attr('id'));
  })
  $('#user-request').click(function(){
    getUserInput();

  })


});

var getUserInput = function(){
  let x = document.getElementById("input");
  console.log(x);
  let val = x.elements[0].value;
  getLines(val);

}
var getPoem = function() {
	$.ajax({
		url: 'http://ShakeItSpeare.com/api/poem',
		method: 'GET'
		})
	 .then(function(body){
     let thePoem = body.poem.split('\n').join('<br />');

    document.querySelector('#poem').innerHTML = thePoem;
  })
};

var getSentence = function() {
  $.ajax({
    url: 'http://ShakeItSpeare.com/api/sentence',
    method: 'GET'
  })
  .then(function(body){
    document.querySelector('#sentence').innerHTML = body.sentence;
  })
}
var getLines = function(num) {
  $.ajax({
    url: 'http://ShakeItSpeare.com/api/poem?lines=' + num,
    method: 'GET'
  })
  .then(function(body){
    document.querySelector('#poem').innerHTML = body.poem;
    console.log(body.poem);
  })
}
