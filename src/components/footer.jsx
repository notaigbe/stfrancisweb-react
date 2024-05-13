import { Twitter, Facebook, Instagram, Linkedin, ChevronRight, Youtube } from 'react-bootstrap-icons'

function Footer() {
    return(
<footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>St<span>.</span> Francis Catholic Church</h3>
        <p>
        12 College Road, Off Ekehuan Road,  <br/>
        Benin City,<br/>
          Nigeria <br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@stfrancisbenincity.ng<br/>
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Home</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">About us</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Parish Activities</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Terms of service</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Parish Activities</h4>
        <ul>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Daily Mass</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Confession</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Infant Baptism</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">Catechism</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">A Day with the Lord</a></li>
          <li><i className="bx bx-chevron-right"><ChevronRight /></i> <a href="#">First Friday Programme</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>St. Francis Catholic Church, Benin City</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/presento-bootstrap-corporate-template/ --> */}
      Powered by <a href="https://www.gnotable.ng/">Gnotable Technologies</a>
      <span className='text-dark'>Template by</span> <a href="https://bootstrapmade.com/" className='text-dark'>BootstrapMade</a>
    </div>
  </div>
  <div className="social-links text-center text-md-end pt-3 pt-md-0">
    <a href="#" className="twitter"><Twitter /><i className="bx bxl-twitter"></i></a>
    <a href="#" className="facebook"><Facebook /><i className="bx bxl-facebook"></i></a>
    <a href="#" className="instagram"><Instagram /><i className="bx bxl-instagram"></i></a>
    <a href="#" className="google-plus"><Youtube /><i className="bx bxl-skype"></i></a>
    <a href="#" className="linkedin"><Linkedin /><i className="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>

    
    )
}

export default Footer;