import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
// import 'swiper/css'
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import values from "../../values";

function Newsticker() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${values.url}/dailyusers`)
      .then((d) => {
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Fragment>
      <div className="container-fluid bg-white news-ticker">
        <div className="bg-white">
          <div className="best-ticker">
            <div className="bn-news">
              <ul>
                <Slider {...settings}>
                  <li className="text-muted fs-13 fw-semibold">
                    {/* <span className="fa fa-users bg-danger-transparent text-danger mx-1"></span> */}
                    <span className="d-inline-block">Total Users:</span>
                    <span className="bn-positive me-4">1,653</span>
                  </li>
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Newsticker;
