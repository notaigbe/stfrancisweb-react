import GLightbox from "glightbox";

const glightbox = GLightbox({
  selector: '.glightbox'
});

function Hero() {
    return(
        <section id="hero" className="d-flex align-items-center">

    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="row">
        <div className="col-xl-6">
          <h1>Lord make me an Instrument of your Peace</h1>
          <h2>Welcome to St. Francis Catholic Church Benin City<span>.</span></h2>
          <a href="#about" className="btn-get-started scrollto">Livestream</a><br/><br/>
          <a
                href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                className="glightbox play-btn scrollto"
              ></a>
          
        </div>

      </div>
    </div>

  </section>
    )
}

export default Hero;