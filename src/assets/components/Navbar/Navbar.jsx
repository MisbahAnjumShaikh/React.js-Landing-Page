import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="h-25 content-center">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center sm:items-stretch">
              <div className="flex shrink-0 items-center text-2xl font-semibold rounded-md hover:bg-gray-300 px-4 py-2 sm:justify-start cursor-pointer">
                FaazizPRO
              </div>
              <div className="hidden sm:ml-6 sm:block w-full">
                <div className="flex space-x-4 text-black text-base justify-center">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium hover:bg-gray-200"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium hover:bg-gray-200 "
                  >
                    Info
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium hover:bg-gray-200 "
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium  hover:bg-gray-200"
                  >
                    Teacher
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium hover:bg-gray-200"
                  >
                    Review
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 font-medium hover:bg-gray-200"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                  </button>
                  <span className="flex items-baseline">
                    <a className="text-lime-500 font-bold m-5 cursor-pointer">Login</a>
                    <button className="bg-lime-500 text-white font-bold px-2 rounded-md flex items-center gap-2 h-10 cursor-pointer">
                      Join Us <FaArrowRight className="size-4" />
                    </button>
                  </span>

                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Info
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Teacher
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Review
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
