import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.onChange} />
        <strong>{this.props.maxChars - this.state.value.length} characters remaining</strong>
      </div>
    );
  }
  
  onChange = event => {
    this.setState({
      value: event.target.value
    });
  }
}

export default TwitterMessage;
