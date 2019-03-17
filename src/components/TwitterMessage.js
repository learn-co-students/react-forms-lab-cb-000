import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      remainingCharacters: 140,
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      remainingCharacters: 140 - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" onChange={this.handleChange} value={this.state.content} />
        <p>Remaining characters: {this.state.remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
