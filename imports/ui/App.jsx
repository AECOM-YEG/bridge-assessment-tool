import React from 'react';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
    
    
//   }
//   render() {
//     console.log (this.props.children);
//     return (
//       <div>
//         <h1>App</h1>
        
//       </div>
//     )
//   }
// }

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>App</h1>
        
        {this.props.children}
      </div> 
    )
  }
}

export default App;