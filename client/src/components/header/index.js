import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header
      className=""
      style={{
        width: "100%",
        color: "black",
      }}
    >
      <div className="">
        <Link className="" to="/">
          <h1
            className="m-0"
            style={{
              fontSize: "3rem",
              alignContent: "center",
              borderStyle: "solid",
              paddingBottom: "25px",
              textAlign: "center",
              backgroundColor: "violet",
              color: "white",
            }}
          >
            ROYALTY BARBERSHOP
          </h1>
        </Link>

        <div>
          {Auth.loggedIn() ? (
            <button
              className="btn btn-lg btn-light m-2"
              style={{
                lineheight: "2.5",
                padding: "0 20px",
                textalign: "center",
                color: "red",
              }}
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
