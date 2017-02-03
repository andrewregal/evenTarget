import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form>
          <p>Username: <input /></p>
          <p>Password: <input /></p>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
