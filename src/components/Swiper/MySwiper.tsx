import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "./swiper.css";
import DiscoverCards from "../Cards/DiscoverCards";
import { cardList } from "./cards";

const MySwiper: React.FC = () => {
  return (
    <div className="text-grey swiperContainer">
      <Swiper>
        {cardList.map((card, index) => (
          <SwiperSlide key={index}>
            <DiscoverCards imageUrl={card.imageUrl} cardText={card.cardText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
