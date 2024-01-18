import React from "react";
import delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="py-4 flex flex-col items-start justify-center flex-1 gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            {" "}
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={delivery}
              className="w-full h-full object-contain bg-white"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] tracking-wide text-headingColor font-bold">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          fugiat doloribus excepturi quia molestias veniam. Maiores incidunt
          veritatis debitis velit magni dolores nulla nemo error, inventore
          animi nostrum esse ad explicabo officia sequi nisi eveniet.
        </p>

        <button
          type="button"
          className="md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 
        w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={HeroBg}
            className="h-420 w-full md:ml-auto md:h-650 lg:w-auto"
            alt="heroBg"
          />
          <div className="w-full h-full flex flex-wrap gap-3 items-center justify-center absolute top-0 left-0">
            {heroData &&
              heroData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="xl:w-[230px] mt-12 lg:mt-16 drop-shadow-md p-3 bg-cardOverlay rounded-3xl backdrop-blur-md flex flex-col justify-center items-center "
                  >
                    <img
                      src={item.image}
                      alt="food"
                      className="w-20 -mt-10 lg:w-40 lg:-mt-20"
                    />
                    <p className=" text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                      {item.name}
                    </p>
                    <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                      {item.desc}
                    </p>
                    <p className="text-sm font-semibold text-headingColor">
                      <span className="text-xs text-red-600">$</span>{" "}
                      {item.price}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
