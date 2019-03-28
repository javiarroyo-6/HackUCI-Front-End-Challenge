import React, { Component } from 'react';


const initialState = { // allows state to reset to blank inputs once form is submitted 
    firstName:"",
    lastName:"",
    email:"",
    // message:"",
    chars_left:500,
    chars_leftError:"",
    max_chars:500,
    firstNameError:'',
    lastNameError:'',
    emailError:"",
    messageError:'',
}

class Form extends Component {

    
state = initialState;
 
   
    

    handleChange = (e) => { // handles characters typed into the form
        this.props.onChange({ [e.target.name]: e.target.value})
       
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    validate = () => { // set of logic of input requirements 
        let firstNameError = ""; // errors are initially blank to prevent displaying errors when there arent any
        let lastNameError =  "";
        let emailError = "";
        // let messageError = "";
        let chars_leftError=""

        if (!this.state.email.includes('@')) { 
            emailError = "invalid email";
        }

        if (!this.state.firstName){
            firstNameError = "Input cannot be blank"
        }

        if(!this.state.lastName){
            lastNameError = "Input cannot be blank"
        }

        // if(!this.state.messageError){
        //     messageError = "Message cannot be blank"
        // }

        if(!this.state.chars_leftError){
            chars_leftError = "Input cannot be blank"
        }

        if (emailError || firstNameError || lastNameError || chars_leftError  ){
            this.setState ({ emailError, firstNameError, lastNameError , chars_leftError });
            return false;
        }
         return true;
    };


    onSubmit = (e) => {
        e.preventDefault(); // prevents page reload
            const isValid = this.validate(); //calls validation function
            if(isValid) {
                console.log(this.state)
                this.setState( initialState,  )
            }
        }

        handleCharacterCount = (e) => {
            const characterCount = e.target.value.length;
            const maxCharacter = this.state.max_chars;
            const characterLeft = maxCharacter - characterCount;
            this.setState({ chars_left: characterLeft })
        }



    

    render(){
        return(
            <div className="ui segment" style={{backgroundColor:'#e7e7e7',marginTop:'90px'}}>
                <form className="ui form">
                    <div className="ui field" style={{color:'bold'}}>
                        <label style={{color:'#bb8ce5', textAlign:'center',fontFamily:"'Open Sans', sans-serif", fontSize:'xx-large'}}>Feedback</label>
                            <br />
                            <div >
                                <input 
                                    type="text"
                                    value={this.state.firstName}
                                    onChange = {e => this.handleChange(e)}
                                    name="firstName"
                                    placeholder = "First Name"
                                   
                                />
                            </div>
                            <div style={{color:'red', fontSize:'12'}}>{this.state.firstNameError}</div>
                            <br />
                            <div>
                                <input 
                                    type="text"
                                    value={this.state.lastName}
                                    onChange = {e => this.handleChange(e)}
                                    name="lastName"
                                    placeholder="Last Name"
                                  
                                />
                            </div>
                            <div style={{color:'red',fontSize:'12'}}>{this.state.lastNameError}</div>
                            <br />

                            <div>
                                <input 
                                    type="email"
                                    value={this.state.email}
                                    onChange = {e => this.handleChange(e)}
                                    name="email"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div style={{color:'red',fontSize:'12'}}>{this.state.emailError}</div>
                            <br />
                            <div>
                                <textarea 
                                    type="text"
                                    rows={6}
                                    // value={this.state.message}
                                    onChange = {this.handleCharacterCount}
                                    name="chars_left"
                                    placeholder="Message"
                                    maxLength="500"
                                    required
                                    
                                />
                            </div>
                            <div style= {{color:'red',fontSize:'12'}}>{this.state.chars_leftError}</div>

                            
                        <div>
                                <p>{this.state.chars_left}/500</p>
                        </div>
                        <br />
                            <div>
                                <button className="ui button" onClick={e => this.onSubmit(e)} style={{width:'100%',backgroundColor:'#d3a1ff'}}> 
                                    Submit 
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;


// Prefer inline styling for this project seeing that it only contains one component.

    