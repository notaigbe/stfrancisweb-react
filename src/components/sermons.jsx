import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Alt, Quote, ChatRightQuote, ChatLeftQuote } from 'react-bootstrap-icons'
import { useEffect, useRef } from "react";



function Sermons() {
  const swiperRef = useRef(null);

  useEffect(() => {
    
    register();

    const params = {
      spaceBetween: 3,
            // slidesPerView: 3,
            breakpoints: {
              640: {
              slidesPerView: 1
            },
              768: {
              slidesPerView: 3
            }
          },
            pagination: true,
            navigation: true,
            loop: true,
            cssMode: true,
            speed: 600,
            autoplayDelay: 5000,
            autoplayDisableOnInteraction: false,
            effect: "slide",
            style: { "--swiper-navigation-color": "#e03a3c", "--swiper-pagination-color": "#e03a3c"},
            on: {
              init(){

              }
            }
        };

            Object.assign(swiperRef.current, params);

            swiperRef.current.initialize();
  },[]);

    return(
        <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Homilies</h2>
          <p>We invite you to delve deeper into the wisdom shared in our priest's homilies. Below, you'll find key points distilled from recent sermons. <br/> Let's continue to reflect and grow together as a community.</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          {/* <div className="swiper-wrapper"> */}
          <swiper-container
            init="false" ref={swiperRef}>
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={require("../assets/img/testimonials/padre-1.jpeg")} className="testimonial-img" alt=""/>
                  <h3>Rev. Fr. Andrew Obinyan</h3>
                  <h4>Parish Priest</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"><Quote /></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"><Quote /></i>
                  </p>
                </div>
              </div>
            </div>
            <swiper-slide>
            {/* <div className="swiper-slide"> */}
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={require("../assets/img/testimonials/testimonials-2.jpg")} className="testimonial-img" alt=""/>
                  <h3>Rev. Fr. Andrew Obinyan</h3>
                  <h4>Parish Priest</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            {/* </div> */}
            </swiper-slide>
            <swiper-slide>
            {/* <div className="swiper-slide"> */}
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={require("../assets/img/testimonials/testimonials-3.jpg")} className="testimonial-img" alt=""/>
                  <h3>Rev. Fr. Andrew Obinyan</h3>
                  <h4>Parish Priest</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            {/* </div> */}
            </swiper-slide>
            <swiper-slide>

            {/* <div className="swiper-slide"> */}
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={require("../assets/img/testimonials/testimonials-4.jpg")} className="testimonial-img" alt=""/>
                  <h3>Rev. Fr. Andrew Obinyan</h3>
                  <h4>Parish Priest</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            {/* </div> */}
            </swiper-slide>
            <swiper-slide>

            {/* <div className="swiper-slide"> */}
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={require("../assets/img/testimonials/testimonials-5.jpg")} className="testimonial-img" alt=""/>
                  <h3>Rev. Fr. Andrew Obinyan</h3>
                  <h4>Parish Priest</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            {/* </div> */}
            </swiper-slide>
            </swiper-container>

          {/* </div> */}
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>

    
    )
}

export default Sermons;