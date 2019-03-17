import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      remainingCharacters: 140,
    };
  }
  
  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingCharacters: 140 - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <p>Remaining characters: {this.state.remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
