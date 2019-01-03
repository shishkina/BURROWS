function letThereBeHearts(numHearts){

  let $heart;
  const $body = $('body');

  for (let i = 0; i < numHearts; i++) {
    $heart = $('<h1>').addClass('heart').html('&hearts;');
    $body.append($heart);

    $heart.animate({
      top: Math.floor(Math.random() * 200) - 50 + '%',
      left: Math.floor(Math.random() * 200) - 50 + '%',
      opacity: 0,
    }, 2000, 'linear');
  }
}


setInterval(() => {
  letThereBeHearts(10)
}, 1000);
letThereBeHearts(10);
