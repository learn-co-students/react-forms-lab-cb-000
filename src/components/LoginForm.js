import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      password: ""
  };
  }
  handleText = event => {
    this.setState({
      text: event.target.value
    })
    console.log(this.state.text)
  }
  handleWord = event => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }
  handleSubmit = event => {
    event.preventDefault() ;
    if (!!this.state.text && !!this.state.password) {
      this.props.onSubmit(this.state.text, this.state.password) ;
    }
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.text} onChange={event => this.handleText(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleWord(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
