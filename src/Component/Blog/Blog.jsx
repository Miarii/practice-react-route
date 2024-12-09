const Blog = () => {
  return (
    <div className="container px-4 py-8 md:w-4/5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div className="mt-1.5 flex items-center justify-between text-gray-900">
                <p className="tracking-wide">$189.99</p>

                <p className="text-xs uppercase tracking-wide">6 Colors</p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" className="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-1.5">
              <p className="text-xs text-gray-500">Space Grey</p>

              <div className="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend className="sr-only">Color</legend>
                  </fieldset>

                  <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" className="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" className="sr-only" />

                      <label
                        htmlFor="ColorS"
                        className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" className="sr-only" />

                      <label
                        htmlFor="ColorP"
                        className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" className="sr-only" />

                      <label
                        htmlFor="ColorG"
                        className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" className="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p className="text-gray-900">$299</p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;