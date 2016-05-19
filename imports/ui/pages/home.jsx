import React from 'react';
import { Link } from 'react-router'

class Home extends React.Component {
  render () {
    return (
      <div>
        Main page for bridge-tools.
        
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Home;