/* eslint-disable react/no-unescaped-entities */
import {
  Play,
  BarChart2,
  DollarSign,
  Search,
  ChevronRight,
  ArrowUpRight,
} from "react-feather";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <!-- home section --> */}
      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Navbar />

          <header className="flex-col xl:flex-row flex justify-between">
            <div className="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
              <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">
                A digital <br /> Product design <br /> Agency
              </h1>

              <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">
                We develop world className high quality product <br /> designs.
              </p>

              <div className="flex items-center justify-center lg:justify-start">
                <a
                  href="#"
                  className="px-8 py-3 bg-red-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-red-700 transition ease-in-out duration-300 mr-14"
                >
                  Our story
                </a>

                <a
                  href="#"
                  className="hidden lg:block font-normal text-gray-500 text-lg mr-8"
                >
                  Watch Showreel
                </a>

                <a
                  href="#"
                  className="px-4 py-4 text-gray-300 border-2 border-gray-200 rounded-full"
                >
                  <i>
                    <Play />
                  </i>
                </a>
              </div>
            </div>

            <div className="mx-auto xl:mx-0">
              <img src="./src/assets/image/home-img.svg" alt="Image" />
            </div>
          </header>
        </div>
      </section>
      {/* <!-- home section //end --> */}

      {/* <!-- feature section --> */}
      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="text-center mb-10 xl:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-20 py-7 flex justify-center bg-purple-50 text-purple-500 rounded-md mb-5 md:mb-10">
                  <i>
                    <BarChart2 />
                  </i>
                </div>
              </div>

              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
                Business planning
              </h2>

              <p className="font-normal text-gray-400 text-sm md:text-lg">
                Excepteur sint occaecat cupidatat non <br /> proident, sunt in
                culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
            </div>

            <div className="text-center mb-10 md:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                  <i>
                    <DollarSign />
                  </i>
                </div>
              </div>

              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
                Financial planning
              </h2>

              <p className="font-normal text-gray-400 text-sm md:text-lg">
                Excepteur sint occaecat cupidatat non <br /> proident, sunt in
                culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                  <i>
                    <Search />
                  </i>
                </div>
              </div>

              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
                Market Analytics
              </h2>

              <p className="font-normal text-gray-400 text-sm md:text-lg">
                Excepteur sint occaecat cupidatat non <br /> proident, sunt in
                culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature section //end --> */}

      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
            What we do?
          </h1>

          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit <br /> anim id est laborum.
          </p>

          <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
            <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
              <img src="./src/assets/image/image-1.svg" alt="Image" />
            </div>

            <div className="mx-auto xl:mx-0 text-center xl:text-left">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Design is our most intense <br /> process
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum <br /> dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat <br /> non proident, sunt in culpa qui
                officia deserunt mollit anim id est <br /> laborum.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                See more
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
            <div className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Don’t worry about the investment, <br /> it will come back.
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum <br /> dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat <br /> non proident, sunt in culpa qui
                officia deserunt mollit anim id est <br /> laborum.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                See more
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>

            <div className="mx-auto xl:mx-0">
              <img src="./src/assets/image/image-2.svg" alt="Image" />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
              <img src="./src/assets/image/image-3.svg" alt="Image" />
            </div>

            <div className="mx-auto xl:mx-0 text-center xl:text-left">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Instantly understandable content <br /> is important
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum <br /> dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat <br /> non proident, sunt in culpa qui
                officia deserunt mollit anim id est <br /> laborum.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                See more
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
            Our works
          </h1>

          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit <br /> anim id est laborum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-1.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-2.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-3.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-3.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-1.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4 mb-10 md:mb-20">
              <img
                src="./src/assets/image/yoga-2.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Design, Branding, Development
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-20 md:mb-40">
            <a
              href="#"
              className="px-6 py-2 md:px-8 md:py-3 flex items-center gap-3 font-medium text-red-500 text-lg border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition ease-linear duration-300"
            >
              See more works
              <i>
                <ArrowUpRight />
              </i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
            <img
              src="./src/assets/image/brand-1.svg"
              alt="Image"
              className="mb-5 md:mb-10 xl:mb-0"
            />

            <img
              src="./src/assets/image/brand-2.svg"
              alt="Image"
              className="mb-5 md:mb-0"
            />

            <img
              src="./src/assets/image/brand-3.svg"
              alt="Image"
              className="mb-5 md:mb-10 xl:mb-0"
            />

            <img
              src="./src/assets/image/brand-4.svg"
              alt="Image"
              className="mb-5 md:mb-0"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between mb-8">
            <div>
              <p className="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">
                Let's tealk
              </p>

              <h1 className="font-bold text-gray-700 text-xl md:text-4xl">
                Do you have any Project?
              </h1>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="px-4 py-2 md:px-8 md:py-3 font-medium text-red-500 text-lg border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition ease-linear duration-300"
              >
                Contact us now
              </a>
            </div>
          </div>

          <hr className="text-gray-300 mb-8" />

          <p className="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit <br /> anim id est laborum.
          </p>
        </div>
      </section>

      <footer className="bg-red-50 py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
            <div className="mb-10 lg:mb-0">
              <img
                src="./src/assets/image/footer-logo.svg"
                alt="Image"
                className="mb-5 mx-auto lg:mx-0"
              />

              <p className="font-normal text-gray-400 text-md">
                Excepteur sint occaecat cupidatat non <br /> proident, sunt in
                culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-4 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Our services
              </h4>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Pricing
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                UI Design
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Animation
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Development
              </a>
            </div>

            <div className="space-y-4 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Our Company
              </h4>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Reporting
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Get in Touch
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Management
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Our services
              </h4>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                121 King St, VIC3000, US
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                888-123-42287
              </a>

              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                info@example.com
              </a>
            </div>
          </div>

          <hr className="text-gray-300 mt-10" />

          <p className="font-normal text-gray-400 text-md text-center mt-5">
            &copy; 2021 Digital Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
