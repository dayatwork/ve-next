import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  ClipboardListIcon,
  UserGroupIcon,
  MicrophoneIcon,
  QuestionMarkCircleIcon,
  TranslateIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

const overview = (t: any) => [
  {
    name: t("about-href"),
    href: "about-hef",
  },
  {
    name: t("about-ihea"),
    href: "about-iahe",
  },
  {
    name: t("programs"),
    href: "programs",
  },
  {
    name: t("webinar-rundown"),
    href: "webinar-rundown",
  },
  {
    name: t("news"),
    href: "news",
  },
  {
    name: t("important-dates"),
    href: "important-dates",
  },
];

const visitor = (t: any) => [
  {
    name: t("visitor-guideline"),
    href: "visitor-guideline",
  },
  {
    name: t("who-attends"),
    href: "who-attends",
  },
  {
    name: t("why-attend"),
    href: "why-attend",
  },
];

const exhibitor = (t: any) => [
  {
    name: t("exhibitor-guideline"),
    href: "exhibitor-guideline",
  },
  {
    name: t("who-exhibits"),
    href: "who-exhibits",
  },
  {
    name: t("why-exhibit"),
    href: "why-exhibit",
  },
  {
    name: t("packages"),
    href: "packages",
  },
];

const faq = (t: any) => [
  {
    name: t("faq-general"),
    href: "faq",
  },
  {
    name: t("faq-visitor"),
    href: "faq/visitor",
  },
  {
    name: t("faq-exhibitor"),
    href: "faq/exhibitor",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// type Props = {
//   currentHref?: string;
// };

export const Header = () => {
  const { t } = useTranslation("common");
  const { asPath, locale, push } = useRouter();

  return (
    <Popover className="sticky z-40 md:z-auto top-0 sm:top-auto bg-white sm:bg-transparent flex sm:flex h-[50px] sm:h-[70px] max-w-7xl mx-auto px-4 md:px-2 items-center justify-between">
      {/* <!-- Logo --> */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <Image
          width={40}
          height={40}
          className="w-10 h-10 sm:w-14 sm:h-14"
          src="/ptpi.png"
          alt="Logo PTPI"
        />
        <div>
          <div className="hidden sm:block text-sm sm:text-lg xl:text-2xl uppercase font-bold text-gray-800 tracking-wider">
            {t("event-title")}
          </div>
          <div className="block sm:hidden text-sm sm:text-lg xl:text-2xl uppercase font-bold text-gray-800 tracking-wider">
            {t("event-title-short")}
          </div>
          <div className="hidden sm:block text-xs xl:text-md uppercase text-gray-600 tracking-wider">
            {t("event-tagline")}
          </div>
        </div>
      </div>

      {/* <!-- Select Language --> */}
      <div className="flex space-x-6 items-center">
        {/* <div>
          <Link href="/book-consultation">
            <a className="text-white bg-primary-600 px-4 py-2 rounded-md shadow hover:bg-primary-700 whitespace-nowrap text-xs sm:text-base font-semibold">
              Book Consultation
            </a>
          </Link>
        </div> */}
        <label htmlFor="language" className="sr-only">
          Select Language
        </label>
        <div className="flex items-center space-x-3">
          <TranslateIcon className="w-4 h-4 sm:h-5 sm:w-5 text-gray-500" />
          <select
            name="Language"
            id="language"
            className="block appearance-none pl-3 pr-8 py-1.5 sm:py-2 border  rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary text-xs sm:text-sm border-gray-300 w-20"
            value={locale}
            onChange={(e) => push(asPath, asPath, { locale: e.target.value })}
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>

      {/* <!-- Menu Button --> */}
      <div className="block md:hidden ml-2">
        <Popover.Button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/menu --> */}
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Image
                    width={40}
                    height={40}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                    src="/ptpi.png"
                    alt="Logo PTPI"
                  />
                  <div>
                    <div className="text-sm sm:text-lg xl:text-2xl uppercase font-bold text-gray-800 tracking-wider">
                      {t("event-title")}
                    </div>
                    <div className="hidden sm:block text-xs xl:text-md uppercase text-gray-600 tracking-wider">
                      {t("event-tagline")}
                    </div>
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {/* <!-- Home --> */}
                  <a
                    href="index.html"
                    className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {/* <!-- Heroicon name: outline/chart-bar --> */}
                    <HomeIcon className="flex-shrink-0 h-6 w-6 text-primary" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {t("home")}
                    </span>
                  </a>

                  {/* <!-- Overview --> */}
                  <Disclosure as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <ClipboardListIcon className="flex-shrink-0 h-6 w-6 text-primary" />
                          <span className="flex-1 ml-3 text-base font-medium text-gray-900">
                            {t("overview")}
                          </span>
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300",
                              "text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {overview(t).map((submenu) => (
                            <a
                              key={submenu.name}
                              href={submenu.href}
                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {submenu.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* <!-- Visitor --> */}
                  <Disclosure as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <UserGroupIcon className="flex-shrink-0 h-6 w-6 text-primary" />
                          <span className="flex-1 ml-3 text-base font-medium text-gray-900">
                            {t("visitor")}
                          </span>
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300",
                              "text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {visitor(t).map((submenu) => (
                            <a
                              key={submenu.name}
                              href={submenu.href}
                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {submenu.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* <!-- Exhibitor --> */}
                  <Disclosure as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <MicrophoneIcon className="flex-shrink-0 h-6 w-6 text-primary" />
                          <span className="flex-1 ml-3 text-base font-medium text-gray-900">
                            {t("exhibitor")}
                          </span>
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300",
                              "text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {exhibitor(t).map((submenu) => (
                            <a
                              key={submenu.name}
                              href={submenu.href}
                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {submenu.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* <!-- FAQ --> */}
                  <Disclosure as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <QuestionMarkCircleIcon className="flex-shrink-0 h-6 w-6 text-primary" />
                          <span className="flex-1 ml-3 text-base font-medium text-gray-900">
                            {t("faq")}
                          </span>
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300",
                              "text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {faq(t).map((submenu) => (
                            <a
                              key={submenu.name}
                              href={submenu.href}
                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {submenu.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 ">
              <div>
                <div className="grid grid-cols-2 gap-2"  style={{display:'none'}}>
                  <Link href="/register/exhibitor">
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary-600 bg-primary" >
                      {t("register-as-exhibitor")}
                    </a>
                  </Link>
                  <Link href="/register/visitor">
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary-600 bg-primary">
                      {t("register-as-visitor")}
                    </a>
                  </Link>
                </div>
                <p className="mt-6 text-center text-base font-medium text-gray-500"  >
                  {t("already-register")}{" "}
                  <Link href="/login">
                    <a className="hover:text-primary-600 text-primary">
                      {t("login")}
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
