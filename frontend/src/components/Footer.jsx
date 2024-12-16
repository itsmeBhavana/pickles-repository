import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 The Pickle Store. All rights reserved.</p>
      <p>
        Contact us:{" "}
        <a href="mailto:info@picklestore.com">info@picklestore.com</a>
      </p>
    </footer>
  );
};

export default Footer;
