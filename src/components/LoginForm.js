import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username:'', password:''};
  }

  handleSubmit = event => {
    event.preventDefault();
    { (this.state.username && this.state.password) ? this.props.onSubmit(this.state) : null }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) } >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} />
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
