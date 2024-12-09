const Banner = () => {
  return (
    <div>
      <section className="bg-white rounded-lg w-4/5 mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Optimize Your Business Analytics
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Drive Strategic Growth{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Transform your business insights with our advanced analytics platform. 
              Make data-driven decisions to accelerate your company's success.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Schedule Demo
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;