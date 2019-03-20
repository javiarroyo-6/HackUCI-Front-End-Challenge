import React, { Component } from 'react';



class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            eMail:"",
            message:"",
            characters: 0
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    // handleCharacter(){
    //     this.setState(prevState => {
    //         characters: 
    //     })
    // }


    

    render(){



        return(
           
                <div className="ui segment" style={{backgroundColor:'#e7e7e7',marginTop:'90px'}}>
                    <form className="ui form">
                        <div className="ui field">
                            <label style={{color:'#bb8ce5', textAlign:'center',fontFamily:"'Open Sans', sans-serif",}}>Feedback</label>
                                <input 
                                    type="text"
                                    value={this.state.firstName}
                                    onChange = {this.handleChange}
                                    name="firstName"
                                    placeholder = "First Name"
                                />

                                <br />

                                <input 
                                    type="text"
                                    value={this.state.lastName}
                                    onChange= {this.handleChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                />

                                <br />

                                <input 
                                    type="email"
                                    value={this.state.eMail}
                                    onChange={this.handleChange}
                                    name="eMail"
                                    placeholder="john@example.com"
                                />

                                <br />

                                <textarea 
                                    type="text"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    name="message"
                                    placeholder="Message"
                                    maxLength="500"
                                />
                                <span id="wordCount" onKeyUp={this.handleCharacter}> 0 </span> Characters
                                <div>
                                    <button className="ui button" style={{width:'100%',backgroundColor:'#d3a1ff'}}> Submit </button>
                                </div>
                        </div>
                    </form>
                </div>
          
        )
    }
}

export default Form;