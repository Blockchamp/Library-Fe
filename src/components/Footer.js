import React from "react";
// import {FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footerbg">
        <div className="footer">
          <div className="d-flex justify-content-center my-2">
            <div className="d-flex justify-content-around col-md-3 col-sm-6">
              <p>
                <a href="/" id="headerbg">
                  {" "}
                  Home
                </a>
              </p>
              <p>
                <a href="#" id="headerbg">
                  {" "}
                  About
                </a>
              </p>
              <p>
                <a href="#" id="headerbg">
                  {" "}
                  Contact Us
                </a>
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom d-flex justify-content-center">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear} NestLibrary - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
