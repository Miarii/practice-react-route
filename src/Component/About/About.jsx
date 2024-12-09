import { NavLink } from "react-router";

const About = () => {
  return (
    <div>
      <section className="min-h-screen overflow-hidden">
        <div className="flex h-full items-center bg-gray-50 p-4 sm:p-6 md:p-12 lg:px-16">
          <div className="mx-auto max-w-6xl text-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop"
                alt="Professional Clothing Store"
                className="w-full md:w-4/5 h-[250px] sm:h-[300px] md:h-[400px] object-cover object-center rounded-lg shadow-xl"
              />
              <div className="w-full md:w-4/5 px-4 sm:px-6 md:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                  Premium Quality Apparel
                </h2>

                <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl md:leading-relaxed text-gray-700">
                  Discover our exclusive collection of meticulously crafted shirts,
                  designed for those who appreciate exceptional quality and timeless
                  style.
                </p>

                <div className="mt-6 sm:mt-8 md:mt-10">
                  <NavLink to={"/blog"}>
                    <a
                      href="#"
                      className="inline-block rounded-full bg-indigo-600 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Explore Collection
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;