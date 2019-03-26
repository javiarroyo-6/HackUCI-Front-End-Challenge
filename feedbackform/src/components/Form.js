import React, { Component } from 'react';



class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstName:"",
                firstNameError:'Please Enter Your First Name',
            lastName:"",
                lastNameError:'',
            eMail:"",
            message:"",
                messageError:'',
            characters: 0
        }
        
    }

    handleChange = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value })
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

  onSubmit = (e) => {
    e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            firstName:"",
            lastName:"",
            eMail:"",
            message:"",
            characters: 0
        })
    
  }


    

    render(){
        return(
        <div className="ui segment" style={{backgroundColor:'#e7e7e7',marginTop:'90px'}}>
            <form className="ui form">
                <div className="ui field" style={{color:'bold'}}>
                    <label style={{color:'#bb8ce5', textAlign:'center',fontFamily:"'Open Sans', sans-serif", fontSize:'large'}}>Feedback</label>
                        <br />
                        <div>
                            <input 
                                type="text"
                                value={this.state.firstName}
                                onChange = {this.handleChange}
                                name="firstName"
                                placeholder = "First Name"
                                errorText={this.state.firstNameError}
                            />
                            <div style={{color:'red',fontSize:'12'}}>{this.state.firstNameError}</div>
                        </div>
                        <br />
                        <div>
                            <input 
                                type="text"
                                value={this.state.lastName}
                                onChange= {this.handleChange}
                                name="lastName"
                                placeholder="Last Name"
                                errorText= {this.state.lastNameError}
                            />
                         </div>
                         <br />

                        <div>
                            <input 
                                type="email"
                                value={this.state.eMail}
                                onChange={this.handleChange}
                                name="eMail"
                                placeholder="john@example.com"
                            />
                        </div>
                        <br />
                        <div>
                            <textarea 
                                type="text"
                                value={this.state.message}
                                onChange={this.handleChange}
                                name="message"
                                placeholder="Message"
                                maxLength="500"
                                errorText={this.state.messageError}
                            />
                        </div>

                        
                       <div>
                            <span id="wordCount" onKeyUp={this.handleCharacter}> 0 </span>/500
                       </div>
                       <br />
                        <div>
                            <button className="ui button"  onClick={e => this.onSubmit(e)} style={{width:'100%',backgroundColor:'#d3a1ff'}}> 
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


// validate = () => {
//     let isError = false;
//     const errors = {}

//     if(this.state.firstName.length < 5 ){
//         isError=true;
//         errors.firstNameError = "Please fill out the field before submitting";
//     }

//     if(isError){
//         this.setState({
//             ...this.state,
//             ...errors
//         });
//     }

//     return isError;
// }
