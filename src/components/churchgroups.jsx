

function Churchgroup() {
    return(
        <section id="pricing" className="pricing section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Organizations</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="box featured" data-aos="fade-up" data-aos-delay="100">
              <h3>C.M.O.N.</h3>
              <img src={require("../assets/img/blog/blog-1.jpg")} alt="C.M.O.N." className="img-fluid"/>
              <ul>
                <li>Meeting Days:</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box bg-primary" data-aos="fade-up" data-aos-delay="200">
              <h3>C.W.O.</h3>
              <img src={require("../assets/img/blog/blog-2.jpg")} alt="C.M.O.N." className="img-fluid"/>
              <ul>
                <li>Meeting Days:</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box bg-warning" data-aos="fade-up" data-aos-delay="300">
              <h3>C.Y.O.N.</h3>
              <img src={require("../assets/img/blog/blog-3.jpg")} alt="C.M.O.N." className="img-fluid"/>
              <ul>
                <li>Meeting Days:</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Learn More</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    )
}

export default Churchgroup;