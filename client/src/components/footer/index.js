import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer
      className="w-100 mt-auto text-dark p-4"
      style={{
        paddingTop: "450px",
      }}
    >
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Barbershop</h4>
      </div>
    </footer>
  );
};

export default Footer;
