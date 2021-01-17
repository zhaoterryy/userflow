//TODO may need to add links to components where html is ref'd for register + login
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Welcome!</h1>
            <p className="lead">
              My name is Andrew Roe. I'm a Security Engineer, Content Creator,
              and Technology Enthusiast.
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
