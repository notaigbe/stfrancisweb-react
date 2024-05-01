import { Link } from 'react-router-dom'
import { ChevronRight } from "react-bootstrap-icons";

function About() {
    return(
        <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Brief History</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <Link to="#" className="about-btn"><span>More</span> <i className="bx bx-chevron-right"><ChevronRight /></i></Link>
            </div>
          </div>
          
            </div>
          </div>
       
    </section>
    )
}

export default About;