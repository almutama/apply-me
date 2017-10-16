import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      resetPasswordModal: false,
      resetPassEmail: 'test@test.com',
      resetEmailSetModal: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGitAuth = this.handleGitAuth.bind(this);
    this.handleTest = this.handleTest.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleResetPassword = this.handleResetPassword.bind(this);
    this.handleResetPassEmail = this.handleResetPassEmail.bind(this);
    this.toggleResetPassword = this.toggleResetPassword.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  }
  handlePassword(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  }
  handleGitAuth(e) {
    e.preventDefault();
    this.props.GitAuth()
  }
  handleTest(e) {
    e.preventDefault();
    this.props.TESTBUTTON();
  }
  handleSignOut(e) {
    e.preventDefault();
    this.props.signOut();
  }
  handleResetPassword(e) {
    e.preventDefault();
    this.setState({
      resetPasswordModal: true,
    });
  }
  handleResetPassEmail(e) {
    e.preventDefault();
    this.setState({
      resetPassEmail: e.target.value,
    });
  }
  toggleResetPassword(e) {
    e.preventDefault();
    this.setState({
      resetPasswordModal: !this.state.resetPassword,
    });
  }
  resetPassword(e) {
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(this.state.resetPassEmail)
      .then((win) => {
        this.setState({
          resetEmailSetModal: true,
        });
      })
      .catch(err => alert(err));
  }
  render() {
    return (
      <div>Hello World
        <Modal isOpen={this.state.resetPasswordModal} onRequestClose={this.toggleResetPassword}>
          <h1>Reset Password</h1>
          <p>Forgot your password? Don't worry, happens to the best of us. Just enter your email address below and we'll send you an email with a reset password link.</p>
          <form onSubmit={this.resetPassword} >
            <input onChange={this.handleResetPassEmail} type="text" placeholder="pika@chu.com" />
            <button type="submit">Send Reset Link</button>
          </form>
          <br />
          <br />
          <button onClick={this.toggleResetPassword}>Cancel</button>
        </Modal>
        <Modal isOpen={this.state.resetEmailSetModal} onRequestClose={() => this.setState({ resetEmailSetModal: false })}>
          <h1>Email has been sent, please check your inbox</h1>
        </Modal>
        <form id="signIn" onSubmit={this.handleLogin}>
          <input onChange={this.handleEmail} type="text" placeholder="E-Mail Address" /> <br />
          <input onChange={this.handlePassword} type="password" placeholder="Password" /> <br />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/signup">
          <button>Sign Up
          </button>
        </Link>
        <br /><br />
        <button id="GitAuthButton" onClick={this.handleGitAuth}>Login using Github</button>
        <br />
        <button onClick={this.handleResetPassword}>Reset Password</button>
        <button onClick={this.props.signOut}>LogOut</button>
        <br /><br /><br /><br />
        <button onClick={this.handleTest}>TESTBUTTON</button>
      </div>
    );
  }
}

export default Login;
