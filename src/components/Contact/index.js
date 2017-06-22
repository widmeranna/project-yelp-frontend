import React, {Component} from 'react';
import './index.css';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      message: '',
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
    this.setState({
      email: '',
      message: ''
    })
  };

  handleClose = () => {
    this.setState({open: false});
  };

  emailOnChange = (e) => {
    const email = e.currentTarget.value;
    this.setState({
      email,
    });
  };

  messageOnChange = (event) =>{
    const message = event.currentTarget.value;
    this.setState({
      message,
    })
  }

  render(){
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <div className="Contact-form">
        <h3>We would love to hear from you!</h3>
        <TextField
          className="Email-input"
          type="email"
          floatingLabelText="Your email:"
          onChange={this.emailOnChange}
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
          onChange={this.messageOnChange}
          value={this.state.message}
        />
        <br/>
        <FlatButton
          label="Send"
          onTouchTap={this.handleOpen}
        />

        <Dialog
          title="THANK YOU"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {
        `Thank you ${this.state.email} for your message!
        We will contact you within the next 48h!
        `
      }
      </Dialog>
      </div>
    )
  }
}
export default Contact;
