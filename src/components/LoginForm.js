import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handlePasswordChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleUsernameChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleUsernameChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="username" name="username"
              type="text"
              onChange={this.handleUsernameChange}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label onSubmit={this.handleSubmit}>
            Password
            <input
              id="password" name="password"
              type="password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
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
