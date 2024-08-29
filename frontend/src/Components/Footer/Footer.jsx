import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Abstract</h4>
        <br />
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <br />
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Note</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <br />
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <br />
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <br />
        <h5>Contact Us</h5>
        <p>info@abstract.com</p>
      </div>
      <div className="copyright-div">
        <img src="/logo.png" alt="logo" className="logo" />
        <br />
        <p>
          © Copyright {new Date().getFullYear()}
          <br />
          Abstract Studio Design, Inc. <br />
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
