import React from 'react';
// import {FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return(
        <React.Fragment>
          <footer id='footerbg' className='p-4'>
              <section className='d flex justify-content-center'>
                  <div className='me-5 d-none d-lg-block'>
                      <span>Get connected with us on social media Network</span>

                  </div>
                  <div>
                      {/* <a href=''><FaFacebook /> </a>
                      <a href=''><FaTwitter /> </a> */}
                  </div>
              </section>

          <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>About Us</h4>
                        <p> This product is designed and implemented by members of TeamBlockChamp,
                            in respect to the requirement of blockgames program which is currently
                            been executed
                        </p>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>NestLibrary</h4>
                        <p>
                            NestLibrary is a Decentralized Digital Library 
                            that allows Uploading, Retrieving and Sharing 
                            Files with Users
                        </p>
                    </div>
            
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Address</h4>
                        <ul className="list-unstyled">
                            <li>Nigeria</li>
                            <li>P.o Box No.21</li>
                            <li>+234 8147330326</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Navigation</h4>
                        <p><a href='' id='headerbg'> Home</a></p>
                        <p><a href='' id='headerbg'> About</a></p>
                        <p><a href='' id='headerbg'> Contact Us</a></p>
                        <ul className="list-unstyled">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                 {/* Footer Bottom */}
                 <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear} NestLibrary - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
          </footer>
        </React.Fragment>
    );
}

export default Footer;