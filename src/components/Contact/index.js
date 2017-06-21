import React, {Component} from 'react';
import './index.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Contact extends Component {
  render(){
    return(
      <div className="Contact-form">
        <h3>We would love to hear from you!</h3>
        <TextField
          className="Email-input"
          type="email"
          floatingLabelText="Your email:"
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
        <FlatButton label="Send"/>
      </div>
    )
  }
}

export default Contact;
