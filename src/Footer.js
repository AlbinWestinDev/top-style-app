import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footarea">
      <div className="footerarea__top">
        <p>Back to Top</p>
      </div>
      <div className="bg-dark text-center text white">
        <div className="cointainer p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram">Instagram</i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google">Google</i>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Footer;
