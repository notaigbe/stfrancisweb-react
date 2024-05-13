import { Link, Plus } from 'react-bootstrap-icons'
import GLightbox from "glightbox";

const glightbox = GLightbox({
  selector: '.glightbox'
});

function Gallery() {
    return(
        <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Have you ever wanted to take a visual journey through the heart of our parish? Now you can! <br/>
            Introducing our Parish Photo Gallery, a captivating collection of moments that capture the essence of our community. From joyous celebrations to solemn reflections, each photo tells a story of faith, fellowship, and love.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Mass</li>
              <li data-filter=".filter-card">A Day With the Lord</li>
              <li data-filter=".filter-web">First Friday</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/cmo.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/cmo.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-out.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-out.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/cwo.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/cwo.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-in-1.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-in-1.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-2.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-2.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/good-friday.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/good-friday.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-out.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-out.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-in-2.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-in-2.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={require('../assets/img/portfolio/church-2.jpg')} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={require('../assets/img/portfolio/church-2.jpg')} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"><Plus /></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"><Link /></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    )
}

export default Gallery;