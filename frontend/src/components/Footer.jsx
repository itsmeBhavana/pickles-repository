import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Bulk Orders Undertaken</h3>
          <div className="manufacturing-details">
            For Manufacturing Details:
            <br />
            ARABICUTHU
            <br />
            No.5/309, Pillaiyar Kovil Street,
            <br />
            Okkiyampet, Chennai - 600097.
            <br />
            Cell: <a href="tel:9052004362">9052004362</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Scan For Queries:</h3>
          <div className="qr-container">
            <img
              src="instagram-qr-code.png" /* Replace with actual QR code image URLs */
              alt="Instagram QR"
              className="qr-code"
            />
            <img
              src="whatsapp-qr-code.png"
              alt="WhatsApp QR"
              className="qr-code"
            />
          </div>
        </div>
      </div>
      <p className="shipping-text">
        SHIPPING AVAILABLE ALL OVER INDIA.{" "}
        <span className="terms">*T&C Apply</span>
      </p>
    </footer>
  );
};

export default Footer;
