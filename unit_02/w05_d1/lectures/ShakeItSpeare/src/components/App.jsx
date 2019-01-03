import React from 'react';
import Poem from './Poem.jsx';

// App is a react component... which when rendered... returns some JSX
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Poem
          writtenOn={new Date().toJSON().slice(0, 10)}
          author="Bob Shakespeare"
        />
      </div>
    );
  }
}

export default App;
