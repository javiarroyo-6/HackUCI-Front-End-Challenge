import React, {Component } from 'react';
import Form from './Form';


class App extends Component {

    state = {
      fields: {}
    };

  onChange = (updatedValue) => {
    this.setState({fields: {
      ...this.state.fields,
      ...updatedValue
      }
    })
  }

  render(){
    return (
      <div className="ui text container">
          <Form
            onChange={fields => this.onChange(fields)}
          />
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    )
  }
};

export default App;
