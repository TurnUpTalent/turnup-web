import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = ( props ) => {

  const navigation = [
    ["Product", 'product'],
    ["Features", 'features'],
    // "Pricing",
    ["Privacy", 'privacy'],
    ["About Us", 'about'],
    ["Contact", 'contact']
    // "Blog",
  ];

  const { onOpen } = props;

  return (
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      {/* <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      /> */}
                    </span>
                    <span>TurnUp</span>
                  </span>
                    </Link>

                    <Disclosure.Button
                        aria-label="Toggle Menu"
                        className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                      <svg
                          className="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                        {open && (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        )}
                        {!open && (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                      <>
                      {navigation.map((item, index) => {
                        // Check if the navigation item is "product" or "features"
                        if (item[1] === 'product' || item[1] === 'features') {
                          // Directly use an anchor tag for in-page navigation without Link
                          return (
                            <a key={index} href={`/#${item[1]}`} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                              {item[0]}
                            </a>
                          );
                        } else {
                          // Use the Next.js Link component for other links, without wrapping an <a> tag
                          return (
                            <Link key={index} href={`/${item[1]}`} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                              {item[0]}
                            </Link>
                          );
                        }
                      })}
                        <Link href="/contact" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                          Schedule Demo
                        </Link>
                      </>
                    </Disclosure.Panel>
                  </div>
                </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => {
                if (menu[1] === 'product' || menu[1] === 'features') {
                  // Use a workaround to handle in-page navigation with the Link component
                  return (
                      <li className="mr-3 nav__item" key={index}>
                        {/* Directly navigating to the home page with the hash */}
                        <a href={`/#${menu[1]}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                          {menu[0]}
                        </a>
                      </li>
                  );
                } else {
                  // For other links, continue using Next.js Link component
                  return (
                      <li className="mr-3 nav__item" key={index}>
                        <Link href={`/${menu[1]}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                          {menu[0]}
                        </Link>
                      </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link href="/contact" target="_blank" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Try For Free
            </Link>

            <ThemeChanger />
          </div>
        </nav>
      </div>
  );
}

export default Navbar;