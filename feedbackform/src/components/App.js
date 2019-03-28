import React, {Component } from 'react';
import Form from './Form';
import axios from 'axios';



class App extends Component {

   state = {
     fields:{},
   }


   componentDidMount(){ // console logs the information entered into the form
     axios.get('http://localhost:3000')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      })
   }

  onChange = (updatedValue) => { // every character typed is demonstrated below in real time.Would not implement in production.
    this.setState({
      fields: {
        ...this.state.fields, 
        ...updatedValue
      }
    });
  }

  

  render(){
    return (
      <div className="ui container" style={{width:'100%',paddingBottom:'100%' , backgroundImage:'linear-gradient(to right, #2a2a2a , #191919'}}>
        <div className="ui grid">
          <div className="ui text container" >
              <Form onChange={fields => this.onChange(fields)} />
              <p>{JSON.stringify(this.state.fields, null,2)}</p> 
          </div>
        </div>
      </div>
    )
  }
};

export default App;



 