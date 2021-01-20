import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/Register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/Login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
