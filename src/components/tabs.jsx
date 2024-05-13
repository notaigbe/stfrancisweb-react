import { Wifi, PersonBoundingBox, Sun, Shop, Check2 } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab-1")

  const handleTab1 = ()=>{
    setActiveTab("tab-1");
  };

  const handleTab2 = ()=>{
    setActiveTab("tab-2");
  };

  const handleTab3 = ()=>{
    setActiveTab("tab-3");
  };

  const handleTab4 = ()=>{
    setActiveTab("tab-4");
  };


  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className={activeTab === "tab-1" ? "nav-item col-3 active" : "nav-item col-3"} onClick={handleTab1}>
            <a
              className={activeTab === "tab-1" ? "nav-link active show" : "nav-link"}
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <i className="ri-gps-line"><Wifi /></i>
              <h4 className="d-none d-lg-block">
                Parish Laity Council
              </h4>
            </a>
          </li>
          <li className={activeTab === "tab-2" ? "nav-item col-3 active" : "nav-item col-3"} onClick={handleTab2}>
            <a
              className={activeTab === "tab-2" ? "nav-link active show" : "nav-link"}
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
            >
              <i className="ri-body-scan-line"><PersonBoundingBox /></i>
              <h4 className="d-none d-lg-block">
                Parish Pastoral Council
              </h4>
            </a>
          </li>
          <li className={activeTab === "tab-3" ? "nav-item col-3 active" : "nav-item col-3"} onClick={handleTab3}>
            <a
              className={activeTab === "tab-3" ? "nav-link active show" : "nav-link"}
              data-bs-toggle="tab"
              data-bs-target="#tab-3"
            >
              <i className="ri-sun-line"><Sun /></i>
              <h4 className="d-none d-lg-block">Parish Finance Council</h4>
            </a>
          </li>
          <li className={activeTab === "tab-4" ? "nav-item col-3 active" : "nav-item col-3"} onClick={handleTab4}>
            <a
              className={activeTab === "tab-4" ? "nav-link active show" : "nav-link"}
              data-bs-toggle="tab"
              data-bs-target="#tab-4"
            >
              <i className="ri-store-line"><Shop /></i>
              <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className={activeTab === "tab-1" ? "tab-pane active show" : "tab-pane"} id="tab-1">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>
                Some Functions of the Laity Councils
                </h3>
                <p className="fst-italic">
                A Catholic Parish Laity Council, also known as a Pastoral Council, is a consultative body that advises the parish priest or pastor on matters related to the spiritual growth and development of the parish. The functions of a Catholic Parish Laity Council include:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Advising the pastor: The council provides input and advice on parish matters, such as pastoral planning, budgeting, and community engagement.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Fostering community: The council helps build a sense of community among parishioners, promoting unity and cooperation.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Developing parish programs: The council helps plan and implement programs for spiritual growth, education, and social justice.
                  </li>
                </ul>
                <p>
                As members of our church family, we are all called to work together to build God's kingdom. As the body of Christ, we are all interconnected, and the laity council is an integral part of our church's ministry. By supporting them, we are supporting the growth and well-being of our entire church community.
                  Let us rally behind our laity council, praying for them, attending meetings, and offering our talents and resources. Together, we can achieve great things for God's glory!
                  Remember, every single one of us has a vital role to play in the life of our church. Let us celebrate our unity and work together to further God's mission.
                </p>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={require("../assets/img/church 2.JPG")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className={activeTab === "tab-2" ? "tab-pane active show" : "tab-pane"} id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                Functions of the Parish Pastoral Council
                </h3>
                
                <p className="fst-italic">
                A Catholic Parish Laity Council, also known as a Pastoral Council, is a consultative body that advises the parish priest or pastor on matters related to the spiritual growth and development of the parish. The functions of a Catholic Parish Laity Council include:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Advising the pastor: The council provides input and advice on parish matters, such as pastoral planning, budgeting, and community engagement.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Fostering community: The council helps build a sense of community among parishioners, promoting unity and cooperation.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i>  Developing parish programs: The council helps plan and implement programs for spiritual growth, education, and social justice.
                  </li>
                </ul>
                <p>
                As members of our church family, we are all called to work together to build God's kingdom. As the body of Christ, we are all interconnected, and the laity council is an integral part of our church's ministry. By supporting them, we are supporting the growth and well-being of our entire church community.
              Let us rally behind our laity council, praying for them, attending meetings, and offering our talents and resources.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={require("../assets/img/church out.jpg")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className={activeTab === "tab-3" ? "tab-pane active show" : "tab-pane"} id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                Functions of the Parish Finance Council
                </h3>
                <p className='fst-italic'>
                A Catholic Parish Laity Council, also known as a Pastoral Council, is a consultative body that advises the parish priest or pastor on matters related to the spiritual growth and development of the parish. The functions of a Catholic Parish Laity Council include:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Advising the pastor: The council provides input and advice on parish matters, such as pastoral planning, budgeting, and community engagement.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Fostering community: The council helps build a sense of community among parishioners, promoting unity and cooperation.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i>  Developing parish programs: The council helps plan and implement programs for spiritual growth, education, and social justice.
                  </li>
                </ul>
                <p>
                As members of our church family, we are all called to work together to build God's kingdom. As the body of Christ, we are all interconnected, and the laity council is an integral part of our church's ministry. By supporting them, we are supporting the growth and well-being of our entire church community.
              Let us rally behind our laity council, praying for them, attending meetings, and offering our talents and resources. Together, we can achieve great things for God's glory!
              Remember, every single one of us has a vital role to play in the life of our church. Let us celebrate our unity and work together to further God's mission.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={require("../assets/img/church in 2.jpg")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className={activeTab === "tab-4" ? "tab-pane active show" : "tab-pane"} id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                Other functions
                </h3>
                
                <p className="fst-italic">
                A Catholic Parish Laity Council, also known as a Pastoral Council, is a consultative body that advises the parish priest or pastor on matters related to the spiritual growth and development of the parish. The functions of a Catholic Parish Laity Council include:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Advising the pastor: The council provides input and advice on parish matters, such as pastoral planning, budgeting, and community engagement.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i> Fostering community: The council helps build a sense of community among parishioners, promoting unity and cooperation.
                  </li>
                  <li>
                    <i className="ri-check-double-line"><Check2 /></i>  Developing parish programs: The council helps plan and implement programs for spiritual growth, education, and social justice.
                  </li>
                </ul>
                <p>
                As members of our church family, we are all called to work together to build God's kingdom. As the body of Christ, we are all interconnected, and the laity council is an integral part of our church's ministry. By supporting them, we are supporting the growth and well-being of our entire church community.
              Let us rally behind our laity council, praying for them, attending meetings, and offering our talents and resources. 
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={require("../assets/img/church in 1.jpg")} alt="img-fluid" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
