import LazyLoad from "react-lazyload";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h5 className="head-text">Hear from My Clients</h5>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <h6 className="text-white font-light">{review}</h6>
              <div className="client-content">
                <div className="flex gap-3">
                  <LazyLoad height={12}>
                    <img
                      src={img}
                      alt={name}
                      className="w-12 h-12 rounded-full"
                    />
                  </LazyLoad>

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LazyLoad key={index}>
                      <img
                        src={`${import.meta.env.BASE_URL}assets/star.png`}
                        alt="star"
                        className="w-5 h-5"
                      />
                    </LazyLoad>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
