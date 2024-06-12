import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: 2000,
    slidesToShow: 4,

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            SlidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesTOShow: 1,
            SlidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <Slider {...settings}>
      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>
    </Slider>
  );
};

export default Team;