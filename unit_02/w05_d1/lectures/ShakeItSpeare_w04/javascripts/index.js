
function writePoem() {
  const promise = ajax.getJSON('http://shakeitspeare.com/api/sentence').then((data) => {
    document.body.innerHTML += data.sentence + '<br/>';
  });
}

setInterval(writePoem, 1000);
