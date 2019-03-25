import './FormStyle.css'
import React, {Component } from 'react';
import Form from './Form';



class App extends Component {

   state = {
     fields:{},
   }

  onChange = (updatedValue) => {
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


// write down design doc

 