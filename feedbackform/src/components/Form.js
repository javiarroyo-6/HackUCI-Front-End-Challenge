import './FormStyle.css';
import React, { Component } from 'react';


const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    message:"",
    characters: 0,
    firstNameError:'',
    lastNameError:'',
    emailError:"",
    messageError:'',
}

class Form extends Component {

    
state = initialState;
 
   
    

    handleChange = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value})
       
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    validate = () => {
        let firstNameError = "";
        let lastNameError =  "";
        let emailError = "";
        let messageError = "";

        if (!this.state.email.includes('@')) {
            emailError = "invalid email";
        }

        if (!this.state.firstName){
            firstNameError = "Input cannot be blank"
        }

        if(!this.state.lastName){
            lastNameError = "Input cannot be blank"
        }

        if(!this.state.messageError){
            messageError = "Message cannot be blank"
        }

        if (emailError || firstNameError || lastNameError || messageError ){
            this.setState ({ emailError, firstNameError, lastNameError , messageError });
            return false;
        }
         return true;
    };


    onSubmit = (e) => {
        e.preventDefault();
            const isValid = this.validate();
            if(isValid) {
                console.log(this.state)
                this.setState( initialState )
            }
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
                                    value={this.state.message}
                                    onChange = {e => this.handleChange(e)}
                                    name="message"
                                    placeholder="Message"
                                    maxLength="500"
                                    
                                />
                            </div>
                            <div style= {{color:'red',fontSize:'12'}}>{this.state.messageError}</div>

                            
                        <div>
                                <span id="wordCount" onKeyUp={this.handleCharacter}> 0 </span>/500
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

      
            // this.setState({
            //     firstName:"",
            //     lastName:"",
            //     email:"",
            //     message:"",
            //     characters: 0
            // });