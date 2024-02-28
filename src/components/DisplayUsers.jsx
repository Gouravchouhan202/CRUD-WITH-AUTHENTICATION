import React from 'react'

const DisplayUsers = ({name,salary,company}) => {

  return (
    <div className='list'>
        <h1>{name}</h1>
        <p>{salary}</p>
        <p>{company}</p>
    </div>
  )
}

export default DisplayUsers