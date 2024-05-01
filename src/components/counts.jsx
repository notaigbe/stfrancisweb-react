import { People, PeopleFill, PersonPlusFill, PersonDashFill, PersonArmsUp, PersonCheckFill } from "react-bootstrap-icons";
import CountUp from 'react-countup';

function Counts() {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people"><People /></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="2862"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={2862}></CountUp></span>
              <p>Parishoners</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-people"><PersonPlusFill /></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={521}></CountUp></span>
              <p>Men</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"><PersonCheckFill /></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="863"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={863}></CountUp></span>
              <p>Women</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"><PersonArmsUp /></i>
              
              <span
                data-purecounter-start="0"
                data-purecounter-end="1478"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={1478}></CountUp></span>
              <p>Youth / Children</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counts;
