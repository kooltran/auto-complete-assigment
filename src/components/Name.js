import React from 'react'

class Name extends React.Component {
  render() {
    console.log(this.props.location)
    return <h1>Name</h1>
  }
}

export default Name
