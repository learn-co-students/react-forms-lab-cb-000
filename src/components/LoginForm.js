import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username:'',password:''};
  }

  handleInputChange = (event) => {
      if (event.target.name === 'username') {
        this.setState({username:event.target.value})
      } else {
        this.setState({password:event.target.value})
      }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
