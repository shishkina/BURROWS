import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.params.email} {this.props.params.greeting}</h1>
      </div>
    );
  }
}

export default Dashboard;