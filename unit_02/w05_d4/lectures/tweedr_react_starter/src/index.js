// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app.jsx';

// ReactDOM.render(<App />, document.getElementById('main'));

import request from 'superagent';

//Get request
let baseUrl = 'https://trillo-react.firebaseio.com/todos.json'
request.get(baseUrl).then((data)=> {
  console.log(data);
  this.setState({
    data: data,
  });
});

//Post Request

request.post(baseUrl).send(this.state).end((err, res) => {
  console.log('successful post');
});

//Put
let baseUrl = `https://trillo-react.firebaseio.com/todos/${this.props.id}.json`
request.put(baseUrl).send(this.state).end(()=> {
  console.log('updated')
})

//Delete

request.del(baseUrl).end((err, res)=> {
  console.log('deleted')
})



