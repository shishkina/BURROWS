function clearLights() {
  document.querySelectorAll('.bulb').forEach( (bulb) => {
      bulb.style.background = 'black';
  });
}

function illuminateStopLight() {
  clearLights();
  document.querySelector('#stopLight').style.backgroundColor = 'red';
}

function illuminateSlowLight() {
  clearLights();
  document.querySelector('#slowLight').style.backgroundColor = 'purple';
}


window.onload = function(){

  document.querySelector('#slowButton')
          .addEventListener('click', illuminateSlowLight);

  document.querySelector('#stopButton')
          .addEventListener('click', illuminateStopLight);

};
