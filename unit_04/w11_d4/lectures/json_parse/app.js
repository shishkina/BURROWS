const http = require('http');

let url = "http://www.shakeitspeare.com/api/sentence";
http.get(url, (data) => {
  console.log(data)
})