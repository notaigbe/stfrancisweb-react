import { Link } from 'react-router-dom'
import { ChevronRight } from "react-bootstrap-icons";

function About() {
    return(
        <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>History</h3>
              <p>
              Curious about the rich history of St. Francis Catholic Church in Benin City? Click the link below to uncover the captivating journey of our beloved parish:<br/>
                Explore the roots that anchor our faith and community. <br/>Let's cherish our past as we stride into the future together.
              </p>
              <Link to="#" className="about-btn"><span>More</span> <i className="bx bx-chevron-right"><ChevronRight /></i></Link>
            </div>
          </div>
          <div className="content col-lg-6 col-sm-12d-flex align-items-stretch p-3">
            <img src={require("../assets/img/church out.jpg")} alt="" class="img-fluid rounded"/>
          </div>
            </div>
          </div>
       
    </section>
    )
}

export default About;