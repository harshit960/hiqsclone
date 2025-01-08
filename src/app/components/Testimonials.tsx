'use client'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  return (
    <div className="home-container pt-16" id="testimonials">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
            What they say
          </span>{" "}
          about us
        </h1>
      </div>

      <section className="rounded-xl text-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 xl:py-12 overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            {/* Testimonial 1 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 sm:p-8 lg:p-12 shadow-lg rounded-lg">
                <div>
                  <div className="flex gap-1 text-cyan-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold sm:text-3xl">
                      Outstanding Service and Results
                    </p>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      Our experience with HiQual Solutions has been exceptional. Their team's dedication to quality and professionalism is evident in every project they undertake. From website design to digital marketing, they consistently deliver results that exceed our expectations.
                    </p>
                  </div>
                </div>
                <footer className="mt-6 text-sm font-medium text-gray-400">
                  — Aarav Sharma
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 sm:p-8 lg:p-12 shadow-lg rounded-lg">
                <div>
                  <div className="flex gap-1 text-cyan-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175                        0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold sm:text-3xl">
                      Impressive Professionalism
                    </p>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      Working with HiQual Solutions has been a pleasure. They
                      always go above and beyond to ensure our needs are met
                      with precision. Their customer-first approach sets them
                      apart in the industry.
                    </p>
                  </div>
                </div>
                <footer className="mt-6 text-sm font-medium text-gray-400">
                  — Priya Gupta
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 sm:p-8 lg:p-12 shadow-lg rounded-lg">
                <div>
                  <div className="flex gap-1 text-cyan-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold sm:text-3xl">
                      Consistently Excellent Results
                    </p>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      HiQual Solutions has been a game-changer for our
                      business. Their creative solutions and innovative ideas
                      have helped us stay ahead of the competition. I would
                      highly recommend them to anyone looking for high-quality
                      services.
                    </p>
                  </div>
                </div>
                <footer className="mt-6 text-sm font-medium text-gray-400">
                  — Rohan Mehta
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
