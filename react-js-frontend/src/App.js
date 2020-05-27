import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstructorApp from './component/InstructorApp'

class  App extends React.Component {

  constructor(props) {
      super(props)
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)


  this.state={

    firstName:null,
    lastName:null,
    email:null,
    password:null,
    formErrors:{

      firstName:"",
      lastName:"",
      email:"",
      password:""
    }
  }}
  handleSubmit(event) {
    if(this.state.firstName){

      alert("Enter First Name")
    }
    event.preventDefault()
  }
  handleChange(event) {
this.setState({ value: event.target.value })
}
 render() {
  return (
  <InstructorApp />
  );
}
}

export default App;
