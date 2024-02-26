import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
      <Container className="!p-0">
        <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          {faqdata.map((item, index) => (
              <div key={item.question} className="mb-5">
                <Disclosure>
                  {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                          <span>{item.question}</span>
                          <ChevronUpIcon
                              className={`${
                                  open ? "transform rotate-180" : ""
                              } w-5 h-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                  )}
                </Disclosure>
              </div>
          ))}
        </div>
      </Container>
  );
}

const faqdata = [
  {
    question: "Is this for me?",
    answer: (
        <span>
        Most likely yes!{" "}
          <a href="/demo" className="text-indigo-600 hover:text-indigo-800">
          Schedule a demo here
        </a>{" "}
          to talk one-on-one with our CEO.
      </span>
    ),
  },
  {
    question: "How much does it cost?",
    answer: (
        <span>
        <a href="/demo" className="text-indigo-600 hover:text-indigo-800">
          Schedule a demo
        </a>{" "}
          with us for free! Then we can work with the needs of your company to decide what plan best fits your needs.
      </span>
    ),
  },
  {
    question: "Is your software secure?",
    answer:
        "We have a dedicated privacy team to make sure that your companies data is secure using best in class security practices.",
  },
  {
    question: "What data do you need?",
    answer:
        "We can connect directly to your companies HRIS or payroll system. Quick and simple!",
  },
];

export default Faq;