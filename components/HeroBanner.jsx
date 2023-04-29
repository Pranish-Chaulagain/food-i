import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="w-full max-w-[1400px] px-2.5 md:px-5 mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={6000}
          swipeable={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-[60px] md:right-[70px] top-2 w-[45px] md:w-[50px] h-[45px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90 rounded-md"
            >
              <BiArrowBack className="text-base md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-2 top-2 w-[45px] md:w-[50px] h-[45px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90 rounded-md"
            >
              <BiArrowBack className="rotate-180 text-base md:text-lg" />
            </div>
          )}
        >
          <div
            id="banner1"
            className="relative flex items-center justify-center"
          >
            <div className="absolute flex flex-col items-center gap-4 px-3 lg:px-56">
              <h1 className="text-white capitalize lg:text-6xl text-5xl font-semibold">
                We serve you with Hot, Fresh & Tasty.
              </h1>
              <p className="text-white md:text-base text-sm font-medium">
                We understand that the quality of your meal is just as important
                as its flavor, which is why we prioritize freshness and quality
                in every order.
              </p>
              <button
                className="md:px-6 px-5 md:h-[54px] h-[50px] rounded-full bg-white text-black md:text-lg text-base font-semibold transition-transform 
                  active:scale-95 hover:opacity-75 flex items-center justify-center gap-2"
              >
                Order now
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
              </button>
            </div>
          </div>

          <div
            id="banner2"
            className="relative flex items-center justify-center"
          >
            <div className="absolute flex flex-col items-center gap-4 px-3 lg:px-56">
              <h1 className="text-white capitalize lg:text-6xl text-5xl font-semibold">
                Experience the taste like nothing before.
              </h1>
              <p className="text-white md:text-base text-sm font-medium">
                Whether you're in the mood for something spicy, sweet, or
                savory, our menu has something to satisfy every craving.
              </p>
              <button
                className="md:px-6 px-5 md:h-[54px] h-[50px] rounded-full bg-white text-black md:text-lg text-base font-semibold transition-transform 
                  active:scale-95 hover:opacity-75 flex items-center justify-center gap-2"
              >
                Order now
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
              </button>
            </div>
          </div>

          <div
            id="banner3"
            className="relative flex items-center justify-center"
          >
            <div className="absolute flex flex-col items-center gap-4 px-3 lg:px-56">
              <h1 className="text-white capitalize lg:text-6xl text-5xl font-semibold">
                Delicious food, delivered to your doorstep!
              </h1>
              <p className="text-white md:text-base text-sm font-medium">
                Our food is prepared fresh and delivered straight to you, so you
                can enjoy a restaurant-quality meal without ever leaving your
                house.
              </p>
              <button
                className="md:px-6 px-5 md:h-[54px] h-[50px] rounded-full bg-white text-black md:text-lg text-base font-semibold transition-transform 
                  active:scale-95 hover:opacity-75 flex items-center justify-center gap-2"
              >
                Order now
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;
