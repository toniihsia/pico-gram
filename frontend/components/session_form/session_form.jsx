import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.startUsernameAnimation = this.startUsernameAnimation.bind(this);
		this.startPasswordAnimation = this.startPasswordAnimation.bind(this);
		this.clearFields = this.clearFields.bind(this);
	}

	/// FORM HANDLERS: Updating, setStates, Redirects ///
	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.formType === 'login' ? this.props.logIn({user}) : this.props.signUp({user});
	}
	//////////////////////////////////////////////////////

	/// GUEST LOG IN: Animations and Input ///
	startUsernameAnimation(){
    if(this.state.username.length > 0 || this.state.password.length > 0){
      this.clearFields();
    }

    const demoGuest = 'Guest';
    let usernameID = setInterval(() => {
      document.getElementById('username').focus();
      let currLength = this.state.username.length;

      if(currLength < demoGuest.length){
          this.setState({username: this.state.username + demoGuest.slice(currLength, currLength + 1)});
      } else{
          clearInterval(usernameID);
          this.startPasswordAnimation();
      }
    }, 100);
	}

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      document.getElementById('password').focus();
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
          this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
          clearInterval(passwordID);
          const user = this.state;
          this.props.logIn({user});
      }
    }, 100);
  }

	clearFields(){
		this.setState({username: '', password:''});
	}


  emailField() {
    if (this.props.formType !== "login" ) {
      return (
	      <input type="text"
	        value={this.state.email}
	        onChange={this.update("email")}
	        className="auth-input"
					placeholder="Email"
					/>
      );
    }
  }
	//////////////////////////////////////////////////////

	/// HELPER RENDER FUNCTIONS: Errors, LogIn/SignUp, GuestLogIn ///
	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li
						className="auth-error"
						key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	renderOtherOption() {
		if (this.props.formType === "login") {
			return (
				<div className="auth-other">
				Don't have an account?<br/>
				<span>
					<Link
						className="auth-link"
						to="/signup"
						>Sign Up
					</Link>
				</span>
			</div>);
		} else {
			return (
				<div className="auth-other">
				Already have an account?<br/>
				<span>
					<Link
						className="auth-link"
						to="/login">Log In
					</Link>
				</span>
			</div>);
		}
	}

	renderGuestLogIn() {
		if (this.props.formType === "login") {
			return (<button
				className="auth-button"
				id="button"
				type="button"
				name="button"
				onClick={this.startUsernameAnimation}>
				Guest Log In
			</button>);
		}
	}
	//////////////////////////////////////////////////////

	/// ACTUAL RENDER: Log In/Sign Up Form ///
	render() {
		const text = this.props.formType === "login" ? "Log In" : "Sign Up";

		return (
			<div className="auth-wrapper">
				<div className="auth-form-container">
					<form onSubmit={this.handleSubmit} className="auth-form">
						<label className="auth-label-1">Pico</label>
						<label className="auth-label-2">Gram</label>
						<br/>
						{this.renderErrors()}

								<input
									className="auth-input"
									type="text"
									id="username"
									value={this.state.username}
									onChange={this.update("username")}
									className="auth-input"
									placeholder="Username"/>

								<input
									className="auth-input"
									type="password"
									id="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="auth-input"
									placeholder="Password"/>

	            {this.emailField()}

							<input
								className="auth-button"
								type="submit"
								value={text}
								/>
							{this.renderGuestLogIn()}
							{this.renderOtherOption()}
					</form>
				</div>
			</div>
		);
	}
	//////////////////////////////////////////////////////
}

export default withRouter(SessionForm);
