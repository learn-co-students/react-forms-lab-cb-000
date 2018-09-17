import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <p>Remaining Characters: {this.props.maxChars - this.state.inputValue.length}}</p>
      </div>
    );
  }
}

export default TwitterMessage;
