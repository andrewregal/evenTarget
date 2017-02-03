import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <form>
          <p>First Name: <input /></p>
          <p>Last Name: <input /></p>
          <p>Email: <input /></p>
          <p>Choose your username: <input /></p>
          <p>Create a password: <input /></p>
          <p>Confirm your password: <input /></p>
          <button>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
