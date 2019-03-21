import React, {Component } from 'react';
import Form from './Form';


class App extends Component {

  onSubmit = (fields) => {
    console.log('App component got me',fields)
  }

  render(){
    return (
      <div className="ui text container">
          <Form
            onSubmit={fields => this.onSubmit(fields)}
          />
      </div>
    )
  }
};

export default App;
