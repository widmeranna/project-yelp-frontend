import React, {Component} from 'react';
import './index.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Contact extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      message: '',
    };
  }
  handleSend = () => {
    return window.alert(`Thank you ${'*' + this.state.email + '*'} for your message! We will contact you within the next 48h!`);
  }


  formOnChange = (e) => {
    const email = e.currentTarget.value;

    this.setState({
      email,
    });
  };

  render(){
    return(
      <div className="Contact-form">
        <h3>We would love to hear from you!</h3>
        <TextField
          className="Email-input"
          type="email"
          floatingLabelText="Your email:"
          onChange={this.formOnChange}
          value={this.state.email}
        />
        <br/>
        <br/>
        <TextField
          className="Message-input"
          floatingLabelText="Your message:"
          multiLine={true}
          style={{textAlign: 'left'}}
          rows={3}
          type="text"
        />
        <br/>
        <FlatButton
          label="Send"
          onClick={this.handleSend}/>
      </div>
    )
  }
}

export default Contact;
