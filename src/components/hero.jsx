import GLightbox from "glightbox";
import {ClockFill} from "react-bootstrap-icons";

const glightbox = GLightbox({
  selector: '.glightbox'
});

function Hero() {
    return(
        <section id="hero" className="d-flex align-items-center">

    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="row p-2">
        <div className="col-xl-8 col-lg-8 mb-4">
          <h1>Welcome to St<span>.</span> Francis Catholic Church Benin City</h1>
          <h2>Lord make me an Instrument of your Peace</h2>
          <a href="#about" className="btn-get-started scrollto me-3">News</a>
          <a href="#about" className="btn-get-started scrollto">Announcements</a><br/><br/>
          <a
                href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                className="glightbox play-btn scrollto"
              ></a>
          
        </div>
        <div class="col-xl-4 col-lg-4 rounded p-3 flex text-center" data-aos="fade-up" data-aos-delay="100" style={{background: "rgba(255, 255, 255, 0.2)", boxShadow: "0 5px 20px rgba(0, 0, 0, .75)"}}>
          <h2 style={{fontSize: "28px"}} ><i className="fa-solid fa-clock"><ClockFill /></i> Sunday Masses: <br/>6:30am | 9:00 am</h2><br/>
          <h2 style={{fontSize: "28px"}} ><i className="fa-solid fa-clock"><ClockFill /></i> Weekday Masses: <br/>6:30am | 12:30pm | 6:00pm</h2>
          
        </div>
      </div>
    </div>

  </section>
    )
}

export default Hero;