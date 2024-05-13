import { Briefcase, Book, Cup, CardChecklist, BarChart, Binoculars, BrightnessHigh, Calendar4Week } from 'react-bootstrap-icons'

function Services() {
    return(
        <section id="services" className="services section-bg ">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>information Centre</h2>
          <p>We want to ensure everyone stays informed and engaged in the life of our parish. Below are the days and times for various informational sessions:</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-briefcase"><Briefcase /></i>
              <h4><a href="#">Mass Schedule</a></h4>
              <p>Sunday & Weekday Mornings - 6:30am | Afternoon Mass - 12:30pm</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-card-checklist"><CardChecklist /></i>
              <h4><a href="#">Office Hours</a></h4>
              <p>Tuesdays : 8:00am - 12noon</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-bar-chart"><BarChart /></i>
              <h4><a href="#">Catechism Classes</a></h4>
              <p>Mondays, Wednesdays and Fridays by 4:00pm</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-binoculars"><Binoculars /></i>
              <h4><a href="#">Confession</a></h4>
              <p>Saturdays at 5:00pm | After morning Masses</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high"><BrightnessHigh /></i>
              <h4><a href="#">Holy hour/ Benediction</a></h4>
              <p>Sundays at 5:00pm</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-calendar4-week"><Calendar4Week /></i>
              <h4><a href="#">Infant Baptisim</a></h4>
              <p>First Saturday of every month after morning mass</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
    )
}

export default Services;