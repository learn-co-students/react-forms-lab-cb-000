  
import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  };

  handleMsgChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  remainingCharacters = () => this.props.maxChars - this.state.message.length

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" name="message" id="message" 
          onChange={event => this.handleMsgChange(event)} 
          value={this.state.message}
        />
        <p>Remaining Characters: { this.remainingCharacters() }</p>
      </div>
    );
  }
}

export default TwitterMessage;