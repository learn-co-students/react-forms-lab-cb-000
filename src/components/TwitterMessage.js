import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
  this.updateMes = this.updateMes.bind(this);
  }
  updateMes(e) {
    this.setState({
      textInput: e.target.value
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.textInput} onChange={this.updateMes}/>
        <p>{this.props.maxChars-this.state.textInput.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
