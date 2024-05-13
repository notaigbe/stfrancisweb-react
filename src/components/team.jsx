import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

function Team() {
    return(
<section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Parish Priest and Assistants</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={require("../assets/img/team/obinyan.jpg")} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"><Twitter /></i></a>
                  <a href=""><i className="bi bi-facebook"><Facebook /></i></a>
                  <a href=""><i className="bi bi-instagram"><Instagram /></i></a>
                  <a href=""><i className="bi bi-linkedin"><Linkedin /></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Very Rev. Fr. Dr. Andrew Aigbe Obinyan</h4>
                <span>Parish Priest</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src={require("../assets/img/team/team-2.jpg")} className="img-fluid" alt=""/>
                <div className="social">
                <a href=""><i className="bi bi-twitter"><Twitter /></i></a>
                  <a href=""><i className="bi bi-facebook"><Facebook /></i></a>
                  <a href=""><i className="bi bi-instagram"><Instagram /></i></a>
                  <a href=""><i className="bi bi-linkedin"><Linkedin /></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Rev. Fr. Egejuru Emmanuel</h4>
                <span>Assistant Priest</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={require("../assets/img/team/team-3.jpg")} className="img-fluid" alt=""/>
                <div className="social">
                <a href=""><i className="bi bi-twitter"><Twitter /></i></a>
                  <a href=""><i className="bi bi-facebook"><Facebook /></i></a>
                  <a href=""><i className="bi bi-instagram"><Instagram /></i></a>
                  <a href=""><i className="bi bi-linkedin"><Linkedin /></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </section>

    
    )
}

export default Team;