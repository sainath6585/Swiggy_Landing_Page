import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/* TOP SECTION */}
        <div className="footer-top">
          {/* LOGO */}
          <div className="footer-logo">
            <h2>Swiggy</h2>
            <p>© 2025 Swiggy Limited</p>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Dineout</p>
            <p>Minis</p>
            <p>Pyng</p>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h4>Contact us</h4>
            <p>Help & Support</p>
            <p>Partner With Us</p>
            <p>Ride With Us</p>

            <h4 className="mt">Legal</h4>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>

          {/* CITIES */}
          <div className="footer-column">
            <h4>Available in:</h4>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>

            <select className="city-select">
              <option>685 cities</option>
            </select>
          </div>

          {/* LIFE AT SWIGGY */}
          <div className="footer-column">
            <h4>Life at Swiggy</h4>
            <p>Explore With Swiggy</p>
            <p>Swiggy News</p>
            <p>Snackables</p>

            <h4 className="mt">Social Links</h4>
            <div className="social-icons">
              <span>in</span>
              <span>📷</span>
              <span>f</span>
              <span>📌</span>
              <span>🐦</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <p>For better experience, download the Swiggy app now</p>
          <div className="app-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
