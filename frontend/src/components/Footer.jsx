import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2024 The Pickle Store. All rights reserved.</p>
      </div>
      <ul class="footer-links">
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="mailto:info@picklestore.com">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
