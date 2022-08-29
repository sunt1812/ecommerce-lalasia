import React, { useRef } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
	<div className="login section">
	<Banner title="Login"/>
		<div className="login__container container">
			<form className="form" onSubmit={submitHandler}>
				<div className="form__group">
					<input
						type="email"
						placeholder="Email"
						required
						ref={loginNameRef}
					/>
				</div>
				<div className="form__group">
					<input
						type="password"
						placeholder="Password"
						required
						ref={loginPasswordRef}
					/>
				</div>
				<Button className="btn-primary">
					Login
				</Button>
			</form>
			<Link to="/register" className="login__account">
				Don't have an account? Create an account
			</Link>
		</div>
	</div>
  );
};

export default Login;