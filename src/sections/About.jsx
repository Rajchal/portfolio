import Button from "../components/Button";
import { useState } from "react";
import LazyLoad from "react-lazyload";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("rajchalanjal1@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space pt-20 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <LazyLoad offset={816}>
              <img
                src={`${import.meta.env.BASE_URL}assets/grid1.png`}
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
            </LazyLoad>
            <div>
              <h2 className="grid-headtext">Hi, I&apos;m Anjal Rajchal</h2>
              <h3 className="grid-subtext">
                With 2 years of experience, I have honed my skills in frontend
                and backend devlopment, with a focus on animated 3D websites.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex items-center justify-center">
            <LazyLoad offset={700}>
              <img
                src={`${import.meta.env.BASE_URL}assets/greed.png`}
                alt="grid-2"
                className="w-full sm:w-[276px] h-fit object-contain"
              />
            </LazyLoad>

            <div>
              <h3 className="grid-headtext">Technologies I use</h3>
              <h4 className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystem
              </h4>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/grid4.png`}
                alt="location"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div>
              <h3 className="grid-headtext">
                I work remotely across most timezones
              </h3>
              <h4 className="grid-subtext">
                I&apos;m based in Kathmandu, Nepal, and work with clients
                worldwide
              </h4>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <LazyLoad offset={1608}>
              <img
                src={`${import.meta.env.BASE_URL}assets/grid3.png`}
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain"
              />
            </LazyLoad>

            <div>
              <h3 className="grid-headtext">My passion for Coding</h3>
              <h4 className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession -it is my passion.
              </h4>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <LazyLoad offset={720}>
              <img
                src="assets/grid4.png"
                alt="alt-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
            </LazyLoad>

            <div className="space-y-2">
              <h3 className="grid-subtext text-center ">Contact me</h3>
              <div className="copy-container" onClick={handleCopy}>
                <LazyLoad offset={500}>
                  <img
                    src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                    alt="copy"
                  />
                </LazyLoad>

                <h4 className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  rajchalanjal1@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
