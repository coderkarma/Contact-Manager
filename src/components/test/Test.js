import React, { Component } from 'react'

class Test extends Component {
  state = {
      title:'',
      body: ''
      
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            body: data.body
        })
    );
  }
//   componentWillMount(){
//       console.log('componentDidMount...');
//   }

//   componentDidUpdate(){
//       console.log('componentDidUpdate...');
//   }

//   componentWillReceiveProps(){
//       console.log("componentWillReciveProps....")
//   }

  render() {

    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;