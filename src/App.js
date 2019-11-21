import React from 'react';

export default class App extends React.Component{

  componentDidMount(){
    setTimeout(function(){ alert("Hello"); }, 2000);
  }

  componentWillUnmount(){
    setTimeout(function(){ alert("Goodbye"); }, 2000);
  }

  render(){
    return (<div></div>)
  }
}


