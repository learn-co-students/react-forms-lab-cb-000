import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      charsLeft: this.props.maxChars
    };
  }
  handleInput = event => {
    this.setState( {
      textInput: event.target.value
    })
    this.setState({charsLeft: this.props.maxChars - event.target.value.length})

  }
  render() {
    return (
      <div>
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInput(event) } value={this.state.textInput} />
        <p> chars remaining: {this.state.charsLeft} </p>
      </div>

      </div>
    );
  }
}

export default TwitterMessage;
