const ajax = {  // Object literal... just to hold the function
  get: function(url) {  // ajax.get   accepts URL... and makes request
    return new Promise(function(resolve, reject){  // return an object... which knows hot to deal with a .thein
      const request = new XMLHttpRequest(); // create one of the built in AJAX objects
      request.open('GET', url);  // Write the request text message
      request.onload = function(){  // WHEN the response comes back...
        if (request.status === 200) {  // ... AND the status is 200////
          resolve(request.response);    // resolve the promise... passing the response data
        } else { // BUT if the status is a different status code than 200
          reject(`error status: ${request.statusTest}`)  // NO GOOD... give up
        }
      };
      request.send();  // SEND the asyncronous javascripts and XML request
    });
  },
  getJSON: function(url){  // Accept the url
    return this.get(url).then((json) => {  // when response comes back...
      return JSON.parse(json);  //  Parse the json and pass it on to the next then...
    });
  }
};
