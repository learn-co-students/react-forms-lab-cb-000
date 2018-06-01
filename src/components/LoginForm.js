import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input className="username" id="test-username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input className="password" id="test-password" type="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
  
  handleChange = event => {
    event.target.name == "username" ? this.setState({username: event.target.value}) : this.setState({password: event.target.value})
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    
    this.state.username && this.state.password ? this.props.onSubmit : null
  }
}

export default LoginForm;
