import React, { Component } from 'react';
import request from 'superagent';
import Job from './job.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {
    request.get('http://localhost:3000/api/v1/jobs').then((jobs) =>
      this.setState({
        jobs: jobs.body.results,
      })
    )
  }

  render() {
    return (
      <div>
        {
          this.state.jobs.map((job) => {
            return (
              <Job
                jobData={job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;

