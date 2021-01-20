import React, { Fragment, useState, onSubmit } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData; //destructures the formDatastate so you don't have to do formData.
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              minLength="14"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/Register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};
export default Login;
