import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
          <a className="block " href="#">
            <span className="sr-only">Home</span>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    HOME{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Explore{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About US{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contact US{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
                  href="#"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-secondary transition hover:text-secondaryHover sm:block"
                  href="#"
                >
                  Register
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
