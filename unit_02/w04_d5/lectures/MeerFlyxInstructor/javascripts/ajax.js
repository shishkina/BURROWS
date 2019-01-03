const ajax = {
  get: function get(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function onload() {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(`error: ${request.status}: ${request.statusText}`);
        }
      };
      request.send();
    });
  },
  getJSON: function getJSON(url) {
    return this.get(url).then((data) => {
      const parsedData = JSON.parse(data);
      return parsedData;
    });
  },
};
