import React, { useRef } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
    const signupNameRef = useRef();
	const signupPasswordRef = useRef();
	const signupEmailRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
	};

return (
	<div className="login section">
		<Banner title="Register"/>
		<div className="login__container container">
			<form className="form mb-5" onSubmit={submitHandler}>
				<div className="form__group">
					<input
						type="text"
						placeholder="Full name"
						required
						ref={signupNameRef}
					/>
				</div>
				<div className="form__group">
					<input
						type="email"
						placeholder="Email"
						required
						ref={signupEmailRef}
					/>
				</div>
				<div className="form__group">
					<input
						type="password"
						placeholder="Password"
						required
						ref={signupPasswordRef}
					/>
				</div>
				<Button className="btn-primary">
					Login
				</Button>
			</form>
			<Link to="/login" className="login__account">
				Already have an account? Login
			</Link>
		</div>
	</div>
  );
};

export default Register;