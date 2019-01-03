import React from 'react';

const Job = ({ jobData }) => {
  const name = jobData.company.name
  const content = jobData.contents

  return (
    <div>
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Job;